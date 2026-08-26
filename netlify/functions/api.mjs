import { Pool as NeonPool, neonConfig } from "../../node_modules/@neondatabase/serverless/index.mjs";
import WebSocket from "../../node_modules/.pnpm/ws@8.21.1/node_modules/ws/index.js";
import { randomBytes, createHash, createHmac, timingSafeEqual, scrypt as scryptCallback } from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback);
const SESSION_COOKIE = "zhixing_session";
const SESSION_DAYS = 30;
const encoder = new TextEncoder();
let databasePool;

neonConfig.webSocketConstructor = WebSocket;

function getPool() {
  const connectionString = process.env.NETLIFY_DB_URL || process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL;
  if (!connectionString) throw new Error("Database URL is not configured");
  if (!databasePool) databasePool = new NeonPool({ connectionString, max: 5, idleTimeoutMillis: 10000 });
  return databasePool;
}

function response(status, data, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...headers }
  });
}

function safeUser(row) {
  if (!row) return null;
  return {
    id: row.id, email: row.email, displayName: row.display_name, role: row.role,
    school: row.school, avatarUrl: row.avatar_url, status: row.status, points: row.points,
    createdAt: row.created_at, emailVerified: Boolean(row.email_verified_at)
  };
}

async function bodyJson(request) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) throw new Error("Expected JSON request");
  return request.json();
}

function parseCookies(request) {
  return Object.fromEntries((request.headers.get("cookie") || "").split(";").map((part) => part.trim()).filter(Boolean).map((part) => {
    const index = part.indexOf("=");
    return [decodeURIComponent(part.slice(0, index)), decodeURIComponent(part.slice(index + 1))];
  }));
}

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

async function hashPassword(password) {
  const salt = randomBytes(16);
  const derived = await scrypt(password, salt, 64);
  return `scrypt$${salt.toString("base64url")}$${Buffer.from(derived).toString("base64url")}`;
}

async function verifyPassword(password, stored) {
  const [algorithm, saltValue, hashValue] = String(stored || "").split("$");
  if (algorithm !== "scrypt" || !saltValue || !hashValue) return false;
  const derived = Buffer.from(await scrypt(password, Buffer.from(saltValue, "base64url"), 64));
  const expected = Buffer.from(hashValue, "base64url");
  return derived.length === expected.length && timingSafeEqual(derived, expected);
}

