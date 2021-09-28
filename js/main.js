const toggleBtn = document.querySelector(".cancel__btn");
const blackbg = document.querySelector(".main__blackbg");
const popup = document.querySelector(".main__popup");

toggleBtn.addEventListener("click", () => {
  blackbg.classList.toggle("hidden");
  popup.classList.toggle("hidden");
  //   document.querySelector("body").style.overflow = "scroll";
});
