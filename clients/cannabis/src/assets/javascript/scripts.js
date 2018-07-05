$(document).ready(function(){

	//Slick gallery's initial
	$('.gallery').slick();

	$('.hero').slick({
    autoplay: true,
		autoplaySpeed: 5000,
		speed: 600,
		pauseOnFocus: false,
		pauseOnHover: false,
		adaptiveHeight: true,
		fade: true
  });

	$('.gallery-icon').slick({
    autoplay: true,
		autoplaySpeed: 5000,
		speed: 600,
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
		autoplaySpeed: 5000,
		speed: 600,
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
    autoplay: false,
		autoplaySpeed: 5000,
		speed: 600,
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


	//Marquee initial
	$('.marquee__line').marquee({
		duration: 15000,
		delayBeforeStart: 0,
		direction: 'left'
	});

	if ($(window).width() < 767) {
	 $('.marquee__line').marquee({
		 duration: 12000,
		 delayBeforeStart: 0,
		 direction: 'left'
	 });
	};


});

$(window).resize(function() {
	if ($(window).width() < 767) {
	 $('.marquee__line').marquee({
		 duration: 12000,
		 delayBeforeStart: 0,
		 direction: 'left'
	 });
	};
});
