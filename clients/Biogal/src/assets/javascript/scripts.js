$(document).ready(function(){


  /* ======== Scroll to section ======== */
	$('[data-click=scroll-to-target]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
  });


	/* ======== Slick gallery initial ======== */
	$('.testimonils').slick();


});
