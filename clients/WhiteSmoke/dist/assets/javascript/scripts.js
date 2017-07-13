$(document).ready(function(){

	//Right sidebar toggle action
	$('.sidebar__right__toggle').on('click', function(event){
		event.preventDefault();
		$('.sidebar__right').toggleClass('sidebar__right--opened');
	});


});
