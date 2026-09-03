import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "dist", "site");
// Only this generated subdirectory is replaced; never copy the workspace root.
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
const publicEntries = [
  "index.html", "course-designer.html", "download.html", "admin.html",
  "privacy.html", "manifest.json", "favicon.png", "favicon.svg", "sw.js",
  "assets", "downloads"
];
for (const entry of publicEntries) {
  await cp(join(root, entry), join(output, entry), { recursive: true });
}
const entries = await readdir(output);
if (entries.some((entry) => !publicEntries.includes(entry))) {
  throw new Error("Unexpected file in public output");
}
console.log(`Prepared ${entries.length} public entries in ${output}`);
