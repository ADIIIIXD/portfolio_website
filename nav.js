document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-menu");
  const navList = document.getElementById("nav-list");

  hamburger.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});
