$(document).ready(function(){

	//Mobile menu action
	$(".navbar-collapse").hiraku({
    btn:".navbar-toggler",
    direction:"right"
	});

	//Slick gallery initial
	$('.gallery').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false
	});

	$('.gallery-logos').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: false,
		slidesToShow: 6,
  	slidesToScroll: 6,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    }
	  ]
	});
	$('.modal-gallery').slick({
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: true,
		dots: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		adaptiveHeight: true,
		swipe: false,
		draggable: false,
		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        arrows: false
	      }
	    }
	  ]
	});

	$('.modal-gallery-thumbnails').slick({
		autoplay: false,
		autoplaySpeed: 30000000,
		arrows: true,
		dots: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		slidesToShow: 5,
  	slidesToScroll: 1,
		focusOnSelect: true,
		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});


	//Isotope filtering initial
	var $container = $('.filter-grid'),
      $checkboxes = $('.filter-trigger input');

  $container.isotope({
    itemSelector: '.filter-item'
  });

  $checkboxes.change(function(){
    var filters = [];
    // get checked checkboxes values
    $checkboxes.filter(':checked').each(function(){
      filters.push( this.value );
    });
    // ['.red', '.blue'] -> '.red, .blue'
    filters = filters.join(', ');
    $container.isotope({ filter: filters }, function( $changedItems, instance ) {
      instance.$allAtoms.filter('.isotope-hidden').removeClass('is-filtered');
      instance.$filteredAtoms.addClass('is-filtered');
    });
  });



	$('.modal').on('shown.bs.modal', function (e) {
		$('.modal-gallery, .modal-gallery-thumbnails').slick("setPosition", 0);
		$('.modal-gallery-thumbnails, .modal-gallery').resize();
  });

	//Card toggle
	$('.panel__toggle').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('panel__toggle--active');
		$(this).parent('div').find('.panel__collapse').slideToggle('fast');
		$('.modal-thumbnails-holder').toggleClass('static');
	});



	$(document).on('click', '.dropdown-menu', function (e) {
	  e.stopPropagation();
	});

	//Custom scroll bar initial
	$(window).on("load",function(){
		$(".scroll-box").mCustomScrollbar({
			setHeight:460,
			alwaysShowScrollbar: 0
		});
	});


});
