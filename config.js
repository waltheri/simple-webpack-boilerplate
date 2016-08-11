var dependencies = {
	"babel-core": "6.x",
    "babel-loader": "6.x",
    "babel-preset-es2015": "6.x",
    "gulp": "3.x",
    "webpack": "1.x",
	"webpack-dev-server": "1.x",
	"openurl": "^1.1.1"
}

var scripts = {
	"build": "gulp webpack-dev",
	"dev-server": "gulp webpack-dev-server"
}

module.exports = {
	dependencies: dependencies,
	scripts: scripts
}
