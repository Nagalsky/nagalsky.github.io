$(document).ready(function(){

		//Open/close mobile menu
		$('.header__menu-toggle').on('click', function(e) {
	    e.preventDefault();
			$('.header__bottom').slideToggle(300);
	  });

		//Slick gallery initial
		$('.gallery').slick();

});
