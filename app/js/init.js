jQuery(document).ready(function($){

	'use strict';
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 300) {
			$('.important-class').addClass('padding-on-my-header');
		}
		if (scroll < 300) {
			$('.important-class').removeClass('padding-on-my-header');
		}
	});
});

