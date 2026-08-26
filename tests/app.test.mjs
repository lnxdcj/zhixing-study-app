import assert from "node:assert/strict";
import { scryptSync } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";

const client = await readFile(new URL("../assets/backend-client.js", import.meta.url), "utf8");
const overrides = await readFile(new URL("../assets/media-overrides.js", import.meta.url), "utf8");
const api = await readFile(new URL("../netlify/functions/api.mjs", import.meta.url), "utf8");
const demoSeed = await readFile(new URL("../netlify/database/migrations/0006_demo_showcase_accounts.sql", import.meta.url), "utf8");
const adminSeed = await readFile(new URL("../netlify/database/migrations/0007_demo_admin_account.sql", import.meta.url), "utf8");
const assignmentSeed = await readFile(new URL("../netlify/database/migrations/0008_demo_assignment_workflow.sql", import.meta.url), "utf8");
const businessSeed = await readFile(new URL("../netlify/database/migrations/0011_business_data_seed.sql", import.meta.url), "utf8");
const groupContactsSeed = await readFile(new URL("../netlify/database/migrations/0019_group_contacts.sql", import.meta.url), "utf8");
const directChatsSeed = await readFile(new URL("../netlify/database/migrations/0020_individual_group_chats.sql", import.meta.url), "utf8");
const passwordRotation = await readFile(new URL("../netlify/database/migrations/0021_unique_showcase_passwords.sql", import.meta.url), "utf8");
const richerCourses = await readFile(new URL("../netlify/database/migrations/0022_richer_course_catalog.sql", import.meta.url), "utf8");
const diverseCourses = await readFile(new URL("../netlify/database/migrations/0023_diverse_course_categories.sql", import.meta.url), "utf8");
const showcaseAccounts = await readFile(new URL("../showcase-accounts.md", import.meta.url), "utf8");

