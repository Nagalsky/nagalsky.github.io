$(document).ready(function(){

	//Add/remove background color for mobile Navbar
	/*$('.navbar-toggler').on('click', function(){
		$('.navbar').toggleClass('navbar--menu-opened');
	});*/

  //Show hidden boxes
  $('.hidden-box-trigger').on('click', function(e) {
    e.preventDefault();
    $('.box--mobile-hidden').slideDown('box--mobile-hidden');
  });

  //Show hidden team members
  $('.hidden-team-member-trigger').on('click', function(e) {
    e.preventDefault();
    $('.team-member--mobile-hidden').slideDown('team-member--mobile-hidden');
  });

});
