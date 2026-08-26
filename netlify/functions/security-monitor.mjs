import { Pool as NeonPool, neonConfig } from "../../node_modules/@neondatabase/serverless/index.mjs";
import WebSocket from "../../node_modules/.pnpm/ws@8.21.1/node_modules/ws/index.js";

let databasePool;

neonConfig.webSocketConstructor = WebSocket;

function getPool() {
  const connectionString = process.env.NETLIFY_DB_URL || process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL;
  if (!connectionString) throw new Error("Database URL is not configured");
  if (!databasePool) databasePool = new NeonPool({ connectionString, max: 2, idleTimeoutMillis: 10000 });
  return databasePool;
}

async function sendAlert(payload) {
  if (!process.env.ALERT_WEBHOOK_URL) return false;
  const result = await fetch(process.env.ALERT_WEBHOOK_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });
  return result.ok;
}

export default async function handler() {
  const pool = getPool();
  const [dbTime, errors, rateLimits, pendingTeachers] = await Promise.all([
    pool.query("SELECT now() AS time"),
    pool.query("SELECT count(*)::int AS count FROM error_reports WHERE created_at>now()-interval '24 hours'"),
    pool.query("SELECT count(*)::int AS count FROM auth_rate_limits WHERE updated_at>now()-interval '24 hours' AND attempts>=8"),
    pool.query("SELECT count(*)::int AS count FROM users WHERE role='teacher' AND status='pending'")
  ]);
  const payload = {
    service: "zhixing-study",
    databaseTime: dbTime.rows[0].time,
    errors24h: errors.rows[0].count,
    highRateLimitWindows24h: rateLimits.rows[0].count,
    pendingTeachers: pendingTeachers.rows[0].count
  };
  if (payload.errors24h > 0 || payload.highRateLimitWindows24h > 0) await sendAlert(payload);
  return new Response(JSON.stringify({ ok: true, ...payload }), { headers: { "content-type": "application/json" } });
}

export const config = { schedule: "0 1 * * *" };
