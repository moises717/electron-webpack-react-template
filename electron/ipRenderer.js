const { ipcRenderer } = require("electron");

const sendSync = async (channel, data) => {
	// whitelist channels
	let validChannels = ["windowsActions"];
	if (validChannels.includes(channel)) {
		return await ipcRenderer.invoke(channel, data);
	}
};

module.exports = {
	sendSync,
};
