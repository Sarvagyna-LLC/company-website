$sourceDir = "C:\Users\SARWAN NANDH\Downloads\Sarvagyna-AI-Startup-Site\sarvagyna-website\src\app\favicon-for-app"
$destDir = "C:\Users\SARWAN NANDH\Downloads\Sarvagyna-AI-Startup-Site\sarvagyna-website\public\favicon"

# Ensure destination directory exists
if (!(Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir
}

# List of files to copy
$files = @(
    "web-app-manifest-192x192.png",
    "web-app-manifest-512x512.png",
    "favicon.ico",
    "icon0.svg",
    "icon1.png",
    "apple-icon.png",
    "manifest.json"
)

# Copy each file
foreach ($file in $files) {
    $sourcePath = Join-Path $sourceDir $file
    $destPath = Join-Path $destDir $file
    
    if (Test-Path -Path $sourcePath) {
        Copy-Item -Path $sourcePath -Destination $destPath -Force
        Write-Host "Copied $file"
    } else {
        Write-Host "File not found: $file"
    }
}

Write-Host "Favicon files copy completed." 