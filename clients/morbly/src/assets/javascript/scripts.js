$(document).ready(function(){

	//Header background color animation action
	$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
        $(".header").addClass("header--animation");
    } else {
        $(".header").removeClass("header--animation");
    }
	});

	//Load more action
	$("div.logos-item").slice(0, 1).show();
	$(".btn-load-more").on('click', function (e) {
		e.preventDefault();
		$("div.logos-item:hidden").slice(0, 1).slideDown();
		$('html,body').animate({
				scrollTop: $(this).offset().top
		}, 1200);
	});

});
