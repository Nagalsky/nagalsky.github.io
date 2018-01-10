$(document).ready(function(){


	/* ======== Header background color animation action ======== */
	$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
        $(".navbar").addClass("navbar--animation");
    } else {
        $(".navbar").removeClass("navbar--animation");
    }
	});

	/* ======== Mobile menu action ======== */
	$('.navbar-toggler').on('click', function(){
		$('.navbar').toggleClass('navbar--menu-is-open');
	});

	/* ======== Click gallery initial ======== */
	$('.gallery').slick({
    autoplay: false,
		autoplaySpeed: 3000,
		arrows: true,
		dots: true,
		prevArrow: $('.gallery-control__btn--prev'),
    nextArrow: $('.gallery-control__btn--next'),
		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
					//adaptiveHeight: true,
	        dots: false
	      }
	    }
  	]
  });

	/* ======== Scroll to section ======== */
	$('[data-click=scroll-to-target]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).attr('href');
    var headerHeight = 75;
    $('html, body').animate({
        scrollTop: $(target).offset().top - headerHeight
    }, 500);
		$('.navbar').removeClass('navbar--menu-is-open');
		$('.navbar-collapse').removeClass('show');
  });

	/* ======== Tabs call action ======== */
	$('#ressy-tab-toggle').on('click', function() {
		$('.nav-link').removeClass('active');
		$('.ressy-tab-link').addClass('active');
		$('.tab-pane').removeClass('show active');
		$('#ressy-tab').addClass('show active');
	});
	$('#multa-tab-toggle').on('click', function() {
		$('.nav-link').removeClass('active');
		$('.multa-tab-link').addClass('active');
		$('.tab-pane').removeClass('show active');
		$('#multa-tab').addClass('show active');
	});
	$('#metaworks-tab-toggle').on('click', function() {
		$('.nav-link').removeClass('active');
		$('.metaworks-tab-link').addClass('active');
		$('.tab-pane').removeClass('show active');
		$('#metaworks-tab').addClass('show active');
	});

});


/* ======== Headroom animation initial ======== */
(function() {
    var header = new Headroom(document.querySelector(".navbar"), {
      tolerance: 5,
      offset : 205
    });
    header.init();
}());
