(function($) {
	'use strict';

	var toggle = require('./modules/toggle');

	$(document).ready(function() {
		toggle.attach('.js-toggle');
	});

})(jQuery);
