param(
  [string]$SigningConfig = "",
  [string]$OutputApk = "",
  [switch]$Rebuild
)
$ErrorActionPreference = 'Stop'
$mobileDir = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$rootDir = [IO.Path]::GetFullPath((Join-Path $mobileDir '..'))
if (-not $SigningConfig) { $SigningConfig = Join-Path $rootDir '.android-build-tools\signing\release-signing.json' }
if (-not $OutputApk) { $OutputApk = Join-Path $rootDir 'downloads\zhixing-study-android.apk' }
$configPath = (Resolve-Path -LiteralPath $SigningConfig).Path
$config = Get-Content -LiteralPath $configPath -Raw | ConvertFrom-Json
$keystorePath = [IO.Path]::GetFullPath((Join-Path (Split-Path $configPath) $config.keystore))
if (-not (Test-Path -LiteralPath $keystorePath)) { throw "Release keystore not found: $keystorePath" }

$javaHome = (Resolve-Path (Join-Path $rootDir '.android-build-tools\jdk\jdk-21.0.12.1+1')).Path
$androidHome = (Resolve-Path (Join-Path $rootDir '.android-build-tools\sdk')).Path
$buildTools = Join-Path $androidHome 'build-tools\35.0.0'
$env:JAVA_HOME = $javaHome
$env:ANDROID_HOME = $androidHome
$env:ANDROID_SDK_ROOT = $androidHome
$env:GRADLE_USER_HOME = (Resolve-Path (Join-Path $rootDir '.android-build-tools\gradle')).Path
$node = (Get-Command node -ErrorAction SilentlyContinue).Source
if (-not $node) { throw 'Node.js is required to prepare and sync Capacitor assets' }

Push-Location $mobileDir
try {
  & $node (Join-Path $mobileDir 'scripts\prepare-web.mjs')
  if ($LASTEXITCODE -ne 0) { throw 'Preparing mobile web assets failed' }
  & $node (Join-Path $mobileDir 'node_modules\@capacitor\cli\bin\capacitor') sync android
  if ($LASTEXITCODE -ne 0) { throw 'Capacitor Android sync failed' }
} finally { Pop-Location }

Push-Location (Join-Path $mobileDir 'android')
try {
  if ($Rebuild) { & .\gradlew.bat assembleRelease --no-daemon --rerun-tasks --no-build-cache }
  else { & .\gradlew.bat assembleRelease --no-daemon }
  if ($LASTEXITCODE -ne 0) { throw 'Gradle Release build failed' }
} finally { Pop-Location }

$unsigned = Join-Path $mobileDir 'android\app\build\outputs\apk\release\app-release-unsigned.apk'
$aligned = Join-Path $mobileDir 'android\app\build\outputs\apk\release\app-release-aligned.apk'
$signed = Join-Path $mobileDir 'android\app\build\outputs\apk\release\app-release.apk'
& (Join-Path $buildTools 'zipalign.exe') -f -p 4 $unsigned $aligned
if ($LASTEXITCODE -ne 0) { throw 'zipalign failed' }
$env:ZHIXING_KEYSTORE_PASSWORD = [string]$config.storePassword
$env:ZHIXING_KEY_PASSWORD = [string]$config.keyPassword
try {
  & (Join-Path $buildTools 'apksigner.bat') sign --ks $keystorePath --ks-key-alias ([string]$config.alias) --ks-pass env:ZHIXING_KEYSTORE_PASSWORD --key-pass env:ZHIXING_KEY_PASSWORD --out $signed $aligned
  if ($LASTEXITCODE -ne 0) { throw 'Release signing failed' }
} finally {
  Remove-Item Env:ZHIXING_KEYSTORE_PASSWORD -ErrorAction SilentlyContinue
  Remove-Item Env:ZHIXING_KEY_PASSWORD -ErrorAction SilentlyContinue
  Remove-Item -LiteralPath $aligned -ErrorAction SilentlyContinue
}
New-Item -ItemType Directory -Force -Path (Split-Path $OutputApk) | Out-Null
Copy-Item -Force -LiteralPath $signed -Destination $OutputApk
Write-Output "Built signed Android Release APK: $OutputApk"
