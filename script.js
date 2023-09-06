document.addEventListener("DOMContentLoaded", function () {
  // Get all the navigation links
  const navLinks = document.querySelectorAll("nav ul li a");

  // Add a click event listener to each navigation link
  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Get the target section's ID from the link's href attribute
      const targetId = this.getAttribute("href").substring(1);

      // Find the target section by its ID
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Calculate the offset to account for the fixed header
        const offset = 70; // Adjust this value if needed

        // Scroll to the target section with smooth behavior
        window.scrollTo({
          top: targetSection.offsetTop - offset,
          behavior: "smooth",
        });
      }
    });
  });
});
