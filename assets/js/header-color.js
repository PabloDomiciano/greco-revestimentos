/**
 * HEADER COLOR CHANGER
 * Muda a cor do header baseado na section visível
 */

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  
  // Configuração de cores por section
  const sectionColors = {
    'home': 'light',           // Hero - fundo claro
    'services': 'gray',        // Services - cinza claro
    'products': 'dark',        // Products carousel - escuro
    'about': 'light',          // About - branco
    'features': 'gray',        // Features - cinza claro
    'cta': 'dark',             // CTA - escuro
  };
  
  // Função para verificar qual section está visível
  function updateHeaderColor() {
    const sections = document.querySelectorAll('section[id], .products-section, .features-section, .cta');
    let currentSection = 'home'; // padrão
    
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const headerHeight = header.offsetHeight;
      
      // Verifica se a section está no topo da viewport (considerando altura do header)
      if (rect.top <= headerHeight && rect.bottom > headerHeight) {
        // Pega o ID da section ou classe específica
        if (section.id) {
          currentSection = section.id;
        } else if (section.classList.contains('products-section')) {
          currentSection = 'products';
        } else if (section.classList.contains('features-section')) {
          currentSection = 'features';
        } else if (section.classList.contains('cta')) {
          currentSection = 'cta';
        }
      }
    });
    
    // Remove todas as classes de cor
    header.classList.remove('header-light', 'header-gray', 'header-dark');
    
    // Adiciona a classe correspondente
    const colorClass = sectionColors[currentSection] || 'light';
    header.classList.add(`header-${colorClass}`);
  }
  
  // Atualiza no scroll
  window.addEventListener('scroll', updateHeaderColor);
  
  // Atualiza na carga inicial
  updateHeaderColor();
  
  // Atualiza ao redimensionar (para garantir)
  window.addEventListener('resize', updateHeaderColor);
});
