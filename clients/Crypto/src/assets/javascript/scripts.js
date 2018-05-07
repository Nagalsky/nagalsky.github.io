$(document).ready(function(){

		$('.btn').on('click', function(e) {
			e.preventDefault();
			$('html').toggleClass("theme-dark theme-light");
		});

});
