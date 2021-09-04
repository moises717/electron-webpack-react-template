const rules = require("./webpack.rules");
const path = require("path");

rules.push({
	test: /\.css$/,
	use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

module.exports = {
	// Put your normal webpack config below here

	devServer: {
		hot: true,
		client: false,
	},

	resolve: {
		// modules: ["node_modules", path.resolve(__dirname, "app")],
		extensions: [".js", ".json", ".jsx", ".css"],
		alias: {
			"@layouts": path.resolve(__dirname, "src/layout"),
			"@components": path.resolve(__dirname, "src/components"),
			"@assets": path.resolve(__dirname, "src/assets"),
		},
	},
	module: {
		rules,
	},
};
