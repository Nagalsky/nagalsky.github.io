$(document).ready(function(){

		//Open/close mobile menu
		$('.header__menu-toggle').on('click', function(e) {
	    e.preventDefault();
			$('.header__bottom').slideToggle(300);
	  });

		//Slick gallery initial
		$('.gallery').slick({
			pauseOnFocus: false,
			pauseOnHover: false
		});

		$(window).on('load resize', function () {
     changepos();
    });

    function changepos() {
      var toppos = ($('.gallery-features .slick-active, .gallery-leadership .slick-active').find(".features__img-holder").height()/2);
      $('.gallery-features .slick-arrow, .gallery-leadership .slick-arrow').css('top',toppos+'px');
    }

		$('.gallery-features').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: true,
			slidesToShow: 4,
  		slidesToScroll: 1,
			pauseOnFocus: false,
			pauseOnHover: false,
			responsive: [
				{
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    }
		  ]
		}).on('afterChange',function(event){
      var toppos = ($('.gallery-features .slick-active').find(".features__img-holder").height()/2);
      $('.gallery-features .slick-arrow').css('top',toppos+'px');
    }).trigger('afterChange');


		$('.benefits').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			pauseOnFocus: false,
			pauseOnHover: false,
			mobileFirst: true,
			responsive: [
		    {
		      breakpoint: 767,
					settings: 'unslick'
		    }
		  ]
		});

		$('.gallery-leadership').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			pauseOnFocus: false,
			pauseOnHover: false,
			mobileFirst: true,
			responsive: [
		    {
		      breakpoint: 767,
					settings: 'unslick'
		    }
		  ]
		}).on('afterChange',function(event){
      var toppos = ($('.gallery-leadership .slick-active').find(".features__img-holder").height()/2);
      $('.gallery-leadership .slick-arrow').css('top',toppos+'px');
    }).trigger('afterChange');



});
