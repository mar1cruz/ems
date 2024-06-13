const btnTryForFree = document.querySelector(".button-link");
const closePopupBtn = document.querySelector(".close-btn");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");

window.addEventListener("click", (e) => {
  if (!popup.contains(e.target) && !btnTryForFree.contains(e.target)) {
    popup.classList.remove("active");
    overlay.classList.remove("active");
  }
});

btnTryForFree.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.classList.add("active");
  overlay.classList.add("active");
});

closePopupBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.classList.remove("active");
  overlay.classList.remove("active");
});
