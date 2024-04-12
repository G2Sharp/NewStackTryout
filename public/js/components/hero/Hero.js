// Hero.js

export default function Hero() {
  const heroSection = document.createElement("div");
  heroSection.classList.add("main");

  const heroContainer = document.createElement("div");
  heroContainer.classList.add("main__container");

  const content = document.createElement("div");
  content.classList.add("main__content");

  const h1 = document.createElement("h1");
  h1.textContent = "Down's Syndrome";

  const h2 = document.createElement("h2");
  h2.textContent = "Assistant";

  const p = document.createElement("p");
  p.textContent = "Bridging Smiles and Solutions.";

  const button = document.createElement("button");
  button.classList.add("main__btn");
  const buttonLink = document.createElement("a");
  buttonLink.href = "#";
  buttonLink.textContent = "Get Started";
  button.appendChild(buttonLink);

  content.appendChild(h1);
  content.appendChild(h2);
  content.appendChild(p);
  content.appendChild(button);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("main__img--container");
  const img = document.createElement("img");
  img.id = "main__img";
  img.src = "../../../img/pic1.svg";
  imgContainer.appendChild(img);

  heroContainer.appendChild(content);
  heroContainer.appendChild(imgContainer);

  heroSection.appendChild(heroContainer);

  return heroSection;
}
