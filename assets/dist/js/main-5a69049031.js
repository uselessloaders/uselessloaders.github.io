(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function($) {
	'use strict';

	var toggle = require('./modules/toggle');

	$(document).ready(function() {
		toggle.attach('.js-toggle');
	});

})(jQuery);

},{"./modules/toggle":2}],2:[function(require,module,exports){
(function($) {
	'use strict';

	var Toggle = function() {
		this.defaults = {
			targetAttr    : 'data-target',
			classNameAttr : 'data-class',
			eventAttr     : 'data-event'
		};
	};

	Toggle.prototype = {

		attach : function(selector, options) {
			options = $.extend(this.defaults, options);

			var $toggle   = $(selector);
			var className = $toggle.attr(options.classNameAttr) || 'is-active';
			var event     = $toggle.attr(options.eventAttr) || 'click';
			var $target   = $($toggle.attr(options.targetAttr));

			$toggle.on(event, function() {
				$target.toggleClass(className);
				return false;
			});
		}

	};

	module.exports = new Toggle();

})(jQuery);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyIsInNyYy9qcy9tb2R1bGVzL3RvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24oJCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIHRvZ2dsZSA9IHJlcXVpcmUoJy4vbW9kdWxlcy90b2dnbGUnKTtcblxuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHR0b2dnbGUuYXR0YWNoKCcuanMtdG9nZ2xlJyk7XG5cdH0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uKCQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBUb2dnbGUgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmRlZmF1bHRzID0ge1xuXHRcdFx0dGFyZ2V0QXR0ciAgICA6ICdkYXRhLXRhcmdldCcsXG5cdFx0XHRjbGFzc05hbWVBdHRyIDogJ2RhdGEtY2xhc3MnLFxuXHRcdFx0ZXZlbnRBdHRyICAgICA6ICdkYXRhLWV2ZW50J1xuXHRcdH07XG5cdH07XG5cblx0VG9nZ2xlLnByb3RvdHlwZSA9IHtcblxuXHRcdGF0dGFjaCA6IGZ1bmN0aW9uKHNlbGVjdG9yLCBvcHRpb25zKSB7XG5cdFx0XHRvcHRpb25zID0gJC5leHRlbmQodGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG5cblx0XHRcdHZhciAkdG9nZ2xlICAgPSAkKHNlbGVjdG9yKTtcblx0XHRcdHZhciBjbGFzc05hbWUgPSAkdG9nZ2xlLmF0dHIob3B0aW9ucy5jbGFzc05hbWVBdHRyKSB8fCAnaXMtYWN0aXZlJztcblx0XHRcdHZhciBldmVudCAgICAgPSAkdG9nZ2xlLmF0dHIob3B0aW9ucy5ldmVudEF0dHIpIHx8ICdjbGljayc7XG5cdFx0XHR2YXIgJHRhcmdldCAgID0gJCgkdG9nZ2xlLmF0dHIob3B0aW9ucy50YXJnZXRBdHRyKSk7XG5cblx0XHRcdCR0b2dnbGUub24oZXZlbnQsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkdGFyZ2V0LnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gbmV3IFRvZ2dsZSgpO1xuXG59KShqUXVlcnkpOyJdfQ==
