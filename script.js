function showNav() {
  document.getElementById("nav2").classList.add("active");
}
function hideNav() {
  document.getElementById("nav2").classList.remove("active");
}

const outerCarousel = document.querySelector(".outer-carousel");
const items = document.querySelectorAll(".items");
let currentIndex = 0;

function moveCarousel() {
  currentIndex = (currentIndex + 1) % items.length;
  const translateX = (-currentIndex * 90) / items.length; // Calculate percentage-based translation
  outerCarousel.style.transform = `translateX(${translateX}%)`;
}

setInterval(moveCarousel, 2000); // Move every 2 seconds
