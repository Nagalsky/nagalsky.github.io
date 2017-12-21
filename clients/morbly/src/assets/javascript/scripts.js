$(document).ready(function(){

	/* ======== Header background color animation action ======== */
	$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
        $(".header").addClass("header--animation");
    } else {
        $(".header").removeClass("header--animation");
    }
	});

	/* ======== Slick logos initial ======== */
	$('.logos-holder').slick({
    arrows: false,
		draggable: false,
		autoplay: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		swipe: false,
		touchMove: false
  });
	$('.btn-load-more').click(function(){
	  $(this).closest('body').find('.logos-holder').slick('slickNext');
	});

	/* ======== Input animation initial ======== */
	(function(){
			$('form')
				.find('.form-control')
				.each(function(){

					$(this).on('change', function(){
						$this = $(this);
						if (this.value !== "") {
							$this.addClass('filled');
						}
						else {
							$this.removeClass('filled');
						}
					});
				});
		})();

	/* ======== Scroll to section ======== */
	$('[data-click=scroll-to-target]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).attr('href');
    var headerHeight = 62;
    $('html, body').animate({
        scrollTop: $(target).offset().top - headerHeight
    }, 500);
		$('.navbar-collapse').removeClass('show');
  });


});


/* ======== Form validation ======== */
(function() {
  'use strict';

  window.addEventListener('load', function() {
    var form = document.getElementById('needs-validation');
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  }, false);
})();
