$(document).ready(function(){

	//Mobile menu action
	$(".navbar-collapse").hiraku({
    btn:".navbar-toggler",
    direction:"right"
	});

	//Slick gallery initial
	$('.gallery').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false
	});

	$('.gallery-logos').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: false,
		slidesToShow: 6,
  	slidesToScroll: 6,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    }
	  ]
	});


});
