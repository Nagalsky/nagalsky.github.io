var VIDEO_ID = "sfTMyq7dogg";
var done = 0;
var playerWrapper = document.getElementById("player-wrapper");
var playpause = document.getElementById("playpause");
var glass = document.getElementById("glass");
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
      autoplay: 0,
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
  // event.target.playVideo();
}

function onPlayerStateChange(event) {
  player.setOption("captions", "fontSize", 1);
  player.setPlaybackRate(1.1);
  if (event.data == YT.PlayerState.PAUSED) {
    $(".video-overlay").addClass("video-overlay--is-shown");
  }
  if (event.data == YT.PlayerState.PLAYING && !done) {
    $(".video-overlay").removeClass("video-overlay--is-shown");
    $(".video-poster").addClass("d-none");
    if (!videoStarted) {
      videoStarted = true;
    }
  }

  // if (event.data === done) {

  // }
}

function stopVideo() {
  player.stopVideo();
}

function sticky_relocate() {
  var window_top = $(window).scrollTop();
  var video = $("#video-anchor").offset().top;
  if (window_top > video - 90) $("#video-box").addClass("is-sticky");
  else $("#video-box").removeClass("is-sticky");
}
$(function () {
  $(window).scroll(sticky_relocate);
  sticky_relocate();
});
