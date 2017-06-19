$(document).ready(function(){


	/* ======== SCROLL TO ELEMENT ======== */
	$('[data-click=scroll-to-target]').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var target = $(this).attr('href');
        var headerHeight = 58;
        if ($(window).width() >= 767) {
        	var headerHeight = 73;
        }
        $('html, body').animate({
            scrollTop: $(target).offset().top - headerHeight
        }, 500);
    });

});

$(window).scroll(function() {    
	/* ======== Navbar change background color action ======== */
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
        $(".navbar").addClass("navbar-sticky");
    } else {
        $(".navbar").removeClass("navbar-sticky");
    }
});


$(window).load(function(){
	
});


$(window).resize(function(){
	
});