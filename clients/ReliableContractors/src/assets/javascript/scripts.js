$(document).ready(function () {
  $('.mdb-select').materialSelect();
});

/* init Jarallax */
jarallax(document.querySelectorAll('.jarallax'), {
  disableParallax: /iPad|iPhone|iPod|Android/,
  disableVideo: /iPad|iPhone|iPod|Android/
});