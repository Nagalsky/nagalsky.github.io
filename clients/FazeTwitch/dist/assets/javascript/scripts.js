$(document).ready(function(){


	//Product QTY initial
	$('.product-qty__btn--plus').click(function(e){
    e.preventDefault();
    var container = $(this).parents('.product-qty');
    fieldName = $(this).attr('field');
    var currentVal = parseInt( container.children('.product-qty__field').val() );
    var val2 = currentVal + 1;
    if (!isNaN(val2)) {
        container.children('.product-qty__field').val(val2);
    } else {
        container.children('.product-qty__field').val(0);
    }
  });

  $('.product-qty__btn--minus').click(function(e) {
    e.preventDefault();
    var container = $(this).parents('.product-qty');
    fieldName = $(this).attr('field');
    var currentVal = parseInt( container.children('.product-qty__field').val() );
    if (!isNaN(currentVal) && currentVal > 1) {
        container.children('.product-qty__field').val(currentVal - 1);
    } else {
        container.children('.product-qty__field').val(1);
    }
  });


	//Slick gallery initial
	$('.gallery').slick();

});
