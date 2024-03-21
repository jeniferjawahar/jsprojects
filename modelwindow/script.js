"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");

const btnsShowModel = document.querySelectorAll(".show-modal");

console.log(btnsShowModel);

const openModal = function () {
  console.log(`button clicked`);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsShowModel.length; i++) {
  btnsShowModel[i].addEventListener("click", openModal);
}

const clodeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModel.addEventListener("click", clodeModal);

overlay.addEventListener("click", clodeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) clodeModal();
});
