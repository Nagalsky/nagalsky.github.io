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

});
