import "ionicons/dist/ionicons/ionicons.esm.js"; // Import ES module version

const overlay = document.querySelector("[data-overlay]");
const mobileMenu = document.querySelector("[data-mobile-menu");
const mobileMenuOpenBtn = document.querySelector("[data-mobile-menu-open-btn]");
const mobileMenuCloseBtn = document.querySelector(
  "[data-mobile-menu-close-btn"
);

const accordionBtns = document.querySelectorAll("[data-accordion-btn");
for (let btn of accordionBtns) {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.classList.toggle("active");
    const ionIcons = btn.querySelectorAll("ion-icon");
    for (let icon of ionIcons) {
      icon.classList.toggle("hidden");
    }

    for (let otherBtn of accordionBtns) {
      if (otherBtn !== btn) {
        if (otherBtn.nextElementSibling.classList.contains("active")) {
          otherBtn.nextElementSibling.classList.remove("active");
          const ionIcons = otherBtn.querySelectorAll("ion-icon");
          for (let icon of ionIcons) {
            icon.classList.toggle("hidden");
          }
        }
      }
    }
  });
}

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
