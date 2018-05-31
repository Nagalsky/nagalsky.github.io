$(document).ready(function(){

	/* ======== Header form show action ======== */
	$('.header__form-trigger-btn').on('click', function (e) {
		e.preventDefault();
		$('.header__form-holder').addClass('header__form-holder--active');
	});


	/* ======== Play Buttons for YouTube Videos ======== */
	$('.btn-play-video').on('click', function (e) {
		e.preventDefault();
		$('.video-holder').addClass('active');
	});

});


// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {

  // bind events
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });

}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
