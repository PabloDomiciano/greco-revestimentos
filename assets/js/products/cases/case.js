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

// ==========================================================================
// PROJETOS RELACIONADOS ALEATÓRIOS
// ==========================================================================

// Base de dados de todos os cases disponíveis
const allCases = [
  // PISCINAS - Borda Argos
  {
    title: "Casa Moderna",
    category: "Piscina com Borda Argos",
    image: "img/case1/slide1.jpg",
    url: "case1.html",
    type: "piscina",
    folder: "borda-argos"
  },
  {
    title: "Elegância e Sofisticação",
    category: "Piscina com Borda Argos",
    image: "img/case2/slide1.jpg",
    url: "case2.html",
    type: "piscina",
    folder: "borda-argos"
  },
  
  // PISCINAS - Borda Creta
  {
    title: "Edifício Ilha Grande",
    category: "Piscina com Borda Creta",
    subtitle: "Construtora Recife",
    image: "img/case1/slide1.jpg",
    url: "case1.html",
    type: "piscina",
    folder: "borda-creta"
  },
  
  // PISCINAS - Borda Grécia
  {
    title: "Edifício Maison Heritage",
    category: "Piscina com Borda Grécia",
    subtitle: "Construtora A. Yoshii",
    image: "img/case1/slide4.jpg",
    url: "case1.html",
    type: "piscina",
    folder: "borda-grecia"
  },
  {
    title: "Edifício Cenarium Residence",
    category: "Piscina com Borda Grécia",
    image: "img/case2/slide3.jpg",
    url: "case2.html",
    type: "piscina",
    folder: "borda-grecia"
  },
  {
    title: "Condomínio Village Porto Rico",
    category: "Piscina com Borda Grécia",
    subtitle: "Construtora Mondonex",
    image: "img/case3/slide3.jpg",
    url: "case3.html",
    type: "piscina",
    folder: "borda-grecia"
  },
  
  // PISCINAS - Borda Hidra
  {
    title: "Edifício Maison Lumini",
    category: "Piscina com Borda Hidra",
    subtitle: "Construtora A. Yoshii",
    image: "img/case1/slide1.jpg",
    url: "case1.html",
    type: "piscina",
    folder: "borda-hidra"
  },
  {
    title: "Edifício Maison Lumini 2",
    category: "Piscina com Borda Hidra",
    subtitle: "Construtora A. Yoshii",
    image: "img/case2/slide1.jpg",
    url: "case2.html",
    type: "piscina",
    folder: "borda-hidra"
  },
  
  // PISCINAS - Borda Milos
  {
    title: "Country Club de Maringá",
    category: "Piscina com Borda Milos",
    image: "img/case1/slide4.jpeg",
    url: "case1.html",
    type: "piscina",
    folder: "borda-milos"
  },
  {
    title: "Edifício Maison Heritage",
    category: "Piscina com Borda Milos",
    subtitle: "Construtora A. Yoshii",
    image: "img/case2/slide2.jpg",
    url: "case2.html",
    type: "piscina",
    folder: "borda-milos"
  },
  
  // REVESTIMENTOS - Travertino
  {
    title: "Projeto Residencial Premium",
    category: "Revestimento Travertino",
    image: "img/case1/slide1.jpg",
    url: "case1.html",
    type: "revestimento",
    folder: "travertino"
  },
  {
    title: "Casa Moderna",
    category: "Revestimento Travertino",
    image: "img/case2/slide1.jpg",
    url: "case2.html",
    type: "revestimento",
    folder: "travertino"
  },
  
  // REVESTIMENTOS - Tijolinho Demolição
  {
    title: "Fachada Industrial",
    category: "Tijolinho Demolição",
    image: "img/case1/slide1.jpg",
    url: "case1.html",
    type: "revestimento",
    folder: "tijolinho-demolicao"
  },
  {
    title: "Ambiente Rústico",
    category: "Tijolinho Demolição",
    image: "img/case2/slide1.jpg",
    url: "case2.html",
    type: "revestimento",
    folder: "tijolinho-demolicao"
  },
  
  // REVESTIMENTOS - Ripado
  {
    title: "Design Contemporâneo",
    category: "Revestimento Ripado",
    image: "img/case1/slide1.jpg",
    url: "case1.html",
    type: "revestimento",
    folder: "ripado"
  },
  {
    title: "Elegância Minimalista",
    category: "Revestimento Ripado",
    image: "img/case2/slide1.jpg",
    url: "case2.html",
    type: "revestimento",
    folder: "ripado"
  },
  
  // REVESTIMENTOS - Placa
  {
    title: "Residência Moderna",
    category: "Revestimento Placa",
    image: "img/case1/slide1.jpg",
    url: "case1.html",
    type: "revestimento",
    folder: "placa"
  },
  {
    title: "Projeto Arquitetônico",
    category: "Revestimento Placa",
    image: "img/case2/slide1.jpg",
    url: "case2.html",
    type: "revestimento",
    folder: "placa"
  },
  
  // REVESTIMENTOS - Mosaico Etrusco
  {
    title: "Arte em Revestimento",
    category: "Mosaico Etrusco",
    image: "img/case1/slide1.jpg",
    url: "case1.html",
    type: "revestimento",
    folder: "mosaico-etrusco"
  },
  {
    title: "Design Sofisticado",
    category: "Mosaico Etrusco",
    image: "img/case2/slide1.jpg",
    url: "case2.html",
    type: "revestimento",
    folder: "mosaico-etrusco"
  },
  
  // REVESTIMENTOS - Moledo
  {
    title: "Textura Premium",
    category: "Revestimento Moledo",
    image: "img/case1/slide1.jpg",
    url: "case1.html",
    type: "revestimento",
    folder: "moledo"
  },
  {
    title: "Estilo Contemporâneo",
    category: "Revestimento Moledo",
    image: "img/case2/slide1.jpg",
    url: "case2.html",
    type: "revestimento",
    folder: "moledo"
  },
  
  // REVESTIMENTOS - Cobogó
  {
    title: "Ventilação e Design",
    category: "Revestimento Cobogó",
    image: "img/case1/slide1.jpg",
    url: "case1.html",
    type: "revestimento",
    folder: "cobogo"
  },
  {
    title: "Arquitetura Funcional",
    category: "Revestimento Cobogó",
    image: "img/case2/slide1.jpg",
    url: "case2.html",
    type: "revestimento",
    folder: "cobogo"
  },
  
  // REVESTIMENTOS - Tijolinho Travertino
  {
    title: "Combinação Perfeita",
    category: "Tijolinho Travertino",
    image: "img/case1/slide1.jpg",
    url: "case1.html",
    type: "revestimento",
    folder: "tijolinho-travertino"
  },
  {
    title: "Charme Natural",
    category: "Tijolinho Travertino",
    image: "img/case2/slide1.jpg",
    url: "case2.html",
    type: "revestimento",
    folder: "tijolinho-travertino"
  },
  
  // REVESTIMENTOS - Santorini
  {
    title: "Inspiração Mediterrânea",
    category: "Revestimento Santorini",
    image: "img/case1/slide1.jpg",
    url: "case1.html",
    type: "revestimento",
    folder: "santorini"
  },
  {
    title: "Beleza Grega",
    category: "Revestimento Santorini",
    image: "img/case2/slide1.jpg",
    url: "case2.html",
    type: "revestimento",
    folder: "santorini"
  },
];

