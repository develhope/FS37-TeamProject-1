console.log(`Qeusta e' una prova`);
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
    "sconti e offerte": "nessuno",
    colore: "nero",
    collezioni: "Jordan Editions",
    "altezza scarpa": "taglio basso",
    sport: "lifestyle",
  },
  {
    genere: "donna",
    prezzo: 145,
    "sconti e offerte": "outlet",
    colore: "blu",
    collezioni: "Jordan Spizike",
    "altezza scarpa": "profilo medio",
    sport: "performance",
  },
  {
    genere: "unisex",
    prezzo: 230,
    "sconti e offerte": "nessuno",
    colore: "marrone",
    collezioni: "Jordan Editions",
    "altezza scarpa": "taglio alto",
    sport: "basketball",
  },
  {
    kids: "bambina",
    prezzo: 52,
    "sconti e offerte": "outlet",
    colore: "verde",
    collezioni: "Jordan Spizike",
    "altezza scarpa": "taglio basso",
    sport: "golf",
  },
  {
    kids: "bambino",
    prezzo: 189,
    "sconti e offerte": "nessuno",
    colore: "grigio",
    collezioni: "Jordan Editions",
    "altezza scarpa": "profilo medio",
    sport: "danza",
  },
  {
    kids: "bambina",
    prezzo: 300,
    "sconti e offerte": "outlet",
    colore: "arancione",
    collezioni: "Jordan Spizike",
    "altezza scarpa": "taglio alto",
    sport: "lifestyle",
  },
  {
    kids: "bambino",
    prezzo: 95,
    "sconti e offerte": "nessuno",
    colore: "rosa",
    collezioni: "Jordan Editions",
    "altezza scarpa": "profilo medio",
    sport: "performance",
  },
  {
    genere: "donna",
    prezzo: 128,
    "sconti e offerte": "outlet",
    colore: "viola",
    collezioni: "Jordan Spizike",
    "altezza scarpa": "taglio basso",
    sport: "basketball",
  },
  {
    genere: "unisex",
    prezzo: 215,
    "sconti e offerte": "nessuno",
    colore: "rosso",
    collezioni: "Jordan Editions",
    "altezza scarpa": "profilo medio",
    sport: "golf",
  },
  {
    genere: "uomo",
    prezzo: 60,
    "sconti e offerte": "outlet",
    colore: "bianco",
    collezioni: "Jordan Spizike",
    "altezza scarpa": "taglio alto",
    sport: "danza",
  },
  {
    genere: "donna",
    prezzo: 179,
    "sconti e offerte": "nessuno",
    colore: "giallo",
    collezioni: "Jordan Editions",
    "altezza scarpa": "taglio basso",
    sport: "lifestyle",
  },
  {
    genere: "unisex",
    prezzo: 132,
    "sconti e offerte": "outlet",
    colore: "nero",
    collezioni: "Jordan Spizike",
    "altezza scarpa": "profilo medio",
    sport: "performance",
  },
  {
    genere: "uomo",
    prezzo: 247,
    "sconti e offerte": "nessuno",
    colore: "blu",
    collezioni: "Jordan Editions",
    "altezza scarpa": "taglio alto",
    sport: "basketball",
  },
  {
    kids: "bambina",
    prezzo: 85,
    "sconti e offerte": "outlet",
    colore: "marrone",
    collezioni: "Jordan Spizike",
    "altezza scarpa": "taglio basso",
    sport: "golf",
  },
  {
    kids: "bambino",
    prezzo: 158,
    "sconti e offerte": "nessuno",
    colore: "verde",
    collezioni: "Jordan Editions",
    "altezza scarpa": "profilo medio",
    sport: "danza",
  },
  {
    genere: "uomo",
    prezzo: 99,
    "sconti e offerte": "outlet",
    colore: "grigio",
    collezioni: "Jordan Spizike",
    "altezza scarpa": "taglio alto",
    sport: "lifestyle",
  },
  {
    genere: "donna",
    prezzo: 212,
    "sconti e offerte": "nessuno",
    colore: "arancione",
    collezioni: "Jordan Editions",
    "altezza scarpa": "profilo medio",
    sport: "performance",
  },
  {
    genere: "unisex",
    prezzo: 141,
    "sconti e offerte": "outlet",
    colore: "rosa",
    collezioni: "Jordan Spizike",
    "altezza scarpa": "taglio basso",
    sport: "basketball",
  },
  {
    genere: "uomo",
    prezzo: 68,
    "sconti e offerte": "nessuno",
    colore: "viola",
    collezioni: "Jordan Editions",
    "altezza scarpa": "profilo medio",
    sport: "golf",
  },
  {
    genere: "donna",
    prezzo: 256,
    "sconti e offerte": "outlet",
    colore: "rosso",
    collezioni: "Jordan Spizike",
    "altezza scarpa": "taglio alto",
    sport: "danza",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  //Inietto dinamicamente nel <head> il CSS per la freccina e per il wrapper .filter-content
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

  //Trovo tutti gli <h3> dentro la sidebar e per ciascuno
  document.querySelectorAll(".sidebar h3").forEach((header) => {
    //Creo un wrapper <div class="filter-content"> e ci sposto dentro tutti i nodi fra questo <h3> e il prossimo <h3> (o la fine della sidebar).
    const wrapper = document.createElement("div");
    wrapper.classList.add("filter-content");

    let sib = header.nextElementSibling;
    while (sib && sib.tagName !== "H3") {
      const next = sib.nextElementSibling;
      wrapper.appendChild(sib);
      sib = next;
    }
    header.parentNode.insertBefore(wrapper, sib);

    // Comportamento al click: toggle sullo <h3> e sul wrapper
    header.addEventListener("click", () => {
      header.classList.toggle("open");
      wrapper.style.display =
        wrapper.style.display === "block" ? "none" : "block";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const countSpan = document.getElementById("result-count");

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
      ].map((el) => Number(el.value)), // numero tra 30 e 300
      sconti: [
        ...document.querySelectorAll('input[name="sconti"]:checked'),
      ].map((el) => el.value), // “nessuno” o “outlet”
      colore: [
        ...document.querySelectorAll('input[name="colore"]:checked'),
      ].map((el) => el.value),
      collezioni: [
        ...document.querySelectorAll('input[name="collezioni"]:checked'),
      ].map((el) => el.value),
      altezza: [
        ...document.querySelectorAll('input[name="altezza"]:checked'),
      ].map((el) => el.value),
      sport: [...document.querySelectorAll('input[name="sport"]:checked')].map(
        (el) => el.value
      ),
    };
  }

  // filtra products in base alla selezione fatta
  function filterProducts() {
    const sel = getSelectedFilters();
    return products.filter((p) => {
      if (sel.genere.length && !sel.genere.includes(p.genere)) return false;
      if (sel.kids.length && !sel.kids.includes(p.kids)) return false;
      if (sel.prezzo.length) {
        const ok = sel.prezzo.some((fascia) => {
          if (fascia === "<50") return prezzo < 50;
          if (fascia === "50-100") return prezzo >= 50 && prezzo <= 100;
          if (fascia === "100-150") return prezzo > 100 && prezzo <= 150;
          if (fascia === ">150") return prezzo > 150;
        });
        if (!ok) return false;
      }
      if (sel.sconti.length && !sel.sconti.includes(p["sconti e offerte"]))
        return false;
      if (sel.colore.length && !sel.colore.includes(p.colore)) return false;
      if (sel.collezioni.length && !sel.collezioni.includes(p.collezioni))
        return false;
      if (sel.altezza.length && !sel.altezza.includes(p["altezza scarpa"]))
        return false;
      if (sel.sport.length && !sel.sport.includes(p.sport)) return false;
      return true;
    });
  }

  // aggiorna il contatore in pagina
  function updateCount() {
    const matched = filterProducts();
    countSpan.textContent = matched.length;
  }

  // attacca l'event listener alle checkbox
  document
    .querySelectorAll('.sidebar input[type="checkbox"]')
    .forEach((cb) => cb.addEventListener("change", updateCount));

  // inizializza al valore max con tutti i prodotti
  countSpan.textContent = products.length;

  //PARTE NUOVA PER BOTTONE FILTRO MEDIA QUERY

  // ─── TOGGLE MENU FILTRI MOBILE ────────────────────────────────────────────
  const trigger = document.querySelector(".filter-toggle");
  const sidebar = document.querySelector("aside.sidebar");

  trigger.addEventListener("click", () => {
    // toggle visibilità
    sidebar.classList.toggle("open");
  });
});

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

