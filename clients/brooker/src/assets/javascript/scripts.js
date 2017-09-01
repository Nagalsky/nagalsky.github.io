$(document).ready(function(){

	//Initial Slick carousel
	$('.carousel').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.carousel-text').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.gallery').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true
	});



});
