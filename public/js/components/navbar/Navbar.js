export default function Navbar() {
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  const container = document.createElement("div");
  container.classList.add("navbar__container");

  const logo = document.createElement("a");
  logo.href = "/";
  logo.id = "navbar__logo";
  logo.innerHTML = '<i class="fa-solid fa-dna"></i>EMPATHEASE';

  const toggle = document.createElement("div");
  toggle.classList.add("navbar__toggle");
  toggle.id = "mobile-menu";
  toggle.innerHTML =
    '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';

  const ul = document.createElement("ul");
  ul.classList.add("navbar__menu");

  const items = ["Home", "Products", "Services"];
  items.forEach((itemText) => {
    const li = document.createElement("li");
    li.classList.add("navbar__item");

    const a = document.createElement("a");
    a.href = itemText === "Home" ? "/" : `/${itemText.toLowerCase()}`;
    a.classList.add("navbar__links");
    a.textContent = itemText;

    li.appendChild(a);
    ul.appendChild(li);
  });

  const signUpLi = document.createElement("li");
  signUpLi.classList.add("navbar__btn");

  const signUpLink = document.createElement("a");
  signUpLink.href = "/signup.html";
  signUpLink.classList.add("button");
  signUpLink.textContent = "Sign Up";

  signUpLi.appendChild(signUpLink);
  ul.appendChild(signUpLi);

  container.appendChild(logo);
  container.appendChild(toggle); // Append the toggle button to the container
  container.appendChild(ul);
  nav.appendChild(container);

  // Add click event listener to the mobile menu toggle button
  toggle.addEventListener("click", function () {
    // Toggle the 'is-active' class on the mobile menu toggle button
    toggle.classList.toggle("is-active");

    // Toggle the 'active' class on the menu links
    ul.classList.toggle("active");
  });

  return nav;
}
