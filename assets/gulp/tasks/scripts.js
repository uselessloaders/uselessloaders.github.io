'use strict';

var config     = require('../config.json').js;
var onError    = require('../lib/onError');
var gulp       = require('gulp');
var uglify     = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename     = require('gulp-rename');
var jshint     = require('gulp-jshint');
var plumber    = require('gulp-plumber');
var clean      = require('del');
var browserify = require('browserify');
var stylish    = require('jshint-stylish');
var buffer     = require('vinyl-buffer');
var source     = require('vinyl-source-stream');

var b = function(d) { 
	return browserify({
		entries   : config.src,
		debug     : d,
		transform : 'debowerify'
	});
};

gulp.task('js-clean', function() {
	return clean(config.dist + '/*.js');
});

gulp.task('js-lint', function() {
	return gulp.src(config.src)
		.pipe(plumber({errorHandler : onError}))
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task('js', ['js-clean'], function () {
	return b(false).bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(rename(config.id + '.js'))
		.pipe(gulp.dest(config.dist));
});

gulp.task('js-dev', ['js-clean', 'js-lint'], function () {
	return b(true).bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(rename(config.id + '.js'))
		.pipe(gulp.dest(config.dist));
});
