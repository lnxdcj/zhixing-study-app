@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js 22 or newer is required.
  echo Download it from https://nodejs.org/
  pause
  exit /b 1
)

echo Starting Zhixing Study at http://127.0.0.1:4173/
start "" "http://127.0.0.1:4173/#/home"
node server.mjs

if errorlevel 1 pause
