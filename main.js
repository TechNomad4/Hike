AOS.init();

const progress = document.querySelector(".progress div");
const start = document.querySelector("[data-num='start']");
const first = document.querySelectorAll("#scroll");
const second = document.querySelector("[data-num='2']");
const third = document.querySelector("[data-num='3']");

start.addEventListener("click", () => {
  progress.style.top = "0%";
});

first.forEach((item) => {
  item.addEventListener("click", () => {
    progress.style.top = "20%";
  });
});

second.addEventListener("click", () => {
  progress.style.top = "45%";
});

third.addEventListener("click", () => {
  progress.style.top = "75%";
});

window.onload = () => {
  document.documentElement.scrollTop = 0;
};

const menuBtn = document.querySelector(".menuBtn");
const menuBurger = document.querySelector(".menuBurger");
const navList = document.querySelector("nav ul");
const socials = document.querySelectorAll(".sideBar a img");

menuBtn.addEventListener("click", () => {
  menuBurger.classList.toggle("open");
  navList.classList.toggle("hide");
  socials.forEach((item) => {
    item.classList.toggle("hide");
    console.log(item);
  });
  document.body.classList.toggle("hidden");
});
