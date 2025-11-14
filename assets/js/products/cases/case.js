// ==========================================================================
// CASE PAGE - SLIDER FUNCTIONALITY
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".case-slider");
  const slides = document.querySelectorAll(".case-slide");
  const prevBtn = document.querySelector(".case-slider-arrow.prev");
  const nextBtn = document.querySelector(".case-slider-arrow.next");
  const dots = document.querySelectorAll(".case-slider-dots .dot");

  let currentSlide = 0;
  let autoPlayInterval;
  const autoPlayDelay = 5000; // 5 segundos

  // Função para mostrar slide específico
  function showSlide(index) {
    // Remover classe active de todos os slides
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    // Adicionar classe active no slide atual
    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
  }

  // Próximo slide
  function nextSlide() {
    let next = currentSlide + 1;
    if (next >= slides.length) {
      next = 0;
    }
    showSlide(next);
  }

  // Slide anterior
  function prevSlide() {
    let prev = currentSlide - 1;
    if (prev < 0) {
      prev = slides.length - 1;
    }
    showSlide(prev);
  }

  // Auto-play
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // Event listeners para setas
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      stopAutoPlay();
      startAutoPlay(); // Reinicia auto-play
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      stopAutoPlay();
      startAutoPlay(); // Reinicia auto-play
    });
  }

  // Event listeners para dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      stopAutoPlay();
      startAutoPlay(); // Reinicia auto-play
    });
  });

  // Navegação por teclado
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
      stopAutoPlay();
      startAutoPlay();
    } else if (e.key === "ArrowRight") {
      nextSlide();
      stopAutoPlay();
      startAutoPlay();
    }
  });

  // Touch/Swipe support para mobile
  let touchStartX = 0;
  let touchEndX = 0;

  if (slider) {
    slider.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  }

  function handleSwipe() {
    const swipeThreshold = 50; // Mínimo de pixels para considerar swipe

    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left - próximo slide
      nextSlide();
      stopAutoPlay();
      startAutoPlay();
    }

    if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right - slide anterior
      prevSlide();
      stopAutoPlay();
      startAutoPlay();
    }
  }

  // Pausar auto-play quando mouse estiver sobre o slider
  if (slider) {
    slider.addEventListener("mouseenter", stopAutoPlay);
    slider.addEventListener("mouseleave", startAutoPlay);
  }

  // Iniciar auto-play
  if (slides.length > 1) {
    startAutoPlay();
  }

  // Garantir que o primeiro slide está ativo
  showSlide(0);
});

// ==========================================================================
// SMOOTH SCROLL
// ==========================================================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  });
});

// ==========================================================================
// LAZY LOADING DE IMAGENS
// ==========================================================================

if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      }
    });
  });

  // Observar todas as imagens com data-src
  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// ==========================================================================
// ANIMAÇÕES AO SCROLL
// ==========================================================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Aplicar animação aos elementos
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".highlight-item, .credit-item, .related-card"
  );

  animatedElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `all 0.6s ease ${index * 0.1}s`;
    fadeInObserver.observe(el);
  });
});
