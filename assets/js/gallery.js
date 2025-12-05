// ========================================
// FILTROS DA GALERIA
// ========================================
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Get filter value
    const filterValue = button.getAttribute('data-filter');
    
    // Filter gallery items
    galleryItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      
      if (filterValue === 'all' || itemCategory === filterValue) {
        item.classList.remove('hide');
        item.classList.add('show');
        item.style.display = 'block';
      } else {
        item.classList.add('hide');
        item.classList.remove('show');
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  });
});

// ========================================
// MODAL DE VISUALIZAÇÃO
// ========================================
const modal = document.getElementById('galleryModal');
const modalImg = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeBtn = document.querySelector('.close-modal');
const prevBtn = document.querySelector('.prev-modal');
const nextBtn = document.querySelector('.next-modal');

let currentImageIndex = 0;
let currentProjectImages = [];
let currentProjectTitle = '';
let currentProjectDescription = '';

// Update visible images array based on current filter
function updateVisibleImages() {
  const visibleImages = Array.from(galleryItems).filter(item => {
    return item.style.display !== 'none' && !item.classList.contains('hidden-item');
  });
  return visibleImages;
}

// Função para obter todas as imagens de um projeto
function getProjectImages(caseUrl) {
  // O modal não deve navegar entre projetos, apenas fechar
  // Esta função foi removida pois o comportamento esperado é mostrar apenas a imagem clicada
  return [];
}

// Função para anexar event listeners aos botões de visualização
function attachViewButtonListeners() {
  const viewButtons = document.querySelectorAll('.view-btn');
  viewButtons.forEach((btn) => {
    // Remove listener anterior para evitar duplicação
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    
    newBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Redirecionar diretamente para a página do case
      const caseUrl = newBtn.getAttribute('href');
      if (caseUrl) {
        window.location.href = caseUrl;
      }
    });
  });
}

// Open modal - inicializar na primeira carga
attachViewButtonListeners();

// Close modal
closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (modal.style.display === 'block') {
    if (e.key === 'Escape') {
      closeModal();
    }
  }
});

// ========================================
// LOAD MORE BUTTON
// ========================================
const loadMoreBtn = document.querySelector('.load-more-btn');
let hiddenItems = document.querySelectorAll('.gallery-item.hidden-item');

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    // Mostrar todos os itens ocultos
    hiddenItems.forEach(item => {
      item.classList.remove('hidden-item');
      item.classList.add('show');
      item.style.display = 'block';
    });
    
    // Esconder o botão após carregar
    loadMoreBtn.style.display = 'none';
    
    // Atualizar event listeners
    attachViewButtonListeners();
  });
}

// ========================================
// SMOOTH FADE-IN ON PAGE LOAD
// ========================================
window.addEventListener('load', () => {
  modalImg.style.transition = 'opacity 0.3s ease';
});
