$(document).ready(function(){

	//Slick gallery's initial
	$('.hero').slick({
    autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: false,
		pauseOnHover: false,
		adaptiveHeight: true,
		fade: true
  });

	$('.gallery-icon').slick({
    autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: false,
		pauseOnHover: false,
		slidesToShow: 5,
  	slidesToScroll: 1,
		responsive: [
			{
	      breakpoint: 1199,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2
	      }
	    },
			{
	      breakpoint: 550,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
  });

	$('.gallery-featured').slick({
    autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: false,
		pauseOnHover: false,
		slidesToShow: 3,
  	slidesToScroll: 1,
		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2
	      }
	    },
			{
	      breakpoint: 550,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
  });

	$('.gallery-news').slick({
    autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		arrows: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		slidesToShow: 3,
  	slidesToScroll: 3,
		responsive: [
	    {
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 2,
					slidesToScroll: 2
	      }
	    },
			{
	      breakpoint: 550,
	      settings: {
	        slidesToShow: 1,
					slidesToScroll: 1
	      }
	    }
	  ]
  });


});
