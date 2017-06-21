$(document).ready(function(){

	//Mobile preview Iframe action
	$('.btn-iframe-to-mobile-trigger').on('click', function(event) {
		event.preventDefault();
		$('.iframe-preview').addClass('iframe-preview--mobile');
	});
	$('.btn-iframe-to-desktop-trigger').on('click', function(event) {
		event.preventDefault();
		$('.iframe-preview').removeClass('iframe-preview--mobile');
	});



});
