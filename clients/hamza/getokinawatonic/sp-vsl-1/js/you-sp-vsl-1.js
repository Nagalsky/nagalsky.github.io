// var muteStatus = 1;

// var c = 0;

// var nw = true;

// var tag = document.createElement("script");

// tag.src = "//www.youtube.com/iframe_api";

// var firstScriptTag = document.getElementsByTagName("script")[0];

// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var player;

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player("player", {
//     videoId: youtubeId,

//     playerVars: {
//       autoplay: vplay,

//       cc_load_policy: 0,

//       controls: 0,

//       disablekb: 1,

//       fs: 0,

//       playsinline: 1,

//       modestbranding: 1,

//       iv_load_policy: 3,

//       rel: 0,

//       showinfo: 0,

//       host: "https://www.youtube.com",
//     },

//     events: {
//       onReady: onPlayerReady,

//       onStateChange: onPlayerStateChange,

//       onError: onPlayerError,
//     },
//   });
// }

// function mutevid() {
//   player.mute();

//   player.setVolume(0);

//   muteStatus = 1;
// }

// function unmutevid() {
//   player.unMute();

//   player.setVolume(100);

//   muteStatus = 0;
// }

// function resetvid() {
//   $("#loadingVideo").hide();

//   $(".cov").show();

//   player.pauseVideo();

//   unmutevid();

//   player.seekTo(0);
// }

// function onPlayerReady() {
//   mutevid();

//   if (nw) {
//     player.seekTo(0);

//     nw = false;
//   }

//   player.playVideo();

//   if (na == 1) {
//     resetvid();
//   }

//   if (sc == 1) {
//     updateTimerDisplay();

//     updateProgressBar();

//     time_update_interval = setInterval(function () {
//       updateTimerDisplay();

//       updateProgressBar();
//     }, 1000);
//   }

//   CONSOLE.LOG("READY");
// }

// function onPlayerError(e) {
//   player.stopVideo();

//   $(".cov").css("background-image", "url('/sp-vsl-1/images/video-cover.png");

//   $(".cov").show();

//   $("#loadingVideo").hide();

//   $("#cfs").hide();
// }

// function onPlayerStateChange(e) {
//   console.log("State Change");

//   console.log(e);

//   if (e.data === -1) {
//     c++;

//     if (c > 1) {
//       setTimeout(function () {
//         if (player.getPlayerState() === -1) {
//           resetvid();
//         }
//       }, 3500);
//     }
//   }

//   if (e.data === 1) {
//     $("#loadingVideo").hide();

//     $(".cov").hide();

//     $(".cov").css("background-image", "url('/sp-vsl-1/images/video-cover.png");

//     if (muteStatus == 1) {
//       $(".unmute").show();
//     } else {
//       $(".unmute").hide();

//       unmutevid();
//     }
//   }

//   if (e.data === 2) {
//     $("#loadingVideo").hide();

//     $("#cfs").hide();

//     $(".cov").show();

//     if (muteStatus == 1) {
//       $(".unmute").show();
//     } else {
//       $(".unmute").hide();

//       unmutevid();
//     }
//   }

//   if (e.data === 3) {
//   }

//   if (e.data === 0 || e.data === 5) {
//     $("#loadingVideo").hide();

//     $("#cfs").hide();

//     $(".cov").css("background-image", "url('/sp-vsl-1/images/video-cover.png");

//     $(".cov").show();
//   }
// }

// $(".cov").click(function () {
//   player.playVideo();

//   $(".cov").hide();
// });

// $(".covall").click(function () {
//   player.pauseVideo();

//   $("#cfs").hide();

//   $(".cov").show();
// });

// $("#cfs").click(function () {
//   unmutevid();

//   $("#cfs").hide();
// });

// $("cfsm").click(function () {
//   player.playVideo();

//   $("#cfs").hide();
// });

// function updateTimerDisplay() {
//   $("#current-time").text(formatTime(player.getCurrentTime()));

//   $("#duration").text(formatTime(player.getDuration()));
// }

// function formatTime(time) {
//   time = Math.round(time);

//   var minutes = Math.floor(time / 60),
//     seconds = time - minutes * 60;

//   seconds = seconds < 10 ? "0" + seconds : seconds;

//   return minutes + ":" + seconds;
// }

// $("#progress-bar").on("mouseup touchend", function (e) {
//   var newTime = player.getDuration() * (e.target.value / 100);

//   player.seekTo(newTime);
// });

// function updateProgressBar() {
//   $("#progress-bar").val(
//     (player.getCurrentTime() / player.getDuration()) * 100
//   );
// }

// function preload(arrayOfImages) {
//   $(arrayOfImages).each(function () {
//     $("<img />").attr("src", this).appendTo("body").css("display", "none");
//   });
// }
