import './style.css'

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden')
    })

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden')
      }
    })
  }

  // Contact form handling
  const contactForm = document.getElementById('contact-form')
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault()
      
      // Get form data
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)
      
      // Log form data (replace with actual form submission)
      console.log('Form submitted:', data)
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.')
      contactForm.reset()
    })
  }
})
