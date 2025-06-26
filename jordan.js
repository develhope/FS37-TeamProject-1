document.addEventListener("DOMContentLoaded", function () {
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const slides = document.querySelectorAll(".slide");
  const carouselTextWrapper = document.querySelector(".carousel-text-wrapper");
  const totalSlides = slides.length;

  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = slides[0].offsetWidth;
    const offset = -currentIndex * slideWidth;
    carouselTextWrapper.style.transform = `translateX(${offset}px)`;
  }

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  });

  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);

  updateCarousel();

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }, 5000);
});
const products = [
  {
    genere: "uomo",
    prezzo: 75,
    scontiEOfferte: "nessuno",
    colore: "nero",
    collezioni: "Jordan Editions",
    altezzaScarpa: "taglio basso",
    sport: "lifestyle",
  },
  {
    genere: "donna",
    prezzo: 145,
    scontiEOfferte: "outlet",
    colore: "blu",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "profilo medio",
    sport: "performance",
  },
  {
    genere: "unisex",
    prezzo: 230,
    scontiEOfferte: "nessuno",
    colore: "marrone",
    collezioni: "Jordan Editions",
    altezzaScarpa: "taglio alto",
    sport: "basketball",
  },
  {
    kids: "bambina",
    prezzo: 52,
    scontiEOfferte: "outlet",
    colore: "verde",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio basso",
    sport: "golf",
  },
  {
    kids: "bambino",
    prezzo: 189,
    scontiEOfferte: "nessuno",
    colore: "grigio",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "danza",
  },
  {
    kids: "bambina",
    prezzo: 300,
    scontiEOfferte: "outlet",
    colore: "arancione",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio alto",
    sport: "lifestyle",
  },
  {
    kids: "bambino",
    prezzo: 95,
    scontiEOfferte: "nessuno",
    colore: "rosa",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "performance",
  },
  {
    genere: "donna",
    prezzo: 128,
    scontiEOfferte: "outlet",
    colore: "viola",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio basso",
    sport: "basketball",
  },
  {
    genere: "unisex",
    prezzo: 215,
    scontiEOfferte: "nessuno",
    colore: "rosso",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "golf",
  },
  {
    genere: "uomo",
    prezzo: 60,
    scontiEOfferte: "outlet",
    colore: "bianco",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio alto",
    sport: "danza",
  },
  {
    genere: "donna",
    prezzo: 179,
    scontiEOfferte: "nessuno",
    colore: "giallo",
    collezioni: "Jordan Editions",
    altezzaScarpa: "taglio basso",
    sport: "lifestyle",
  },
  {
    genere: "unisex",
    prezzo: 132,
    scontiEOfferte: "outlet",
    colore: "nero",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "profilo medio",
    sport: "performance",
  },
  {
    genere: "uomo",
    prezzo: 247,
    scontiEOfferte: "nessuno",
    colore: "blu",
    collezioni: "Jordan Editions",
    altezzaScarpa: "taglio alto",
    sport: "basketball",
  },
  {
    kids: "bambina",
    prezzo: 85,
    scontiEOfferte: "outlet",
    colore: "marrone",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio basso",
    sport: "golf",
  },
  {
    kids: "bambino",
    prezzo: 158,
    scontiEOfferte: "nessuno",
    colore: "verde",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "danza",
  },
  {
    genere: "uomo",
    prezzo: 99,
    scontiEOfferte: "outlet",
    colore: "grigio",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio alto",
    sport: "lifestyle",
  },
  {
    genere: "donna",
    prezzo: 212,
    scontiEOfferte: "nessuno",
    colore: "arancione",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "performance",
  },
  {
    genere: "unisex",
    prezzo: 141,
    scontiEOfferte: "outlet",
    colore: "rosa",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio basso",
    sport: "basketball",
  },
  {
    genere: "uomo",
    prezzo: 68,
    scontiEOfferte: "nessuno",
    colore: "viola",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "golf",
  },
  {
    genere: "donna",
    prezzo: 256,
    scontiEOfferte: "outlet",
    colore: "rosso",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio alto",
    sport: "danza",
  },
];
const jordanProducts = [
  {
    genere: "uomo",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 75,
    scontiEOfferte: "nessuno",
    colore: "nero",
    collezioni: "Jordan Editions",
    altezzaScarpa: "taglio basso",
    sport: "lifestyle",
  },
  {
    genere: "donna",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 145,
    scontiEOfferte: "outlet",
    colore: "blu",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "profilo medio",
    sport: "performance",
  },
  {
    genere: "unisex",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 230,
    scontiEOfferte: "nessuno",
    colore: "marrone",
    collezioni: "Jordan Editions",
    altezzaScarpa: "taglio alto",
    sport: "basketball",
  },
  {
    kids: "bambina",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 52,
    scontiEOfferte: "outlet",
    colore: "verde",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio basso",
    sport: "golf",
  },
  {
    kids: "bambino",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 189,
    scontiEOfferte: "nessuno",
    colore: "grigio",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "danza",
  },
  {
    kids: "bambina",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 300,
    scontiEOfferte: "outlet",
    colore: "arancione",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio alto",
    sport: "lifestyle",
  },
  {
    kids: "bambino",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 95,
    scontiEOfferte: "nessuno",
    colore: "rosa",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "performance",
  },
  {
    genere: "donna",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 128,
    scontiEOfferte: "outlet",
    colore: "viola",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio basso",
    sport: "basketball",
  },
  {
    genere: "unisex",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 215,
    scontiEOfferte: "nessuno",
    colore: "rosso",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "golf",
  },
  {
    genere: "uomo",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 60,
    scontiEOfferte: "outlet",
    colore: "bianco",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio alto",
    sport: "danza",
  },
  {
    genere: "donna",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 179,
    scontiEOfferte: "nessuno",
    colore: "giallo",
    collezioni: "Jordan Editions",
    altezzaScarpa: "taglio basso",
    sport: "lifestyle",
  },
  {
    genere: "unisex",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 132,
    scontiEOfferte: "outlet",
    colore: "nero",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "profilo medio",
    sport: "performance",
  },
  {
    genere: "uomo",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 247,
    scontiEOfferte: "nessuno",
    colore: "blu",
    collezioni: "Jordan Editions",
    altezzaScarpa: "taglio alto",
    sport: "basketball",
  },
  {
    kids: "bambina",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 85,
    scontiEOfferte: "outlet",
    colore: "marrone",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio basso",
    sport: "golf",
  },
  {
    kids: "bambino",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 158,
    scontiEOfferte: "nessuno",
    colore: "verde",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "danza",
  },
  {
    genere: "uomo",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 99,
    scontiEOfferte: "outlet",
    colore: "grigio",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio alto",
    sport: "lifestyle",
  },
  {
    genere: "donna",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 212,
    scontiEOfferte: "nessuno",
    colore: "arancione",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "performance",
  },
  {
    genere: "unisex",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 141,
    scontiEOfferte: "outlet",
    colore: "rosa",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio basso",
    sport: "basketball",
  },
  {
    genere: "uomo",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 68,
    scontiEOfferte: "nessuno",
    colore: "viola",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "golf",
  },
  {
    genere: "donna",
    img: "assets/img/scarpe/scarpa-12.png",
    prezzo: 256,
    scontiEOfferte: "outlet",
    colore: "rosso",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio alto",
    sport: "danza",
  },
];
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
    .sidebar h3 {
      position: relative;
      padding-right: 20px;
      cursor: pointer;
    }
    .sidebar h3::after {
      content: "";
      position: absolute;
      right: 0; top: 50%;
      width: 8px; height: 8px;
      border-right: 2px solid #333;
      border-bottom: 2px solid #333;
      transform: translateY(-50%) rotate(45deg);
      transition: transform 0.2s ease;
    }
    .sidebar h3.open::after {
      transform: translateY(-50%) rotate(-135deg);
    }
    .sidebar .filter-content {
      display: none;
      margin-top: 8px;
    }
  `;
  document.head.appendChild(style);

  // Toggle per i filtri (il tuo codice esistente)
  document.querySelectorAll(".sidebar h3").forEach((header) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("filter-content");

    let sib = header.nextElementSibling;
    while (sib && sib.tagName !== "H3") {
      const next = sib.nextElementSibling;
      wrapper.appendChild(sib);
      sib = next;
    }
    header.parentNode.insertBefore(wrapper, sib);

    header.addEventListener("click", () => {
      header.classList.toggle("open");
      wrapper.style.display =
        wrapper.style.display === "block" ? "none" : "block";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const countSpan = document.getElementById("result-count");
  const grid = document.getElementById("product-grid");
  window.gridElement = grid; // Rende grid globale

  //estrae da tutte le checkbox raggruppate per name[]
  function getSelectedFilters() {
    return {
      genere: [
        ...document.querySelectorAll('input[name="genere"]:checked'),
      ].map((el) => el.value),
      kids: [...document.querySelectorAll('input[name="kids"]:checked')].map(
        (el) => el.value
      ),
      prezzo: [
        ...document.querySelectorAll('input[name="prezzo"]:checked'),
      ].map((el) => el.value), // CORRETTO: non convertiamo in numero
      sconti: [
        ...document.querySelectorAll('input[name="sconti"]:checked'),
      ].map((el) => el.value),
      colore: [
        ...document.querySelectorAll('input[name="colore"]:checked'),
      ].map((el) => el.value),
      collezioni: [
        ...document.querySelectorAll('input[name="collezioni"]:checked'),
      ].map((el) => el.value),
      altezzaScarpa: [
        ...document.querySelectorAll('input[name="altezza-scarpa"]:checked'),
      ].map((el) => el.value), // CORRETTO: nome attributo HTML
      sport: [...document.querySelectorAll('input[name="sport"]:checked')].map(
        (el) => el.value
      ),
    };
  }

  // filtra products in base alla selezione fatta
  function filterProducts(productsArray = jordanProducts) {
    const sel = getSelectedFilters();

    return productsArray.filter((p) => {
      // Filtro genere
      if (sel.genere.length && !sel.genere.includes(p.genere)) return false;

      // Filtro kids
      if (sel.kids.length && !sel.kids.includes(p.kids)) return false;

      // Filtro prezzo CORRETTO
      if (sel.prezzo.length) {
        const prezzo = p.prezzo; // CORRETTO: definita la variabile
        const ok = sel.prezzo.some((fascia) => {
          if (fascia === "inferiore-a-50") return prezzo < 50; // CORRETTO: match con HTML
          if (fascia === "50-100") return prezzo >= 50 && prezzo <= 100;
          if (fascia === "100-150") return prezzo > 100 && prezzo <= 150;
          if (fascia === "superiore-a-150") return prezzo > 150; // CORRETTO: match con HTML
          return false;
        });
        if (!ok) return false;
      }

      // Filtro sconti CORRETTO
      if (sel.sconti.length) {
        const scontoValue = sel.sconti.includes("outlet")
          ? "outlet"
          : "nessuno";
        if (p.scontiEOfferte !== scontoValue) return false; // CORRETTO: nome proprietà
      }

      // Altri filtri
      if (sel.colore.length && !sel.colore.includes(p.colore)) return false;
      if (sel.collezioni.length && !sel.collezioni.includes(p.collezioni))
        return false;
      if (
        sel.altezzaScarpa.length &&
        !sel.altezzaScarpa.includes(p.altezzaScarpa)
      )
        return false; // CORRETTO
      if (sel.sport.length && !sel.sport.includes(p.sport)) return false;

      return true;
    });
  }

  function renderProducts() {
    // Filtra i prodotti
    const filteredProducts = filterProducts(jordanProducts);

    // Aggiorna il contatore
    if (countSpan) {
      countSpan.textContent = filteredProducts.length;
    }

    // Aggiorna anche il titolo se esiste
    const titleHeader = document.getElementById("title-header");
    if (titleHeader) {
      titleHeader.textContent = `Collezione Jordan (${filteredProducts.length})`;
    }

    // Pulisci e ricostruisci il grid
    grid.innerHTML = "";

    if (filteredProducts.length === 0) {
      grid.innerHTML =
        '<p class="no-results">Nessun prodotto trovato con i filtri selezionati.</p>';
      return;
    }

    // Renderizza ogni prodotto
    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "card";

      // Determina il tipo da mostrare
      const type = product.genere || product.kids || "Unisex";

      card.innerHTML = `
        <div class="card-content">
          <div id="img-products">
            <a><img src="${product.img}" alt="${product.collezioni}"></a>
          </div>
          <h3 class="title">${product.collezioni}</h3>
          <p class="type">${type}</p>
          <p class="colors">${product.colore}</p>
          <p class="price">${product.prezzo} €</p>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  // Event listeners per i filtri
  document.querySelectorAll('.sidebar input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener("change", renderProducts);
  });

  // Inizializza la visualizzazione
  renderProducts();

  // PARTE NUOVA PER BOTTONE FILTRO MEDIA QUERY
  // ─── TOGGLE MENU FILTRI MOBILE ────────────────────────────────────────────
  const trigger = document.querySelector(".filter-toggle");
  const sidebar = document.querySelector("aside.sidebar");

  if (trigger && sidebar) {
    trigger.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }
});

const tendinaOrdina = document.getElementById("menu");
const ordinaBtn = document.getElementById("ordinaBtn");
const freccia = document.querySelector("#freccia img");
const filtra = document.getElementById("filtraBtn");
const filtri = document.getElementById("sidebar");

if (ordinaBtn) {
  ordinaBtn.addEventListener("click", () => {
    if (!tendinaOrdina) return;
    if (
      tendinaOrdina.style.display === "none" ||
      !tendinaOrdina.style.display
    ) {
      if (freccia) freccia.classList.add("freccia-su");
      tendinaOrdina.style.display = "block";
    } else {
      tendinaOrdina.style.display = "none";
      if (freccia) freccia.classList.remove("freccia-su");
    }
  });
}

if (filtra) {
  filtra.addEventListener("click", () => {
    const gridEl = document.getElementById("product-grid");
    if (filtri.style.display === "flex") {
      filtri.style.display = "none";
      if (gridEl) {
        gridEl.style.width = "100%";
        gridEl.style.paddingLeft = "48px";
      }
    } else {
      filtri.style.display = "flex";
      if (gridEl) {
        gridEl.style.width = "";
        gridEl.style.paddingLeft = "";
      }
    }
  });
}
