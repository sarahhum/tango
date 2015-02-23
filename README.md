Awesome React Setup
===================

From working at Facebook I've experienced a pretty darn awesome React setup. I love working with React and have started toying with it in some side projects but it took me literally days to get a decent setup.

This repo consists of a blank React app with all of my preferred setup. This setup consists of:

* [browserify](http://browserify.org/) to "let you require('modules') in the browser".
* [reactify](https://www.npmjs.org/package/reactify), a transform used by browserify to transform JSX files into JS files.
* [gulp](http://gulpjs.com/), a build system to put all these different technologies together.
* [gulp-uglify](https://www.npmjs.org/package/gulp-uglify), a JavaScript minifier that uses UglifyJS.
* [gulp-watch](https://www.npmjs.org/package/gulp-watch), a more sophisticated version of gulp.watch that will fire even when a file has been added or deleted.
* [gulp-plumber](https://www.npmjs.org/package/gulp-plumber), a library to prevent any errors during JSX transformation or bundling from taking down the grunt watch command.
* A simple node http server to serve everything in the "root" directory to localhost:8004.

Usage
-----

Basically just do both of these from the root of your project:

* Get the JS build and watch started with `gulp watch`. This will detect all file additions, deletions, and changes in the app directory and update bundle.js when anything has changed.
* Kick off the web server with `node server/server.js`. This will start serving everything in "root" to localhost:8004.

Notes
-----

I wrote the http server from scratch for [Venzio](http://venz.io), a WebGL project I used to work on. I find it pretty good for getting started quickly on projects simply because I'm not familiar with any node http servers but highly doubt it's production quality.
