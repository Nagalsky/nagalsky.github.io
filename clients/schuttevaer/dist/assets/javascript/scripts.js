$(document).ready(function(){

	$(window).trigger('resize');

	//Show/hide search form action
	$('.navbar-form-search-trigger').on('click', function (event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$('.form-search').slideToggle(100);
	})

	//Magnific popap initial
	$('.lightbox-single').magnificPopup({
		type:'image'
	});

	//Read more initial
	$('.read-more').readmore({
		speed: 100,
		collapsedHeight: 150,
		moreLink: '<a href="#" class="read-more__btn">Meer zien</a>',
	  lessLink: '',
	});



});
var isSticked = false;
$(window).resize(function() {
	if ($(window).width() < 1199) {
		//Remove Navbar scroll sticky to the top initial
		if(isSticked) {
			$(".navbar").unstick();
			isSticked = false;
		}
 } else {
		 if(!isSticked) {
			 //Navbar scroll sticky to the top initial
			 $(".navbar").sticky({
		 		className: "navbar__sticky"
		 	 });
			isSticked = true;
		 }
 }
});
