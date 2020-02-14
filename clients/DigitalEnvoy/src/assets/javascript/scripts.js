$(document).ready(function () {
  //Share box action
  $('.navbar-share').click('click', function (e) {
    e.preventDefault()
    $('.share-box').addClass('is-opened');
    $('body').addClass('modal-open');
  })
  $('.share-box-close').on('click', function (e) {
    e.preventDefault()
    $('.share-box').removeClass('is-opened');
    $('body').removeClass('modal-open');
  })

  //Zoom effect while scroll
  $(window).scroll(function () {
    $(".hero")
      .css("background-size", (100 + 100 * $(window).scrollTop() / 3400) + "%");
  });

  $('.my-paroller').paroller();

})