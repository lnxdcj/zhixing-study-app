import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
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
if (!buildGradle.includes("ZHIXING_RELEASE_STORE_FILE")) {
  buildGradle = buildGradle.replace(
    "    buildTypes {",
    `    signingConfigs {
        release {
            if (project.hasProperty('ZHIXING_RELEASE_STORE_FILE')) {
                storeFile file(project.property('ZHIXING_RELEASE_STORE_FILE'))
                storePassword project.property('ZHIXING_RELEASE_STORE_PASSWORD')
                keyAlias project.property('ZHIXING_RELEASE_KEY_ALIAS')
                keyPassword project.property('ZHIXING_RELEASE_KEY_PASSWORD')
            }
        }
    }
    buildTypes {`
  ).replace(
    "        release {\n            minifyEnabled false",
    "        release {\n            if (project.hasProperty('ZHIXING_RELEASE_STORE_FILE')) signingConfig signingConfigs.release\n            minifyEnabled false"
  );
}
await writeFile(buildGradlePath, buildGradle);

for (const density of ["mdpi", "hdpi", "xhdpi", "xxhdpi", "xxxhdpi"]) {
  const directory = join(resDir, `mipmap-${density}`);
  for (const name of ["ic_launcher.png", "ic_launcher_round.png", "ic_launcher_foreground.png"]) {
    await cp(iconSource, join(directory, name));
  }
}

// Keep the complete supplied artwork inside round and adaptive launcher masks.
await mkdir(join(resDir, "drawable"), { recursive: true });
await writeFile(join(resDir, "drawable", "ic_launcher_foreground_safe.xml"), `<?xml version="1.0" encoding="utf-8"?>
<inset xmlns:android="http://schemas.android.com/apk/res/android"
    android:drawable="@mipmap/ic_launcher_foreground" android:inset="12%" />
`);
for (const name of ["ic_launcher.xml", "ic_launcher_round.xml"]) {
  const path = join(resDir, "mipmap-anydpi-v26", name);
  const xml = await readFile(path, "utf8");
  await writeFile(path, xml.replace('@mipmap/ic_launcher_foreground"', '@drawable/ic_launcher_foreground_safe"'));
}

console.log(`Configured Android ${versionName} (${versionCode}) with Zhixing branding`);