test("guest learning summary defaults to zero", () => {
  assert.match(client, /learningSummary = \{ progress: 0, completionRate: 0, completed: 0, active: 0/);
  assert.match(client, /currentUser\?\.role === "student"/);
  assert.match(overrides, /return \{ done: zhiTaskConfigs\[title\]\.steps\.map\(function \(\) \{ return false; \}\) \}/);
  assert.match(overrides, /function syncZhiAccessState/);
  assert.match(overrides, /function renderZhiAccessLock/);
  assert.match(overrides, /zhi-access-lock/);
  assert.match(overrides, /api\("\/api\/enrollments"\)/);
  assert.match(overrides, /function syncGuestMessageCount/);
  assert.match(overrides, /badge\.style\.display = "none"/);
  assert.match(overrides, /function syncGuestZhiProgress/);
  assert.match(overrides, /function syncGuestZhiPersonalContent/);
  assert.match(overrides, /function hideGuestPersonalBlock/);
  assert.match(overrides, /function hideGuestRankMeRows/);
  assert.match(overrides, /function syncGuestGreyAvatars/);
  assert.match(overrides, /function syncGuestPrivateRoutes/);
  assert.match(overrides, /hideGuestPersonalBlock\(main,/);
  assert.match(overrides, /hideGuestRankMeRows\(main\)/);
  assert.match(overrides, /guestAvatarDataUrl/);
  assert.match(overrides, /guestPrivatePanels/);
  assert.match(overrides, /guest-private-route-lock/);
  assert.match(overrides, /hideGuestZhiBlockByText\(main, \[\/待办\/, \/代办\/, \/我的任务\/, \/今日任务\/\]\)/);
  assert.match(overrides, /function syncGuestLearningMapState/);
  assert.match(overrides, /function syncGuestProfileState/);
  assert.match(overrides, /function syncGuestHomeState/);
  assert.match(overrides, /hideGuestRankMeRows\(document\)/);
  assert.match(overrides, /guestAvatarDataUrl/);
  assert.match(overrides, /function syncGuestProfilePrivateSections/);
  assert.match(overrides, /.profile-certificates-list/);
  assert.match(overrides, /function syncGuestProfileBadges/);
});

test("learning summary keeps average progress separate from task completion rate", () => {
  assert.match(client, /function summarizeLearningProgress\(items\)/);
  assert.match(client, /completionRate: records\.length \? Math\.round\(completed \/ records\.length \* 100\) : 0/);
  assert.match(client, /setValueNearLabel\("任务完成率", summary\.completionRate \+ "%"/);
  assert.match(client, /setCompletionRateBars\(summary\.completionRate\)/);
  assert.match(client, /bar\.style\.width = percent \+ "%"/);
  assert.doesNotMatch(client, /setCompletionRateBars\(summary\.progress\)/);
});

test("grading uses an inline form instead of native prompts", () => {
  assert.doesNotMatch(client, /window\.prompt|window\.confirm/);
  assert.match(client, /backend-grade-form/);
});

test("protected attachment links use the implemented API route", () => {
  assert.match(client, /href="\/api\/files\//);
  assert.match(api, /const fileMatch = path\.match/);
});

test("cloud workflows expose courses, certificates, messages and moderation", () => {
  assert.match(api, /process\.env\.NETLIFY_DATABASE_URL/);
  for (const route of ["/api/certificates", "/api/conversations", "/api/admin/parent-links", "/api/admin/posts", "/api/progress", "/api/progress/by-title", "/api/enrollments", "/enroll"]) {
    assert.ok(api.includes(route), `missing ${route}`);
  }
});

test("showcase groups have bound contacts and live message refresh", () => {
  assert.match(groupContactsSeed, /contact_pairs\(requester_id,addressee_id\)/);
  assert.match(groupContactsSeed, /SELECT student_id,parent_id FROM demo_groups/);
  assert.match(groupContactsSeed, /UNION ALL SELECT student_id,teacher_id FROM demo_groups/);
  assert.match(groupContactsSeed, /UNION ALL SELECT parent_id,teacher_id FROM demo_groups/);
  assert.match(groupContactsSeed, /DO UPDATE SET status='accepted'/);
  assert.match(groupContactsSeed, /SET conversation_type='group'/);
  assert.match(overrides, /同组联系人/);
  assert.match(overrides, /refreshTimer = setInterval/);
  assert.match(overrides, /\/api\/conversations\/" \+ conversation\.id \+ "\/messages/);
});

test("messages use stable individual conversations without duplicate click handlers", () => {
  assert.match(directChatsSeed, /student_id AS user_a,parent_id AS user_b/);
  assert.match(directChatsSeed, /student_id,teacher_id FROM demo_groups/);
  assert.match(directChatsSeed, /parent_id,teacher_id FROM demo_groups/);
  assert.match(directChatsSeed, /conversation_type='direct'/);
  assert.match(api, /AS display_title/);
  assert.match(api, /AS peer_avatar_url/);
  assert.match(overrides, /force !== "refresh"/);
  assert.match(overrides, /directConversations\.map/);
  assert.match(overrides, /\.cloud-conversations \.cloud-message-row/);
  assert.match(overrides, /conversation\.display_title \|\| conversation\.title/);
});

test("student data requires real course enrollment", () => {
  assert.match(api, /function requireStudentEnrollment/);
  assert.match(api, /await requireStudentEnrollment\(pool, user\.id, content\.course_id\)/);
  assert.match(api, /await requireStudentEnrollment\(pool, user\.id, contentCourse\.course_id\)/);
  assert.match(api, /await requireStudentEnrollment\(pool, data\.studentId, data\.courseId\)/);
  assert.match(api, /JOIN enrollments e ON e\.user_id=lp\.user_id AND e\.course_id=c\.id/);
  assert.match(client, /function renderStudentCourses/);
  assert.match(client, /api\("\/api\/enrollments"\)/);
  assert.match(client, /`\/api\/courses\/\$\{item\.id\}\/orders`/);
});

test("teachers can dispatch assignments and students can view them", () => {
  assert.match(api, /path === "\/api\/assignments"/);
  assert.match(api, /\["task", "homework", "test"\]\.includes\(contentType\)/);
  assert.match(api, /INSERT INTO notifications\(user_id,title,message,notification_type\)\s+SELECT e\.user_id/);
  assert.match(client, /老师下发任务/);
  assert.match(client, /renderAssignmentRows/);
  assert.match(client, /dueAt/);
  assert.match(assignmentSeed, /东归路线证据包提交/);
  assert.match(assignmentSeed, /生态样方观察报告/);
  assert.match(assignmentSeed, /submission_files/);
});

test("profile panels read from backend instead of local demo state", () => {
  assert.match(overrides, /window\.zhixingApi\.api\("\/api\/assignments"\)/);
  assert.match(overrides, /window\.zhixingApi\.api\("\/api\/notifications"\)/);
  assert.match(overrides, /window\.zhixingApi\.api\("\/api\/shop\/products"\)/);
  assert.match(overrides, /window\.zhixingApi\.api\("\/api\/shop\/orders"\)/);
});

test("showcase accounts are available for every platform role", () => {
  for (const email of ["demo.student@zhixing.study", "demo.parent@zhixing.study", "demo.teacher@zhixing.study", "demo.admin@zhixing.study"]) {
    assert.ok(client.includes(email), `missing ${email} in client demo login`);
  }
  assert.match(client, /const demoAccounts = \[/);
  assert.doesNotMatch(client, /Zhixing2026!/);
  assert.match(demoSeed, /demo\.student@zhixing\.study/);
  assert.match(demoSeed, /demo\.parent@zhixing\.study/);
  assert.match(demoSeed, /demo\.teacher@zhixing\.study/);
  assert.match(adminSeed, /demo\.admin@zhixing\.study/);
});

test("the grassland showcase post uses a real person name", () => {
  assert.match(overrides, /function syncGrasslandPostAuthor\(\)/);
  assert.match(overrides, /currentName === authorName \? "我" : authorName/);
  assert.match(overrides, /const authorName = "张思远"/);
  assert.match(overrides, /今天在草原上看到了成群的牛羊/);
});

test("every documented showcase account has a distinct valid password hash", () => {
  const rotated = [...passwordRotation.matchAll(/\('([^']+@[^']+)','(scrypt\$[^']+)'\)/g)]
    .map((match) => ({ email: match[1], hash: match[2] }));
  const documented = [...showcaseAccounts.matchAll(/\|\s*([\w.+-]+@[\w.-]+)\s*\|\s*([^|\s]+)\s*/g)]
    .map((match) => ({ email: match[1], password: match[2] }));
  const documentedByEmail = new Map(documented.map((account) => [account.email, account.password]));

  assert.equal(rotated.length, 37);
  assert.equal(new Set(rotated.map((account) => account.email)).size, 37);
  assert.equal(new Set(rotated.map((account) => account.hash)).size, 37);
  assert.equal(documentedByEmail.size, 37);
  assert.equal(new Set(documentedByEmail.values()).size, 37);

  for (const account of rotated) {
    const password = documentedByEmail.get(account.email);
    assert.ok(password, `missing documented password for ${account.email}`);
    const [, salt, expected] = account.hash.split("$");
    const actual = scryptSync(password, Buffer.from(salt, "base64url"), 64).toString("base64url");
    assert.equal(actual, expected, `invalid password hash for ${account.email}`);
  }
  assert.match(passwordRotation, /DELETE FROM sessions/);
});

test("guest search and account-only routes are login gated", () => {
  assert.match(overrides, /"#\/search"/);
  assert.match(overrides, /搜索、消息、行程、收藏、浏览历史、积分商城/);
  assert.match(overrides, /guest-private-route-lock/);
});

test("guest theme categories expose only public videos and materials", () => {
  assert.match(overrides, /function themePackageItems\(name, publicOnly\)/);
  assert.match(overrides, /publicOnly \? items\.filter\(function \(item\) \{ return item\.type === "视频" \|\| item\.type === "资料"; \}\) : items/);
  assert.match(overrides, /const publicOnly = !window\.zhixingApi\?\.user/);
  assert.match(overrides, /publicOnly \? \["全部", "视频", "资料"\]/);
  assert.match(overrides, /游客可查看视频与资料/);
});

test("user generated content is rejected when empty", () => {
  assert.ok(api.includes("if (!content) return response(400"));
  assert.ok(api.includes("INSERT INTO community_posts"));
  assert.ok(api.includes("INSERT INTO comments"));
  assert.ok(api.includes("INSERT INTO messages"));
});

test("course pages render backend contents and bind submissions to content ids", () => {
  assert.match(client, /async submitHomework\(\{ themeName, title, text, files, contentId \}\)/);
  assert.match(client, /form\.append\("contentId", contentId\)/);
  assert.match(overrides, /function renderBackendCourseContents/);
  assert.match(overrides, /backendCourseRouteSlugs/);
  assert.match(overrides, /window\.zhixingApi\.api\("\/api\/courses"\)/);
  assert.match(overrides, /\/api\/contents\/" \+ item\.id \+ "\/progress/);
  assert.match(overrides, /window\.zhixingApi\.submitHomework\(\{ contentId: item\.id/);
  assert.match(overrides, /登录参加后显示任务作业/);
});

test("course purchases use real order review before enrollment", () => {
  assert.ok(api.includes("course_orders"));
  assert.ok(api.includes("/orders$"));
  assert.match(api, /\/api\/course-orders/);
  assert.match(api, /fulfillCourseOrder/);
  assert.match(api, /\/api\\\/admin\\\/course-orders/);
  assert.match(client, /\/api\/course-orders/);
  assert.match(client, /\/api\/courses\/\$\{item\.id\}\/orders/);
  assert.match(client, /renderCourseOrderRows/);
  assert.match(client, /admin-course-orders/);
});

test("business data includes priced courses, moderation rules and order amounts", () => {
  assert.match(businessSeed, /price_cents/);
  assert.match(businessSeed, /community_rules/);
  assert.match(businessSeed, /真实身份发布/);
  assert.match(api, /SELECT id,title,price_cents FROM courses/);
  assert.match(api, /data\.amountCents \|\| course\.rows\[0\]\.price_cents/);
  assert.match(api, /\/api\/community\/rules/);
  assert.match(client, /priceCents/);
  assert.match(client, /amountCents: Number\(item\.price_cents/);
});

test("admin readiness exposes missing service configuration clearly", () => {
  assert.match(api, /\/api\/admin\/readiness/);
  assert.match(api, /OPENAI_API_KEY/);
  assert.match(api, /AMAP_WEB_SERVICE_KEY/);
  assert.match(api, /WECHAT_PAY_MCH_ID|ALIPAY_APP_ID/);
  assert.match(api, /SMS_PROVIDER|SMS_API_KEY/);
  assert.match(api, /BLOB_READ_WRITE_TOKEN|S3_BUCKET|OSS_BUCKET|COS_BUCKET/);
  assert.match(client, /admin-readiness/);
});

test("learning map keeps the real Autonavi tile map", () => {
  assert.match(overrides, /realMapProvider = "autonavi"/);
  assert.match(overrides, /function markAmap/);
  assert.match(overrides, /const amapStudyPlaces/);
});

test("course designer supports students, adults, universities and cadre education", () => {
  assert.match(overrides, /const courseDesignerAudiences/);
  for (const audience of ["小学阶段", "大学生", "党校\/干部教育", "企事业单位", "成人公众", "老年学习者"]) {
    assert.ok(overrides.includes(audience), `missing audience: ${audience}`);
  }
  assert.match(overrides, /function localCourseDesign\(input\)/);
  assert.match(overrides, /function renderCourseDesigner\(\)/);
  assert.match(overrides, /\/api\/course-designer/);
  assert.match(api, /path === "\/api\/course-designer"/);
  assert.match(api, /不能默认都是未成年人/);
});

test("every course category receives richer structured content", () => {
  for (const slug of ["history-culture", "natural-science", "frontier-technology", "arts-humanities", "red-education", "social-practice"]) {
    assert.ok(richerCourses.includes(slug), `missing richer course content for ${slug}`);
  }
  assert.match(richerCourses, /'objectives'/);
  assert.match(richerCourses, /'steps'/);
  assert.match(richerCourses, /'deliverable'/);
  assert.match(richerCourses, /'durationMinutes'/);
  assert.match(overrides, /function backendContentDetails\(body\)/);
});

test("course catalog covers diverse academic, civic, industry and adult-learning themes", () => {
  const slugs = ["industrial-intelligence", "rural-revitalization", "urban-governance", "museum-learning", "rule-of-law", "national-defense", "health-life", "career-innovation", "intangible-heritage", "international-understanding"];
  for (const slug of slugs) {
    assert.ok(diverseCourses.includes(`('${slug}'`), `missing course category: ${slug}`);
    for (const type of ["video", "task", "homework", "test", "material"]) {
      assert.ok(diverseCourses.includes(`('${slug}','${type}'`), `missing ${type} for ${slug}`);
    }
  }
  assert.match(overrides, /const courseDesignerTypes/);
  assert.match(overrides, /const courseDesignerMethodOutputs/);
  for (const method of ["实验探究", "田野调查", "情境模拟", "角色扮演", "辩论协商", "策展创作", "工程制作", "志愿服务", "项目路演"]) {
    assert.ok(overrides.includes(method), `missing design method: ${method}`);
  }
});
