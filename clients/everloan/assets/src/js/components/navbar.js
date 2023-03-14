;(() => {
	const navbar = document.querySelector('.navbar')

	if (navbar) {
		window.onscroll = function () {
			if (window.pageYOffset > 1) {
				navbar.classList.add('navbar--scroll')
			} else {
				navbar.classList.remove('navbar--scroll')
			}
		}
	}
})()
