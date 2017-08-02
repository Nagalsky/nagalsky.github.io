$(document).ready(function(){

	//Right sidebar toggle action
	$('.sidebar__right__toggle--1').on('click', function(event){
		event.preventDefault();
		$('.sidebar__right--1').toggleClass('sidebar__right--opened');
	});
	$('.sidebar__right__toggle--2').on('click', function(event){
		event.preventDefault();
		$('.sidebar__right--2').toggleClass('sidebar__right--opened');
	});
	$('.btn-content-sidebar-toggle--1').on('click', function(event){
		event.preventDefault();
		$('.sidebar__right--1').toggleClass('sidebar__right--mobile-opened');
	});
	$('.btn-content-sidebar-toggle--2').on('click', function(event){
		event.preventDefault();
		$('.sidebar__right--2').toggleClass('sidebar__right--mobile-opened');
	});
	$('.sidebar__right__close').on('click', function(event){
		event.preventDefault();
		$('.sidebar__right--1, .sidebar__right--2').removeClass('sidebar__right--mobile-opened');
	});


	//jQuery Knob initial
	$(".dial").knob();

	//Bootstrap switch initial
	$("[name='switch-checkbox']").bootstrapSwitch();

	//Flagstrap initial https://github.com/blazeworx/flagstrap
	$('.flagstrap').flagStrap();


});


$(window).on("load",function(){
	//Scrollbar initial https://github.com/malihu/malihu-custom-scrollbar-plugin
  $(".scrollbar").mCustomScrollbar();
});
