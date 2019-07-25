Dropzone.autoDiscover = false;

$(document).ready(function () {

  //Initial product gallery
  if ($('.carousel').length) {
    var $carousel = $('.carousel').flickity({
      pageDots: false,
      fade: true,
      //prevNextButtons: false,
      cellAlign: 'left',
      fullscreen: true
    });

    var $carouselNav = $('.carousel-nav');
    var $carouselNavCells = $carouselNav.find('.carousel-cell');

    $carouselNav.on('click', '.carousel-cell', function (event) {
      var index = $(event.currentTarget).index();
      $carousel.flickity('select', index);
    });

    $('.carousel-nav').css({
      'height': ($(".carousel-main .flickity-viewport").height() + 'px')
    });

    var flkty = $carousel.data('flickity');
    var navTop = $carouselNav.position().top;
    var navCellHeight = $carouselNavCells.height();
    var navHeight = $carouselNav.height();

    $carousel.on('select.flickity', function () {
      // set selected nav cell
      $carouselNav.find('.is-nav-selected').removeClass('is-nav-selected');
      var $selected = $carouselNavCells.eq(flkty.selectedIndex)
        .addClass('is-nav-selected');
      // scroll nav
      var scrollY = $selected.position().top +
        $carouselNav.scrollTop() - (navHeight + navCellHeight) / 2;
      $carouselNav.animate({
        scrollTop: scrollY
      });
    });
  }




  //Mobile menu animation action
  $('.navbar-toggler').on('click', function (e) {
    e.preventDefault()
    $('#navbarSupportedContent').toggleClass('opened')
  })


  //Collapsed form action(such as checkout)
  $('.fieldset-header__next-btn').on('click', function (e) {
    e.preventDefault()
    $(this).parent().parent().removeClass('fieldset-is-opened fieldset-is-edit').addClass('fieldset-is-finished');
    $(this).parent().parent().next('.fieldset-is-closed').removeClass('fieldset-is-closed').addClass('fieldset-is-opened');
    $(this).parent().parent().next('.fieldset-is-finished').removeClass('fieldset-is-finished').addClass('fieldset-is-opened');
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".fieldset-is-opened").offset().top - 30
    }, 600);
  })

  $('.fieldset-header__edit-btn').on('click', function (e) {
    e.preventDefault()
    $(this).parent().parent().parent().find('.fieldset-is-opened').removeClass('fieldset-is-opened').addClass('fieldset-is-finished');
    $(this).parent().parent().parent().find('.fieldset-is-edit').removeClass('fieldset-is-edit');
    $(this).parent().parent().addClass('fieldset-is-edit');
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".fieldset-is-edit").offset().top - 30
    }, 600);
  })

  //Input mask
  $('.form-control-expiration-date').mask('00/0000');


  //Dropzone initial
  $("#dropzone").dropzone({
    url: "/file/post",
    dictDefaultMessage: "Upload Purchase Order"
  });

  //Initial custom select
  $('.selectpicker').selectpicker();


})


$(window).on('resize', function () {
  $('.carousel-nav').css({
    'height': ($(".carousel-main .flickity-viewport").height() + 'px')
  });
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 1) {
    $(".header").addClass("header__shadow");
  } else {
    $(".header").removeClass("header__shadow");
  }
});