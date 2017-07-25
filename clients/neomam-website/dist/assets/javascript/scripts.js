$(document).ready(function(){

	/* ======== SCROLL TO ELEMENT ======== */
	$('[data-click=scroll-to-target]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).attr('href');
    var headerHeight = 55;
    $('html, body').animate({
        scrollTop: $(target).offset().top - headerHeight
    }, 500);
  });


});
