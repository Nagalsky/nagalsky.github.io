$(document).ready(function(){


	/* ======== Bootstrap select initial https://silviomoreto.github.io/bootstrap-select/ ======== */
	$('.selectpicker').selectpicker();


	/* ======== Slick carousel initial ======== */
	$('.carousel-service').slick({
	    infinite: true,
	    slidesToShow: 3,
	    autoplay: true,
	    speed: 600,
	    autoplaySpeed: 3000,
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

	/* ======== Slick carousel initial ======== */
	$('.carousel-customers').slick({
	    infinite: true,
	    slidesToShow: 1,
	    autoplay: false,
	    speed: 600,
	    autoplaySpeed: 3000
	});

	/* ======== Slick carousel initial ======== */
	$('.carousel-hero').slick({
		dots: true,
	    infinite: true,
	    slidesToShow: 1,
	    // autoplay: true,
	    speed: 850,
	    // autoplaySpeed: 3000
	    fade: true,
  		cssEase: 'linear'
	});

	/* ======== Goods carousel initial ======== */
	$('.carousel-goods-lg').slick({
	    infinite: true,
	    slidesToShow: 3,
	    autoplay: true,
			slidesToScroll: 1,
	    speed: 600,
	    autoplaySpeed: 3000,
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

	/* ======== Goods carousel initial ======== */
	$('.carousel-goods-sm').slick({
	    infinite: true,
	    slidesToShow: 4,
	    autoplay: true,
			slidesToScroll: 1,
	    speed: 600,
	    autoplaySpeed: 3000,
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


	/* ======== Bootstrap datepicker initial ======== */
	$('.datepicker-holder input').datepicker({
		autoclose: true
    });

    /* ======== Bootstrap input type file initial ======== */
	$('input[type=file]').bootstrapFileInput();


	/* ======== OFFCANVAS MENU ACTION ======== */
    $('.offcanvas-menu-trigger').click(function (e) {
    	e.preventDefault();
    	//$(this).addClass('active');
    	$('.offcanvas-menu-holder').addClass('open');
    	$('body').addClass('offcanvas-open');
    });
    $('.close-offcanvas').click(function (e) {
    	e.preventDefault();
    	$('.offcanvas-menu-holder').removeClass('open');
    	$('body').removeClass('offcanvas-open');
    });


    /* ======== SELECT2 INITIAL ======== */
    $(".select2-tags").select2({
	    tags: true,
	    placeholder: "Choose here"
	})


    /* ======== SWITCH TABS LINKS/BACKGROUND/SUBMENU INITIAL ======== */
	$('.list-tabs__link').click(function(e){
		e.preventDefault();
		$(this).parent().parent().find('.active').removeClass('active');
		$(this).parent().addClass('active');
		var link = $(e.target),
			id = link.data("id");
		$('.section-tabs').attr('class', 'section-has-bg section-tabs').addClass('section-tab-' + id);

		$('.section-tab-text').removeClass('active');
		$('.section-tab-text-' + id).addClass('active');

		$('.list-submenu').removeClass('active');
		$('.list-submenu-' + id).addClass('active');

	});
	$('.list-submenu__link').click(function(e){
		e.preventDefault();
		$(this).parent().parent().find('.active').removeClass('active');
		$(this).addClass('active');
	});



});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 5) {
        $(".navbar").addClass("navbar-scroll");
    } else {
        $(".navbar").removeClass("navbar-scroll");
    }
});


$(window).load(function(){

});


$(window).resize(function(){

});
