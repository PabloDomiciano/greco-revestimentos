// Funcionalidade para os filtros melhorados
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");
  const resultsCounter = document.getElementById("resultsCounter");
  const noResults = document.getElementById("noResults");

  let activeFilter = "todos";
  let searchTerm = "";

  // Função para filtrar e mostrar os cards
  function filterCards() {
    let visibleCount = 0;

    cards.forEach((card) => {
      const cidade = card.getAttribute("data-cidade");
      const regiao = card.getAttribute("data-regiao");
      const nomeFornecedor = card
        .querySelector(".nome-fornecedor")
        .textContent.toLowerCase();
      const cidadeText = card
        .querySelector(".cidade")
        .textContent.toLowerCase();

      // Verifica se o card corresponde ao filtro ativo
      let filterMatch = false;

      if (activeFilter === "todos") {
        filterMatch = true;
      } else if (activeFilter === cidade) {
        filterMatch = true;
      } else if (activeFilter === regiao) {
        filterMatch = true;
      }

      // Verifica se o card corresponde ao termo de busca
      const searchMatch =
        searchTerm === "" ||
        nomeFornecedor.includes(searchTerm) ||
        cidadeText.includes(searchTerm);

      // Mostra ou esconde o card baseado nos filtros
      if (filterMatch && searchMatch) {
        card.classList.remove("hidden");
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    // Atualiza o contador de resultados
    updateResultsCounter(visibleCount);

    // Mostra ou esconde a mensagem de nenhum resultado
    if (visibleCount === 0) {
      noResults.classList.remove("hidden");
    } else {
      noResults.classList.add("hidden");
    }
  }

  // Atualiza o contador de resultados
  function updateResultsCounter(count) {
    if (activeFilter === "todos" && searchTerm === "") {
      resultsCounter.textContent = `Mostrando todos os ${count} fornecedores`;
    } else if (activeFilter !== "todos" && searchTerm === "") {
      const filterText =
        document.querySelector(".filter-btn.active").textContent;
      resultsCounter.textContent = `${count} fornecedores em ${filterText}`;
    } else if (activeFilter === "todos" && searchTerm !== "") {
      resultsCounter.textContent = `${count} resultados para "${searchTerm}"`;
    } else {
      const filterText =
        document.querySelector(".filter-btn.active").textContent;
      resultsCounter.textContent = `${count} resultados para "${searchTerm}" em ${filterText}`;
    }
  }

  // Event listeners para os botões de filtro
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove a classe active de todos os botões
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Adiciona a classe active ao botão clicado
      this.classList.add("active");

      // Atualiza o filtro ativo
      activeFilter = this.getAttribute("data-filter");

      // Aplica os filtros
      filterCards();
    });
  });

  // Event listener para a busca
  searchInput.addEventListener("input", function () {
    searchTerm = this.value.toLowerCase().trim();
    filterCards();
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

  // Inicializa a contagem
  updateResultsCounter(cards.length);
});
