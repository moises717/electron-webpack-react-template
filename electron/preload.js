const { contextBridge } = require("electron");
const { sendSync } = require("./ipRenderer");

contextBridge.exposeInMainWorld("elecApi", {
	sendSync,
});
