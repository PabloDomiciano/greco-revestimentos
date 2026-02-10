// Banco de dados de todos os cases disponíveis
const casesData = {
  piscina: [
    {
      id: 'borda-hidra-case1',
      title: 'Edifício Maison Lumini',
      subtitle: 'Borda Hidra - por Construtora A. Yoshii',
      link: '../borda-hidra/case1.html',
      image: '../borda-hidra/img/case1/slide1.jpg',
      category: 'piscina'
    },
    {
      id: 'borda-hidra-case2',
      title: 'Projeto Integrado: Borda Hidra e Grelha',
      subtitle: 'Solução completa para piscina',
      link: '../borda-hidra/case2.html',
      image: '../borda-hidra/img/case2/slide1.jpg',
      category: 'piscina'
    },
    {
      id: 'borda-argos-case1',
      title: 'Linha Argos Piscinas',
      subtitle: 'Borda Argos',
      link: '../borda-argos/case1.html',
      image: '../../../../../assets/images/catalog/piscinas/borda-argos/banner1.jpg',
      category: 'piscina'
    },
    {
      id: 'borda-creta-case1',
      title: 'Edifício Ilha Grande',
      subtitle: 'Borda Creta - por Construtora Recife',
      link: '../borda-creta/case1.html',
      image: '../borda-creta/img/case1/slide1.png',
      category: 'piscina'
    },
    {
      id: 'borda-grecia-case1',
      title: 'Edifício Maison Heritage',
      subtitle: 'Borda Grécia - por Construtora A. Yoshii',
      link: '../borda-grecia/case1.html',
      image: '../borda-grecia/img/case1/slide1.jpg',
      category: 'piscina'
    },
    {
      id: 'borda-grecia-case2',
      title: 'Edifício Cenarium Residence',
      subtitle: 'Borda Grécia',
      link: '../borda-grecia/case2.html',
      image: '../borda-grecia/img/case2/slide1.jpg',
      category: 'piscina'
    },
    {
      id: 'borda-grecia-case3',
      title: 'Condomínio Village Porto Rico',
      subtitle: 'Borda Grécia - por Construtora Mondonex',
      link: '../borda-grecia/case3.html',
      image: '../borda-grecia/img/case3/slide1.jpg',
      category: 'piscina'
    },
    {
      id: 'borda-milos-case1',
      title: 'Country Club de Maringá',
      subtitle: 'Borda Milos',
      link: '../borda-milos/case1.html',
      image: '../borda-milos/img/case1/slide1.JPG',
      category: 'piscina'
    },
    {
      id: 'borda-milos-case2',
      title: 'Edifício Maison Heritage',
      subtitle: 'Borda Milos - por Construtora A. Yoshii',
      link: '../borda-milos/case2.html',
      image: '../borda-milos/img/case2/slide1.JPG',
      category: 'piscina'
    },
    {
      id: 'piso-etrusco-case1',
      title: 'Piso Etrusco em Ambiente Moderno',
      subtitle: 'Piso Etrusco',
      link: '../piso-etrusco/case1.html',
      image: '../piso-etrusco/img/case1/slide1.jpeg',
      category: 'piscina'
    },
    {
      id: 'piso-generico-case1',
      title: 'Piso m² em Ambiente Moderno',
      subtitle: 'Piso para Piscina',
      link: '../piso-generico/case1.html',
      image: '../piso-generico/img/case1/slide1.jpeg',
      category: 'piscina'
    }
  ],
  revestimento: [
    {
      id: 'arezo-case1',
      title: 'Casa Moderna com Arezo',
      subtitle: 'Revestimentos',
      link: '../arezo/case1.html',
      image: '../arezo/img/case1/slide1.jpg',
      category: 'revestimento'
    },
    {
      id: 'cobogo-case1',
      title: 'Projeto Integrado: Cobogó e Etrusco',
      subtitle: 'Casa AG - Revestimentos',
      link: '../cobogo/case1.html',
      image: '../cobogo/img/case1/slide1.jpeg',
      category: 'revestimento'
    },
    {
      id: 'delfos-case1',
      title: 'Casa Moderna com Delfos',
      subtitle: 'Revestimentos',
      link: '../delfos/case1.html',
      image: '../delfos/img/case1/slide1.jpeg',
      category: 'revestimento'
    },
    {
      id: 'gravata-case1',
      title: 'Casa Moderna com Gravata',
      subtitle: 'Revestimentos',
      link: '../gravata/case1.html',
      image: '../gravata/img/case1/slide1.JPEG',
      category: 'revestimento'
    },
    {
      id: 'moledo-case1',
      title: 'Casa Paranapanema',
      subtitle: 'Revestimento Moledo',
      link: '../moledo/case1.html',
      image: '../moledo/img/case1/slide1.jpeg',
      category: 'revestimento'
    },
    {
      id: 'moledo-case2',
      title: 'Revestimento Moledo Piscinas Igui',
      subtitle: 'Revestimento Moledo',
      link: '../moledo/case2.html',
      image: '../moledo/img/case2/slide1.jpeg',
      category: 'revestimento'
    },
    {
      id: 'mosaico-etrusco-case1',
      title: 'Casa Moderna com Mosaico Etrusco',
      subtitle: 'Revestimento Etrusco + Tijolinho Travertino',
      link: '../mosaico-etrusco/case1.html',
      image: '../mosaico-etrusco/img/case1/slide1.jpg',
      category: 'revestimento'
    },
    {
      id: 'placa-case1',
      title: 'Placa em Ambiente Moderno',
      subtitle: 'Revestimentos',
      link: '../placa/case1.html',
      image: '../placa/img/case1/slide1.jpg',
      category: 'revestimento'
    },
    {
      id: 'placa-case2',
      title: 'Casa Moderna com Placa',
      subtitle: 'Revestimentos',
      link: '../placa/case2.html',
      image: '../placa/img/case2/slide1.jpeg',
      category: 'revestimento'
    },
    {
      id: 'salonica-case1',
      title: 'Casa Moderna com Salônica',
      subtitle: 'Revestimentos',
      link: '../salonica/case1.html',
      image: '../salonica/img/case1/slide1.jpg',
      category: 'revestimento'
    },
    {
      id: 'salonica-case2',
      title: 'Painel Salônica',
      subtitle: 'Revestimentos',
      link: '../salonica/case2.html',
      image: '../salonica/img/case2/slide1.jpeg',
      category: 'revestimento'
    },
    {
      id: 'tebas-case1',
      title: 'Casa Moderna com Tebas',
      subtitle: 'Revestimentos',
      link: '../tebas/case1.html',
      image: '../tebas/img/case1/slide1.jpeg',
      category: 'revestimento'
    },
    {
      id: 'tijolinho-demolicao-case1',
      title: 'Casa Moderna com Tijolinho Demolição',
      subtitle: 'Revestimentos',
      link: '../tijolinho-demolicao/case1.html',
      image: '../tijolinho-demolicao/img/case1/slide1.jpeg',
      category: 'revestimento'
    },
    {
      id: 'tijolinho-travertino-case1',
      title: 'Piscinas Igui Maringá',
      subtitle: 'Tijolinho Travertino',
      link: '../tijolinho-travertino/case1.html',
      image: '../tijolinho-travertino/img/case1/slide1.jpeg',
      category: 'revestimento'
    },
    {
      id: 'tijolinho-travertino-case2',
      title: 'Piscinas Igui Cianorte',
      subtitle: 'Tijolinho Travertino',
      link: '../tijolinho-travertino/case2.html',
      image: '../tijolinho-travertino/img/case2/slide1.jpeg',
      category: 'revestimento'
    },
    {
      id: 'travertino-case1',
      title: 'Travertino em Ambiente Externo e Interno',
      subtitle: 'Revestimentos',
      link: '../travertino/case1.html',
      image: '../travertino/img/case1/slide1.jpeg',
      category: 'revestimento'
    },
    {
      id: 'veria-case1',
      title: 'Véria em Ambiente Moderno',
      subtitle: 'Revestimentos',
      link: '../veria/case1.html',
      image: '../veria/img/case1/slide1.jpeg',
      category: 'revestimento'
    },
    {
      id: 'volos-case1',
      title: 'Casa Moderna com Volos',
      subtitle: 'Revestimentos',
      link: '../volos/case1.html',
      image: '../volos/img/case1/slide1.jpeg',
      category: 'revestimento'
    }
  ]
};

// Função para obter 3 cases aleatórios, excluindo o case atual
function getRandomRelatedCases(currentCaseId, category, count = 3) {
  const availableCases = casesData[category].filter(c => c.id !== currentCaseId);
  const shuffled = availableCases.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Função para renderizar os casos relacionados
function renderRelatedCases(currentCaseId, category) {
  const relatedGrid = document.querySelector('.related-projects .related-grid');
  if (!relatedGrid) return;

  const cases = getRandomRelatedCases(currentCaseId, category);
  
  relatedGrid.innerHTML = cases.map(caseItem => `
    <a href="${caseItem.link}" class="related-card">
      <div class="related-image">
        <img src="${caseItem.image}" alt="${caseItem.title}" />
        <div class="related-overlay">
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>
      <div class="related-info">
        <h3>${caseItem.title}</h3>
        <p>${caseItem.subtitle}</p>
      </div>
    </a>
  `).join('');
}
