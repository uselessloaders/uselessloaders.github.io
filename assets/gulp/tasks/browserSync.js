'use strict';

var config      = require('../config.json').bs;
var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('bs', function() {
	browserSync({
		proxy : config.host,
		open  : false
	});
});

gulp.task('bs-reload', function() {
	browserSync.reload({once: true});
});
