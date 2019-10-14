$(document).ready(function () {

  //Mobile menu action
  var nav = $('.navbar')
  var navMenuToggle = $('.navbar-toggler')
  navMenuToggle.on('click', function (e) {
    e.preventDefault()
    nav.toggleClass('is-menu-opened')
  })

  //Navbar search panel active
  var navSearchPanelToggle = $('.nav-search-panel-toggle')
  var navSearchPanel = $('.nav-search-panel')
  var navSearchPanelField = $('.nav-search-panel .form-control')
  var navSearchPanelClose = $('.nav-search-panel-close')
  navSearchPanelToggle.on('click', function (e) {
    e.preventDefault()
    nav.toggleClass('is-search-panel-opened')
    navSearchPanelField.focus()
  })

  navSearchPanelClose.on('click', function (e) {
    e.preventDefault()
    nav.removeClass('is-search-panel-opened')
  })

  $(document).on('click touchstart', function (e) {
    if (
      $(e.target).closest(navSearchPanel).length == 0 &&
      $(e.target).closest(navSearchPanelToggle).length == 0
    ) {
      nav.removeClass('is-search-panel-opened')
    }
  })

  //Click event to scroll to top
  $('.footer__logo').click(function (e) {
    e.preventDefault()
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  //Initial range slider
  $(".range-slider").ionRangeSlider({
    postfix: 'K',
    hide_min_max: true,
    from: '40',
  });

  //Scroll to section action
  $("a[data-scroll]").click(function (e) {
    e.preventDefault();
    //Set Offset Distance from top to account for fixed nav
    var offset = 85;
    $(window).resize(function () {
      if ($(window).width() < 992) {
        offset = 65;
      }
    });
    if ($(window).width() < 992) {
      offset = 65;
    }
    var target = "#" + $(this).data("scroll");
    var $target = $(target);
    //Animate the scroll to, include easing lib if you want more fancypants easings
    $("html, body")
      .stop()
      .animate({
          scrollTop: $target.offset().top - offset
        },
        800,
        "swing"
      );
  });


})