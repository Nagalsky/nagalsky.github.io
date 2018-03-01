$(document).ready(function(){

	//Slick gallery initial
	$('.gallery').slick();

	$('.review-gallery').slick({
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



});
