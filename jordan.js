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


//PARTE FAKE FILTER

// genero prodotti con un loop
const genders = ['uomo', 'donna', 'unisex'];
const prices  = ['inferiore-a-50', '50-100', '100-150', 'superiore-a-150'];
const colors  = ['nero', 'blu', 'marrone', 'verde', 'grigio', 'arancione', 'rosa', 'viola', 'rosso', 'bianco', 'giallo'];

const products = [];

for (let i = 1; i <= 136; i++) {
  products.push({
    id: i,
    gender: genders[(i - 1) % genders.length],
    price:  prices[(i - 1) % prices.length],
    color:  colors[(i - 1) % colors.length],
    kids:   (i % 5 === 0) //ogni 5° prodotto è “kids”, per esempio, me lo sono inventata RIVEDEREEEEEE
  });
}



document.addEventListener('DOMContentLoaded', () => {
  const countSpan = document.getElementById('result-count');

  // funzione che legge tutte le checkbox selezionate
  function getSelectedFilters() {
    const selected = {
      gender: [...document.querySelectorAll('input[name="genere"]:checked')].map(i => i.value),
      price:  [...document.querySelectorAll('input[name="price"]:checked')].map(i => i.value),
      kids:   [...document.querySelectorAll('input[name="bambino"], input[name="bambina"]')]
                 .filter(i => i.checked)
                 .map(i => i.name === 'bambino' ? 'bambino' : 'bambina'),

    };
    return selected;
  }

  // filterProducts restituisce i prodotti che combinano le condizioni--PROBLEMAAAAAAAAAAAAAAAAAAAAAA
  function filterProducts() {
    const sel = getSelectedFilters();
    return products.filter(p => {
      // se ho selezionato almeno un gender, p.gender deve starci dentro
      if (sel.gender.length && !sel.gender.includes(p.gender)) return false;
      if (sel.price.length  && !sel.price.includes(p.price))   return false;
      if (sel.kids.length   && !sel.kids.includes(p.kids ? 'bambino' : '')) return false;
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
});