const grid = document.getElementById("product-grid");
const titleHeader = document.getElementsByClassName("title-header");
const tendinaOrdina = document.getElementById("menu");
const ordinaBtn = document.getElementById("ordinaBtn");
const freccia = document.querySelector("#freccia img");
const filtra = document.getElementById("filtraBtn");
const filtri = document.getElementById("sidebar");
titleHeader.innerHTML = `Collezione Jordan (${jordanProducts.length})`;

ordinaBtn.addEventListener("click", () => {
  if (tendinaOrdina.style.display === "none") {
    freccia.classList.toggle("freccia-su");
    tendinaOrdina.style.display = "block";
  } else {
    tendinaOrdina.style.display = "none";
    freccia.classList.remove("freccia-su");
  }
});

filtra.addEventListener("click", () => {
  if(filtri.style.display === "flex"){
    filtri.style.display = "none";
  } else {
    filtri.style.display = "flex";
  }

});

jordanProducts.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-content">
      <div id="img-products"><a><img src="${product.img}" alt="${product.collezioni}"></a></div>
      <h3 class="title">${product.collezioni}</h3>
      <p class="type">${product.genere}</p>
      <p class="colors">${product.colore} </p>
      <p class="price">${product.prezzo} €</p>
    </div>
  `;

  grid.appendChild(card);
});
