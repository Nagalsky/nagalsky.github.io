$(document).ready(function(){

	/* ======== Header form show action ======== */
	$('.header__form-trigger-btn').on('click', function (e) {
		e.preventDefault();
		$('.header__form-holder').addClass('header__form-holder--active');
	});

});
