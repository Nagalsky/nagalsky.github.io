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
	$(".logos-item").slice(0, 1).show();
	$(".btn-load-more").on('click', function (e) {
		e.preventDefault();
		$(".logos-item:hidden").slice(0, 1).slideDown();
		if ($('.logos-item:hidden').length === 0) {
      $('.btn-load-more').replaceWith("<h3>No more logos</h3>");
    }
		$("html, body").animate({
			scrollTop: $('.btn-load-more').offset().top - 150
		}, 1000);
	});

});
