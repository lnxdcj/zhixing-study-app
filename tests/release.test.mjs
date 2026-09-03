import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
await import("../scripts/prepare-site.mjs");
const page = await readFile(new URL("download.html", root), "utf8");
const version = JSON.parse(await readFile(new URL("package.json", root), "utf8")).version;

test("Windows links name assets that belong to the specified release", () => {
  assert.ok(page.includes(`/releases/download/v${version}/Zhixing-Study-Setup-${version}.zip`));
  assert.ok(page.includes(`/releases/download/v${version}/Zhixing-Study-Setup-${version}.exe`));
  assert.ok(!page.includes("releases/latest/download/Zhixing-Study-Setup-1.2.2"));
});

test("public output contains only explicitly approved entries", async () => {
  assert.deepEqual((await readdir(new URL("dist/site/", root))).sort(), [
    "admin.html", "assets", "course-designer.html", "download.html", "downloads",
    "favicon.png", "favicon.svg", "index.html", "manifest.json", "privacy.html", "sw.js"
  ].sort());
  assert.match(await readFile(new URL("netlify.toml", root), "utf8"), /publish = "dist\/site"/);
});

test("download page discloses mobile distribution limitations", () => {
  assert.ok(page.includes("调试签名测试包"));
  assert.ok(page.includes("Apple 版本尚未开放安装"));
  assert.ok(!page.includes('<img src="./assets/qr/zhixing-download-url.png"'));
});

test("Android download label and cache key match the mobile version", async () => {
  const mobile = JSON.parse(await readFile(new URL("mobile/package.json", root), "utf8"));
  assert.ok(page.includes(`安卓手机版 ${mobile.version}`));
  assert.ok(page.includes(`zhixing-study-android.apk?v=${mobile.version}`));
});
