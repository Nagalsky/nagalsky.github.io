;(() => {
	$('path, circle').hover(function (e) {
		$('#svg-map-tooltip').css('display', 'block')
		$('#svg-map-tooltip').html($(this).data('info'))
	})

	$('path, circle').mouseleave(function (e) {
		$('#svg-map-tooltip').css('display', 'none')
	})

	$(document)
		.mousemove(function (e) {
			$('#svg-map-tooltip').css(
				'top',
				e.pageY - $('#svg-map-tooltip').height() - 30
			)
			$('#svg-map-tooltip').css(
				'left',
				e.pageX - $('#svg-map-tooltip').width() / 2
			)
		})
		.mouseover()

	var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
	if (ios) {
		$('a').on('click touchend', function () {
			var link = $(this).attr('href')
			window.open(link, '_blank')
			return false
		})
	}
})()
