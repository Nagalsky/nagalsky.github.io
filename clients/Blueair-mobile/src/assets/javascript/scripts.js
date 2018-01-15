$(document).ready(function(){

	//Sticky navbar initial
	$(".navbar").stick_in_parent();

	//Slick carousel initial
	$('.carousel').slick({
    autoplay: true,
		autoplaySpeed: 4000,
		speed: 700,
		arrows: false,
		dots: true,
		fade: true,
		pauseOnFocus: false,
		pauseOnHover: false
  });

	$('.carousel-with-thumbnails').slick({
    autoplay: false,
		fade: true,
		speed: 700,
		arrows: false,
		dots: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		asNavFor: '.carousel-nav'
  });
	$('.carousel-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.carousel-with-thumbnails',
	  dots: false,
		arrows: false,
	  centerMode: false,
	  focusOnSelect: true
	});


});
