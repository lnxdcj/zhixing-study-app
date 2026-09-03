import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const mobileDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const rootDir = join(mobileDir, "..");
const webDir = join(mobileDir, "web");
const entryFiles = [
  "index.html",
  "course-designer.html",
  "download.html",
  "admin.html",
  "privacy.html",
  "manifest.json",
  "favicon.png",
  "favicon.svg",
  "sw.js"
];

await rm(webDir, { recursive: true, force: true });
await mkdir(webDir, { recursive: true });

for (const file of entryFiles) {
  await cp(join(rootDir, file), join(webDir, file));
}
await cp(join(rootDir, "assets"), join(webDir, "assets"), { recursive: true });

console.log(`Prepared Capacitor web assets in ${webDir}`);
