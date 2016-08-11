var gulp = require("gulp");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var gutil = require('gulp-util');

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

/*gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack({
        // configuration
    });

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});*/
