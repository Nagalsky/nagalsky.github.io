var VIDEO_ID = "oX5pLwHbllg";
var done = 0;
var playing = false;

var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var videotime = 0;
var youtube = false;
var videoStarted = false;

function onYouTubePlayerAPIReady() {
  player = new YT.Player("player", {
    videoId: VIDEO_ID,
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      iv_load_policy: 3,
      autohide: 0,
      controls: 0,
      disablekb: 1,
      playsinline: 1,
      cc_load_policy: 0,
      wmode: "transparent",
      host: "https://www.youtube.com",
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  event.target.mute();

  setTimeout(function () {
    event.target.playVideo();
  }, 0);
}

function onPlayerStateChange(event) {
  player.setOption("captions", "fontSize", 1);
  player.setPlaybackRate(1.1);
  if (event.data == YT.PlayerState.PAUSED) {
    console.log("PAUSED");
    $("#video-pause").removeClass("hidden");
  }
  if (event.data == YT.PlayerState.PLAYING && !done) {
    $("#video-pause").addClass("hidden");
    console.log("PLAYING");
    if (!videoStarted) {
      videoStarted = true;
    }
  }

  // if (event.data === done) {

  // }
}

$("#video-overlay").on("click", function () {
  $(this).hide();
  player.unMute();
});
