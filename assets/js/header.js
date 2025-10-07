// Função para o menu móvel
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");

      // Alternar ícone
      const icon = this.querySelector("i");
      if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });

    // Fechar menu ao clicar em links
    const links = navLinks.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        const icon = mobileMenuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      });
    });
  }
}

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  setupMobileMenu();

  // Restaurar tamanho do logo se salvo
  const savedSize = localStorage.getItem("logoSize");
  if (savedSize) {
    const logo = document.querySelector(".logo-image");
    if (logo) {
      logo.style.width = `${savedSize}px`;
    }
  }
});
