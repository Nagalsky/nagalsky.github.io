import EmblaCarousel from 'embla-carousel'
import './style.css'

const mainEl = document.getElementById('embla-main')

if (mainEl) {
  EmblaCarousel(mainEl, {
    loop: false,
    align: 'start',
    dragFree: false,
  })
}

const testimonialsEl = document.getElementById('embla-testimonials')
const testimonialDotsEl = document.getElementById('testimonials-dots')

if (testimonialsEl && testimonialDotsEl) {
  const testimonialsCarousel = EmblaCarousel(testimonialsEl, {
    loop: false,
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps',
  })

  const snapCount = testimonialsCarousel.scrollSnapList().length
  const dots = Array.from({ length: snapCount }, (_, i) => {
    const dot = document.createElement('button')
    dot.classList.add('size-2.5', 'md:size-3', 'rounded-full', 'transition-colors')
    testimonialDotsEl.appendChild(dot)
    dot.addEventListener('click', () => testimonialsCarousel.scrollTo(i))
    return dot
  })

  const updateDots = () => {
    const selected = testimonialsCarousel.selectedScrollSnap()
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-violet-900', i === selected)
      dot.classList.toggle('bg-gray-400', i !== selected)
    })
  }

  updateDots()
  testimonialsCarousel.on('select', updateDots)
}
