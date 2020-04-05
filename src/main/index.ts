import { app, BrowserWindow } from "electron";

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL("http://localhost:8080/");
  // and load the index.html of the app.
  // 실제로 실행될 때 빌드 후.
  // win.loadFile("./dist/index.html");
}

app.on("ready", createWindow);
