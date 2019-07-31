$(document).ready(function () {
  //Initial sticky top navbar
  //$(".header__bottom").stick_in_parent();
  $(".header__bottom").sticky({
    topSpacing: 0,
    className: 'is_stuck'
  });

})