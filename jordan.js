const products = [
  {
    "genere": "uomo",
    "prezzo": 75,
    "sconti e offerte": "nessuno",
    "colore": "nero",
    "collezioni": "Jordan Editions",
    "altezza scarpa": "taglio basso",
    "sport": "lifestyle"
  },
  {
    "genere": "donna",
    "prezzo": 145,
    "sconti e offerte": "outlet",
    "colore": "blu",
    "collezioni": "Jordan Spizike",
    "altezza scarpa": "profilo medio",
    "sport": "performance"
  },
  {
    "genere": "unisex",
    "prezzo": 230,
    "sconti e offerte": "nessuno",
    "colore": "marrone",
    "collezioni": "Jordan Editions",
    "altezza scarpa": "taglio alto",
    "sport": "basketball"
  },
  {
    "kids": "bambina",
    "prezzo": 52,
    "sconti e offerte": "outlet",
    "colore": "verde",
    "collezioni": "Jordan Spizike",
    "altezza scarpa": "taglio basso",
    "sport": "golf"
  },
  {
    "kids": "bambino",
    "prezzo": 189,
    "sconti e offerte": "nessuno",
    "colore": "grigio",
    "collezioni": "Jordan Editions",
    "altezza scarpa": "profilo medio",
    "sport": "danza"
  },
  {
    "kids": "bambina",
    "prezzo": 300,
    "sconti e offerte": "outlet",
    "colore": "arancione",
    "collezioni": "Jordan Spizike",
    "altezza scarpa": "taglio alto",
    "sport": "lifestyle"
  },
  {
    "kids": "bambino",
    "prezzo": 95,
    "sconti e offerte": "nessuno",
    "colore": "rosa",
    "collezioni": "Jordan Editions",
    "altezza scarpa": "profilo medio",
    "sport": "performance"
  },
  {
    "genere": "donna",
    "prezzo": 128,
    "sconti e offerte": "outlet",
    "colore": "viola",
    "collezioni": "Jordan Spizike",
    "altezza scarpa": "taglio basso",
    "sport": "basketball"
  },
  {
    "genere": "unisex",
    "prezzo": 215,
    "sconti e offerte": "nessuno",
    "colore": "rosso",
    "collezioni": "Jordan Editions",
    "altezza scarpa": "profilo medio",
    "sport": "golf"
  },
  {
    "genere": "uomo",
    "prezzo": 60,
    "sconti e offerte": "outlet",
    "colore": "bianco",
    "collezioni": "Jordan Spizike",
    "altezza scarpa": "taglio alto",
    "sport": "danza"
  },
  {
    "genere": "donna",
    "prezzo": 179,
    "sconti e offerte": "nessuno",
    "colore": "giallo",
    "collezioni": "Jordan Editions",
    "altezza scarpa": "taglio basso",
    "sport": "lifestyle"
  },
  {
    "genere": "unisex",
    "prezzo": 132,
    "sconti e offerte": "outlet",
    "colore": "nero",
    "collezioni": "Jordan Spizike",
    "altezza scarpa": "profilo medio",
    "sport": "performance"
  },
  {
    "genere": "uomo",
    "prezzo": 247,
    "sconti e offerte": "nessuno",
    "colore": "blu",
    "collezioni": "Jordan Editions",
    "altezza scarpa": "taglio alto",
    "sport": "basketball"
  },
  {
    "kids": "bambina",
    "prezzo": 85,
    "sconti e offerte": "outlet",
    "colore": "marrone",
    "collezioni": "Jordan Spizike",
    "altezza scarpa": "taglio basso",
    "sport": "golf"
  },
  {
    "kids": "bambino",
    "prezzo": 158,
    "sconti e offerte": "nessuno",
    "colore": "verde",
    "collezioni": "Jordan Editions",
    "altezza scarpa": "profilo medio",
    "sport": "danza"
  },
  {
    "genere": "uomo",
    "prezzo": 99,
    "sconti e offerte": "outlet",
    "colore": "grigio",
    "collezioni": "Jordan Spizike",
    "altezza scarpa": "taglio alto",
    "sport": "lifestyle"
  },
  {
    "genere": "donna",
    "prezzo": 212,
    "sconti e offerte": "nessuno",
    "colore": "arancione",
    "collezioni": "Jordan Editions",
    "altezza scarpa": "profilo medio",
    "sport": "performance"
  },
  {
    "genere": "unisex",
    "prezzo": 141,
    "sconti e offerte": "outlet",
    "colore": "rosa",
    "collezioni": "Jordan Spizike",
    "altezza scarpa": "taglio basso",
    "sport": "basketball"
  },
  {
    "genere": "uomo",
    "prezzo": 68,
    "sconti e offerte": "nessuno",
    "colore": "viola",
    "collezioni": "Jordan Editions",
    "altezza scarpa": "profilo medio",
    "sport": "golf"
  },
  {
    "genere": "donna",
    "prezzo": 256,
    "sconti e offerte": "outlet",
    "colore": "rosso",
    "collezioni": "Jordan Spizike",
    "altezza scarpa": "taglio alto",
    "sport": "danza"
  }
]



