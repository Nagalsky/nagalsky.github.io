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


	//Scroll to element
  $('[data-click=scroll-to-target]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
  });


	$('html, body').animate({
      scrollTop: $('#anchor-bottom').offset().top
  }, 1400);

});
