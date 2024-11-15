window.addEventListener('DOMContentLoaded', function () {
  let showButton = document.querySelector('.show-all-btn')
  let container = document.querySelector('.swiper-wrapper')
  let swiper

  function initSwiper() {
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      slidesPerView: 'auto',

      loop: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
  const breakpoint = window.matchMedia('(min-width: 768px)')
  function destroySwiper() {
    if (swiper) {
      swiper.destroy()
    }
  }

  function handleResize() {
    if (breakpoint.matches) {
      destroySwiper()
    } else {
      initSwiper()
    }
  }
  handleResize()

  breakpoint.addEventListener('change', handleResize)

  showButton.addEventListener('click', function () {
    this.textContent = this.classList.contains('show-all--rotate') ? 'Скрыть' : 'Показать все'
    this.classList.toggle('show-all--rotate')
    container.classList.toggle('swiper--opened')
    container.classList.toggle('swiper-wrapper--margin-bottom')
    this.classList.toggle('show-less--rotate')
  })
})
