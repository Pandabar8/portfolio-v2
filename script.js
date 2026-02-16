// ===== Scroll Reveal =====

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

const hiddenElements = document.querySelectorAll("section, footer");
hiddenElements.forEach((el) => observer.observe(el));

// ===== Mobile Navigation =====

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("#main-nav");

// Create overlay element for mobile nav
const overlay = document.createElement("div");
overlay.classList.add("nav-overlay");
document.body.appendChild(overlay);

function openNav() {
    nav.classList.add("nav--open");
    overlay.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}

function closeNav() {
    nav.classList.remove("nav--open");
    overlay.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.contains("nav--open");
    if (isOpen) {
        closeNav();
    } else {
        openNav();
    }
});

overlay.addEventListener("click", closeNav);

// Close nav when a link is clicked
nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
});

// Close nav on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("nav--open")) {
        closeNav();
        hamburger.focus();
    }
});

// ===== Dynamic Footer Year =====

const yearEl = document.getElementById("footer-year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
