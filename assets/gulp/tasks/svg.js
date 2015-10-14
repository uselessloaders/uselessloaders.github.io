'use strict';

var config  = require('../config.json').svg;
var onError = require('../lib/onError');
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var svg     = require('gulp-svg-sprite');
var svgmin  = require('gulp-svgmin');

gulp.task('svg', function() {
	return gulp.src(config.src)
		.pipe(plumber({errorHandler: onError}))
		.pipe(svgmin())
		.pipe(gulp.dest(config.dist))
		.pipe(svg({
			mode : {
				symbol : {
					dest   : '.',
					sprite : config.id + '.svg'
				}
			}
		}))
		.pipe(gulp.dest(config.dist + '/sprite'));
});
