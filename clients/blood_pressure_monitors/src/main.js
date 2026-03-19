import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('[data-nav-toggle]')
  const mobileNav = document.querySelector('[data-nav-mobile]')

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true'
      navToggle.setAttribute('aria-expanded', String(!isExpanded))
      mobileNav.classList.toggle('hidden')
    })
  }
})
