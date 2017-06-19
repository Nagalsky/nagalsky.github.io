$(document).ready(function(){


	/* ======== SCROLL TO ELEMENT ======== */
	$('[data-click=scroll-to-target]').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var target = $(this).attr('href');
        var headerHeight = 0;
        if ($(window).width() <= 767) {
            var headerHeight = 49;
        }
        $('html, body').animate({
            scrollTop: $(target).offset().top - headerHeight
        }, 500);
    });

	if ($(window).width() <= 767) {
    	$('.nav a').on('click', function(){
		    $('.navbar-toggle').click() //bootstrap 3.x by Richard
		});
    }

    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       false,       // default
            live:         true        // default
        }
    )
    wow.init();

    $('.portfolio-holder').magnificPopup({
        delegate: '.portfolio-item', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
            enabled:true
        }
        // other options
    });

});


$(window).load(function(){
	
});


$(window).resize(function(){
	
});