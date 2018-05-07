$(document).ready(function(){

	//Slick gallery initial
	$('.gallery').slick();
	
	$('.gallery-logos').slick({
	  slidesToShow: 5,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: false,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
					arrows: false,
	        slidesToShow: 3
	      }
	    }
	  ]
  });

	$('.gallery-services').slick({
	  slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: false,
		centerMode: true,
  	centerPadding: '460px',
	  responsive: [
			{
	      breakpoint: 1800,
	      settings: {
					centerPadding: '400px',
	      }
	    },
			{
	      breakpoint: 1600,
	      settings: {
					centerPadding: '360px',
	      }
	    },
			{
	      breakpoint: 1450,
	      settings: {
					centerPadding: '300px',
	      }
	    },
			{
	      breakpoint: 1300,
	      settings: {
					centerPadding: '260px',
	      }
	    },
			{
	      breakpoint: 1150,
	      settings: {
					centerPadding: '250px',
	      }
	    },
			{
	      breakpoint: 1050,
	      settings: {
					centerPadding: '220px',
	      }
	    },
			{
	      breakpoint: 960,
	      settings: {
					centerPadding: '200px',
	      }
	    },
			{
	      breakpoint: 860,
	      settings: {
					centerPadding: '180px',
	      }
	    },
			{
	      breakpoint: 790,
	      settings: {
					centerPadding: '120px',
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
			  	centerPadding: '0',
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
