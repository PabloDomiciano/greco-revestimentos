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
let visibleImages = [];

// Update visible images array based on current filter
function updateVisibleImages() {
  visibleImages = Array.from(galleryItems).filter(item => {
    return item.style.display !== 'none';
  });
}

// Open modal
const viewButtons = document.querySelectorAll('.view-btn');
viewButtons.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const galleryItem = btn.closest('.gallery-item');
    const img = galleryItem.querySelector('.gallery-image img');
    const title = galleryItem.querySelector('.gallery-info h3').textContent;
    const description = galleryItem.querySelector('.gallery-info p').textContent;
    
    // Update visible images
    updateVisibleImages();
    
    // Find current index in visible images
    currentImageIndex = visibleImages.indexOf(galleryItem);
    
    // Set modal content
    modalImg.src = img.src;
    modalImg.alt = title;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
});

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

// Navigate modal - Previous
prevBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + visibleImages.length) % visibleImages.length;
  updateModalContent();
});

// Navigate modal - Next
nextBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % visibleImages.length;
  updateModalContent();
});

function updateModalContent() {
  const currentItem = visibleImages[currentImageIndex];
  const img = currentItem.querySelector('.gallery-image img');
  const title = currentItem.querySelector('.gallery-info h3').textContent;
  const description = currentItem.querySelector('.gallery-info p').textContent;
  
  // Fade out effect
  modalImg.style.opacity = '0';
  
  setTimeout(() => {
    modalImg.src = img.src;
    modalImg.alt = title;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    
    // Fade in effect
    modalImg.style.opacity = '1';
  }, 200);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (modal.style.display === 'block') {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      nextBtn.click();
    }
  }
});

// ========================================
// LOAD MORE BUTTON (OPCIONAL)
// ========================================
const loadMoreBtn = document.querySelector('.load-more-btn');

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    // Adicionar lógica para carregar mais imagens
    // Por enquanto, apenas um exemplo de feedback
    loadMoreBtn.textContent = 'Carregando...';
    
    setTimeout(() => {
      loadMoreBtn.textContent = 'Carregar Mais Projetos';
      // Aqui você pode adicionar mais itens à galeria dinamicamente
    }, 1000);
  });
}

// ========================================
// TOUCH/SWIPE SUPPORT FOR MOBILE
// ========================================
let touchStartX = 0;
let touchEndX = 0;

modalImg.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

modalImg.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const swipeThreshold = 50;
  
  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe left - next image
    nextBtn.click();
  }
  
  if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe right - previous image
    prevBtn.click();
  }
}

// ========================================
// SMOOTH FADE-IN ON PAGE LOAD
// ========================================
window.addEventListener('load', () => {
  modalImg.style.transition = 'opacity 0.3s ease';
});

// Initialize visible images on load
updateVisibleImages();
