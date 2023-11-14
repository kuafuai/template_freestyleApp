// script.js
document.addEventListener("DOMContentLoaded", function() {
  // Initialize the image carousel
  var carouselIndex = 0;
  var carouselImages = document.getElementsByClassName("carousel-image");
  carouselImages[carouselIndex].style.display = "block";

  // Start the automatic image carousel
  setInterval(function() {
    carouselImages[carouselIndex].style.display = "none";
    carouselIndex = (carouselIndex + 1) % carouselImages.length;
    carouselImages[carouselIndex].style.display = "block";
  }, 3000);

  // Add click event listeners to the expand/collapse buttons
  var expandButtons = document.getElementsByClassName("expand-button");
  for (var i = 0; i < expandButtons.length; i++) {
    expandButtons[i].addEventListener("click", function() {
      var content = this.nextElementSibling;
      if (content.style.display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  }
});
