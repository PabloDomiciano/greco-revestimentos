// Funcionalidade para os filtros melhorados
document.addEventListener("DOMContentLoaded", function () {
  const cityFilter = document.getElementById("cityFilter");
  const supplierFilter = document.getElementById("supplierFilter");
  const cards = document.querySelectorAll(".card");
  const resultsCounter = document.getElementById("resultsCounter");
  const noResults = document.getElementById("noResults");

  let activeCityFilter = "todos";
  let activeSupplierFilter = "todos";

  // Função para normalizar strings para comparação
  function normalizeString(str) {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  }

  // Função para filtrar e mostrar os cards
  function filterCards() {
    let visibleCount = 0;

    cards.forEach((card) => {
      const cidade = card.getAttribute("data-cidade");
      let fornecedor = card.getAttribute("data-fornecedor");
      
      // Se não tem data-fornecedor, extrair do nome
      if (!fornecedor) {
        const nomeFornecedor = card.querySelector(".nome-fornecedor").textContent;
        fornecedor = normalizeString(nomeFornecedor);
      }

      // Verifica se o card corresponde ao filtro de cidade ativo
      const cityMatch = activeCityFilter === "todos" || activeCityFilter === cidade;
      
      // Verifica se o card corresponde ao filtro de fornecedor ativo
      let supplierMatch = activeSupplierFilter === "todos";
      if (!supplierMatch && fornecedor) {
        supplierMatch = fornecedor.includes(activeSupplierFilter) || 
                       activeSupplierFilter.includes(fornecedor) ||
                       normalizeString(fornecedor) === normalizeString(activeSupplierFilter);
      }

      // Mostra ou esconde o card baseado nos filtros
      if (cityMatch && supplierMatch) {
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
    const cityText = cityFilter.options[cityFilter.selectedIndex].text;
    const supplierText = supplierFilter.options[supplierFilter.selectedIndex].text;
    
    if (activeCityFilter === "todos" && activeSupplierFilter === "todos") {
      resultsCounter.textContent = `Mostrando todos os ${count} lojistas`;
    } else if (activeCityFilter !== "todos" && activeSupplierFilter === "todos") {
      resultsCounter.textContent = `${count} lojistas em ${cityText}`;
    } else if (activeCityFilter === "todos" && activeSupplierFilter !== "todos") {
      resultsCounter.textContent = `${count} lojas ${supplierText}`;
    } else {
      resultsCounter.textContent = `${count} lojas ${supplierText} em ${cityText}`;
    }
  }

  // Event listener para o dropdown de cidade
  cityFilter.addEventListener("change", function () {
    activeCityFilter = this.value;
    filterCards();
  });

  // Event listener para o dropdown de fornecedor
  supplierFilter.addEventListener("change", function () {
    activeSupplierFilter = this.value;
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
