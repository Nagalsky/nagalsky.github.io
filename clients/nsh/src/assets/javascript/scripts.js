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
	$('.filter-grid').isotope({
    itemSelector: '.filter-item',
    layoutMode: 'fitRows'
  });
	$('.filter-controls .btn').click(function () {
    var selector = $(this).attr('data-filter');
    $('.filter-grid').isotope({
      filter: selector
    });
    return false;
  });

	//Bootstrap modal lightbox
	$('.lightbox-toggle img').on('click', function () {
    var image = $(this).attr('src');
    $('#modal-lightbox').on('show.bs.modal', function () {
      $(".modal__lightbox-img").attr("src", image);
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
	});

});
