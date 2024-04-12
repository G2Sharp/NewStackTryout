// Footer.js
export default function Footer() {
  const footer = document.createElement("div");
  footer.classList.add("footer__container");

  const footerLinks = document.createElement("div");
  footerLinks.classList.add("footer__links");

  // Create first column of links
  const firstColumn = document.createElement("div");
  firstColumn.classList.add("footer__link--wrapper");

  const aboutUs = document.createElement("div");
  aboutUs.classList.add("footer__link--items");

  const aboutUsTitle = document.createElement("h2");
  aboutUsTitle.textContent = "About Us";
  aboutUs.appendChild(aboutUsTitle);

  const aboutUsLinks = [
    "How it works",
    "Testimonials",
    "Careers",
    "Investments",
    "Terms of Service",
  ];
  aboutUsLinks.forEach((linkText) => {
    const link = document.createElement("a");
    link.href = "/";
    link.textContent = linkText;
    aboutUs.appendChild(link);
  });

  firstColumn.appendChild(aboutUs);

  // Create second column of links
  const secondColumn = document.createElement("div");
  secondColumn.classList.add("footer__link--wrapper");

  const contactUs = document.createElement("div");
  contactUs.classList.add("footer__link--items");

  const contactUsTitle = document.createElement("h2");
  contactUsTitle.textContent = "Contact Us";
  contactUs.appendChild(contactUsTitle);

  const contactUsLinks = ["Contact", "Support", "Destinations", "Sponsorships"];
  contactUsLinks.forEach((linkText) => {
    const link = document.createElement("a");
    link.href = "/";
    link.textContent = linkText;
    contactUs.appendChild(link);
  });

  secondColumn.appendChild(contactUs);

  footerLinks.appendChild(firstColumn);
  footerLinks.appendChild(secondColumn);

  // Create social media section
  const socialMediaSection = document.createElement("section");
  socialMediaSection.classList.add("social__media");

  const socialMediaWrap = document.createElement("div");
  socialMediaWrap.classList.add("social__media--wrap");

  const footerLogo = document.createElement("div");
  footerLogo.classList.add("footer__logo");

  const logoLink = document.createElement("a");
  logoLink.href = "/";
  logoLink.id = "footer__logo";
  logoLink.innerHTML = '<i class="fa-solid fa-dna"></i>EMPATHEASE';
  footerLogo.appendChild(logoLink);

  const websiteRights = document.createElement("p");
  websiteRights.classList.add("website__rights");
  websiteRights.textContent =
    "© Empathease " + new Date().getFullYear() + ". All rights reserved";

  const socialIcons = document.createElement("div");
  socialIcons.classList.add("social__icons");

  const socialIconsLinks = [
    { icon: "fab fa-facebook", link: "/", label: "Facebook" },
    { icon: "fab fa-instagram", link: "/", label: "Instagram" },
    {
      icon: "fab fa-youtube",
      link: "/",
      label: "Youtube",
    },
    { icon: "fab fa-twitter", link: "/", label: "Twitter" },
    { icon: "fab fa-linkedin", link: "/", label: "LinkedIn" },
  ];

  socialIconsLinks.forEach(({ icon, link, label }) => {
    const socialIconLink = document.createElement("a");
    socialIconLink.classList.add("social__icon--link");
    socialIconLink.href = link;
    socialIconLink.target = "_blank";
    socialIconLink.setAttribute("aria-label", label);

    const socialIcon = document.createElement("i");
    const iconClasses = icon.split(" ");
    iconClasses.forEach((className) => socialIcon.classList.add(className)); // Add each part separately
    socialIconLink.appendChild(socialIcon);

    socialIcons.appendChild(socialIconLink);
  });

  socialMediaWrap.appendChild(footerLogo);
  socialMediaWrap.appendChild(websiteRights);
  socialMediaWrap.appendChild(socialIcons);

  socialMediaSection.appendChild(socialMediaWrap);

  footer.appendChild(footerLinks);
  footer.appendChild(socialMediaSection);

  return footer;
}
