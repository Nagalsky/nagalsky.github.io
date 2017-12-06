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
		arrows: false,
		dots: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false
	});

	$('.modal-gallery-thumbnails').slick({
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: false,
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
	        slidesToScroll: 2
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
  });


});
