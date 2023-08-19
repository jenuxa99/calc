"use strict";

const allOper = document.querySelectorAll(".operator__btn");
const allNum = document.querySelectorAll(".num__btn");
const render = document.querySelector("#enter");
const del = document.querySelector("#del");
const monitor = document.querySelector(".monitor");

let temp = "";
let alpha = "";
let beta = "";
let result = 0;

allNum.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (!temp) {
      monitor.textContent = alpha += e.target.value;
    } else {
      monitor.textContent = beta += e.target.value;
    }
  });

  del.addEventListener("click", () => {
    temp = "";
    alpha = "";
    beta = "";
    monitor.textContent = 0;
  });

  render.addEventListener("click", () => {
    if (temp === 5) {
      result = parseFloat(alpha) - parseFloat(beta);
      monitor.textContent = result.toFixed(5);
    } else if (temp === 1) {
      result = parseFloat(alpha) + parseFloat(beta);
      monitor.textContent = result.toFixed(5);
    } else if (temp === 2) {
      result = parseFloat(alpha) / parseFloat(beta);
      monitor.textContent = result.toFixed(5);
    } else if (temp === 3) {
      result = parseFloat(alpha) * parseFloat(beta);
      monitor.textContent = result.toFixed(5);
    } else if (temp === 4) {
      result = (parseFloat(alpha) * parseFloat(beta)) / 100;
      monitor.textContent = result.toFixed(5);
    }
  });
});

allOper.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.value === "-") {
      temp = 5;
    } else if (e.target.value === "+") {
      temp = 1;
    } else if (e.target.value === "/") {
      temp = 2;
    } else if (e.target.value === "*") {
      temp = 3;
    } else if (e.target.value === "%") {
      temp = 4;
    }
  });
});
