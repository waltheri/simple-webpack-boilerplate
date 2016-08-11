#!/usr/bin/env node

var path = require("path");
var fs = require("fs-extra");
var config = require("../config.js");
var exec = require('child_process').exec;
var currentPath = "./";
var boilerplatePath = __dirname+"/../";
var prefix = "[simple-webpack-boilerplate] ";
var redCode = "\x1b[31m";
var greenCode = "\x1b[32m";
var resetCode = "\x1b[0m";

function generateBoilerplate(userArgs) {
	
	if(!fs.existsSync(currentPath+"package.json")) {
		return console.error(redCode+prefix+"package.json missing, you must call `npm init` first."+resetCode);
	}
	
	fs.copySync(boilerplatePath+"assets/default", currentPath);
	
	console.log(prefix+"Files copied.");
	
	fs.readJSON(currentPath+"package.json", function(err, package) {
		if(err) return console.error(redCode+err+resetCode);
		
		package.devDependencies = package.devDependencies || {};
		for(var key in config.dependencies) {
			package.devDependencies[key] = config.dependencies[key];
		}
		
		package.scripts = package.scripts || {};
		for(var key in config.scripts) {
			package.scripts[key] = config.scripts[key];
		}
		
		fs.writeJSON(currentPath+"package.json", package, function(err, package) {
			if(err) return console.error(redCode+err+resetCode);
			
			console.log(prefix+"package.json updated.");
			console.log(prefix+"Installing dependencies...");
			
			exec("npm install", function(err, stdout, stderr) {
				if(err) return console.error(redCode+err+resetCode);
				
				console.log(redCode+stderr+resetCode);
				
				console.log(greenCode+prefix+"Boilerplate ready."+resetCode);
			});
		});
	});
}

generateBoilerplate(process.argv.slice(2));
