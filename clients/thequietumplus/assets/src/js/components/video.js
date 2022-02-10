var VIDEO_ID = "nNDdh7wKPPw";
var done = 0;
var playerWrapper = document.getElementById("player-wrapper");
var playpause = document.getElementById("playpause");
var glass = document.getElementById("glass");
var playing = false;
playerWrapper.addEventListener("click", function () {
  if (playing == false) {
    player.playVideo();
    playing = true;
    playpause.style.visibility = "hidden";
    glass.style.visibility = "visible";
  } else {
    player.pauseVideo();
    playing = false;
    playpause.style.visibility = "visible";
    glass.style.visibility = "hidden";
  }
});

function toggleMute() {
  if (player && player.unMute) {
    player.unMute();
    document.getElementById("unmute").style.display = "none";
  }
}
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
      cc_lang_pref: "EN",
      cc_load_policy: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      playsinline: 1,
      rel: 0,
      modestbranding: 1,
      iv_load_policy: 3,
      showinfo: 0,
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
  event.target.playVideo();
  event.target.mute();

  function updateTime() {
    var oldTime = videotime;
    if (player && player.getCurrentTime) {
      videotime = player.getCurrentTime();
    }
  }
  timeupdater = setInterval(updateTime, 100);
}

function onPlayerStateChange(event) {
  player.setOption("captions", "fontSize", 1);
  player.setPlaybackRate(1.1);
  if (event.data == YT.PlayerState.PAUSED) {
    document.getElementById("playpause").style.visibility = "visible";
    document.getElementById("glass").style.visibility = "hidden";
  }
  if (event.data == YT.PlayerState.PLAYING && !done) {
    document.getElementById("playpause").style.visibility = "hidden";
    document.getElementById("glass").style.visibility = "visible";
    if (!videoStarted) {
      videoStarted = true;
      handleNewViewer();
    }
    setInterval(function () {
      createCookie("video_played", parseInt(player.getCurrentTime()), 365);
    }, 10000);
  }
}

function handleNewViewer() {
  if (getCookie("video_played") == null) {
    createCookie("video_played", 1, 365);
  }
}

function createCookie(name, value, days) {
  var date, expires;
  if (days) {
    date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
}

function stopVideo() {
  player.stopVideo();
}