function sessionCookie(token, maxAge = SESSION_DAYS * 86400) {
  return `${SESSION_COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;
}

async function getSessionUser(request, pool) {
  const token = parseCookies(request)[SESSION_COOKIE];
  if (!token) return null;
  const result = await pool.query(
    `SELECT u.* FROM sessions s JOIN users u ON u.id=s.user_id
     WHERE s.token_hash=$1 AND s.expires_at>now() AND u.status='active'`,
    [sha256(token)]
  );
  return result.rows[0] || null;
}

function requireRole(user, roles) {
  if (!user) throw Object.assign(new Error("璇峰厛鐧诲綍"), { status: 401 });
  if (!roles.includes(user.role)) throw Object.assign(new Error("娌℃湁鎵ц姝ゆ搷浣滅殑鏉冮檺"), { status: 403 });
}

async function canViewStudent(pool, user, studentId) {
  if (!user || !studentId) return false;
  if (user.id === studentId) return true;
  if (["teacher", "admin"].includes(user.role)) return true;
  if (user.role !== "parent") return false;
  const link = await pool.query("SELECT 1 FROM parent_students WHERE parent_id=$1 AND student_id=$2 AND approved_at IS NOT NULL", [user.id, studentId]);
  return link.rowCount > 0;
}

async function getContentCourse(pool, contentId) {
  const result = await pool.query("SELECT cc.id,cc.course_id,c.teacher_id,c.status FROM course_contents cc JOIN courses c ON c.id=cc.course_id WHERE cc.id=$1 AND cc.published=true", [contentId]);
  return result.rows[0] || null;
}

async function requireStudentEnrollment(pool, studentId, courseId) {
  const result = await pool.query("SELECT 1 FROM enrollments WHERE user_id=$1 AND course_id=$2", [studentId, courseId]);
  if (!result.rowCount) throw Object.assign(new Error("Student is not enrolled in this course"), { status: 403 });
}

async function requireTeacherCourseAccess(pool, user, courseId) {
  if (user.role === "admin") return;
  const result = await pool.query("SELECT teacher_id FROM courses WHERE id=$1", [courseId]);
  if (!result.rowCount) throw Object.assign(new Error("Course not found"), { status: 404 });
  if (result.rows[0].teacher_id && result.rows[0].teacher_id !== user.id) throw Object.assign(new Error("Teacher can only manage own courses"), { status: 403 });
}

async function fulfillCourseOrder(pool, orderId, actor) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const orderResult = await client.query(
      `UPDATE course_orders SET status='paid',paid_at=COALESCE(paid_at,now())
       WHERE id=$1 AND status IN ('pending_payment','awaiting_review') RETURNING *`,
      [orderId]
    );
    const order = orderResult.rows[0];
    if (!order) throw Object.assign(new Error("Order not found or already processed"), { status: 404 });
    await client.query(
      `INSERT INTO enrollments(user_id,course_id) VALUES($1,$2)
       ON CONFLICT(user_id,course_id) DO UPDATE SET enrolled_at=enrollments.enrolled_at`,
      [order.user_id, order.course_id]
    );
    await client.query("INSERT INTO payment_events(order_id,event_type,payload) VALUES($1,$2,$3)", [order.id, "paid", JSON.stringify({ actorId: actor?.id || null })]);
    await client.query("INSERT INTO notifications(user_id,title,message,notification_type) VALUES($1,$2,$3,'course')", [order.user_id, "Course opened", "Your course order has been confirmed. Learning progress, assignments and certificates are now available."]);
    await client.query("COMMIT");
    return order;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

function requestPath(request) {
  const pathname = new URL(request.url).pathname;
  return pathname.replace(/^\/\.netlify\/functions\/api/, "/api");
}

function assertSameOrigin(request) {
  if (["GET", "HEAD", "OPTIONS"].includes(request.method)) return;
  const origin = request.headers.get("origin");
  if (!origin) return;
  const originHost = new URL(origin).host;
  const requestHost = new URL(request.url).host;
  if (originHost !== requestHost && !originHost.startsWith("127.0.0.1") && !originHost.startsWith("localhost")) {
    throw Object.assign(new Error("Cross-site request rejected"), { status: 403 });
  }
}

async function audit(pool, user, action, targetType = "", targetId = "", metadata = {}, request) {
  const ip = request?.headers.get("x-nf-client-connection-ip") || request?.headers.get("x-forwarded-for") || "";
  await pool.query(
    "INSERT INTO audit_logs(actor_id,action,target_type,target_id,metadata,ip_hash) VALUES($1,$2,$3,$4,$5,$6)",
    [user?.id || null, action, targetType, String(targetId || ""), JSON.stringify(metadata), ip ? sha256(ip) : ""]
  );
}

async function createSession(pool, userId) {
  const token = randomBytes(32).toString("base64url");
  await pool.query(
    "INSERT INTO sessions(user_id,token_hash,expires_at) VALUES($1,$2,now()+($3 || ' days')::interval)",
    [userId, sha256(token), String(SESSION_DAYS)]
  );
  return token;
}

function requestIp(request) {
  return request?.headers.get("x-nf-client-connection-ip") || request?.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

async function enforceRateLimit(pool, key, limit, windowMinutes = 15) {
  const result = await pool.query(
    `INSERT INTO auth_rate_limits(key,window_started_at,attempts,updated_at)
     VALUES($1,now(),1,now())
     ON CONFLICT(key) DO UPDATE SET
       attempts=CASE WHEN auth_rate_limits.window_started_at < now()-($2 || ' minutes')::interval THEN 1 ELSE auth_rate_limits.attempts+1 END,
       window_started_at=CASE WHEN auth_rate_limits.window_started_at < now()-($2 || ' minutes')::interval THEN now() ELSE auth_rate_limits.window_started_at END,
       updated_at=now()
     RETURNING attempts`,
    [key, String(windowMinutes)]
  );
  if (result.rows[0].attempts > limit) {
    throw Object.assign(new Error("Too many attempts. Please try again later."), { status: 429 });
  }
}

function makeToken() {
  return randomBytes(32).toString("base64url");
}

async function sendEmail({ to, subject, html }) {
  if (!process.env.RESEND_API_KEY || !process.env.EMAIL_FROM) return false;
  const result = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${process.env.RESEND_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({ from: process.env.EMAIL_FROM, to: [to], subject, html })
  });
  return result.ok;
}

async function createAuthToken(pool, userId, purpose, ttlHours) {
  const token = makeToken();
  await pool.query(
    "INSERT INTO auth_tokens(user_id,purpose,token_hash,expires_at) VALUES($1,$2,$3,now()+($4 || ' hours')::interval)",
    [userId, purpose, sha256(token), String(ttlHours)]
  );
  return token;
}

function totpCode(secret, timestamp = Date.now()) {
  const counter = Math.floor(timestamp / 30000);
  const digest = createHmac("sha1", String(secret)).update(String(counter)).digest("hex");
  return String(Number.parseInt(digest.slice(-8), 16) % 1000000).padStart(6, "0");
}

async function createMfaChallenge(pool, userId) {
  const token = makeToken();
  await pool.query(
    "INSERT INTO admin_mfa_challenges(user_id,token_hash,expires_at) VALUES($1,$2,now()+interval '5 minutes')",
    [userId, sha256(token)]
  );
  return token;
}

function passwordStrengthScore(password) {
  return [
    password.length >= 8,
    /[a-z]/.test(password) && /[A-Z]/.test(password),
    /\d/.test(password),
    /[^A-Za-z0-9]/.test(password),
    password.length >= 12
  ].filter(Boolean).length;
}

async function handleAuth(path, request, pool, user) {
  if (path === "/api/auth/register" && request.method === "POST") {
    await enforceRateLimit(pool, `register:ip:${requestIp(request)}`, 8, 60);
    const data = await bodyJson(request);
    const email = String(data.email || "").trim().toLowerCase();
    const password = String(data.password || "");
    const displayName = String(data.displayName || "").trim();
    const role = ["student", "parent", "teacher"].includes(data.role) ? data.role : "student";
    if (!/^\S+@\S+\.\S+$/.test(email) || password.length < 8 || !displayName) return response(400, { error: "Please provide a valid email, display name and password" });
    if (passwordStrengthScore(password) < 3) return response(400, { error: "Password is too weak. Use a mix of upper/lowercase letters, numbers or symbols." });
    const status = role === "teacher" ? "pending" : "active";
    try {
      const result = await pool.query(
        "INSERT INTO users(email,password_hash,display_name,role,school,status,points,email_verified_at) VALUES($1,$2,$3,$4,$5,$6,$7,NULL) RETURNING *",
        [email, await hashPassword(password), displayName, role, String(data.school || ""), status, 0]
      );
      await audit(pool, result.rows[0], "auth.register", "user", result.rows[0].id, { role }, request);
      if (status !== "active") return response(201, { pending: true, message: "鏁欏笀璐﹀彿宸叉彁浜ょ鐞嗗憳瀹℃牳" });
      const verificationToken = await createAuthToken(pool, result.rows[0].id, "email_verification", 24);
      const verificationUrl = `${new URL(request.url).origin}/?verify=${encodeURIComponent(verificationToken)}`;
      const delivered = await sendEmail({
        to: email,
        subject: "Verify your Zhixing Study account",
        html: `<p>Welcome to Zhixing Study.</p><p>Verify your email within 24 hours:</p><p><a href="${verificationUrl}">${verificationUrl}</a></p>`
      });
      return response(201, { verificationRequired: true, deliveryConfigured: delivered, message: delivered ? "Verification email sent." : "Account created. Email delivery is not configured yet." });
    } catch (error) {
      if (error.code === "23505") return response(409, { error: "璇ラ偖绠卞凡娉ㄥ唽" });
      throw error;
    }
  }

  if (path === "/api/auth/bootstrap" && request.method === "POST") {
    const data = await bodyJson(request);
    const count = await pool.query("SELECT count(*)::int AS count FROM users WHERE role='admin'");
    if (count.rows[0].count > 0) return response(409, { error: "Admin already initialized" });
    if (!process.env.BOOTSTRAP_ADMIN_KEY || data.bootstrapKey !== process.env.BOOTSTRAP_ADMIN_KEY) return response(403, { error: "Invalid bootstrap key" });
    const result = await pool.query(
      "INSERT INTO users(email,password_hash,display_name,role,status,email_verified_at) VALUES($1,$2,$3,'admin','active',now()) RETURNING *",
      [String(data.email).toLowerCase(), await hashPassword(String(data.password)), String(data.displayName || "System Admin")]
    );
    const token = await createSession(pool, result.rows[0].id);
    return response(201, { user: safeUser(result.rows[0]) }, { "set-cookie": sessionCookie(token) });
  }

  if (path === "/api/auth/login" && request.method === "POST") {
    await enforceRateLimit(pool, `login:ip:${requestIp(request)}`, 10, 15);
    const data = await bodyJson(request);
    const email = String(data.email || "").trim().toLowerCase();
    await enforceRateLimit(pool, `login:email:${email}`, 8, 15);
    const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    const found = result.rows[0];
    if (!found || !(await verifyPassword(String(data.password || ""), found.password_hash))) return response(401, { error: "Invalid email or password" });
    if (found.email_verified_at === null) return response(403, { error: "Please verify your email before signing in" });
    if (found.status === "pending") return response(403, { error: "Account is waiting for admin approval" });
    if (found.status !== "active") return response(403, { error: "Account disabled" });
    if (found.role === "admin" && process.env.ADMIN_MFA_SECRET) {
      return response(202, { mfaRequired: true, challengeToken: await createMfaChallenge(pool, found.id), expiresInSeconds: 300 });
    }
    const token = await createSession(pool, found.id);
    await audit(pool, found, "auth.login", "user", found.id, {}, request);
    return response(200, { user: safeUser(found) }, { "set-cookie": sessionCookie(token) });
  }

  if (path === "/api/auth/verify-email" && request.method === "POST") {
    const data = await bodyJson(request);
    const token = String(data.token || "");
    if (!token) return response(400, { error: "Verification token is required" });
    const result = await pool.query(
      `UPDATE auth_tokens SET used_at=now()
       WHERE token_hash=$1 AND purpose='email_verification' AND used_at IS NULL AND expires_at>now()
       RETURNING user_id`,
      [sha256(token)]
    );
    if (!result.rowCount) return response(400, { error: "Verification link is invalid or expired" });
    const userResult = await pool.query("UPDATE users SET email_verified_at=now(),updated_at=now() WHERE id=$1 RETURNING *", [result.rows[0].user_id]);
    return response(200, { user: safeUser(userResult.rows[0]), verified: true });
  }

  if (path === "/api/auth/forgot-password" && request.method === "POST") {
    await enforceRateLimit(pool, `reset:ip:${requestIp(request)}`, 5, 60);
    const data = await bodyJson(request);
    const email = String(data.email || "").trim().toLowerCase();
    const result = await pool.query("SELECT id FROM users WHERE email=$1 AND status<>'disabled'", [email]);
    let delivered = false;
    if (result.rowCount) {
      const token = await createAuthToken(pool, result.rows[0].id, "password_reset", 1);
      const resetUrl = `${new URL(request.url).origin}/?reset=${encodeURIComponent(token)}`;
      delivered = await sendEmail({ to: email, subject: "Reset your Zhixing Study password", html: `<p>Reset your password within one hour:</p><p><a href="${resetUrl}">${resetUrl}</a></p>` });
    }
    return response(200, { ok: true, deliveryConfigured: delivered, message: "If the account exists, reset instructions have been sent." });
  }

  if (path === "/api/auth/reset-password" && request.method === "POST") {
    await enforceRateLimit(pool, `reset:ip:${requestIp(request)}`, 8, 60);
    const data = await bodyJson(request);
    const token = String(data.token || "");
    const password = String(data.password || "");
    if (password.length < 8 || !token) return response(400, { error: "A valid token and password of at least 8 characters are required" });
    const result = await pool.query(
      `UPDATE auth_tokens SET used_at=now()
       WHERE token_hash=$1 AND purpose='password_reset' AND used_at IS NULL AND expires_at>now()
       RETURNING user_id`,
      [sha256(token)]
    );
    if (!result.rowCount) return response(400, { error: "Reset link is invalid or expired" });
    await pool.query("UPDATE users SET password_hash=$2,updated_at=now() WHERE id=$1", [result.rows[0].user_id, await hashPassword(password)]);
    await pool.query("DELETE FROM sessions WHERE user_id=$1", [result.rows[0].user_id]);
    return response(200, { ok: true });
  }

  if (path === "/api/auth/admin-mfa" && request.method === "POST") {
    const data = await bodyJson(request);
    const challengeToken = String(data.challengeToken || "");
    const code = String(data.code || "");
    if (!process.env.ADMIN_MFA_SECRET || !challengeToken || !/^\d{6}$/.test(code)) return response(400, { error: "MFA challenge and 6-digit code are required" });
    const result = await pool.query(
      `UPDATE admin_mfa_challenges SET attempts=attempts+1
       WHERE token_hash=$1 AND expires_at>now() AND attempts<5
       RETURNING user_id`,
      [sha256(challengeToken)]
    );
    if (!result.rowCount || code !== totpCode(process.env.ADMIN_MFA_SECRET)) return response(401, { error: "Invalid MFA code" });
    await pool.query("DELETE FROM admin_mfa_challenges WHERE token_hash=$1", [sha256(challengeToken)]);
    const userResult = await pool.query("SELECT * FROM users WHERE id=$1 AND role='admin' AND status='active'", [result.rows[0].user_id]);
    if (!userResult.rowCount) return response(403, { error: "Admin account unavailable" });
    const token = await createSession(pool, result.rows[0].user_id);
    await audit(pool, userResult.rows[0], "auth.admin_mfa", "user", result.rows[0].user_id, {}, request);
    return response(200, { user: safeUser(userResult.rows[0]) }, { "set-cookie": sessionCookie(token) });
  }

  if (path === "/api/auth/logout" && request.method === "POST") {
    const token = parseCookies(request)[SESSION_COOKIE];
    if (token) await pool.query("DELETE FROM sessions WHERE token_hash=$1", [sha256(token)]);
    return response(200, { ok: true }, { "set-cookie": sessionCookie("", 0) });
  }

  if (path === "/api/auth/me" && request.method === "GET") {
    return user ? response(200, { user: safeUser(user) }) : response(401, { error: "Not logged in" });
  }
  return null;
}

async function handleProfile(path, request, pool, user) {
  if (path === "/api/users/directory" && request.method === "GET") {
    requireRole(user, ["teacher", "admin"]);
    const result = await pool.query("SELECT id,email,display_name,role,school FROM users WHERE status='active' ORDER BY role,display_name LIMIT 500");
    return response(200, { users: result.rows });
  }
  if (path === "/api/profile" && request.method === "PATCH") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    const data = await bodyJson(request);
    if (data.displayName && String(data.displayName).trim().length > 40) return response(400, { error: "Display name is too long" });
    const result = await pool.query(
      "UPDATE users SET display_name=COALESCE($2,display_name),school=COALESCE($3,school),avatar_url=COALESCE($4,avatar_url),updated_at=now() WHERE id=$1 RETURNING *",
      [user.id, data.displayName || null, data.school ?? null, data.avatarUrl ?? null]
    );
    return response(200, { user: safeUser(result.rows[0]) });
  }
  if (path === "/api/settings") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    if (request.method === "GET") {
      const result = await pool.query("SELECT settings FROM user_settings WHERE user_id=$1", [user.id]);
      return response(200, { settings: result.rows[0]?.settings || {} });
    }
    if (request.method === "PUT") {
      const data = await bodyJson(request);
      const result = await pool.query(
        `INSERT INTO user_settings(user_id,settings) VALUES($1,$2)
         ON CONFLICT(user_id) DO UPDATE SET settings=EXCLUDED.settings,updated_at=now() RETURNING settings`,
        [user.id, JSON.stringify(data.settings || {})]
      );
      return response(200, { settings: result.rows[0].settings });
    }
  }
  return null;
}

async function handleCourses(path, request, pool, user) {
  if (path === "/api/courses" && request.method === "GET") {
    const result = await pool.query(
      `SELECT c.*,u.display_name AS teacher_name,
       ${user ? "bool_or(e.user_id IS NOT NULL)" : "false"} AS enrolled,
       COALESCE(json_agg(json_build_object('id',cc.id,'type',cc.content_type,'title',cc.title,'body',cc.body,'sortOrder',cc.sort_order) ORDER BY cc.sort_order) FILTER (WHERE cc.id IS NOT NULL),'[]') AS contents
       FROM courses c LEFT JOIN users u ON u.id=c.teacher_id LEFT JOIN course_contents cc ON cc.course_id=c.id AND cc.published=true
       ${user ? "LEFT JOIN enrollments e ON e.course_id=c.id AND e.user_id=$1" : ""}
       WHERE c.status='published' GROUP BY c.id,u.display_name ORDER BY c.created_at DESC`,
      user ? [user.id] : []
    );
    return response(200, { courses: result.rows });
  }
  if (path === "/api/courses" && request.method === "POST") {
    requireRole(user, ["teacher", "admin"]);
    const data = await bodyJson(request);
    if (!/^[a-z0-9-]{3,80}$/.test(String(data.slug || "")) || !String(data.title || "").trim() || !String(data.category || "").trim()) return response(400, { error: "璇峰～鍐欐湁鏁堢殑璇剧▼鍚嶇О銆佸垎绫诲拰鍞竴鏍囪瘑" });
    const result = await pool.query(
      "INSERT INTO courses(slug,title,category,description,cover_url,teacher_id,status,price_cents) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
      [data.slug, data.title, data.category, data.description || "", data.coverUrl || "", user.id, data.status === "draft" ? "draft" : "published", Math.max(0, Number(data.priceCents || data.price_cents || 0))]
    );
    await audit(pool, user, "course.create", "course", result.rows[0].id, {}, request);
    return response(201, { course: result.rows[0] });
  }
  const courseUpdateMatch = path.match(/^\/api\/courses\/([0-9a-f-]+)$/);
  if (courseUpdateMatch && request.method === "PATCH") {
    requireRole(user, ["teacher", "admin"]);
    const existing = await pool.query("SELECT * FROM courses WHERE id=$1", [courseUpdateMatch[1]]);
    if (!existing.rowCount) return response(404, { error: "Course not found" });
    if (user.role === "teacher" && existing.rows[0].teacher_id && existing.rows[0].teacher_id !== user.id) return response(403, { error: "Teacher can only edit own courses" });
    const data = await bodyJson(request);
    if (!String(data.title || "").trim() || !String(data.category || "").trim()) return response(400, { error: "Please enter course title and category" });
    const status = ["draft", "published", "hidden"].includes(data.status) ? data.status : existing.rows[0].status;
    const result = await pool.query(
      "UPDATE courses SET title=$2,category=$3,description=$4,cover_url=$5,status=$6,price_cents=$7,updated_at=now() WHERE id=$1 RETURNING *",
      [courseUpdateMatch[1], String(data.title).trim(), String(data.category).trim(), data.description || "", data.coverUrl || data.cover_url || "", status, Math.max(0, Number(data.priceCents || data.price_cents || 0))]
    );
    await audit(pool, user, "course.update", "course", courseUpdateMatch[1], {}, request);
    return response(200, { course: result.rows[0] });
  }
  const courseContentMatch = path.match(/^\/api\/courses\/([0-9a-f-]+)\/contents$/);
  if (courseContentMatch && request.method === "POST") {
    requireRole(user, ["teacher", "admin"]);
    const course = await pool.query("SELECT * FROM courses WHERE id=$1", [courseContentMatch[1]]);
    if (!course.rowCount) return response(404, { error: "Course not found" });
    if (user.role === "teacher" && course.rows[0].teacher_id && course.rows[0].teacher_id !== user.id) return response(403, { error: "Teacher can only manage own courses" });
    const data = await bodyJson(request);
    const contentType = ["video", "task", "homework", "test", "material"].includes(data.type) ? data.type : "material";
    if (!String(data.title || "").trim()) return response(400, { error: "Please enter a content title" });
    const result = await pool.query(
      "INSERT INTO course_contents(course_id,content_type,title,body,sort_order,published) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
      [courseContentMatch[1], contentType, String(data.title).trim(), JSON.stringify(data.body || {}), Number(data.sortOrder || 0), data.published !== false]
    );
    if (["task", "homework", "test"].includes(contentType) && data.published !== false) {
      await pool.query(
        `INSERT INTO notifications(user_id,title,message,notification_type)
         SELECT e.user_id,$2,$3,'assignment' FROM enrollments e WHERE e.course_id=$1`,
        [courseContentMatch[1], "鑰佸笀涓嬪彂浜嗘柊浠诲姟", `銆?{course.rows[0].title}銆嬫柊澧炰簡${contentType === "homework" ? "浣滀笟" : contentType === "test" ? "娴嬭瘯" : "浠诲姟"}锛?{String(data.title).trim()}`]
      );
    }
    await audit(pool, user, "course.content_create", "course_content", result.rows[0].id, { courseId: courseContentMatch[1] }, request);
    return response(201, { content: result.rows[0] });
  }
  const contentUpdateMatch = path.match(/^\/api\/course-contents\/([0-9a-f-]+)$/);
  if (contentUpdateMatch && request.method === "PATCH") {
    requireRole(user, ["teacher", "admin"]);
    const existing = await pool.query(
      `SELECT cc.*,c.teacher_id FROM course_contents cc JOIN courses c ON c.id=cc.course_id WHERE cc.id=$1`,
      [contentUpdateMatch[1]]
    );
    if (!existing.rowCount) return response(404, { error: "Content not found" });
    if (user.role === "teacher" && existing.rows[0].teacher_id && existing.rows[0].teacher_id !== user.id) return response(403, { error: "Teacher can only edit own course contents" });
    const data = await bodyJson(request);
    const contentType = ["video", "task", "homework", "test", "material"].includes(data.type) ? data.type : existing.rows[0].content_type;
    if (!String(data.title || "").trim()) return response(400, { error: "Please enter a content title" });
    const result = await pool.query(
      `UPDATE course_contents SET content_type=$2,title=$3,body=$4,sort_order=$5,published=$6 WHERE id=$1 RETURNING *`,
      [contentUpdateMatch[1], contentType, String(data.title).trim(), JSON.stringify(data.body || {}), Number(data.sortOrder || existing.rows[0].sort_order || 0), data.published !== false]
    );
    await audit(pool, user, "course.content_update", "course_content", contentUpdateMatch[1], {}, request);
    return response(200, { content: result.rows[0] });
  }
  if (path === "/api/assignments" && request.method === "GET") {
    requireRole(user, ["student", "parent", "teacher", "admin"]);
    const requestedStudent = new URL(request.url).searchParams.get("studentId");
    let where = "e.user_id=$1";
    let params = [requestedStudent || user.id];
    if (requestedStudent && !(await canViewStudent(pool, user, requestedStudent))) return response(403, { error: "Cannot view this student assignments" });
    if (user.role === "teacher" && !requestedStudent) { where = "(c.teacher_id=$1 OR c.teacher_id IS NULL)"; params = [user.id]; }
    if (user.role === "admin" && !requestedStudent) { where = "1=1"; params = []; }
    const result = await pool.query(
      `SELECT cc.id,cc.title,cc.content_type,cc.body,cc.sort_order,cc.created_at AS assigned_at,
       c.id AS course_id,c.title AS course_title,c.category,u.id AS student_id,u.display_name AS student_name,
       COALESCE(lp.status,'pending') AS progress_status,COALESCE(lp.progress,0) AS progress,
       s.id AS submission_id,s.status AS submission_status,s.score,s.teacher_feedback,s.submitted_at
       FROM enrollments e JOIN users u ON u.id=e.user_id JOIN courses c ON c.id=e.course_id
       JOIN course_contents cc ON cc.course_id=c.id AND cc.published=true AND cc.content_type IN ('task','homework','test')
       LEFT JOIN learning_progress lp ON lp.user_id=e.user_id AND lp.content_id=cc.id
       LEFT JOIN LATERAL (
         SELECT id,status,score,teacher_feedback,submitted_at FROM submissions
         WHERE student_id=e.user_id AND content_id=cc.id ORDER BY submitted_at DESC LIMIT 1
       ) s ON true
       WHERE ${where} ORDER BY cc.created_at DESC,cc.sort_order`,
      params
    );
    return response(200, { assignments: result.rows });
  }
  if (path === "/api/enrollments" && request.method === "GET") {
    requireRole(user, ["student", "parent", "teacher", "admin"]);
    const requestedStudent = new URL(request.url).searchParams.get("studentId");
    const target = requestedStudent || user.id;
    if (!(await canViewStudent(pool, user, target))) return response(403, { error: "Cannot view this student courses" });
    const result = await pool.query(
      `SELECT e.*,c.title,c.slug,c.category,c.description,c.cover_url,u.display_name AS teacher_name,
       (SELECT count(*)::int FROM course_contents cc WHERE cc.course_id=c.id AND cc.published=true) AS content_count,
       (SELECT count(*)::int FROM learning_progress lp JOIN course_contents cc ON cc.id=lp.content_id WHERE lp.user_id=e.user_id AND cc.course_id=c.id AND (lp.status IN ('completed','submitted') OR lp.progress>=100)) AS completed_count,
       COALESCE((SELECT round(avg(lp.progress))::int FROM learning_progress lp JOIN course_contents cc ON cc.id=lp.content_id WHERE lp.user_id=e.user_id AND cc.course_id=c.id),0) AS progress
       FROM enrollments e JOIN courses c ON c.id=e.course_id LEFT JOIN users u ON u.id=c.teacher_id
       WHERE e.user_id=$1 ORDER BY e.enrolled_at DESC`,
      [target]
    );
    return response(200, { enrollments: result.rows });
  }
  const enrollMatch = path.match(/^\/api\/courses\/([0-9a-f-]+)\/enroll$/);
  if (enrollMatch && request.method === "POST") {
    requireRole(user, ["student"]);
    const course = await pool.query("SELECT id,title FROM courses WHERE id=$1 AND status='published'", [enrollMatch[1]]);
    if (!course.rowCount) return response(404, { error: "Course not found or unpublished" });
    const result = await pool.query(
      `INSERT INTO enrollments(user_id,course_id) VALUES($1,$2)
       ON CONFLICT(user_id,course_id) DO UPDATE SET enrolled_at=enrollments.enrolled_at RETURNING *`,
      [user.id, enrollMatch[1]]
    );
    await pool.query("INSERT INTO notifications(user_id,title,message,notification_type) VALUES($1,$2,$3,'course')", [user.id, "Course enrollment successful", `You have joined ${course.rows[0].title}. Progress, homework and certificate records will appear after learning.`]);
    await audit(pool, user, "course.enroll", "course", enrollMatch[1], {}, request);
    return response(201, { enrollment: result.rows[0] });
  }
  const courseOrderMatch = path.match(/^\/api\/courses\/([0-9a-f-]+)\/orders$/);
  if (courseOrderMatch && request.method === "POST") {
    requireRole(user, ["student"]);
    const course = await pool.query("SELECT id,title,price_cents FROM courses WHERE id=$1 AND status='published'", [courseOrderMatch[1]]);
    if (!course.rowCount) return response(404, { error: "Course not found or unpublished" });
    const data = await bodyJson(request);
    const amountCents = Math.max(0, Number(data.amountCents || course.rows[0].price_cents || 0));
    const paymentMethod = ["manual_review", "wechat", "alipay", "school_transfer"].includes(data.paymentMethod) ? data.paymentMethod : "manual_review";
    const status = paymentMethod === "school_transfer" || paymentMethod === "manual_review" ? "awaiting_review" : "pending_payment";
    const result = await pool.query(
      `INSERT INTO course_orders(user_id,course_id,amount_cents,payment_method,status,contact_info)
       VALUES($1,$2,$3,$4,$5,$6) RETURNING *`,
      [user.id, courseOrderMatch[1], amountCents, paymentMethod, status, JSON.stringify(data.contactInfo || {})]
    );
    await pool.query("INSERT INTO payment_events(order_id,event_type,payload) VALUES($1,$2,$3)", [result.rows[0].id, "created", JSON.stringify({ courseTitle: course.rows[0].title, amountCents, paymentMethod })]);
    await audit(pool, user, "course.order_create", "course", courseOrderMatch[1], { orderId: result.rows[0].id, amountCents, paymentMethod }, request);
    return response(201, { order: result.rows[0], requiresReview: status === "awaiting_review", message: status === "awaiting_review" ? "Order submitted and waiting for admin confirmation" : "Order created and waiting for payment provider confirmation" });
  }
  if (path === "/api/course-orders" && request.method === "GET") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    const params = [];
    let where = "co.user_id=$1";
    params.push(user.id);
    if (user.role === "teacher") where = "c.teacher_id=$1";
    if (user.role === "admin") { where = "1=1"; params.length = 0; }
    const result = await pool.query(
      `SELECT co.*,c.title AS course_title,c.category,u.display_name AS student_name,u.email AS student_email
       FROM course_orders co JOIN courses c ON c.id=co.course_id JOIN users u ON u.id=co.user_id
       WHERE ${where} ORDER BY co.created_at DESC LIMIT 200`,
      params
    );
    return response(200, { orders: result.rows });
  }
  if (path === "/api/certificates" && request.method === "GET") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    const target = new URL(request.url).searchParams.get("studentId") || user.id;
    if (!(await canViewStudent(pool, user, target))) return response(403, { error: "Cannot view this student certificates" });
    const result = await pool.query(
      "SELECT ce.*,c.title AS course_title,u.display_name FROM certificates ce JOIN courses c ON c.id=ce.course_id JOIN users u ON u.id=ce.user_id WHERE ce.user_id=$1 ORDER BY ce.issued_at DESC",
      [target]
    );
    return response(200, { certificates: result.rows });
  }
  if (path === "/api/certificates" && request.method === "POST") {
    requireRole(user, ["teacher", "admin"]);
    const data = await bodyJson(request);
    const student = await pool.query("SELECT id FROM users WHERE id=$1 AND role='student' AND status='active'", [data.studentId]);
    if (!student.rowCount) return response(404, { error: "Student not found" });
    await requireTeacherCourseAccess(pool, user, data.courseId);
    await requireStudentEnrollment(pool, data.studentId, data.courseId);
    const completion = await pool.query(
      `SELECT count(cc.id)::int AS total,
       count(lp.content_id) FILTER (WHERE lp.status IN ('completed','submitted') OR lp.progress>=100)::int AS completed
       FROM course_contents cc LEFT JOIN learning_progress lp ON lp.content_id=cc.id AND lp.user_id=$2
       WHERE cc.course_id=$1 AND cc.published=true`,
      [data.courseId, data.studentId]
    );
    if (completion.rows[0].total > 0 && completion.rows[0].completed < completion.rows[0].total) return response(409, { error: "Course is not fully completed" });
    const certificateNo = `ZX-${new Date().getFullYear()}-${randomBytes(5).toString("hex").toUpperCase()}`;
    const result = await pool.query(
      `INSERT INTO certificates(user_id,course_id,certificate_no) VALUES($1,$2,$3)
       ON CONFLICT(user_id,course_id) DO UPDATE SET verified=true,issued_at=now() RETURNING *`,
      [data.studentId, data.courseId, certificateNo]
    );
    await pool.query("INSERT INTO notifications(user_id,title,message,notification_type) VALUES($1,'瀛︿範璇佷功宸茬鍙?,'鎭枩瀹屾垚璇剧▼锛屽涔犺瘉涔﹀凡杩涘叆涓汉涓績銆?,'certificate')", [data.studentId]);
    return response(201, { certificate: result.rows[0] });
  }
  const contentMatch = path.match(/^\/api\/contents\/([0-9a-f-]+)\/progress$/);
  if (contentMatch && request.method === "PUT") {
    requireRole(user, ["student"]);
    const data = await bodyJson(request);
    const content = await getContentCourse(pool, contentMatch[1]);
    if (!content) return response(404, { error: "Learning content not found" });
    await requireStudentEnrollment(pool, user.id, content.course_id);
    const result = await pool.query(
      `INSERT INTO learning_progress(user_id,content_id,status,progress,duration_seconds,state)
       VALUES($1,$2,$3,$4,$5,$6) ON CONFLICT(user_id,content_id) DO UPDATE SET
       status=EXCLUDED.status,progress=EXCLUDED.progress,duration_seconds=learning_progress.duration_seconds+EXCLUDED.duration_seconds,state=EXCLUDED.state,updated_at=now()
       RETURNING *`,
      [user.id, contentMatch[1], data.status || "started", Number(data.progress || 0), Number(data.durationSeconds || 0), JSON.stringify(data.state || {})]
    );
    return response(200, { progress: result.rows[0] });
  }
  if (path === "/api/progress" && request.method === "GET") {
    requireRole(user, ["student", "parent", "teacher", "admin"]);
    const target = new URL(request.url).searchParams.get("studentId") || user.id;
    if (!(await canViewStudent(pool, user, target))) return response(403, { error: "Cannot view this student progress" });
    const result = await pool.query(
      `SELECT lp.*,cc.title,cc.content_type,c.title AS course_title FROM learning_progress lp
       JOIN course_contents cc ON cc.id=lp.content_id JOIN courses c ON c.id=cc.course_id
       JOIN enrollments e ON e.user_id=lp.user_id AND e.course_id=c.id
       WHERE lp.user_id=$1 ORDER BY lp.updated_at DESC`, [target]
    );
    return response(200, { progress: result.rows });
  }
  if (path === "/api/progress/by-title" && request.method === "PUT") {
    requireRole(user, ["student"]);
    const data = await bodyJson(request);
    const content = await pool.query("SELECT cc.id,cc.course_id FROM course_contents cc JOIN courses c ON c.id=cc.course_id WHERE cc.title=$1 AND cc.published=true AND c.status='published' ORDER BY cc.created_at LIMIT 1", [String(data.title || "")]);
    if (!content.rowCount) return response(404, { error: "Learning content not found" });
    await requireStudentEnrollment(pool, user.id, content.rows[0].course_id);
    const progress = Math.max(0, Math.min(100, Number(data.progress || 0)));
    const result = await pool.query(
      `INSERT INTO learning_progress(user_id,content_id,status,progress,duration_seconds,state) VALUES($1,$2,$3,$4,$5,$6)
       ON CONFLICT(user_id,content_id) DO UPDATE SET status=EXCLUDED.status,progress=EXCLUDED.progress,duration_seconds=learning_progress.duration_seconds+EXCLUDED.duration_seconds,state=EXCLUDED.state,updated_at=now() RETURNING *`,
      [user.id, content.rows[0].id, progress >= 100 ? "completed" : "started", progress, Number(data.durationSeconds || 0), JSON.stringify(data.state || {})]
    );
    return response(200, { progress: result.rows[0] });
  }
  return null;
}

async function handleStudyBases(path, request, pool, user) {
  if (path === "/api/study-bases" && request.method === "GET") {
    const includeDrafts = user && ["teacher", "admin"].includes(user.role);
    const result = await pool.query(
      `SELECT id,title,city,address,description,cover_url AS "coverUrl",latitude,longitude,status,created_by AS "createdBy",created_at AS "createdAt",updated_at AS "updatedAt"
       FROM study_bases WHERE ${includeDrafts ? "status<>'hidden'" : "status='published'"} ORDER BY updated_at DESC,created_at DESC`
    );
    return response(200, { bases: result.rows });
  }
  if (path === "/api/study-bases" && request.method === "POST") {
    requireRole(user, ["teacher", "admin"]);
    const data = await bodyJson(request);
    if (!String(data.title || "").trim()) return response(400, { error: "Please enter a base title" });
    const status = ["draft", "published", "hidden"].includes(data.status) ? data.status : "published";
    const result = await pool.query(
      `INSERT INTO study_bases(title,city,address,description,cover_url,latitude,longitude,status,created_by)
       VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id,title,city,address,description,cover_url AS "coverUrl",latitude,longitude,status,created_by AS "createdBy",created_at AS "createdAt",updated_at AS "updatedAt"`,
      [String(data.title).trim(), data.city || "", data.address || "", data.description || "", data.coverUrl || data.cover_url || "", data.latitude || null, data.longitude || null, status, user.id]
    );
    await audit(pool, user, "study_base.create", "study_base", result.rows[0].id, {}, request);
    return response(201, { base: result.rows[0] });
  }
  const baseMatch = path.match(/^\/api\/study-bases\/([0-9a-f-]+)$/);
  if (baseMatch && request.method === "PATCH") {
    requireRole(user, ["teacher", "admin"]);
    const existing = await pool.query("SELECT * FROM study_bases WHERE id=$1", [baseMatch[1]]);
    if (!existing.rowCount) return response(404, { error: "Base not found" });
    if (user.role === "teacher" && existing.rows[0].created_by && existing.rows[0].created_by !== user.id) return response(403, { error: "Teacher can only edit own bases" });
    const data = await bodyJson(request);
    if (!String(data.title || "").trim()) return response(400, { error: "Please enter a base title" });
    const status = ["draft", "published", "hidden"].includes(data.status) ? data.status : existing.rows[0].status;
    const result = await pool.query(
      `UPDATE study_bases SET title=$2,city=$3,address=$4,description=$5,cover_url=$6,latitude=$7,longitude=$8,status=$9,updated_at=now()
       WHERE id=$1 RETURNING id,title,city,address,description,cover_url AS "coverUrl",latitude,longitude,status,created_by AS "createdBy",created_at AS "createdAt",updated_at AS "updatedAt"`,
      [baseMatch[1], String(data.title).trim(), data.city || "", data.address || "", data.description || "", data.coverUrl || data.cover_url || "", data.latitude || null, data.longitude || null, status]
    );
    await audit(pool, user, "study_base.update", "study_base", baseMatch[1], {}, request);
    return response(200, { base: result.rows[0] });
  }
  return null;
}

async function handleSubmissions(path, request, pool, user) {
  if (path === "/api/submissions" && request.method === "POST") {
    requireRole(user, ["student"]);
    const form = await request.formData();
    let contentId = String(form.get("contentId") || "");
    const contentTitle = String(form.get("contentTitle") || "");
    const themeName = String(form.get("themeName") || "");
    const textContent = String(form.get("textContent") || "");
    const files = form.getAll("files").filter((file) => file && typeof file.arrayBuffer === "function");
    if (!contentId && contentTitle) {
      const content = await pool.query(
        `SELECT cc.id FROM course_contents cc JOIN courses c ON c.id=cc.course_id
         WHERE cc.title=$1 AND ($2='' OR c.category=$2) LIMIT 1`, [contentTitle, themeName]
      );
      contentId = content.rows[0]?.id || "";
    }
    if (!contentId) return response(400, { error: "Homework content not found" });
    const contentCourse = await getContentCourse(pool, contentId);
    if (!contentCourse) return response(404, { error: "Learning content not found" });
    await requireStudentEnrollment(pool, user.id, contentCourse.course_id);
    if (!textContent.trim() && !files.length) return response(400, { error: "璇峰～鍐欎綔涓氭垨娣诲姞闄勪欢" });
    if (files.length > 9) return response(400, { error: "Too many attachments" });
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      const submission = await client.query(
        "INSERT INTO submissions(content_id,student_id,text_content) VALUES($1,$2,$3) RETURNING *",
        [contentId, user.id, textContent]
      );
      const uploaded = [];
      for (const file of files) {
        const allowed = file.type.startsWith("image/") || file.type.startsWith("video/") || [
          "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "text/plain", "application/zip", "application/x-zip-compressed"
        ].includes(file.type);
        if (!allowed) throw Object.assign(new Error(`${file.name} file type is not supported`), { status: 415 });
        const max = file.type.startsWith("video/") ? 200 * 1024 * 1024 : 50 * 1024 * 1024;
        if (file.size > max) throw Object.assign(new Error(`${file.name} exceeds the size limit`), { status: 413 });
        const key = `${user.id}/${submission.rows[0].id}/${randomBytes(12).toString("hex")}`;
        const fileData = Buffer.from(await file.arrayBuffer());
        const fileRow = await client.query(
          "INSERT INTO submission_files(submission_id,blob_key,file_name,mime_type,size_bytes,file_data) VALUES($1,$2,$3,$4,$5,$6) RETURNING id,submission_id,blob_key,file_name,mime_type,size_bytes,created_at",
          [submission.rows[0].id, key, file.name, file.type || "application/octet-stream", file.size, fileData]
        );
        uploaded.push(fileRow.rows[0]);
      }
      await client.query(
        `INSERT INTO learning_progress(user_id,content_id,status,progress,state) VALUES($1,$2,'submitted',100,$3)
         ON CONFLICT(user_id,content_id) DO UPDATE SET status='submitted',progress=100,state=EXCLUDED.state,updated_at=now()`,
        [user.id, contentId, JSON.stringify({ submissionId: submission.rows[0].id })]
      );
      await client.query("COMMIT");
      await audit(pool, user, "submission.create", "submission", submission.rows[0].id, { files: uploaded.length }, request);
      return response(201, { submission: { ...submission.rows[0], files: uploaded } });
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  }

  if (path === "/api/submissions" && request.method === "GET") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    const requestedStudent = new URL(request.url).searchParams.get("studentId");
    let target = requestedStudent || user.id;
    if (!["teacher", "admin"].includes(user.role) && !(await canViewStudent(pool, user, target))) return response(403, { error: "Cannot view this student submissions" });
    let where = "s.student_id=$1";
    let params = [target];
    if (user.role === "teacher") { where = "(c.teacher_id=$1 OR c.teacher_id IS NULL)"; params = [user.id]; }
    if (user.role === "admin") { where = "1=1"; params = []; }
    const result = await pool.query(
      `SELECT s.*,cc.title AS assignment_title,c.title AS course_title,u.display_name AS student_name,
       COALESCE(json_agg(json_build_object('id',sf.id,'name',sf.file_name,'type',sf.mime_type,'size',sf.size_bytes)) FILTER (WHERE sf.id IS NOT NULL),'[]') AS files
       FROM submissions s JOIN course_contents cc ON cc.id=s.content_id JOIN courses c ON c.id=cc.course_id JOIN users u ON u.id=s.student_id
       JOIN enrollments e ON e.user_id=s.student_id AND e.course_id=c.id
       LEFT JOIN submission_files sf ON sf.submission_id=s.id WHERE ${where} GROUP BY s.id,cc.title,c.title,u.display_name ORDER BY s.submitted_at DESC`, params
    );
    return response(200, { submissions: result.rows });
  }

  const gradeMatch = path.match(/^\/api\/submissions\/([0-9a-f-]+)\/grade$/);
  if (gradeMatch && request.method === "PATCH") {
    requireRole(user, ["teacher", "admin"]);
    const data = await bodyJson(request);
    const score = data.score === null || data.score === undefined ? null : Number(data.score);
    if (!data.returned && (!Number.isFinite(score) || score < 0 || score > 100)) return response(400, { error: "鍒嗘暟蹇呴』鍦?鍒?00涔嬮棿" });
    const owner = await pool.query("SELECT c.id AS course_id,c.teacher_id FROM submissions s JOIN course_contents cc ON cc.id=s.content_id JOIN courses c ON c.id=cc.course_id WHERE s.id=$1", [gradeMatch[1]]);
    if (!owner.rowCount) return response(404, { error: "Submission not found" });
    await requireTeacherCourseAccess(pool, user, owner.rows[0].course_id);
    const result = await pool.query(
      "UPDATE submissions SET status=$2,score=$3,teacher_feedback=$4,graded_by=$5,graded_at=now() WHERE id=$1 RETURNING *",
      [gradeMatch[1], data.returned ? "returned" : "graded", score, String(data.feedback || "").slice(0, 1000), user.id]
    );
    if (!result.rowCount) return response(404, { error: "Submission not found" });
    await pool.query("INSERT INTO notifications(user_id,title,message,notification_type) VALUES($1,$2,$3,'grading')", [result.rows[0].student_id, "Homework graded", String(data.feedback || "Teacher has graded your homework")]);
    return response(200, { submission: result.rows[0] });
  }

  const fileMatch = path.match(/^\/api\/files\/([0-9a-f-]+)$/);
  if (fileMatch && request.method === "GET") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    const result = await pool.query(
      "SELECT sf.*,s.student_id FROM submission_files sf JOIN submissions s ON s.id=sf.submission_id WHERE sf.id=$1", [fileMatch[1]]
    );
    const file = result.rows[0];
    if (!file) return response(404, { error: "File not found" });
    if (user.role === "student" && file.student_id !== user.id) return response(403, { error: "鏃犳潈璁块棶" });
    if (user.role === "parent") {
      const link = await pool.query("SELECT 1 FROM parent_students WHERE parent_id=$1 AND student_id=$2 AND approved_at IS NOT NULL", [user.id, file.student_id]);
      if (!link.rowCount) return response(403, { error: "鏃犳潈璁块棶" });
    }
    if (!file.file_data) return response(404, { error: "File not found" });
    return new Response(file.file_data, { headers: { "content-type": file.mime_type, "content-disposition": `inline; filename*=UTF-8''${encodeURIComponent(file.file_name)}`, "cache-control": "private, max-age=300" } });
  }
  return null;
}

async function handleCommunity(path, request, pool, user) {
  if (path === "/api/community/posts" && request.method === "GET") {
    const result = await pool.query(
      `SELECT p.*,u.display_name,u.avatar_url,
       (SELECT count(*)::int FROM reactions r WHERE r.target_type='post' AND r.target_id=p.id) AS likes,
       (SELECT count(*)::int FROM comments c WHERE c.post_id=p.id AND c.status='published') AS comments
       FROM community_posts p JOIN users u ON u.id=p.author_id WHERE p.status='published' ORDER BY p.created_at DESC LIMIT 100`
    );
    return response(200, { posts: result.rows });
  }
  if (path === "/api/community/rules" && request.method === "GET") {
    const result = await pool.query("SELECT id,title,description,enabled,sort_order FROM community_rules WHERE enabled=true ORDER BY sort_order,title");
    return response(200, { rules: result.rows });
  }
  if (path === "/api/community/posts" && request.method === "POST") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    const data = await bodyJson(request);
    const content = String(data.content || "").trim();
    if (!content) return response(400, { error: "Post content cannot be empty" });
    const result = await pool.query(
      "INSERT INTO community_posts(author_id,category,content,location,status) VALUES($1,$2,$3,$4,$5) RETURNING *",
      [user.id, String(data.category || "Post").slice(0, 40), content.slice(0, 2000), String(data.location || "").slice(0, 100), user.role === "student" ? "pending" : "published"]
    );
    return response(201, { post: result.rows[0], pending: result.rows[0].status === "pending" });
  }
  const commentMatch = path.match(/^\/api\/community\/posts\/([0-9a-f-]+)\/comments$/);
  if (commentMatch && request.method === "GET") {
    const result = await pool.query("SELECT c.*,u.display_name,u.avatar_url FROM comments c JOIN users u ON u.id=c.author_id WHERE c.post_id=$1 AND c.status='published' ORDER BY c.created_at", [commentMatch[1]]);
    return response(200, { comments: result.rows });
  }
  if (commentMatch && request.method === "POST") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    const data = await bodyJson(request);
    const content = String(data.content || "").trim();
    if (!content) return response(400, { error: "璇勮涓嶈兘涓虹┖" });
    const result = await pool.query("INSERT INTO comments(post_id,author_id,parent_id,content) VALUES($1,$2,$3,$4) RETURNING *", [commentMatch[1], user.id, data.parentId || null, content.slice(0, 1000)]);
    return response(201, { comment: result.rows[0] });
  }
  const likeMatch = path.match(/^\/api\/community\/posts\/([0-9a-f-]+)\/like$/);
  if (likeMatch && request.method === "POST") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    const existing = await pool.query("DELETE FROM reactions WHERE user_id=$1 AND target_type='post' AND target_id=$2 RETURNING 1", [user.id, likeMatch[1]]);
    if (!existing.rowCount) await pool.query("INSERT INTO reactions(user_id,target_type,target_id) VALUES($1,'post',$2)", [user.id, likeMatch[1]]);
    return response(200, { liked: !existing.rowCount });
  }
  return null;
}

async function handleFriends(path, request, pool, user) {
  if (path === "/api/friends" && request.method === "GET") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    const result = await pool.query(
      `SELECT f.id AS friendship_id,f.status,f.created_at,
              u.id,u.email,u.display_name,u.role,u.school,u.avatar_url
       FROM friendships f
       JOIN users u ON u.id=CASE WHEN f.requester_id=$1 THEN f.addressee_id ELSE f.requester_id END
       WHERE (f.requester_id=$1 OR f.addressee_id=$1) AND f.status='accepted'
       ORDER BY u.role,u.display_name`,
      [user.id]
    );
    return response(200, { friends: result.rows });
  }
  if (path === "/api/friends" && request.method === "POST") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    const data = await bodyJson(request);
    const email = String(data.email || "").trim().toLowerCase();
    if (!email) return response(400, { error: "请输入好友邮箱" });
    const friend = await pool.query("SELECT id,email,display_name,role,school,avatar_url FROM users WHERE email=$1 AND status='active'", [email]);
    if (!friend.rowCount) return response(404, { error: "没有找到该账号" });
    if (friend.rows[0].id === user.id) return response(400, { error: "不能添加自己为好友" });
    const existingFriendship = await pool.query(
      `SELECT *
       FROM friendships
       WHERE (requester_id=$1 AND addressee_id=$2)
          OR (requester_id=$2 AND addressee_id=$1)
       LIMIT 1`,
      [user.id, friend.rows[0].id]
    );
    const result = existingFriendship.rowCount
      ? await pool.query(
          "UPDATE friendships SET status='accepted',accepted_at=now() WHERE id=$1 RETURNING *",
          [existingFriendship.rows[0].id]
        )
      : await pool.query(
          "INSERT INTO friendships(requester_id,addressee_id,status,accepted_at) VALUES($1,$2,'accepted',now()) RETURNING *",
          [user.id, friend.rows[0].id]
        );
    await pool.query(
      "INSERT INTO notifications(user_id,title,message,notification_type) VALUES($1,$2,$3,'friend')",
      [friend.rows[0].id, "新的好友", `${user.display_name} 已添加你为好友，可以互发消息。`]
    );
    return response(201, { friendship: result.rows[0], friend: friend.rows[0] });
  }
  const friendConversationMatch = path.match(/^\/api\/friends\/([0-9a-f-]+)\/conversation$/);
  if (friendConversationMatch && request.method === "POST") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    const friendId = friendConversationMatch[1];
    const friendship = await pool.query(
      "SELECT 1 FROM friendships WHERE status='accepted' AND ((requester_id=$1 AND addressee_id=$2) OR (requester_id=$2 AND addressee_id=$1))",
      [user.id, friendId]
    );
    if (!friendship.rowCount) return response(403, { error: "请先添加为好友" });
    const existing = await pool.query(
      `SELECT c.*
       FROM conversations c
       JOIN conversation_members a ON a.conversation_id=c.id AND a.user_id=$1
       JOIN conversation_members b ON b.conversation_id=c.id AND b.user_id=$2
       WHERE c.conversation_type='direct'
         AND (SELECT count(*) FROM conversation_members cm WHERE cm.conversation_id=c.id)=2
       ORDER BY c.created_at DESC LIMIT 1`,
      [user.id, friendId]
    );
    if (existing.rowCount) return response(200, { conversation: existing.rows[0] });
    const friend = await pool.query("SELECT display_name FROM users WHERE id=$1 AND status='active'", [friendId]);
    if (!friend.rowCount) return response(404, { error: "好友账号不存在" });
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      const conversation = await client.query(
        "INSERT INTO conversations(title,conversation_type,created_by) VALUES($1,'direct',$2) RETURNING *",
        [`${user.display_name} 与 ${friend.rows[0].display_name}`, user.id]
      );
      await client.query("INSERT INTO conversation_members(conversation_id,user_id) VALUES($1,$2),($1,$3)", [conversation.rows[0].id, user.id, friendId]);
      await client.query("COMMIT");
      return response(201, { conversation: conversation.rows[0] });
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  }
  return null;
}

async function handleMessages(path, request, pool, user) {
  if (path === "/api/conversations" && request.method === "POST") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    const data = await bodyJson(request);
    const emails = Array.isArray(data.memberEmails) ? data.memberEmails.map((email) => String(email).trim().toLowerCase()).filter(Boolean) : [];
    const members = emails.length ? await pool.query("SELECT id FROM users WHERE email=ANY($1) AND status='active'", [emails]) : { rows: [] };
    const memberIds = [...new Set([user.id, ...members.rows.map((row) => row.id)])];
    if (memberIds.length < 2) return response(400, { error: "Please add at least one valid member" });
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      const conversation = await client.query("INSERT INTO conversations(title,conversation_type,created_by) VALUES($1,$2,$3) RETURNING *", [String(data.title || "New conversation"), memberIds.length > 2 ? "group" : "direct", user.id]);
      for (const memberId of memberIds) await client.query("INSERT INTO conversation_members(conversation_id,user_id) VALUES($1,$2)", [conversation.rows[0].id, memberId]);
      await client.query("COMMIT");
      return response(201, { conversation: conversation.rows[0] });
    } catch (error) { await client.query("ROLLBACK"); throw error; } finally { client.release(); }
  }
  if (path === "/api/conversations" && request.method === "GET") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    const result = await pool.query(
      `SELECT c.*,cm.last_read_at,
        CASE WHEN c.conversation_type='direct' THEN
          (SELECT u.display_name FROM conversation_members peer JOIN users u ON u.id=peer.user_id
           WHERE peer.conversation_id=c.id AND peer.user_id<>$1 LIMIT 1)
          ELSE c.title END AS display_title,
        (SELECT u.id FROM conversation_members peer JOIN users u ON u.id=peer.user_id
         WHERE peer.conversation_id=c.id AND peer.user_id<>$1 LIMIT 1) AS peer_id,
        (SELECT u.avatar_url FROM conversation_members peer JOIN users u ON u.id=peer.user_id
         WHERE peer.conversation_id=c.id AND peer.user_id<>$1 LIMIT 1) AS peer_avatar_url,
        (SELECT u.role FROM conversation_members peer JOIN users u ON u.id=peer.user_id
         WHERE peer.conversation_id=c.id AND peer.user_id<>$1 LIMIT 1) AS peer_role,
        (SELECT content FROM messages WHERE conversation_id=c.id ORDER BY created_at DESC LIMIT 1) AS last_message,
        (SELECT created_at FROM messages WHERE conversation_id=c.id ORDER BY created_at DESC LIMIT 1) AS last_message_at,
        (SELECT count(*)::int FROM messages m
         WHERE m.conversation_id=c.id
           AND m.sender_id<>$1
           AND (cm.last_read_at IS NULL OR m.created_at>cm.last_read_at)) AS unread_count
       FROM conversations c JOIN conversation_members cm ON cm.conversation_id=c.id
       WHERE cm.user_id=$1
       ORDER BY COALESCE((SELECT created_at FROM messages WHERE conversation_id=c.id ORDER BY created_at DESC LIMIT 1), c.created_at) DESC`, [user.id]
    );
    return response(200, { conversations: result.rows });
  }
  const messagesMatch = path.match(/^\/api\/conversations\/([0-9a-f-]+)\/messages$/);
  if (messagesMatch) {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    const member = await pool.query("SELECT 1 FROM conversation_members WHERE conversation_id=$1 AND user_id=$2", [messagesMatch[1], user.id]);
    if (!member.rowCount) return response(403, { error: "涓嶅湪璇ヤ細璇濅腑" });
    if (request.method === "GET") {
      const result = await pool.query(
        "SELECT m.*,u.display_name,u.avatar_url FROM messages m LEFT JOIN users u ON u.id=m.sender_id WHERE conversation_id=$1 ORDER BY created_at ASC LIMIT 200", [messagesMatch[1]]
      );
      await pool.query("UPDATE conversation_members SET last_read_at=now() WHERE conversation_id=$1 AND user_id=$2", [messagesMatch[1], user.id]);
      return response(200, { messages: result.rows });
    }
    if (request.method === "POST") {
      const data = await bodyJson(request);
      const messageType = ["text", "image", "video", "audio", "link", "file"].includes(data.messageType) ? data.messageType : "text";
      const content = String(data.content || "").trim();
      const attachment = String(data.attachment || "").trim();
      if (!content && !attachment) return response(400, { error: "Message content cannot be empty" });
      if (attachment && attachment.length > 6 * 1024 * 1024) return response(413, { error: "Attachment is too large for demo messaging" });
      const result = await pool.query(
        "INSERT INTO messages(conversation_id,sender_id,content,message_type,blob_key) VALUES($1,$2,$3,$4,$5) RETURNING *",
        [messagesMatch[1], user.id, content.slice(0, 2000), messageType, attachment || null]
      );
      return response(201, { message: result.rows[0] });
    }
  }
  if (path === "/api/notifications" && request.method === "GET") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    const result = await pool.query("SELECT * FROM notifications WHERE user_id=$1 ORDER BY created_at DESC LIMIT 100", [user.id]);
    return response(200, { notifications: result.rows });
  }
  if (path === "/api/teacher/group-message" && request.method === "POST") {
    requireRole(user, ["teacher", "admin"]);
    const data = await bodyJson(request);
    const title = String(data.title || "").trim().slice(0, 80);
    const message = String(data.message || "").trim().slice(0, 1000);
    const courseId = String(data.courseId || "").trim();
    if (!title || !message) return response(400, { error: "Please enter title and message" });
    if (courseId) await requireTeacherCourseAccess(pool, user, courseId);
    const params = user.role === "admin" ? [] : [user.id];
    let where = user.role === "admin" ? "1=1" : "c.teacher_id=$1";
    if (courseId) {
      params.push(courseId);
      where += ` AND c.id=$${params.length}`;
    }
    const result = await pool.query(
      `INSERT INTO notifications(user_id,title,message,notification_type)
       SELECT DISTINCT e.user_id,$${params.length + 1},$${params.length + 2},'teacher_message'
       FROM enrollments e JOIN courses c ON c.id=e.course_id
       WHERE ${where}
       RETURNING id,user_id`,
      [...params, title, message]
    );
    await audit(pool, user, "teacher.group_message", "notification", null, { courseId: courseId || null, delivered: result.rowCount }, request);
    return response(201, { delivered: result.rowCount });
  }
  const readMatch = path.match(/^\/api\/notifications\/([0-9a-f-]+)\/read$/);
  if (readMatch && request.method === "PATCH") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    await pool.query("UPDATE notifications SET read_at=now() WHERE id=$1 AND user_id=$2", [readMatch[1], user.id]);
    return response(200, { ok: true });
  }
  return null;
}

async function handleParent(path, request, pool, user) {
  if (path === "/api/parent/students" && request.method === "POST") {
    requireRole(user, ["parent"]);
    const data = await bodyJson(request);
    const student = await pool.query("SELECT id FROM users WHERE email=$1 AND role='student'", [String(data.studentEmail || "").toLowerCase()]);
    if (!student.rowCount) return response(404, { error: "Student account not found" });
    await pool.query("INSERT INTO parent_students(parent_id,student_id,relation) VALUES($1,$2,$3) ON CONFLICT DO NOTHING", [user.id, student.rows[0].id, data.relation || "guardian"]);
    return response(201, { pending: true, message: "Binding request submitted for admin approval" });
  }
  if (path === "/api/parent/students" && request.method === "GET") {
    requireRole(user, ["parent"]);
    const result = await pool.query(
      `SELECT u.id,u.display_name,u.email,u.school,ps.relation,ps.approved_at FROM parent_students ps
       JOIN users u ON u.id=ps.student_id WHERE ps.parent_id=$1`, [user.id]
    );
    return response(200, { students: result.rows });
  }
  return null;
}

async function handleShop(path, request, pool, user) {
  if (path === "/api/shop/products" && request.method === "GET") {
    const result = await pool.query("SELECT * FROM products WHERE active=true ORDER BY points_price");
    return response(200, { products: result.rows });
  }
  if (path === "/api/shop/orders" && request.method === "POST") {
    requireRole(user, ["student", "parent", "teacher", "admin"]);
    const data = await bodyJson(request);
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      const productResult = await client.query("SELECT * FROM products WHERE id=$1 AND active=true FOR UPDATE", [data.productId]);
      const product = productResult.rows[0];
      if (!product || product.stock < 1) throw Object.assign(new Error("鍟嗗搧搴撳瓨涓嶈冻"), { status: 409 });
      const userResult = await client.query("SELECT points FROM users WHERE id=$1 FOR UPDATE", [user.id]);
      if (userResult.rows[0].points < product.points_price) throw Object.assign(new Error("绉垎涓嶈冻"), { status: 409 });
      const order = await client.query("INSERT INTO orders(user_id,product_id,points_total,delivery_info) VALUES($1,$2,$3,$4) RETURNING *", [user.id, product.id, product.points_price, JSON.stringify(data.deliveryInfo || {})]);
      await client.query("UPDATE users SET points=points-$2 WHERE id=$1", [user.id, product.points_price]);
      await client.query("UPDATE products SET stock=stock-1 WHERE id=$1", [product.id]);
      await client.query("INSERT INTO points_ledger(user_id,amount,reason,reference_type,reference_id) VALUES($1,$2,$3,'order',$4)", [user.id, -product.points_price, `鍏戞崲${product.title}`, order.rows[0].id]);
      await client.query("COMMIT");
      return response(201, { order: order.rows[0] });
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally { client.release(); }
  }
  if (path === "/api/shop/orders" && request.method === "GET") {
    requireRole(user, ["student", "parent", "teacher", "admin"]);
    const result = await pool.query("SELECT o.*,p.title FROM orders o JOIN products p ON p.id=o.product_id WHERE o.user_id=$1 ORDER BY o.created_at DESC", [user.id]);
    return response(200, { orders: result.rows });
  }
  return null;
}

async function handleServices(path, request, pool, user) {
  if (path === "/api/feedback" && request.method === "POST") {
    const data = await bodyJson(request);
    const result = await pool.query("INSERT INTO feedback(user_id,content) VALUES($1,$2) RETURNING *", [user?.id || null, String(data.content || "")]);
    return response(201, { feedback: result.rows[0] });
  }
  if (path === "/api/error-report" && request.method === "POST") {
    const data = await bodyJson(request);
    await pool.query("INSERT INTO error_reports(user_id,message,stack,url,metadata) VALUES($1,$2,$3,$4,$5)", [user?.id || null, String(data.message || "Unknown error").slice(0, 2000), String(data.stack || "").slice(0, 10000), String(data.url || "").slice(0, 2000), JSON.stringify(data)]);
    return response(202, { ok: true });
  }
  if (path === "/api/ai-guide" && request.method === "POST") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    if (!process.env.OPENAI_API_KEY) return response(503, { error: "OPENAI_API_KEY is not configured" });
    const data = await bodyJson(request);
    const upstream = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        instructions: "You are the AI guide for the Zhixing study travel app. Answer in concise, reliable Chinese about courses, routes, culture, equipment and safety. Do not invent opening hours, ticket prices or policies. Prioritize safety for minors.",
        input: Array.isArray(data.messages) ? data.messages.slice(-10) : [],
        max_output_tokens: 600
      })
    });
    const result = await upstream.json();
    if (!upstream.ok) return response(502, { error: result.error?.message || "AI鏈嶅姟澶辫触" });
    return response(200, { reply: result.output_text, source: "openai" });
  }
  if (path === "/api/course-designer" && request.method === "POST") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    await enforceRateLimit(pool, `course-designer:${user.id}`, 12, 60);
    if (!process.env.OPENAI_API_KEY) return response(503, { error: "OPENAI_API_KEY is not configured" });
    const data = await bodyJson(request);
    const topic = String(data.topic || "").trim().slice(0, 120);
    const location = String(data.location || "").trim().slice(0, 120);
    const audience = String(data.audience || "").trim().slice(0, 80);
    if (!topic && !location) return response(400, { error: "请填写关键词或地点" });
    if (!audience) return response(400, { error: "请选择适用人群" });
    const prompt = JSON.stringify({
      topic,
      location,
      audience,
      courseType: String(data.courseType || "综合主题").slice(0, 60),
      duration: String(data.duration || "1天"),
      mode: String(data.mode || "综合研学"),
      emphasis: Array.isArray(data.emphasis) ? data.emphasis.slice(0, 6) : [],
      methods: Array.isArray(data.methods) ? data.methods.slice(0, 6) : []
    });
    const upstream = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        instructions: `你是专业研学课程设计师。根据输入设计可执行的中文研学课程，适用人群可能是中小学生、大学生、党校或干部教育、企事业单位、亲子家庭、普通成年人、老年学习者，不能默认都是未成年人。课程应匹配人群的认知水平、职业背景与组织场景。只输出JSON对象，字段必须为 title,positioning,objectives,modules,schedule,activities,assessment,safety,resources。objectives/assessment/safety/resources是字符串数组；modules是包含title,content,method的对象数组；schedule是包含time,title,detail的对象数组；activities是包含title,format,output的对象数组。不得编造具体开放时间、票价或当地政策；涉及场馆安排时标注需向官方确认。`,
        input: prompt,
        max_output_tokens: 1800
      })
    });
    const result = await upstream.json();
    if (!upstream.ok) return response(502, { error: result.error?.message || "AI课程设计服务失败" });
    try {
      const text = String(result.output_text || "").replace(/^```json\s*/i, "").replace(/\s*```$/, "");
      return response(200, { plan: JSON.parse(text), source: "openai" });
    } catch (_error) {
      return response(502, { error: "AI返回的课程方案格式无效" });
    }
  }
  if (path === "/api/map/route" && request.method === "POST") {
    requireRole(user, ["student", "teacher", "parent", "admin"]);
    if (!process.env.AMAP_WEB_SERVICE_KEY) return response(503, { error: "AMAP_WEB_SERVICE_KEY is not configured" });
    const data = await bodyJson(request);
    const url = new URL("https://restapi.amap.com/v3/direction/walking");
    url.searchParams.set("key", process.env.AMAP_WEB_SERVICE_KEY);
    url.searchParams.set("origin", data.origin);
    url.searchParams.set("destination", data.destination);
    const result = await fetch(url).then((value) => value.json());
    return response(result.status === "1" ? 200 : 502, result);
  }
  return null;
}

async function handleAdmin(path, request, pool, user) {
  if (path === "/api/admin/readiness" && request.method === "GET") {
    requireRole(user, ["admin"]);
    const [dbTime, courseOrdersTable, communityRulesTable, users, courses, submissions, orders, pricedCourses] = await Promise.all([
      pool.query("SELECT now() AS time"),
      pool.query("SELECT to_regclass('public.course_orders') AS table_name"),
      pool.query("SELECT to_regclass('public.community_rules') AS table_name"),
      pool.query("SELECT count(*)::int AS count FROM users"),
      pool.query("SELECT count(*)::int AS count FROM courses WHERE status='published'"),
      pool.query("SELECT count(*)::int AS count FROM submissions"),
      pool.query("SELECT count(*)::int AS count FROM orders"),
      pool.query("SELECT count(*)::int AS count FROM courses WHERE status='published' AND price_cents>0")
    ]);
    const checks = [
      { key: "database", label: "Database", ok: true, detail: dbTime.rows[0].time },
      { key: "migrations", label: "Database migrations", ok: Boolean(courseOrdersTable.rows[0].table_name), detail: courseOrdersTable.rows[0].table_name ? "course_orders ready" : "Run migrations through 0009" },
      { key: "businessData", label: "Business data", ok: Number(pricedCourses.rows[0].count) > 0 && Boolean(communityRulesTable.rows[0].table_name), detail: Number(pricedCourses.rows[0].count) + " priced courses; community rules " + (communityRulesTable.rows[0].table_name ? "ready" : "missing") },
      { key: "ai", label: "AI guide", ok: Boolean(process.env.OPENAI_API_KEY), detail: process.env.OPENAI_API_KEY ? "OPENAI_API_KEY configured" : "Missing OPENAI_API_KEY" },
      { key: "amap", label: "Autonavi map", ok: Boolean(process.env.AMAP_WEB_SERVICE_KEY && process.env.AMAP_JS_KEY), detail: process.env.AMAP_WEB_SERVICE_KEY && process.env.AMAP_JS_KEY ? "AMAP keys configured" : "Missing AMAP_WEB_SERVICE_KEY or AMAP_JS_KEY" },
      { key: "payment", label: "Payment provider", ok: Boolean(process.env.WECHAT_PAY_MCH_ID || process.env.ALIPAY_APP_ID), detail: process.env.WECHAT_PAY_MCH_ID || process.env.ALIPAY_APP_ID ? "Payment provider configured" : "Using admin manual confirmation" },
      { key: "sms", label: "SMS verification", ok: Boolean(process.env.SMS_PROVIDER && process.env.SMS_API_KEY), detail: process.env.SMS_PROVIDER && process.env.SMS_API_KEY ? "SMS provider configured" : "Missing SMS_PROVIDER or SMS_API_KEY" },
      { key: "email", label: "Email security", ok: Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM), detail: process.env.RESEND_API_KEY && process.env.EMAIL_FROM ? "Email verification and reset configured" : "Missing RESEND_API_KEY or EMAIL_FROM" },
      { key: "adminMfa", label: "Admin MFA", ok: Boolean(process.env.ADMIN_MFA_SECRET), detail: process.env.ADMIN_MFA_SECRET ? "Admin second factor configured" : "Missing ADMIN_MFA_SECRET" },
      { key: "storage", label: "Object storage", ok: Boolean(process.env.BLOB_READ_WRITE_TOKEN || process.env.S3_BUCKET || process.env.OSS_BUCKET || process.env.COS_BUCKET), detail: process.env.BLOB_READ_WRITE_TOKEN || process.env.S3_BUCKET || process.env.OSS_BUCKET || process.env.COS_BUCKET ? "Object storage configured" : "Using database file fallback" },
      { key: "alerts", label: "Alert webhook", ok: Boolean(process.env.ALERT_WEBHOOK_URL), detail: process.env.ALERT_WEBHOOK_URL ? "Alert webhook configured" : "Missing ALERT_WEBHOOK_URL" },
      { key: "backups", label: "Database backups", ok: true, detail: "Netlify Database migrations and managed storage active; configure provider retention in Netlify/database console" }
    ];
    return response(200, {
      ready: checks.every((item) => item.ok),
      checks,
      counts: { users: users.rows[0].count, courses: courses.rows[0].count, submissions: submissions.rows[0].count, shopOrders: orders.rows[0].count }
    });
  }
  if (path === "/api/admin/overview" && request.method === "GET") {
    requireRole(user, ["admin"]);
    const [users, courses, submissions, posts, orders, errors] = await Promise.all([
      pool.query("SELECT role,count(*)::int AS count FROM users GROUP BY role"),
      pool.query("SELECT count(*)::int AS count FROM courses"),
      pool.query("SELECT status,count(*)::int AS count FROM submissions GROUP BY status"),
      pool.query("SELECT status,count(*)::int AS count FROM community_posts GROUP BY status"),
      pool.query("SELECT status,count(*)::int AS count FROM orders GROUP BY status"),
      pool.query("SELECT count(*)::int AS count FROM error_reports WHERE created_at>now()-interval '24 hours'")
    ]);
    return response(200, { users: users.rows, courses: courses.rows[0].count, submissions: submissions.rows, posts: posts.rows, orders: orders.rows, errors24h: errors.rows[0].count });
  }
  if (path === "/api/admin/security" && request.method === "GET") {
    requireRole(user, ["admin"]);
    const [recentErrors, recentAudits, rateLimits, failedLogins] = await Promise.all([
      pool.query("SELECT id,message,url,created_at FROM error_reports ORDER BY created_at DESC LIMIT 50"),
      pool.query("SELECT id,action,target_type,target_id,created_at FROM audit_logs ORDER BY created_at DESC LIMIT 100"),
      pool.query("SELECT key,attempts,window_started_at,updated_at FROM auth_rate_limits WHERE updated_at>now()-interval '24 hours' ORDER BY attempts DESC LIMIT 100"),
      pool.query("SELECT count(*)::int AS count FROM audit_logs WHERE action='auth.login' AND created_at>now()-interval '24 hours'")
    ]);
    return response(200, {
      errors: recentErrors.rows,
      audits: recentAudits.rows,
      rateLimits: rateLimits.rows,
      loginEvents24h: failedLogins.rows[0].count
    });
  }
  if (path === "/api/admin/users" && request.method === "GET") {
    requireRole(user, ["admin"]);
    const result = await pool.query("SELECT id,email,display_name,role,school,status,points,created_at FROM users ORDER BY created_at DESC LIMIT 500");
    return response(200, { users: result.rows });
  }
  if (path === "/api/admin/parent-links" && request.method === "GET") {
    requireRole(user, ["admin"]);
    const result = await pool.query(`SELECT ps.parent_id,ps.student_id,ps.relation,ps.approved_at,p.display_name AS parent_name,s.display_name AS student_name
      FROM parent_students ps JOIN users p ON p.id=ps.parent_id JOIN users s ON s.id=ps.student_id ORDER BY ps.approved_at NULLS FIRST`);
    return response(200, { links: result.rows });
  }
  if (path === "/api/admin/posts" && request.method === "GET") {
    requireRole(user, ["admin"]);
    const result = await pool.query("SELECT p.*,u.display_name FROM community_posts p JOIN users u ON u.id=p.author_id ORDER BY p.created_at DESC LIMIT 200");
    return response(200, { posts: result.rows });
  }
  const postStatusMatch = path.match(/^\/api\/admin\/posts\/([0-9a-f-]+)\/status$/);
  if (postStatusMatch && request.method === "PATCH") {
    requireRole(user, ["admin"]);
    const data = await bodyJson(request);
    const status = ["pending", "published", "hidden"].includes(data.status) ? data.status : "published";
    const result = await pool.query("UPDATE community_posts SET status=$2,updated_at=now() WHERE id=$1 RETURNING *", [postStatusMatch[1], status]);
    return response(200, { post: result.rows[0] });
  }
  const userStatusMatch = path.match(/^\/api\/admin\/users\/([0-9a-f-]+)\/status$/);
  if (userStatusMatch && request.method === "PATCH") {
    requireRole(user, ["admin"]);
    const data = await bodyJson(request);
    const status = ["pending", "active", "disabled"].includes(data.status) ? data.status : "active";
    const result = await pool.query("UPDATE users SET status=$2,updated_at=now() WHERE id=$1 RETURNING id,email,display_name,role,status", [userStatusMatch[1], status]);
    await audit(pool, user, "admin.user_status", "user", userStatusMatch[1], { status }, request);
    return response(200, { user: result.rows[0] });
  }
  const approveLinkMatch = path.match(/^\/api\/admin\/parent-links\/([0-9a-f-]+)\/([0-9a-f-]+)\/approve$/);
  if (approveLinkMatch && request.method === "PATCH") {
    requireRole(user, ["admin"]);
    await pool.query("UPDATE parent_students SET approved_at=now() WHERE parent_id=$1 AND student_id=$2", [approveLinkMatch[1], approveLinkMatch[2]]);
    return response(200, { ok: true });
  }
  const courseOrderStatusMatch = path.match(/^\/api\/admin\/course-orders\/([0-9a-f-]+)\/status$/);
  if (courseOrderStatusMatch && request.method === "PATCH") {
    requireRole(user, ["admin"]);
    const data = await bodyJson(request);
    if (data.status === "paid") {
      const order = await fulfillCourseOrder(pool, courseOrderStatusMatch[1], user);
      await audit(pool, user, "admin.course_order_paid", "course_order", courseOrderStatusMatch[1], {}, request);
      return response(200, { order });
    }
    const status = ["pending_payment", "awaiting_review", "cancelled", "refunded"].includes(data.status) ? data.status : "awaiting_review";
    const result = await pool.query("UPDATE course_orders SET status=$2,cancelled_at=CASE WHEN $2='cancelled' THEN now() ELSE cancelled_at END WHERE id=$1 RETURNING *", [courseOrderStatusMatch[1], status]);
    if (!result.rowCount) return response(404, { error: "Order not found" });
    await pool.query("INSERT INTO payment_events(order_id,event_type,payload) VALUES($1,$2,$3)", [courseOrderStatusMatch[1], status, JSON.stringify({ actorId: user.id })]);
    await audit(pool, user, "admin.course_order_status", "course_order", courseOrderStatusMatch[1], { status }, request);
    return response(200, { order: result.rows[0] });
  }
  return null;
}

export default async function handler(request) {
  if (request.method === "OPTIONS") return new Response(null, { status: 204 });
  try {
    assertSameOrigin(request);
    const pool = getPool();
    const path = requestPath(request);
    if (path === "/api/health") {
      const result = await pool.query("SELECT now() AS time");
      return response(200, { ok: true, database: true, time: result.rows[0].time });
    }
    if (path === "/api/config" && request.method === "GET") {
      return response(200, {
        services: { ai: Boolean(process.env.OPENAI_API_KEY), amap: Boolean(process.env.AMAP_WEB_SERVICE_KEY && process.env.AMAP_JS_KEY) },
        amapJsKey: process.env.AMAP_JS_KEY || "",
        amapSecurityCode: process.env.AMAP_JS_SECURITY_CODE || ""
      });
    }
    const user = await getSessionUser(request, pool);
    const handlers = [handleAuth, handleProfile, handleCourses, handleSubmissions, handleCommunity, handleFriends, handleMessages, handleParent, handleShop, handleServices, handleStudyBases, handleAdmin];
    for (const routeHandler of handlers) {
      const result = await routeHandler(path, request, pool, user);
      if (result) return result;
    }
    return response(404, { error: "API route not found" });
  } catch (error) {
    console.error("[API]", error);
    return response(error.status || 500, { error: error.status ? error.message : "Internal server error" });
  }
}

export const config = { path: "/api/*" };
