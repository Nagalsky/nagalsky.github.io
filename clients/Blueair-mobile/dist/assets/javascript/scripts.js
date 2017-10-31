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


});
