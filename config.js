var dependencies = {
	"babel-core": "6.x",
    "babel-loader": "6.x",
    "babel-preset-es2015": "6.x",
    "gulp": "3.x",
    "webpack": "1.x"
}

var scripts = {
	"build": "gulp webpack-dev",
}

module.exports = {
	dependencies: dependencies,
	scripts: scripts
}
