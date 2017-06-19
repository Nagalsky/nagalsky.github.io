$(document).ready(function(){

	/* Slick carousel initial */

	$('.carousel-list').slick({
    autoplay: false,
		arrows: true,
		//draggable: false,
		infinite: false,
		speed: 300,
		//swipe: false,
		//touchMove: false,
		slidesToScroll: 3,
		variableWidth: true,
		slidesToShow: 5
  });

	//Bootstrap datepicker initial
	$('.datepicker-holder .input-group.date').datepicker({
	  calendarWeeks: true,
		autoclose: true,
	  todayHighlight: true
	});


});
