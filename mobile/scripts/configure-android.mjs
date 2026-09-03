import { cp, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const mobileDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const rootDir = join(mobileDir, "..");
const packageJson = JSON.parse(await readFile(join(mobileDir, "package.json"), "utf8"));
const versionName = String(process.env.MOBILE_APP_VERSION || packageJson.version).replace(/^v/, "");
const versionParts = versionName.split(".").map((part) => Number.parseInt(part, 10) || 0);
const versionCode = (versionParts[0] || 1) * 10000 + (versionParts[1] || 0) * 100 + (versionParts[2] || 0);
const buildGradlePath = join(mobileDir, "android", "app", "build.gradle");
const resDir = join(mobileDir, "android", "app", "src", "main", "res");
const iconSource = join(rootDir, "assets", "branding", "zhixing-app-icon-512.png");

let buildGradle = await readFile(buildGradlePath, "utf8");
buildGradle = buildGradle
  .replace(/versionCode\s+\d+/, `versionCode ${versionCode}`)
  .replace(/versionName\s+"[^"]+"/, `versionName "${versionName}"`);
await writeFile(buildGradlePath, buildGradle);

for (const density of ["mdpi", "hdpi", "xhdpi", "xxhdpi", "xxxhdpi"]) {
  const directory = join(resDir, `mipmap-${density}`);
  for (const name of ["ic_launcher.png", "ic_launcher_round.png", "ic_launcher_foreground.png"]) {
    await cp(iconSource, join(directory, name));
  }
}

console.log(`Configured Android ${versionName} (${versionCode}) with Zhixing branding`);
