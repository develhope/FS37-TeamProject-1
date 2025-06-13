const jordanProducts = [
  {
    genere: "uomo",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 75,
    scontiEOfferte: "nessuno",
    colore: "nero",
    collezioni: "Jordan Editions",
    altezzaScarpa: "taglio basso",
    sport: "lifestyle"
  },
  {
    genere: "donna",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 145,
    scontiEOfferte: "outlet",
    colore: "blu",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "profilo medio",
    sport: "performance"
  },
  {
    genere: "unisex",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 230,
    scontiEOfferte: "nessuno",
    colore: "marrone",
    collezioni: "Jordan Editions",
    altezzaScarpa: "taglio alto",
    sport: "basketball"
  },
  {
    kids: "bambina",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 52,
    scontiEOfferte: "outlet",
    colore: "verde",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio basso",
    sport: "golf"
  },
  {
    kids: "bambino",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 189,
    scontiEOfferte: "nessuno",
    colore: "grigio",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "danza"
  },
  {
    kids: "bambina",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 300,
    scontiEOfferte: "outlet",
    colore: "arancione",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio alto",
    sport: "lifestyle"
  },
  {
    kids: "bambino",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 95,
    scontiEOfferte: "nessuno",
    colore: "rosa",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "performance"
  },
  {
    genere: "donna",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 128,
    scontiEOfferte: "outlet",
    colore: "viola",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio basso",
    sport: "basketball"
  },
  {
    genere: "unisex",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 215,
    scontiEOfferte: "nessuno",
    colore: "rosso",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "golf"
  },
  {
    genere: "uomo",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 60,
    scontiEOfferte: "outlet",
    colore: "bianco",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio alto",
    sport: "danza"
  },
  {
    genere: "donna",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 179,
    scontiEOfferte: "nessuno",
    colore: "giallo",
    collezioni: "Jordan Editions",
    altezzaScarpa: "taglio basso",
    sport: "lifestyle"
  },
  {
    genere: "unisex",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 132,
    scontiEOfferte: "outlet",
    colore: "nero",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "profilo medio",
    sport: "performance"
  },
  {
    genere: "uomo",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 247,
    scontiEOfferte: "nessuno",
    colore: "blu",
    collezioni: "Jordan Editions",
    altezzaScarpa: "taglio alto",
    sport: "basketball"
  },
  {
    kids: "bambina",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 85,
    scontiEOfferte: "outlet",
    colore: "marrone",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio basso",
    sport: "golf"
  },
  {
    kids: "bambino",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 158,
    scontiEOfferte: "nessuno",
    colore: "verde",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "danza"
  },
  {
    genere: "uomo",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 99,
    scontiEOfferte: "outlet",
    colore: "grigio",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio alto",
    sport: "lifestyle"
  },
  {
    genere: "donna",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 212,
    scontiEOfferte: "nessuno",
    colore: "arancione",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "performance"
  },
  {
    genere: "unisex",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 141,
    scontiEOfferte: "outlet",
    colore: "rosa",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio basso",
    sport: "basketball"
  },
  {
    genere: "uomo",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 68,
    scontiEOfferte: "nessuno",
    colore: "viola",
    collezioni: "Jordan Editions",
    altezzaScarpa: "profilo medio",
    sport: "golf"
  },
  {
    genere: "donna",
    img:"assets/img/scarpe/scarpa-12.png",
    prezzo: 256,
    scontiEOfferte: "outlet",
    colore: "rosso",
    collezioni: "Jordan Spizike",
    altezzaScarpa: "taglio alto",
    sport: "danza"
  }
];

const grid = document.getElementById("product-grid");
const titleHeader = document.getElementById("title-header");
titleHeader.innerHTML = `Collezione Jordan (${jordanProducts.length})`
jordanProducts.forEach(product => {
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