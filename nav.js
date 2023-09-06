// JavaScript for the Hamburger Menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-menu");
    const navList = document.getElementById("nav-list");
  
    hamburger.addEventListener("click", function () {
      navList.classList.toggle("active");
    });
  
    // Add a click event listener to close the menu when clicking anywhere outside of it
    document.addEventListener("click", function (event) {
      if (
        !navList.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        navList.classList.remove("active");
      }
    });
    
    // Prevent clicks inside the menu from closing it
    navList.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
  