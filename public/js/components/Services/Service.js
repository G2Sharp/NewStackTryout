// Services.js

export default function Services(type) {
  const servicesSection = document.createElement("div");
  servicesSection.classList.add("services");

  const h1 = document.createElement("h1");
  h1.textContent = "See what our services are like.";

  const servicesContainer = document.createElement("div");
  servicesContainer.classList.add("services__container");

  const card1 = createServiceCard("Emapthy", "Love Cromossom");
  const card2 = createServiceCard("Forum", "Share Ideas");
  const card3 = createServiceCard("Painting", "Take the leap");
  const card4 = createServiceCard("Yoga", "Take the leap");
  const card5 = createServiceCard("Verbal Expression", "Take the leap");
  const card6 = createServiceCard("Are you Ready?", "Join us!");

  if (type == "hero") {
    servicesContainer.appendChild(card1);
    servicesContainer.appendChild(card2);
    servicesContainer.appendChild(card3);
  } else {
    servicesContainer.appendChild(card1);
    servicesContainer.appendChild(card2);
    servicesContainer.appendChild(card3);
    servicesContainer.appendChild(card4);
    servicesContainer.appendChild(card5);
    servicesContainer.appendChild(card6);
  }

  servicesSection.appendChild(h1);
  servicesSection.appendChild(servicesContainer);

  return servicesSection;
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
