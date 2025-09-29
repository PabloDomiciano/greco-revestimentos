// Filtro de produtos
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filtro-btn");
  const productCards = document.querySelectorAll(".card");

  // Função para filtrar produtos
  function filterProducts(category) {
    productCards.forEach((card) => {
      if (category === "todos") {
        card.classList.remove("hidden");
        card.classList.add("visible");
      } else {
        if (card.dataset.categoria === category) {
          card.classList.remove("hidden");
          card.classList.add("visible");
        } else {
          card.classList.add("hidden");
          card.classList.remove("visible");
        }
      }
    });
  }

  // Event listeners para os botões de filtro
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove a classe active de todos os botões
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Adiciona a classe active ao botão clicado
      this.classList.add("active");

      // Filtra os produtos
      const category = this.dataset.categoria;
      filterProducts(category);
    });
  });

  // Filtro inicial - mostrar todos os produtos
  filterProducts("todos");
});
