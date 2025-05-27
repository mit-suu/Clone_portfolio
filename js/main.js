//menu
const menu = document.querySelector(".navbar--links");
const menuButton = document.querySelector(".navbar--icons");
const overlay = document.getElementById("overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar--open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar--open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});
