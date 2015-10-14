'use strict';

var config  = require('../config.json').rev;
var onError = require('../lib/onError');
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var rev     = require('gulp-rev');

gulp.task('rev', function() {
	return gulp.src(config.src, {base: config.dist})
		.pipe(plumber({errorHandler: onError}))
		.pipe(gulp.dest(config.dist))
		.pipe(rev())
		.pipe(gulp.dest(config.dist))
		.pipe(rev.manifest())
		.pipe(gulp.dest(config.dist));
});
