// hero-slider.js
document.addEventListener("DOMContentLoaded", function () {
  const heroSlides = document.querySelectorAll(".hero-slider .slide");
  const prevArrow = document.querySelector(".slider-arrows .prev");
  const nextArrow = document.querySelector(".slider-arrows .next");

  if (heroSlides.length === 0 || !prevArrow || !nextArrow) return;

  let currentSlide = 0;
  let heroInterval;

  // Inicializar slider
  function initHeroSlider() {
    heroSlides.forEach((slide, index) => {
      slide.classList.remove("active");
      if (index === currentSlide) {
        slide.classList.add("active");
      }
    });
    startAutoplay();
  }

  // Ir para slide específico
  function goToSlide(index) {
    heroSlides[currentSlide].classList.remove("active");
    currentSlide = index;
    if (currentSlide < 0) currentSlide = heroSlides.length - 1;
    if (currentSlide >= heroSlides.length) currentSlide = 0;
    heroSlides[currentSlide].classList.add("active");
  }

  // Slide anterior
  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  // Próximo slide
  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  // Autoplay
  function startAutoplay() {
    clearInterval(heroInterval);
    heroInterval = setInterval(nextSlide, 5000);
  }

  // Event listeners para ambas as setas
  prevArrow.addEventListener("click", function () {
    prevSlide();
    startAutoplay();
  });

  nextArrow.addEventListener("click", function () {
    nextSlide();
    startAutoplay();
  });

  // Pausar autoplay no hover
  const heroSlider = document.querySelector(".hero-slider");
  if (heroSlider) {
    heroSlider.addEventListener("mouseenter", () => {
      clearInterval(heroInterval);
    });

    heroSlider.addEventListener("mouseleave", startAutoplay);
  }

  // Inicializar
  initHeroSlider();
});
