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
  if ($("body").hasClass("search")) {
    nav.toggleClass('is-search-panel-opened')
    navSearchPanelField.focus()
  }

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
    values: [
      "10K", "100K", "200K", "300K", "400K", "500K",
      "600K", "700K", "800K", "900K", "1M+"
    ],
    hide_min_max: true,
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


  //User form
  $("#user-form").submit(function (e) {
    e.preventDefault();
    $("#form-user-alert").removeClass('alert-hidden').delay(4000).queue(function () {
      $(this).addClass("alert-hidden").dequeue();
    });
  });


  //Stop YouTube video once modal is closed
  $('.modal').on('hidden.bs.modal', function () {
    $(".modal iframe").attr("src", $(".modal iframe").attr("src"));
  });

  //Initial progress line
  NProgress.start();
  NProgress.done();
})