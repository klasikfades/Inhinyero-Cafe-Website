const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".menu-card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.dataset.category;
    cards.forEach(card => {
      card.classList.toggle("hidden", card.dataset.category !== category);
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
