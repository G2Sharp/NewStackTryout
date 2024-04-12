//components
import Navbar from "./components/navbar/Navbar.js";
import Hero from "./components/hero/Hero.js";
import Service from "./components/Services/Service.js";

// import Sponsor from "./components/sponsor/Sponsor.js";
import Footer from "./components/ftr/Footer.js";
import Products from "./components/products/Product.js";

// Get container elements
const root = document.getElementById("root");

window.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  root.appendChild(Navbar());
  switch (currentPath) {
    case "/products":
      root.appendChild(Products());
      break;

    case "/services":
      root.appendChild(Service());
      break;

    default:
      root.appendChild(Hero());
      root.appendChild(Service("hero"));
      break;
  }
  root.appendChild(Footer());
});
