param([string]$Source = "")
$ErrorActionPreference = 'Stop'
$rootDir = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\..'))
$brandingDir = Join-Path $rootDir 'assets\branding'
$savedSource = Join-Path $brandingDir 'zhixing-app-icon-source.jpg'
if ($Source) {
  if ([IO.Path]::GetFullPath($Source) -ne $savedSource) {
    Copy-Item -LiteralPath $Source -Destination $savedSource -Force
  }
}
Add-Type -AssemblyName System.Drawing
$sourceImage = [Drawing.Image]::FromFile($savedSource)
try {
  foreach ($size in @(192, 512, 1024)) {
    $bitmap = [Drawing.Bitmap]::new($size, $size)
    $graphics = [Drawing.Graphics]::FromImage($bitmap)
    try {
      $graphics.Clear([Drawing.Color]::White)
      $graphics.InterpolationMode = [Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $graphics.PixelOffsetMode = [Drawing.Drawing2D.PixelOffsetMode]::HighQuality
      $scale = [Math]::Min($size / $sourceImage.Width, $size / $sourceImage.Height)
      $width = [int][Math]::Round($sourceImage.Width * $scale)
      $height = [int][Math]::Round($sourceImage.Height * $scale)
      $graphics.DrawImage($sourceImage, [int](($size - $width) / 2), [int](($size - $height) / 2), $width, $height)
      $bitmap.Save((Join-Path $brandingDir "zhixing-app-icon-$size.png"), [Drawing.Imaging.ImageFormat]::Png)
    } finally {
      $graphics.Dispose()
      $bitmap.Dispose()
    }
  }
} finally { $sourceImage.Dispose() }
Copy-Item -LiteralPath (Join-Path $brandingDir 'zhixing-app-icon-512.png') -Destination (Join-Path $brandingDir 'zhixing-app-icon.png') -Force
Copy-Item -LiteralPath (Join-Path $brandingDir 'zhixing-app-icon-192.png') -Destination (Join-Path $rootDir 'favicon.png') -Force
Copy-Item -LiteralPath (Join-Path $brandingDir 'zhixing-app-icon-1024.png') -Destination (Join-Path $rootDir 'build\icon.png') -Force
Write-Output 'Prepared app icons from the supplied image.'
