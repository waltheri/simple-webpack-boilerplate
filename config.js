var dependencies = {
	"babel-core": "6.x",
    "babel-loader": "6.x",
    "babel-preset-es2015": "6.x",
    "gulp": "3.x",
    "webpack": "1.x",
	"webpack-dev-server": "1.x",
	"openurl": "1.x",
	"extract-text-webpack-plugin": "1.x",
    "style-loader": "0.x",
    "css-loader": "0.x",
    "less": "latest",
    "less-loader": "2.x",
}

var scripts = {
	"build": "gulp webpack-dev",
	"dev-server": "gulp webpack-dev-server"
}

module.exports = {
	dependencies: dependencies,
	scripts: scripts
}
