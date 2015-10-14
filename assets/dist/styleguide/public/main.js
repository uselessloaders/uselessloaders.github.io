(function() {

	var updateMenu = function() {
		var allItems = document.querySelectorAll('#style-nav a:not(.style-nav-heading)');

		[].forEach.call(allItems, function(item) {
			item.className = 'hidden';
		});

		var hash = window.location.hash.split('.');

		if (hash[0] === '')
			return;

		var section       = hash[0];
		var selectedItems = document.querySelectorAll('#style-nav [href*="' + section + '."]');

		[].forEach.call(selectedItems, function(item) {
			item.className = '';
		});
	};

	window.onhashchange = updateMenu;
	updateMenu();

})();
