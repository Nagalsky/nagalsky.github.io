$(document).ready(function(){


	//Slick carousel initial
	$('.carousel').slick({
		arrows: true,
		//autoplay: true,
		autoplaySpeed: 3000,
		draggable: false,
		focusOnSelect: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		fade: true
	});

	$('.carousel-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.carousel',
    dots: true,
    centerMode: false,
    focusOnSelect: true
  });

});
