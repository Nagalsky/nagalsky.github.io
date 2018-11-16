$(document).ready(function(){

	//Mobile menu
	$('.header__control-list__link--menu-toggle').on('click', function(event) {
		event.preventDefault();
		$('.header__navbar').toggleClass('header__navbar--opened');
		$('.search-box').removeClass('search-box--opened');
	});

	//Search bar
	$('.header__control-list__link--search-box-toggle').on('click', function(event) {
		event.preventDefault();
		$('.search-box').toggleClass('search-box--opened');
		$('.header__navbar').removeClass('header__navbar--opened');
	});
	$(document).on("click touchstart", function(e){
  	if(
    	$(e.target).closest('.search-box--opened').length == 0 &&
     	$(e.target).closest('.header__control-list__link--search-box-toggle').length == 0
   	){
		 	$('.search-box').removeClass('search-box--opened');
   	}
  });
	$('.search-box form').on('click', function(event) {
		event.stopPropagation();
	});

	//Init gallery
	$('.gallery').slick({
		pauseOnHover: false,
		pauseOnDotsHover: false,
		pauseOnFocus: false
	});

	$('.gallery-products').slick({
		pauseOnHover: false,
		pauseOnDotsHover: false,
		pauseOnFocus: false,
		slidesToShow: 5,
  	slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
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
	      breakpoint: 575,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.gallery-locations').slick({
		pauseOnHover: false,
		pauseOnDotsHover: false,
		pauseOnFocus: false,
		slidesToShow: 3,
  	slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		responsive: [
			{
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 2
	      }
	    },
			{
	      breakpoint: 575,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});





});
