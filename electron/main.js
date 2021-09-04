const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { verifyWindowAction } = require("./windowsActions");

let mainWindow;

if (require("electron-squirrel-startup")) {
	app.quit();
	mainWindow = null;
}

const createWindow = () => {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		frame: false,
		titleBarStyle: "hidden",
		webPreferences: {
			nodeIntegration: false,
			enableRemoteModule: true,
			contextIsolation: true,
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
		},
	});

	process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

	mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

	mainWindow.webContents.openDevTools();
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		mainWindow = null;
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

ipcMain.handle("windowsActions", (_, action) => {
	switch (action) {
		case "minimize":
			mainWindow.minimize();
			break;

		case "closeApp":
			mainWindow.close();
			break;
		case "maxUnmax":
			if (mainWindow.isMaximized()) {
				mainWindow.unmaximize();
			} else {
				mainWindow.maximize();
			}
			break;

		default:
			break;
	}
});
