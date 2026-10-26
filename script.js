
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const plantButton = document.getElementById("plantButton");
const treeCount = document.getElementById("treeCount");
const year = document.getElementById("year");

// Display the current year
year.textContent = new Date().getFullYear();

// Open and close the mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the navigation after selecting a link
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Count tree pledges during the current page session
let pledgedTrees = 0;

plantButton.addEventListener("click", () => {
  pledgedTrees++;
  treeCount.textContent = pledgedTrees;

  plantButton.textContent = "Thank you for pledging! 🌱";

  setTimeout(() => {
    plantButton.textContent = "+ Pledge a Tree";
  }, 1200);
});
