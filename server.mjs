import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 4173);
const apiKey = process.env.OPENAI_API_KEY || "";
const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";

const mimeTypes = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml", ".json": "application/json; charset=utf-8",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp"
};

function json(response, status, value) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  response.end(JSON.stringify(value));
}

async function readBody(request) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 100000) throw new Error("Request too large");
  }
  return JSON.parse(body || "{}");
}

async function handleAiGuide(request, response) {
  if (!apiKey) return json(response, 503, { error: "OPENAI_API_KEY is not configured" });
  try {
    const body = await readBody(request);
    const messages = Array.isArray(body.messages) ? body.messages.slice(-10) : [];
    const input = messages.map((message) => ({
      role: message.role === "assistant" ? "assistant" : "user",
      content: String(message.content || "").slice(0, 2000)
    }));
    const upstream = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        instructions: "你是知行研学应用的专业AI导游。用简洁、可靠的中文回答研学路线、课程、文化背景、装备和安全问题。不要编造开放时间、票价或政策；不确定时明确建议用户向官方确认。涉及未成年人安全时优先给出谨慎建议。",
        input,
        max_output_tokens: 500
      })
    });
    const data = await upstream.json();
    if (!upstream.ok) return json(response, 502, { error: data.error?.message || "AI service failed" });
    const reply = data.output_text || data.output?.flatMap((item) => item.content || []).find((item) => item.type === "output_text")?.text;
    if (!reply) return json(response, 502, { error: "AI returned no text" });
    return json(response, 200, { reply, source: "openai" });
  } catch (error) {
    return json(response, 500, { error: error.message || "AI request failed" });
  }
}

export function createServer() {
  return http.createServer(async (request, response) => {
    const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);
    if (request.method === "POST" && url.pathname === "/api/ai-guide") return handleAiGuide(request, response);
    if (request.method !== "GET" && request.method !== "HEAD") return json(response, 405, { error: "Method not allowed" });
    const requested = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
    const filePath = path.resolve(root, "." + requested);
    if (!filePath.startsWith(root)) return json(response, 403, { error: "Forbidden" });
    try {
      const data = await fs.readFile(filePath);
      response.writeHead(200, { "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream" });
      if (request.method === "HEAD") return response.end();
      response.end(data);
    } catch (_error) {
      const index = await fs.readFile(path.join(root, "index.html"));
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(index);
    }
  });
}

export function startServer(options = {}) {
  const server = createServer();
  const listenPort = options.port ?? port;
  const host = options.host || "127.0.0.1";

  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(listenPort, host, () => {
      server.off("error", reject);
      if (!options.silent) {
        const address = server.address();
        console.log(`Zhixing study app: http://${host}:${address.port}`);
        console.log(apiKey ? `AI guide enabled with ${model}` : "AI guide running in local fallback mode (set OPENAI_API_KEY for online AI)");
      }
      resolve(server);
    });
  });
}

if (path.resolve(process.argv[1] || "") === fileURLToPath(import.meta.url)) {
  await startServer();
}
