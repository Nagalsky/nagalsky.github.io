$(document).ready(function(){

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  if (scroll >= 10) {
	      $(".navbar").addClass("navbar--animated");
	  } else {
	      $(".navbar").removeClass("navbar--animated");
	  }
	});

});
