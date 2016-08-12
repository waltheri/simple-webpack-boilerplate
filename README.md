# Simple Webpack Boilerplate

:point_up: *This module is currently in the early stage of development and it will get better.*

A command line utility, which prepares basic webpack project, ready to be used immediately, no configuration needed. It doesn't tell you, which framework or library you should be using, it contains only a handful of modules:

* Webpack
* Babel (for ES6 support)
* Gulp (for build tasks)
* LESS

Everything else is up to you.

## Usage

Usage of this utility is super simple. First install it with command:

```
npm install simple-webpack-boilerplate -g
```

Then in your empty project directory create a new package:

```
npm init
```

Fill it with name and description or just press `enter` a few times. And then execute the magic with:

```
simple-webpack-boilerplate
```

After a minute your project will be ready.

## NPM scripts

This boilerplate contains a few starter scripts, which will help you to build your app.

### npm run build

Runs the Webpack and builds the app, results will be in folder `dist`.

### npm run dev-server

Runs the Webpack dev server.
