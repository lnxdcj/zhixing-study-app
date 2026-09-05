param(
  [Parameter(Mandatory=$true)][string]$Apk,
  [Parameter(Mandatory=$true)][string]$BuildTools,
  [string]$PreviousApk,
  [string]$ExpectedCertSha256,
  [switch]$RequireRelease
)
$ErrorActionPreference = 'Stop'
$projectRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\..'))
$bundledJdk = Join-Path $projectRoot '.android-build-tools\jdk\jdk-21.0.12.1+1'
if (Test-Path -LiteralPath $bundledJdk) {
  $env:JAVA_HOME = (Resolve-Path -LiteralPath $bundledJdk).Path
  $env:Path = (Join-Path $env:JAVA_HOME 'bin') + ';' + $env:Path
}
$package = Get-Content (Join-Path $projectRoot 'mobile\package.json') -Raw | ConvertFrom-Json
$apkPath = (Resolve-Path -LiteralPath $Apk).Path
if ((Get-Item -LiteralPath $apkPath).Length -lt 5000000) { throw 'APK unexpectedly small' }

Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [IO.Compression.ZipFile]::OpenRead($apkPath)
$requiredFiles = @(
  'index.html', 'course-designer.html', 'download.html',
  'assets/course-planner.mjs', 'assets/course-designer.mjs', 'assets/course-designer.css',
  'assets/index-D-7AIxjC.js',
  'assets/media-overrides.js',
  'assets/branding/zhixing-app-icon-512.png', 'assets/branding/zhixing-app-icon-192.png'
)
$requiredFiles += Get-ChildItem -LiteralPath (Join-Path $projectRoot 'assets\images') -File -Recurse | ForEach-Object {
  $_.FullName.Substring($projectRoot.Length + 1).Replace('\', '/')
}
try {
  foreach ($relative in $requiredFiles) {
    $entry = $zip.GetEntry("assets/public/$relative")
    if ($null -eq $entry) { throw "Missing packaged asset: $relative" }
    $stream = $entry.Open()
    $sha = [Security.Cryptography.SHA256]::Create()
    try { $packagedHash = [BitConverter]::ToString($sha.ComputeHash($stream)).Replace('-', '') }
    finally { $stream.Dispose(); $sha.Dispose() }
    $sourceHash = (Get-FileHash -LiteralPath (Join-Path $projectRoot $relative) -Algorithm SHA256).Hash
    if ($packagedHash -ne $sourceHash) { throw "Packaged asset is stale: $relative" }
  }
} finally { $zip.Dispose() }

$aapt = Join-Path $BuildTools 'aapt.exe'
$signer = Join-Path $BuildTools 'apksigner.bat'
$badging = & $aapt dump badging $apkPath
if ($LASTEXITCODE -ne 0) { throw 'Cannot inspect Android manifest' }
$packageLine = $badging | Select-String '^package:' | ForEach-Object { $_.Line }
$expectedVersion = [regex]::Escape($package.version)
if ($packageLine -notmatch "name='com\.zhixing\.study'" -or $packageLine -notmatch "versionName='$expectedVersion'") { throw 'Unexpected package id or version' }
$parts = $package.version.Split('.')
$expectedCode = [int]$parts[0]*10000 + [int]$parts[1]*100 + [int]$parts[2]
if ($packageLine -notmatch "versionCode='$expectedCode'") { throw 'Unexpected version code' }
if ($RequireRelease) {
  $manifestTree = & $aapt dump xmltree $apkPath AndroidManifest.xml
  $debuggable = $manifestTree | Select-String 'android:debuggable'
  if ($debuggable -and $debuggable.Line -match '0xffffffff') { throw 'APK is debuggable; refusing to publish it as a Release build' }
}

$cert = & $signer verify --verbose --print-certs $apkPath
if ($LASTEXITCODE -ne 0) { throw 'APK signature is invalid' }
$digest = $cert | Select-String '^Signer #1 certificate SHA-256 digest:' | ForEach-Object { $_.Line }
if (-not $digest) { throw 'Signing certificate digest missing' }
$digestValue = ($digest -replace '^Signer #1 certificate SHA-256 digest:\s*', '').Trim().ToUpperInvariant()
if ($ExpectedCertSha256 -and $digestValue -ne $ExpectedCertSha256.Replace(':', '').Trim().ToUpperInvariant()) { throw 'APK is not signed by the configured Release certificate' }
if ($PreviousApk) {
  $previousCert = & $signer verify --print-certs (Resolve-Path -LiteralPath $PreviousApk).Path
  if ($LASTEXITCODE -ne 0) { throw 'Previous APK signature is invalid' }
  $previousDigest = $previousCert | Select-String '^Signer #1 certificate SHA-256 digest:' | ForEach-Object { $_.Line }
  if ($digest -ne $previousDigest) { throw 'Signing certificate differs: do not publish as an in-place upgrade' }
}
[pscustomobject]@{
  Version = $package.version
  VersionCode = $expectedCode
  Bytes = (Get-Item -LiteralPath $apkPath).Length
  PlannerAssetsVerified = $requiredFiles.Count
  SignatureVerified = $true
  ReleaseBuild = [bool]$RequireRelease
  CertificateSha256 = $digestValue
  SameSignerAsPrevious = [bool]$PreviousApk
  Sha256 = (Get-FileHash -LiteralPath $apkPath -Algorithm SHA256).Hash
}
