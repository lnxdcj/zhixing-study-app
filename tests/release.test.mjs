import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
await import("../scripts/prepare-site.mjs");
const page = await readFile(new URL("download.html", root), "utf8");
const version = JSON.parse(await readFile(new URL("package.json", root), "utf8")).version;
const androidBuild = await readFile(new URL("mobile/scripts/build-android-release.ps1", root), "utf8");

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

test("download page identifies the signed Android release and migration requirement", () => {
  assert.ok(page.includes("Release APK"));
  assert.ok(page.includes("长期发布证书签名"));
  assert.ok(page.includes("1.3.10 及更早版本需先卸载旧版"));
  assert.ok(!page.includes("调试签名测试包"));
  assert.ok(page.includes("Apple 版本尚未开放安装"));
  assert.ok(!page.includes('<img src="./assets/qr/zhixing-download-url.png"'));
});

test("Android download label and cache key match the mobile version", async () => {
  const mobile = JSON.parse(await readFile(new URL("mobile/package.json", root), "utf8"));
  assert.ok(page.includes(`安卓手机版 ${mobile.version}`));
  assert.ok(page.includes(`zhixing-study-android.apk?v=${mobile.version}`));
});

test("the supplied color logo is used by the web app and download center", async () => {
  const index = await readFile(new URL("index.html", root), "utf8");
  const manifest = await readFile(new URL("manifest.json", root), "utf8");
  assert.ok(index.includes("favicon.png?v=4-supplied-logo"));
  assert.ok(page.includes('class="brand-mark" src="./assets/branding/zhixing-app-icon-192.png?v=4-supplied-logo"'));
  assert.ok(manifest.includes("/assets/branding/zhixing-app-icon-512.png"));
  assert.ok(manifest.includes("/assets/branding/zhixing-app-icon-192.png"));
});

test("tagged Android releases cannot fall back to a debug APK", async () => {
  const workflow = await readFile(new URL(".github/workflows/mobile-release.yml", root), "utf8");
  assert.match(workflow, /assembleRelease/);
  assert.match(workflow, /app-release\.apk/);
  assert.match(workflow, /ANDROID_KEYSTORE_BASE64/);
  assert.doesNotMatch(workflow, /assembleDebug|app-debug\.apk/);
});

test("download page removes stale page-version parameters from the address bar", () => {
  assert.match(page, /pageUrl\.searchParams\.delete\("v"\)/);
  assert.match(page, /window\.history\.replaceState\(null, "", pageUrl\.pathname \+ pageUrl\.search \+ pageUrl\.hash\)/);
});

test("local Android release builds refresh the packaged web assets first", () => {
  assert.match(androidBuild, /prepare-web\.mjs/);
  assert.match(androidBuild, /capacitor.*sync android/);
});
