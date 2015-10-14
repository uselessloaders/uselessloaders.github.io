var Toggle = function() {
	this.defaults = {
		targetAttr    : 'data-target',
		classNameAttr : 'data-class',
		eventAttr     : 'data-event'
	}
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

module.exports = new Toggle;
