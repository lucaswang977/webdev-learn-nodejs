import "ionicons/dist/ionicons/ionicons.esm.js"; // Import ES module version

const overlay = document.querySelector("[data-overlay]");
const mobileMenu = document.querySelector("[data-mobile-menu");
const mobileMenuOpenBtn = document.querySelector("[data-mobile-menu-open-btn]");
const mobileMenuCloseBtn = document.querySelector(
  "[data-mobile-menu-close-btn"
);

mobileMenuOpenBtn.addEventListener("click", () => {
  overlay.classList.add("active");
  mobileMenu.classList.add("active");
});

mobileMenuCloseBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
  mobileMenu.classList.remove("active");
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  mobileMenu.classList.remove("active");
});
