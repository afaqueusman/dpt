jQuery(document).ready(function($){
	var smallWindow = false;

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$(".important-class").addClass("padding-on-my-header");
		}
		if (scroll < 50) {
			$(".important-class").removeClass("padding-on-my-header");
		}
	});

	$('.top-bar ul.right li').click(function() {
       $('.top-bar').removeClass('expanded');
    });
});

