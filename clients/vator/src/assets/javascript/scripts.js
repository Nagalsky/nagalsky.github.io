$(document).ready(function(){

	//Header mobile menu action
	$('.header__nav__trigger').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('header__nav__trigger--is-active');
		$('.header__nav-holder').toggleClass('header__nav-holder--is-open');
		$('body').toggleClass('overflow');
	});

	//Slick carousel initial
	$('#carousel').slick({
		dots: true,
		autoplay: true,
  	autoplaySpeed: 3000,
		speed: 750,
		arrows: false
	});

	//Isotope filtering initial
	var $grid = $('.filter__grid').isotope({
		layoutMode: 'fitRows',
  	itemSelector: '.filter__element'
	});
	$('.filter').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$('.filter').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});



});
