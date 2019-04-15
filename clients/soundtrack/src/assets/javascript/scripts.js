$(document).ready(function() {
  // Initial sticky navbar
  $('.navbar-nav--sticky')
    .stick_in_parent({
      sticky_class: 'is-sticky',
    })
    .on('sticky_kit:unstick', function(e) {
      $('.form-sticky').removeClass('active')
      $('.nav-item.nav-item--hidden').removeClass('nav-item--hidden')
    })

  //Sticky navbar form toggle
  $('.nav-link--search').on('click', function(e) {
    e.preventDefault()
    $(this)
      .parent()
      .parent()
      .find('.nav-item')
      .toggleClass('nav-item--hidden')
    $('.form-sticky').toggleClass('active')
  })

  $(document).on('click touchstart', function(e) {
    if (
      $(e.target).closest('.form-sticky').length == 0 &&
      $(e.target).closest('.nav-link--search').length == 0
    ) {
      $('.form-sticky').removeClass('active')
      $('.nav-item.nav-item--hidden').removeClass('nav-item--hidden')
    }
  })
})
