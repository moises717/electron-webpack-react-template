const path = require("path");

module.exports = {
	entry: "./electron/main.js",
	output: {
		assetModuleFilename: "images/[hash][ext][query]",
	},

	module: {
		strictExportPresence: true,

		rules: require("./webpack.rules"),
	},
};
