const hamburger = document.querySelector(".hamburger");
const mainList = document.querySelector(".sidebar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mainList.classList.toggle("active");
});
document.querySelectorAll(".nav-links").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mainList.classList.remove("active");
  })
);