document.addEventListener('DOMContentLoaded', () => {
  //Inietto dinamicamente nel <head> il CSS per la freccina e per il wrapper .filter-content
  const style = document.createElement('style');
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
  document.querySelectorAll('.sidebar h3').forEach(header => {
    //Creo un wrapper <div class="filter-content"> e ci sposto dentro tutti i nodi fra questo <h3> e il prossimo <h3> (o la fine della sidebar).
    const wrapper = document.createElement('div');
    wrapper.classList.add('filter-content');

    let sib = header.nextElementSibling;
    while (sib && sib.tagName !== 'H3') {
      const next = sib.nextElementSibling;
      wrapper.appendChild(sib);
      sib = next;
    }
    header.parentNode.insertBefore(wrapper, sib);

    // Comportamento al click: toggle sullo <h3> e sul wrapper
    header.addEventListener('click', () => {
      header.classList.toggle('open');
      wrapper.style.display = wrapper.style.display === 'block' ? 'none' : 'block';
    });
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const countSpan = document.getElementById('result-count');

//estrae da tutte le checkbox raggruppate per name[]
function getSelectedFilters() {
  return {
    genere: [...document.querySelectorAll('input[name="genere"]:checked')]
             .map(el => el.value),
    kids:   [...document.querySelectorAll('input[name="kids"]:checked')]
             .map(el => el.value),
    prezzo: [...document.querySelectorAll('input[name="prezzo"]:checked')]
             .map(el => Number(el.value)),            // numero tra 30 e 300
    sconti: [...document.querySelectorAll('input[name="sconti"]:checked')]
             .map(el => el.value),                  // “nessuno” o “outlet”
    colore: [...document.querySelectorAll('input[name="colore"]:checked')]
             .map(el => el.value),
    collezioni: [...document.querySelectorAll('input[name="collezioni"]:checked')]
             .map(el => el.value),
    altezza: [...document.querySelectorAll('input[name="altezza"]:checked')]
             .map(el => el.value),
    sport:  [...document.querySelectorAll('input[name="sport"]:checked')]
             .map(el => el.value),
  };
}

// filtra products in base alla selezione fatta
function filterProducts() {
  const sel = getSelectedFilters();
  return products.filter(p => {
    
    if (sel.genere.length && !sel.genere.includes(p.genere))                          return false;
    if (sel.kids.length   && !sel.kids.includes(p.kids))                              return false;
    if (sel.prezzo.length) {
      const ok = sel.prezzo.some(fascia => {
        if (fascia === "<50")       return prezzo < 50;
        if (fascia === "50-100")    return prezzo >= 50  && prezzo <= 100;
        if (fascia === "100-150")   return prezzo > 100  && prezzo <= 150;
        if (fascia === ">150")      return prezzo > 150;
      });
      if (!ok) return false;
    }
    if (sel.sconti.length && !sel.sconti.includes(p["sconti e offerte"]))             return false;
    if (sel.colore.length && !sel.colore.includes(p.colore))                          return false;
    if (sel.collezioni.length && !sel.collezioni.includes(p.collezioni))               return false;
    if (sel.altezza.length && !sel.altezza.includes(p["altezza scarpa"]))              return false;
    if (sel.sport.length  && !sel.sport.includes(p.sport))                             return false;
    return true;
  });
}



  // aggiorna il contatore in pagina
  function updateCount() {
    const matched = filterProducts();
    countSpan.textContent = matched.length;
  }

  // attacca l'event listener alle checkbox
  document.querySelectorAll('.sidebar input[type="checkbox"]')
    .forEach(cb => cb.addEventListener('change', updateCount));

  // inizializza al valore max con tutti i prodotti
  countSpan.textContent = products.length;


  //PARTE NUOVA PER BOTTONE FILTRO MEDIA QUERY

 // ─── TOGGLE MENU FILTRI MOBILE ────────────────────────────────────────────
  const trigger = document.querySelector('.filter-toggle');
const sidebar = document.querySelector('aside.sidebar');

trigger.addEventListener('click', () => {
  // toggle visibilità
  sidebar.classList.toggle('open');
});


});


