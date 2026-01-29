import './style.css'


document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('[data-accordion]')

	accordions.forEach(accordion => {
		const items = Array.from(
			accordion.querySelectorAll('[data-accordion-item]'),
		)

		if (!items.length) return

		const hasExplicitOpen = items.some(
			item => item.getAttribute('data-accordion-open') === 'true',
		)

		items.forEach((item, index) => {
			const trigger = item.querySelector('[data-accordion-trigger]')
			if (!trigger) return

			const isInitiallyOpen =
				item.getAttribute('data-accordion-open') === 'true' ||
				(!hasExplicitOpen && index === 0)

			item.setAttribute('data-accordion-open', isInitiallyOpen ? 'true' : 'false')

			trigger.addEventListener('click', () => {
				const isOpen = item.getAttribute('data-accordion-open') === 'true'

				if (isOpen) {
					item.setAttribute('data-accordion-open', 'false')
				} else {
					items.forEach(otherItem => {
						otherItem.setAttribute(
							'data-accordion-open',
							otherItem === item ? 'true' : 'false',
						)
					})
				}
			})
		})
	})
})
