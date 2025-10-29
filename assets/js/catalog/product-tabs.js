document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 160;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  });
});

document.querySelectorAll(".tech-tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    const targetId = this.getAttribute("data-tab");
    document
      .querySelectorAll(".tech-tab")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".tech-content")
      .forEach((c) => c.classList.remove("active"));
    this.classList.add("active");
    document.getElementById(targetId).classList.add("active");
  });
});

// Accordion de medidas
document.querySelectorAll(".measure-header").forEach((header) => {
  header.addEventListener("click", function () {
    const cell = this.closest(".measure-row");
    const isActive = cell.classList.contains("active");

    // Fecha todos os outros itens
    document.querySelectorAll(".measure-row").forEach((r) => {
      r.classList.remove("active");
    });

    // Abre o item clicado se não estava ativo
    if (!isActive) {
      cell.classList.add("active");
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".case-card, .info-item").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);
});
