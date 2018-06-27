$(document).ready(function(){

	/* ======== Scroll to section ======== */
	$('[data-click=scroll-to-target]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top -10
    }, 500);
  });

	//Initial slick gallery
	$('.gallery').slick();

});
