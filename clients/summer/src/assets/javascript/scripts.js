$(document).ready(function () {

  //Menu action
  (function () {
    $menu = $('.menu');
    $body = $('body');
    $menuToggle = $('.menu__toggle');
    $menuClose = $('.menu__close');

    $menuToggle.on('click', function (e) {
      e.preventDefault()
      $menu.toggleClass('is-opened')
      $body.toggleClass('overflow-hidden')
    })
    $menuClose.on('click', function (e) {
      e.preventDefault()
      $menu.removeClass('is-opened')
      $body.toggleClass('overflow-hidden')
    })
  }());


  //Stop/Play youtube video once modal is active
  $(function () {
    var $modalVideo = $("#modal-video");
    var $modalVideoUrl = $modalVideo.attr('src');

    /* Remove iframe src attribute on page load to
    prevent autoplay in background */
    $modalVideo.attr('src', '');

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed */
    $(".modal").on('shown.bs.modal', function () {
      $modalVideo.attr('src', $modalVideoUrl);
    });

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $(".modal").on('hide.bs.modal', function () {
      $modalVideo.attr('src', '');
    });
  }());



  $('.wrapper').css({
    minHeight: $('html').outerHeight()
  });


})

$(window).on('resize', function () {
  $('.wrapper').css({
    minHeight: $('html').outerHeight()
  });
});