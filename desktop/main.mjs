import { app, BrowserWindow, shell } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { startServer } from "../server.mjs";

const desktopRoot = path.dirname(fileURLToPath(import.meta.url));
const iconPath = path.join(desktopRoot, "..", "build", "icon.png");
let localServer;

function createWindow(port) {
  const window = new BrowserWindow({
    width: 520,
    height: 900,
    minWidth: 400,
    minHeight: 680,
    show: false,
    autoHideMenuBar: true,
    backgroundColor: "#ffffff",
    icon: iconPath,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  window.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  window.once("ready-to-show", () => window.show());
  window.loadURL(`http://127.0.0.1:${port}/#/home`);
}

const hasLock = app.requestSingleInstanceLock();
if (!hasLock) app.quit();

app.setAppUserModelId("com.zhixing.study");

app.whenReady().then(async () => {
  localServer = await startServer({ host: "127.0.0.1", port: 0, silent: true });
  createWindow(localServer.address().port);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow(localServer.address().port);
  });
});

app.on("second-instance", () => {
  const window = BrowserWindow.getAllWindows()[0];
  if (!window) return;
  if (window.isMinimized()) window.restore();
  window.focus();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("before-quit", () => {
  localServer?.close();
});
