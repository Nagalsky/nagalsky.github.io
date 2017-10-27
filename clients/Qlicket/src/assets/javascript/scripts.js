$(document).ready(function(){

	//Read more initial
	$('.read-more').on('click', function(event) {
		event.preventDefault();
		$(this).addClass('read-more--opened');
	});

});
