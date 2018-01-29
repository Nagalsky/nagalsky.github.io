$(document).ready(function(){

  //Scroll animation initial https://github.com/michalsnik/aos
  AOS.init({
    disable: 'mobile'
  });

  //Scroll initail
  $('.scrollbar').mCustomScrollbar({
  	mouseWheel:{
      preventDefault: false
    }
  });

  /*$(".sticky").stick_in_parent({
    offset_top: 150
  });*/

});
