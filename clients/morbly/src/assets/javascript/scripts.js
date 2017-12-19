$(document).ready(function(){

	//Header background color animation
	$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
        $(".header").addClass("header--animation");
    } else {
        $(".header").removeClass("header--animation");
    }
	});


});
