'use strict';

var config     = require('../config.json').less;
var onError    = require('../lib/onError');
var gulp       = require('gulp');
var clean      = require('del');
var plumber    = require('gulp-plumber');
var rename     = require('gulp-rename');
var less       = require('gulp-less');
var minifycss  = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less-clean', function() {
	return clean(config.dist + '/*.css');
});

gulp.task('less', ['less-clean'], function() {
	return gulp.src(config.src)
		.pipe(plumber({errorHandler: onError}))
		.pipe(sourcemaps.init())
			.pipe(less())
			.pipe(minifycss({noAdvanced: true}))
			.pipe(rename(config.id + '.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.dist));
});

gulp.task('less-dev', ['less-clean'], function() {
	return gulp.src(config.src)
		.pipe(plumber({errorHandler: onError}))
		.pipe(sourcemaps.init())
			.pipe(less())
			.pipe(rename(config.id + '.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.dist));
});