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

  //Parallax initial
  $('.my-paroller').paroller();

  //Scroll top top button
  $(".scroll-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });

  //Navbar animation section
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $(".navbar").addClass("navbar--animated");
    } else {
      $(".navbar").removeClass("navbar--animated");
    }

    if (scroll >= 100) {
      $(".scroll-top").addClass("active");
    } else {
      $(".scroll-top").removeClass("active");
    }
  });



})