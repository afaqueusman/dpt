var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};

	return {
		init: _init
	};

})(document, jQuery);

(function() {

	'use strict';
	app.init();

})();

//	The menu
	$('#right-offcanvas-menu')
		.mmenu({
			classes			: 'mm-white',
			searchfield		: true,
			counters		: true,
			header			: {
				add		: true,
				update	: true,
				title	: 'mmenu'
			}
		});