$(document).ready(function(){

		//Switch dark/light themes
		$('.btn-switch-themes-toggle').on('click', function(e) {
			e.preventDefault();
			$('html').toggleClass("theme-dark theme-light");
			e.stopPropagation();
		});

		//Toggle expanded mobile search form
		$('.btn-expanded-form-toggle').on('click', function(e) {
			e.preventDefault();
			$('.header__logo').toggleClass("header__logo--hidden");
			$('.header__expanded-form-holder').toggleClass("header__expanded-form-holder--active");
			$('.header__expanded-form').toggleClass("header__expanded-form--active");
			e.stopPropagation();
		});

		//Close expanded mobile search form by click outside
	  $(document).on("click touchstart", function(event) {
	    if( $(event.target).closest('.header__expanded-form--active').length == 0 ) {
	      $(".header__expanded-form--active").removeClass("header__expanded-form--active");
				$('.header__logo').removeClass("header__logo--hidden");
				$('.header__expanded-form-holder').removeClass("header__expanded-form-holder--active");
				//$('.header__expanded-form .form-control').val('');
	    }
	  });

		//Close expanded mobile search form by click on button
		$('.btn-cancel').on('click', function(e) {
			e.preventDefault();
			$(".header__expanded-form--active").removeClass("header__expanded-form--active");
			$('.header__logo').removeClass("header__logo--hidden");
			$('.header__expanded-form-holder').removeClass("header__expanded-form-holder--active");
			$('.header__expanded-form .form-control').val('');
		});


		//Custom select initial
		$('.selectpicker').selectpicker();


		//Mobile menu
		$('.btn-menu-toggle').on('click', function(e) {
			e.preventDefault();
			$('html').toggleClass('html--has-menu');
			$('.aside').toggleClass('aside--opened');
			e.stopPropagation();
		});

		//Close menu by click outside
	  $(document).on("click touchstart", function(event) {
	    if( $(event.target).closest('.aside--opened').length == 0 ) {
	      $(".aside--opened").removeClass("aside--opened");
				$('html').removeClass('html--has-menu');
	    }
	  });

		//Slick gallery initial
		$('.gallery').slick();


		//Call bootstrap modal from bootstrap modal
		$('.modal').on('hidden.bs.modal', function (e) {
	    if($('.modal').hasClass('show')) {
	    	$('body').addClass('modal-open');
	    };
		});

		//Check all checkboxes

		$('.check-all').change(function() {
	    var checkboxes = $(this).closest('.form-filter-coin').find(':checkbox');
	    checkboxes.prop('checked', $(this).is(':checked'));
		});


		//Initial sortable(dragable) - https://github.com/RubaXa/Sortable
		Sortable.create(sortable, {
		  handle: '.sortable__item',
		  animation: 150
		});


});
