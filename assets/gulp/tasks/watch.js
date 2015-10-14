'use strict';

var config = require('../config.json').watch;
var gulp   = require('gulp');
var seq    = require('run-sequence');

gulp.task('watch', function() {
	gulp.watch(config.svg, ['svg', 'bs-reload']);
	gulp.watch(config.less, function() { seq('less-dev', 'rev', 'styleguide', 'bs-reload') });
	gulp.watch(config.js, function() { seq('js-dev', 'rev', 'bs-reload') });
});
