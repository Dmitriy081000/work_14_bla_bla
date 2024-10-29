const headerBtn = document.querySelector('.header__btn');
const navList = document.querySelector('.header__navList');
const header = document.querySelector('.header');
const defaultOffset = 300;
let lastScroll = 0;

headerBtn.addEventListener('click', () => {
  headerBtn.classList.toggle('active');
  navList.classList.toggle('active');
})

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide')

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    header.classList.add('hide');
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove('hide');
  }
  lastScroll = scrollPosition();
});

//parallax for main paige
window.onload = function () {
  const parallax = document.querySelector('.hero')

  if (parallax) {
    const parallaxItem = document.querySelector('.parallax-item')
    const parallaxSpeed = 0.05

    let positionX = 0, positionY = 0,
      coordXprocent = 0, coordYprocent = 0

    function setMouseParallax() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;
      positionX = positionX + (distX * parallaxSpeed)
      positionY = positionY + (distY * parallaxSpeed)

      parallaxItem.style.cssText = `transform: translate(${positionX / 30}%, ${positionY / 30}%)`

      requestAnimationFrame(setMouseParallax)
    }

    setMouseParallax()
    parallax.addEventListener('mousemove', e => {
      const parallaxWidth = parallax.offsetWidth
      const parallaxHeight = parallax.offsetHeight

      const coordX = e.pageX - parallaxWidth / 2
      const coordY = e.pageY - parallaxHeight / 2

      coordXprocent = coordX / parallaxWidth * 100
      coordYprocent = coordY / parallaxHeight * 100
    })
  }
}

//main page slider
document.addEventListener('DOMContentLoaded', function () {
  let productsSlider = new Swiper('.products__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      768: {
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: ".products__slider-next",
      prevEl: ".products__slider-prev",
    }
  })
})
