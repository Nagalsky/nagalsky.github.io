window._wq = window._wq || [];

var opt = false;

_wq.push({
  id: "qorgtvwe10",
  options: {
    playbar: false,
    resumable: false,
    smallPlayButton: false,
    volumeControl: false,
    silentAutoPlay: false,
    fullscreenButton: opt,
  },
  onReady: function (video) {
    var resumedTimed = false;
    video.volume(1);

    // save the video variable into Window
    if (!window.PLAYERS) window.PLAYERS = [];
    window.PLAYERS["video"] = video;

    video.bind("play", function () {
      $(document).trigger("player.video.started");
    });

    video.bind("pause", function () {
      $(document).trigger("player.video.paused");
    });

    video.bind("end", function () {
      $(document).trigger("player.video.ended");
    });

    video.bind("timechange", function (t) {
      $(document).trigger("player.playing", [
        {
          playbackTime: t,
          videoLength: this.duration(),
        },
      ]);
    });

    video.mute();
    video.play();

    $(".wistia_async_qorgtvwe10").on("click", function (e) {
      if (video.isMuted()) {
        e.preventDefault();
        video.unmute();
        video.play();
        $(document).trigger("player.unmuted");
      }
    });

    $("#unmute").on("click", function () {
      video.unmute();
      video.play();
      $(document).trigger("player.unmuted");
    });

    $(document).on("player.stop", function () {
      video.pause();
    });

    $(document).on("player.video.toggle", function () {
      if (video.state() === "playing") {
        video.pause();
      } else {
        video.play();
      }
    });

    $(document).on("player.video.play", function () {
      video.play();
    });

    $(document).on("player.video.pause", function () {
      video.pause();
    });

    $(document).on("player.video.unmute", function () {
      if (video.isMuted()) {
        video.unmute();
        $(document).trigger("player.unmuted");
      }
    });
    $("#unmute").on("click", function () {
      if (video.isMuted()) {
        video.unmute();
        $(document).trigger("player.unmuted");
      }
    });

    $(document).trigger("player.video.loaded");
  },
});

var videoPlaying = false;
var videoAutoplays = true;
var videoFullscreenState = false;

$(document).on("player.unmuted", function () {
  $("#unmute").hide();
});

$(document).on("player.video.started", function (event, data) {
  videoPlaying = true;
});

$(document).on("player.video.paused", function (event, data) {
  videoPlaying = false;
});
