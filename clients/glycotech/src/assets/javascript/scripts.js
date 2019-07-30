Dropzone.autoDiscover = false;

$(document).ready(function () {

  // Offcanvas mobile menu
  var $menuToggle = $('.navbar-toggler');
  var $menuClose = $('.offcanvas-close');
  var $menuParent = $('body');
  var $menu = $('.offcanvas-holder');
  $($menuToggle).on('click', function () {
    $menuParent.toggleClass('offcanvas--opened');
  });
  $($menuClose).on('click touchstart', function () {
    $menuParent.removeClass('offcanvas--opened');
  });

  $(document).on("click touchstart", function (e) {
    if (
      $(e.target).closest($menu).length == 0 &&
      $(e.target).closest($menuToggle).length == 0
    ) {
      $menuParent.removeClass('offcanvas--opened');
    }
  });


  //Initial slick slider
  if ($('.product-gallery').length) {
    $('.product-gallery').slick({
      asNavFor: '.product-gallery-nav',
      fade: true
    });

    $('.product-gallery-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.product-gallery',
      arrows: false,
      focusOnSelect: true,
      vertical: true,
      verticalSwiping: true,
      responsive: [{
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            vertical: false,
            verticalSwiping: false,
            centerMode: true,
            centerPadding: '20px',
          }
        }
      ]
    });
  }

  //Fullscreen slick slider
  $('.gallery-fullscreen-btn-toggle').on('click', function (e) {
    e.preventDefault()
    $('.product-gallery-holder').toggleClass('fullscreen-mode');
    $('body').toggleClass('modal-open');
    $('.product-gallery').slick('reinit');
  })




  //Mobile menu animation action
  $('.navbar-toggler').on('click', function (e) {
    e.preventDefault()
    $('#navbarSupportedContent').toggleClass('opened')
  })


  //Collapsed form action(such as checkout)
  var headerHeight = 170;
  if ($(window).width() <= 991) {
    headerHeight = 20;
  }

  $('.fieldset-header__next-btn').on('click', function (e) {
    e.preventDefault()
    $(this).parent().parent().removeClass('fieldset-is-opened fieldset-is-edit').addClass('fieldset-is-finished');
    $(this).parent().parent().next('.fieldset-is-closed').removeClass('fieldset-is-closed').addClass('fieldset-is-opened');
    $(this).parent().parent().next('.fieldset-is-finished').removeClass('fieldset-is-finished').addClass('fieldset-is-opened');
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".fieldset-is-opened").offset().top - headerHeight
    }, 600);
  })

  $('.fieldset-header__edit-btn').on('click', function (e) {
    e.preventDefault()
    $(this).parent().parent().parent().find('.fieldset-is-opened').removeClass('fieldset-is-opened').addClass('fieldset-is-finished');
    $(this).parent().parent().parent().find('.fieldset-is-edit').removeClass('fieldset-is-edit');
    $(this).parent().parent().addClass('fieldset-is-edit');
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".fieldset-is-edit").offset().top - headerHeight
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



$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 1) {
    $(".header").addClass("header__shadow");
  } else {
    $(".header").removeClass("header__shadow");
  }
});