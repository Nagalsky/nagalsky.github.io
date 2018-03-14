$(document).ready(function(){

	//Slick gallery initial
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

});
