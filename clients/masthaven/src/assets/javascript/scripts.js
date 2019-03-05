$(document).ready(function() {
  //Mobile menu action
  ;(function() {
    var $menu = $('.navbar-collapse')
    var $menuClose = $('.navbar-collapse__close')
    var $menuToggle = $('.navbar-toggler')
    var $menuMask = $('.navbar-mask')
    var $menuActiveClass = 'is-opened'
    $menuToggle.on('click', function(e) {
      e.preventDefault()
      $menu.addClass($menuActiveClass)
      $menuMask.addClass($menuActiveClass)
    })

    $menuClose.on('click', function() {
      $menu.removeClass($menuActiveClass)
      $menuMask.removeClass($menuActiveClass)
    })

    $(document).on('click touchstart', function(e) {
      if (
        $(e.target).closest($menu).length == 0 &&
        $(e.target).closest($menuToggle).length == 0
      ) {
        $menu.removeClass($menuActiveClass)
        $menuMask.removeClass($menuActiveClass)
      }
    })
  })()

  //Initial video gallery
  $('.video-gallery').owlCarousel({
    center: true,
    items: 3,
    loop: true,
    margin: 0,
    nav: true,
    video: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 550,
  })
})
