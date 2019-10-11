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
  var navSearchPanelClose = $('.nav-search-panel-close')
  navSearchPanelToggle.on('click', function (e) {
    e.preventDefault()
    nav.toggleClass('is-search-panel-opened')
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

})