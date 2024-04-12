export default function Products(type) {
  const productsSection = document.createElement("div");
  productsSection.classList.add("services");

  const h1 = document.createElement("h1");
  h1.textContent = "Products";

  const productsContainer = document.createElement("div");
  productsContainer.classList.add("services__container");

  const card1 = createServiceCard("Experience Bliss", "Love Cromossom");
  const card2 = createServiceCard("Are you Ready?", "Take the leap");
  const card3 = createServiceCard("Are you Ready?", "Take the leap");
  const card4 = createServiceCard("Are you Ready?", "Take the leap");
  const card5 = createServiceCard("Are you Ready?", "Take the leap");
  const card6 = createServiceCard("Are you Ready?", "Take the leap");

  if (type == "hero") {
    productsContainer.appendChild(card1);
    productsContainer.appendChild(card2);
    productsContainer.appendChild(card3);
  } else {
    productsContainer.appendChild(card1);
    productsContainer.appendChild(card2);
    productsContainer.appendChild(card3);
    productsContainer.appendChild(card4);
    productsContainer.appendChild(card5);
    productsContainer.appendChild(card6);
  }

  productsSection.appendChild(h1);
  productsSection.appendChild(productsContainer);

  return productsSection;
}

function createServiceCard(title, description) {
  const card = document.createElement("div");
  card.classList.add("services__card");

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const p = document.createElement("p");
  p.textContent = description;

  const button = document.createElement("button");
  button.textContent = "Get Started";

  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(button);

  return card;
}
