'use strict';

var config = require('../config.json').styleguide;
var gulp   = require('gulp');
var shell  = require('gulp-shell');

gulp.task('styleguide', shell.task([
	'./node_modules/kss/bin/kss-node '
		+ config.src
		+ ' ' + config.dist
		+ ' --template ' + config.template
		+ ' --css ' + config.css
		+ ' --helpers ' + 'src/js/helpers'
]));
