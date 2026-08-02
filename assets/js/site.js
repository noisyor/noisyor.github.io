const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#site-nav");
const navLinks = [...document.querySelectorAll('#site-nav a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];
const publicationToggle = document.querySelector("[data-publications-toggle]");
const morePublications = [...document.querySelectorAll("[data-more-publication]")];

const closeMenu = () => {
  menuButton?.setAttribute("aria-expanded", "false");
  navigation?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });

const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 16);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => sectionObserver.observe(section));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

publicationToggle?.addEventListener("click", () => {
  const isExpanded = publicationToggle.getAttribute("aria-expanded") === "true";
  publicationToggle.setAttribute("aria-expanded", String(!isExpanded));
  morePublications.forEach((publication) => {
    publication.hidden = isExpanded;
    if (!isExpanded) requestAnimationFrame(() => publication.classList.add("is-visible"));
  });
  publicationToggle.querySelector("span:first-child").textContent = isExpanded ? "Show all publications" : "Show fewer publications";
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
