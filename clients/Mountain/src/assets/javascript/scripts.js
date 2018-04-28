$(document).ready(function(){

	/* ======== Navbar scroll animation ======== */
	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  if (scroll >= 10) {
	      $(".navbar").addClass("navbar--animated");
	  } else {
	      $(".navbar").removeClass("navbar--animated");
	  }
	});

	/* ======== Scroll to section ======== */
	$('[data-click=scroll-to-target]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).attr('href');
		if ($(window).width() < 991) {
		  var navbarHeight = 79;
		}
		else {
		  var navbarHeight = 97;
		}
    $('html, body').animate({
        scrollTop: $(target).offset().top - navbarHeight
    }, 500);
		$('.navbar-collapse').removeClass('show');
  });

});
