$(document).ready(function(){

    /* ======== Offcanvas manu action ======== */
    var $btnOffcanvasOpen = $('.offcanvas-toggle');
    var $sideNav = $('.offcanvas-holder');
    var $sideNavMask = $('#offcanvas-mask');
    var $btnOffcanvasClose = $('.offcanvas-close');
    var $bodyOverflow = $('body');

    $btnOffcanvasOpen.on('click', function(event) {
        event.preventDefault();
        $sideNav.addClass('open');
        $sideNavMask.addClass('open');
        $bodyOverflow.addClass('offcanvas-open');
    });

    $sideNavMask.on('click', function() {
        $sideNav.removeClass('open');
        $sideNavMask.removeClass('open');
        $bodyOverflow.removeClass('offcanvas-open');
    });

    $btnOffcanvasClose.on('click', function(event) {
        event.preventDefault();
        $sideNav.removeClass('open');
        $sideNavMask.removeClass('open');
        $bodyOverflow.removeClass('offcanvas-open');
    });


    /* ======== Slick carousel initial ======== */
    $('#carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 700
    });

    /* ======== PRELOADER ACTION ======== */
    setTimeout(function() {
        $('#preloader').fadeOut('500');
    }, 150); // <-- time in milliseconds


});
