const jordanProducts = [
  {
    id: 1,
    title: "Jordan Jumpman T-shirt a manica corta – Uomo",
    image: "assets/img/modelli/modelloMagliaUomo.png",
    price: "29,99 €",
    gender: "Uomo",
    colors: 4,
    link: "https://www.nike.com/it/t/jordan-jumpman-t-shirt-a-manica-corta-uomo-4-colori-29-99-euro",
  },
  {
    id: 2,
    title: "Jordan Sport Maglia a manica corta Dri-FIT – Uomo",
    image: "assets/img/modelli/jordanAir.png",
    price: "39,99 €",
    gender: "Uomo",
    colors: 6,
    link: "https://www.nike.com/it/t/jordan-sport-maglia-a-manica-corta-dri-fit-uomo-6-colori-39-99-euro",
  },
  {
    id: 3,
    title: "Air Jordan Camicia da campeggio – Uomo",
    image: "assets/img/modelli/camicia-1.png",
    price: "109,99 €",
    gender: "Uomo",
    colors: 1,
    link: "https://www.nike.com/it/t/air-jordan-camicia-da-campeggio-uomo-1-colore-109-99-euro",
  },
  {
    id: 4,
    title: "Jordan Flight Essentials T-shirt – Uomo",
    image: "assets/img/modelli/magliaEseentials.png",
    price: "24,49 €",
    gender: "Uomo",
    colors: 1,
    link: "https://www.nike.com/it/t/jordan-flight-essentials-t-shirt-uomo-1-colore-24-49-euro",
  },
  {
    id: 5,
    title: "Jordan Flight Essentials 85 T-shirt délavé – Uomo",
    image: "assets/img/modelli/JordanEssential85.png",
    price: "37,49 €",
    gender: "Uomo",
    colors: 1,
    link: "https://www.nike.com/it/t/jordan-flight-essentials-85-t-shirt-delave-uomo-1-colore-37-49-euro",
  },
  {
    id: 6,
    title: "Jordan Air T-shirt elasticizzata – Uomo",
    image: "assets/img/modelli/magliaUomoRed.png",
    price: "27,99 €",
    gender: "Uomo",
    colors: 1,
    link: "https://www.nike.com/it/t/jordan-air-t-shirt-elasticizzata-uomo-1-colore-27-99-euro",
  },
  {
    id: 7,
    title: "Jordan T-shirt oversize Summer Bloom – Ragazzo/a",
    image: "assets/img/modelli/oversizeRagazzo.png",
    price: "27,99 €",
    gender: "Ragazzo/a",
    colors: 2,
    link: "https://www.nike.com/it/t/jordan-t-shirt-oversize-summer-bloom-ragazzo-a-2-colori-27-99-euro",
  },
  {
    id: 8,
    title: "Jordan Flight Essentials T-shirt Poolside Jumpman – Ragazzo/a",
    image: "assets/img/modelli/tshirtRagazzo.png",
    price: "24,99 €",
    gender: "Ragazzo/a",
    colors: 1,
    link: "https://www.nike.com/it/t/jordan-flight-essentials-t-shirt-poolside-jumpman-ragazzo-a-1-colore-24-99-euro",
  },
  {
    id: 9,
    title:
      "Chicago Bulls Statement Edition Maglia Jordan Dri-FIT Swingman NBA – Uomo",
      image: "assets/img/modelli/bulls.png",
    price: "73,49 €",
    gender: "Uomo",
    colors: 1,
    link: "https://www.nike.com/it/t/chicago-bulls-statement-edition-maglia-jordan-dri-fit-swingman-nba-uomo-1-colore-73-49-euro",
  },
  {
    id: 10,
    title: "Jordan Jumpman Air T-shirt - Uomo",
    image: "assets/img/modelli/jordanJumpman.png",
    price: "24,49 €",
    gender: "Uomo",
    colors: 1,
    link: "https://www.nike.com/it/t/jordan-jumpman-air-t-shirt-uomo-1-colore-24-49-euro",
  },
];

const grid = document.getElementById("product-grid");
const titleHeader = document.getElementById("title-header");
titleHeader.innerHTML = `Collezione Jordan (${jordanProducts.length})`
jordanProducts.forEach(product => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-content">
      <div id="img"><a><img src="${product.image}" alt="${product.title}"></a></div>
      <h3 class="title">${product.title}</h3>
      <p class="type">${product.gender}</p>
      <p class="colors">${product.colors} color${product.colors > 1 ? "i" : "e"} disponibili</p>
      <p class="price">${product.price}</p>
    </div>
  `;

  grid.appendChild(card);
});