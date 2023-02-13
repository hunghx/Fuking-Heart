const heart = document.querySelector(".heart");
const img = document.querySelector(".img");
const btn = document.querySelector(".btn");
document.addEventListener("click", function () {
  heart.style.display = "block";
  img.style.display = "none";
  btn.style.display = "none";
});
