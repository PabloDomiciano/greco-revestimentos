// Funcionalidade para os filtros
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove a classe active de todos os botões
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Adiciona a classe active ao botão clicado
    this.classList.add("active");

    // Obtém o filtro selecionado
    const filter = this.getAttribute("data-filter");

    // Filtra os cards
    document.querySelectorAll(".card").forEach((card) => {
      if (filter === "todos") {
        card.classList.remove("hidden");
      } else {
        if (card.getAttribute("data-cidade") === filter) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      }
    });
  });
});

// Efeito visual nos botões do mapa
document.querySelectorAll(".btn-mapa").forEach((button) => {
  button.addEventListener("click", function () {
    // Efeito visual de clique
    this.style.transform = "scale(0.98)";
    setTimeout(() => {
      this.style.transform = "";
    }, 150);
  });
});
