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

  //Calculator
  //Calculator buttons
  ;(function() {
    var $calculatorButton = $('.calculator__btn')
    var $calculatorButtonActiveClass = 'active'
    $calculatorButton.on('click', function(e) {
      e.preventDefault()
      $(this)
        .toggleClass($calculatorButtonActiveClass)
        .siblings()
        .removeClass($calculatorButtonActiveClass)
    })
  })()

  //Calculator choose year
  ;(function() {
    var $calculatorChooseYearItem = $(
      '.calculator__choose-year__item'
    )
    var $calculatorChooseYearItemActiveClass = 'active'
    $calculatorChooseYearItem.on('click', function(e) {
      e.preventDefault()
      $(this)
        .toggleClass($calculatorChooseYearItemActiveClass)
        .siblings()
        .removeClass($calculatorChooseYearItemActiveClass)
    })
  })()

  //Initial range slider
  $('.js-range-slider').ionRangeSlider({
    grid: true,
    grid_snap: true,
    values: ['0m', '12m', '24m', '36m', '48m', '60m'],
  })

  //Initial datepicker
  $(function() {
    $('#datetimepicker4').datetimepicker({
      format: 'L',
    })
  })
})
