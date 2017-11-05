$(document).ready(function(){


	//Slick carousel initial
	$('.carousel').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		draggable: false,
		focusOnSelect: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		fade: true,
		asNavFor: '.carousel-nav'
	});

	$('.carousel-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.carousel',
    dots: true,
    centerMode: false,
    focusOnSelect: true
  });

	$(window).on('resize orientationchange', function() {
	  $('.carousel-nav, .carousel').slick('resize');
	});


});
