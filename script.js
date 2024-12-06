const mobileMenuFeaturesButton = document.getElementById(
  "mobile-menu-features"
);
const body = document.body;

const overlay = document.getElementById("website-overlay");

const mobileMenu = document.getElementById("mobile-menu-container");

const mobileMenuHamburger = document.getElementById("mobile-menu-hamburger");
const mobileMenuClose = document.getElementById("mobile-menu-close");

const mobileMenuCompanyButton = document.getElementById("mobile-menu-company");

const featuresContent = document.getElementById("features-content");
const companyContent = document.getElementById("company-content");

const featuresArrow = document.getElementById("features-arrow-icon");
const companyArrow = document.getElementById("company-arrow-icon");

mobileMenuHamburger.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hide-menu")) {
    mobileMenu.classList.add("show-menu");
    mobileMenu.classList.remove("hide-menu");

    overlay.classList.add("overlay-show");
    overlay.classList.remove("overlay-hide");
    body.classList.add("no-scroll");
  }
});

mobileMenuClose.addEventListener("click", () => {
  if (mobileMenu.classList.contains("show-menu")) {
    mobileMenu.classList.add("hide-menu");
    mobileMenu.classList.remove("show-menu");

    overlay.classList.remove("overlay-show");
    overlay.classList.add("overlay-hide");

    body.classList.remove("no-scroll");
  }
});

mobileMenuFeaturesButton.addEventListener("click", () => {
  if (featuresArrow.classList.contains("rotate")) {
    featuresArrow.classList.remove("rotate");
    featuresContent.style.display = "none";
  } else {
    featuresArrow.classList.add("rotate");
    featuresContent.style.display = "block";
  }
});

mobileMenuCompanyButton.addEventListener("click", () => {
  if (companyArrow.classList.contains("rotate")) {
    companyArrow.classList.remove("rotate");
    companyContent.style.display = "none";
  } else {
    companyArrow.classList.add("rotate");

    companyContent.style.display = "block";
  }
});
