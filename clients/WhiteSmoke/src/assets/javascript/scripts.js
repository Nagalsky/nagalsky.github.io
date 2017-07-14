$(document).ready(function(){

	//Right sidebar toggle action
	$('.sidebar__right__toggle').on('click', function(event){
		event.preventDefault();
		$('.sidebar__right').toggleClass('sidebar__right--opened');
	});
	$('.btn-content-sidebar-toggle').on('click', function(event){
		event.preventDefault();
		$('.sidebar__right').toggleClass('sidebar__right--mobile-opened');
	});
	$('.sidebar__right__close').on('click', function(event){
		event.preventDefault();
		$('.sidebar__right').removeClass('sidebar__right--mobile-opened');
	});




});
