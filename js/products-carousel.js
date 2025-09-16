document.addEventListener("DOMContentLoaded", function () {
  // Configuração do Products Carousel
  const carouselContainer = document.querySelector(".carousel-container");

  if (!carouselContainer) return;

  const productCards = document.querySelectorAll(".product-card");
  const prevArrow = document.querySelector(".products-carousel .arrow-prev");
  const nextArrow = document.querySelector(".products-carousel .arrow-next");
  const dots = document.querySelectorAll(".carousel-dots .dot");

  let currentPosition = 0;
  let cardWidth = 0;
  let cardsPerView = 0;
  let maxPosition = 0;
  let carouselInterval = null;

  // Inicializar carrossel
  function initCarousel() {
    if (productCards.length === 0) return;

    cardWidth = productCards[0].offsetWidth + 20; // width + margin
    cardsPerView = Math.max(
      1,
      Math.round(carouselContainer.offsetWidth / cardWidth)
    );
    maxPosition = Math.max(0, productCards.length - cardsPerView);

    // Garantir que a posição atual seja válida
    if (currentPosition > maxPosition) {
      currentPosition = maxPosition;
    }

    moveCarousel();
    updateDots();
  }

  // Função para mover o carrossel
  function moveCarousel() {
    const translateValue = -currentPosition * cardWidth;
    carouselContainer.style.transform = `translateX(${translateValue}px)`;
  }

  // Atualizar indicadores (dots)
  function updateDots() {
    if (dots.length === 0) return;

    const activeDot = Math.floor(currentPosition / cardsPerView);
    dots.forEach((dot, index) => {
      if (index === activeDot) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  // Próximo slide com looping
  function nextCarouselSlide() {
    if (currentPosition >= maxPosition) {
      // Se estiver no final, volta para o início (looping)
      currentPosition = 0;
    } else {
      currentPosition++;
    }
    moveCarousel();
    updateDots();
  }

  // Slide anterior com looping
  function prevCarouselSlide() {
    if (currentPosition <= 0) {
      // Se estiver no início, vai para o final (looping)
      currentPosition = maxPosition;
    } else {
      currentPosition--;
    }
    moveCarousel();
    updateDots();
  }

  // Navegação com as setas
  if (prevArrow) {
    prevArrow.addEventListener("click", prevCarouselSlide);
  }

  if (nextArrow) {
    nextArrow.addEventListener("click", nextCarouselSlide);
  }

  // Navegação com os dots
  if (dots.length > 0) {
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentPosition = index * cardsPerView;
        moveCarousel();
        updateDots();

        // Reiniciar autoplay
        restartAutoPlay();
      });
    });
  }

  // Ajustar no redimensionamento da janela
  window.addEventListener("resize", function () {
    initCarousel();
  });

  // Suporte para swipe em dispositivos móveis
  let startX = 0;
  let endX = 0;

  carouselContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    // Pausar autoplay durante o swipe
    pauseAutoPlay();
  });

  carouselContainer.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
    // Reiniciar autoplay após o swipe
    restartAutoPlay();
  });

  function handleSwipe() {
    const diffX = startX - endX;

    // Limiar de swipe (50px)
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swipe para a esquerda - próximo
        nextCarouselSlide();
      } else {
        // Swipe para a direita - anterior
        prevCarouselSlide();
      }
    }
  }

  // Controles de autoplay
  function startAutoPlay() {
    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(nextCarouselSlide, 4000);
  }

  function pauseAutoPlay() {
    if (carouselInterval) {
      clearInterval(carouselInterval);
      carouselInterval = null;
    }
  }

  function restartAutoPlay() {
    pauseAutoPlay();
    startAutoPlay();
  }

  // Pausar autoplay ao interagir com o carrossel
  carouselContainer.addEventListener("mouseenter", pauseAutoPlay);
  carouselContainer.addEventListener("mouseleave", startAutoPlay);

  // Pausar autoplay ao focar nos controles
  if (prevArrow) {
    prevArrow.addEventListener("focus", pauseAutoPlay);
    prevArrow.addEventListener("blur", startAutoPlay);
  }

  if (nextArrow) {
    nextArrow.addEventListener("focus", pauseAutoPlay);
    nextArrow.addEventListener("blur", startAutoPlay);
  }

  // Inicializar o carrossel
  initCarousel();

  // Iniciar autoplay
  startAutoPlay();
});
