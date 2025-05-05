document.addEventListener("DOMContentLoaded", function () {
  // Theme switcher code
  const themeBtn = document.querySelector(".theme-switch button");

  // Check if user previously selected dark mode
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";

  // If dark mode was previously enabled, turn it on
  if (isDarkMode) {
    document.body.classList.add("dark-theme");
    themeBtn.textContent = "Switch to Light Mode";
  } else {
    themeBtn.textContent = "Switch to Dark Mode";
  }

  // Toggle dark/light mode when button is clicked
  themeBtn.addEventListener("click", function () {
    // Toggle dark class on body
    document.body.classList.toggle("dark-theme");

    // Update button text and localStorage
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("darkMode", "enabled");
      themeBtn.textContent = "Switch to Light Mode";
    } else {
      localStorage.removeItem("darkMode");
      themeBtn.textContent = "Switch to Dark Mode";
    }
  });

  // Mobile Navigation
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const navList = document.querySelector(".nav ul");

  mobileNavToggle.addEventListener("click", function () {
    navList.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("active");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav") && !e.target.closest(".mobile-nav-toggle")) {
      navList.classList.remove("active");
    }
  });
});