// Função para embaralhar array (Fisher-Yates shuffle)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Função para obter o case atual da URL
function getCurrentCase() {
  const path = window.location.pathname;
  const parts = path.split('/');
  return {
    type: parts[parts.length - 3], // piscina ou revestimento
    product: parts[parts.length - 2], // ex: borda-grecia, travertino
    caseFile: parts[parts.length - 1] // ex: case1.html
  };
}

// Função para gerar projetos relacionados aleatórios
function generateRandomRelatedProjects() {
  const relatedGrid = document.querySelector('.related-grid');
  
  if (!relatedGrid) return;
  
  const currentCase = getCurrentCase();
  
  // Filtrar cases para excluir o atual
  const availableCases = allCases.filter(caseItem => {
    return !(caseItem.type === currentCase.type && 
             caseItem.folder === currentCase.product && 
             caseItem.url.includes(currentCase.caseFile));
  });
  
  // Embaralhar e pegar 3 cases aleatórios
  const shuffled = shuffleArray(availableCases);
  const selectedCases = shuffled.slice(0, 3);
  
  // Limpar o grid atual
  relatedGrid.innerHTML = '';
  
  // Gerar HTML para cada case selecionado
  selectedCases.forEach(caseItem => {
    const card = document.createElement('a');
    
    // Construir URL correta baseado no tipo atual e tipo do case
    let finalUrl = '';
    if (currentCase.type === caseItem.type) {
      // Mesmo tipo (piscina -> piscina ou revestimento -> revestimento)
      finalUrl = `../${caseItem.folder}/${caseItem.url}`;
    } else {
      // Tipo diferente (piscina -> revestimento ou revestimento -> piscina)
      finalUrl = `../../${caseItem.type}/${caseItem.folder}/${caseItem.url}`;
    }
    
    // Construir caminho da imagem
    let finalImage = '';
    if (currentCase.type === caseItem.type) {
      finalImage = `../${caseItem.folder}/${caseItem.image}`;
    } else {
      finalImage = `../../${caseItem.type}/${caseItem.folder}/${caseItem.image}`;
    }
    
    card.href = finalUrl;
    card.className = 'related-card';
    
    const subtitle = caseItem.subtitle ? `<p class="related-subtitle">${caseItem.subtitle}</p>` : '';
    
    card.innerHTML = `
      <div class="related-image">
        <img src="${finalImage}" alt="${caseItem.title}" />
        <div class="related-overlay">
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>
      <div class="related-info">
        <h3>${caseItem.title}</h3>
        <p>${caseItem.category}</p>
        ${subtitle}
      </div>
    `;
    
    // Aplicar animação
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = `all 0.6s ease ${selectedCases.indexOf(caseItem) * 0.1}s`;
    
    relatedGrid.appendChild(card);
    
    // Animar quando visível
    setTimeout(() => {
      fadeInObserver.observe(card);
    }, 100);
  });
}

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  generateRandomRelatedProjects();
});
