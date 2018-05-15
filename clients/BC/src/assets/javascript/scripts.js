$(document).ready(function(){

	/* ======== Header animation action ======== */
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 5) {
			$(".header").addClass("header--animated");
		} else {
			$(".header").removeClass("header--animated");
		}
	});

	/* ======== Scroll to section ======== */
	$('[data-click=scroll-to-target]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).attr('href');
    var headerHeight = 78;
    $('html, body').animate({
        scrollTop: $(target).offset().top - headerHeight
    }, 500);
  });

});
