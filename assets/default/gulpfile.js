var gulp = require("gulp");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var WebpackDevServer = require("webpack-dev-server");
var gutil = require('gulp-util');
var openURL = require("openurl").open;

gulp.task("webpack-dev", function(callback) {
	// run webpack
	webpack(webpackConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
		
		gutil.log("[webpack]", stats.toString({
			// output options
			chunks: false,
			colors: true
		}));
		
		callback();
	});
});

gulp.task("webpack-dev-server", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	//myConfig.devtool = "eval";
	myConfig.debug = true;

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		publicPath: "/" + myConfig.output.publicPath,
		stats: {
			colors: true
		}
	}).listen(8080, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
		openURL("http://localhost:8080/webpack-dev-server/index.html");
	});
});
