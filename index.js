const btnTryForFree = document.querySelector(".button-link");
const closePopupBtn = document.querySelector(".close-btn");
const popup = document.querySelector(".popup");

window.addEventListener("click", (e) => {
  if (!popup.contains(e.target) && !btnTryForFree.contains(e.target)) {
    popup.classList.remove("active");
  }
});

btnTryForFree.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.classList.add("active");
});

closePopupBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.classList.remove("active");
});
