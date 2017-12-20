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
	var inputElms = document.querySelectorAll(".form-control");
	inputElms.forEach(function(e) {
	  e.addEventListener("keyup", function() {
	    console.log(this.value);
	    this.setAttribute("value", this.value);
	  });
	});

	/* ======== Scroll to section ======== */
	$('[data-click=scroll-to-target]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).attr('href');
    var headerHeight = 70;
    $('html, body').animate({
        scrollTop: $(target).offset().top - headerHeight
    }, 500);
  });


});
