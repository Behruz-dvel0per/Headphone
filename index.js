const buyBtn = document.querySelector(".card_btn");
const buyBtnG = document.querySelector(".card_btn_b");
const buyBtnB = document.querySelector(".card_btn_g");
const body = document.querySelector("body");
const check = document.querySelector(".green");
const close = document.querySelector(".closebtn");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const open = document.querySelector(".open");
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;

function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function() {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}
open.addEventListener("click", () => {
  main.classList.add("hide");
  footer.classList.add("hide");
});

close.addEventListener("click", () => {
  main.classList.remove("hide");
  footer.classList.remove("hide");
});

check.classList.add("hide");

buyBtn.addEventListener("click", () => {
  body.classList.add("hide");
  check.classList.remove("hidden");
  setTimeout(() => {
    body.classList.remove("hide");
    check.classList.add("hidden");
  }, 2000);
});
buyBtnB.addEventListener("click", () => {
  body.classList.add("hide");
  check.classList.remove("hidden");
  setTimeout(() => {
    body.classList.remove("hide");
    check.classList.add("hidden");
  }, 2000);
});
buyBtnG.addEventListener("click", () => {
  body.classList.add("hide");
  check.classList.remove("hidden");
  setTimeout(() => {
    body.classList.remove("hide");
    check.classList.add("hidden");
  }, 2000);
});

const info = document.querySelector(".info");
const lorem = document.querySelector(".lorem");
const infot = document.querySelector(".infot");
const battery = document.querySelector(".battery");
const bag = document.querySelector(".bag");
const beg = document.querySelector(".beg");
const use = document.querySelector(".use");
const tex = document.querySelector(".tex");

info.addEventListener("click", () => {
  lorem.classList.toggle("show");
});

infot.addEventListener("click", () => {
  battery.classList.toggle("show");
});

bag.addEventListener("click", () => {
  beg.classList.toggle("show");
});

use.addEventListener("click", () => {
  tex.classList.toggle("show");
});

