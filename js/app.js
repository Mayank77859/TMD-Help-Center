// Responsive Mobile Menu===============================================
// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const topnavControls = document.querySelector(".topnav__controls");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  topnavControls.classList.toggle("active");
}
// Closing Mobile Menu When link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  topnavControls.classList.remove("active");
}
// lock scroll