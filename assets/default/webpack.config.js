// Webpack configuration file

module.exports = {
	entry: "./src/main.js",
	output: {
		path: "dist/",
		filename: "[name].bundle.js",
		chunkFilename: "[hash].js",
		publicPath: "dist/"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: "babel",
			query: {
				presets: ["es2015"]
			}
		}],
		noParse: /node_modules\/quill\/dist/
	},
	debug: true,
	devtool: "#source-map"
}
