$(document).ready(function() {




	// Offcanvas
	var $menu = $('.offcanvas');
	var $menuToggle = $('.offcanvas-toggle');
	$($menuToggle).on('click',function() {
		$menu.toggleClass('offcanvas--opened');
	});
	$('.side-menu-close').on('click',function(){
		$menu.removeClass('offcanvas--opened');
	});
	$(document).on('click', function (e) {
		if ( !$(e.target).is($menu) && !$(e.target).closest($menu).length
			&& !$(e.target).is($menuToggle) && !$(e.target).closest($menuToggle).length ) {
			$menu.removeClass('offcanvas--opened');
		}
	});






});
