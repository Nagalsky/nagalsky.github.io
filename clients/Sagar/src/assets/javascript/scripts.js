$(document).ready(function(){


	/* ======== Header background color animation action ======== */
	$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
        $(".navbar").addClass("navbar--animation");
    } else {
        $(".navbar").removeClass("navbar--animation");
    }
	});

	/* ======== Mobile menu action ======== */
	$('.navbar-toggler').on('click', function(){
		$('.navbar').toggleClass('navbar--menu-is-open');
	});

	/* ======== Click gallery initial ======== */
	$('.gallery').slick({
    autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		dots: true,
		prevArrow: $('.gallery-control__btn--prev'),
    nextArrow: $('.gallery-control__btn--next'),
		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
					//adaptiveHeight: true,
	        dots: false
	      }
	    }
  ]
  });


});
