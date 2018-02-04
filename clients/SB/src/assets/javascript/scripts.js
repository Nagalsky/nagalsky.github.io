$(document).ready(function(){

  $(".sticky").stick_in_parent();

  $('.accordion').on('shown.bs.collapse', function () {
    $('.hide').addClass('active');
    $('body').addClass('body-accordion-opened');
    //$('.accordion-heading').parent().parent().parent().addClass('test');
    $('.accordion-heading').click(function() {
      $('.accordion-heading').removeClass('collapsed');
      $('.accordion-heading').addClass('collapsed');
      if(!$(this).closest('.card').find('.accordion-heading').hasClass('show'))
        $(this).parents().parents().addClass('active');
    });
  });
  $('.accordion').on('hidden.bs.collapse', function () {
    $('.hide').removeClass('active');
    $('body').removeClass('body-accordion-opened');
  });

});
