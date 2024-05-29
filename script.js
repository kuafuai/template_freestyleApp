// Add an event listener to adjust the background image size when the window is resized
window.addEventListener("resize", function() {
  // Get the dimensions of the window
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  
  // Get the background image element
  var backgroundImage = document.getElementById("background-image");
  
  // Set the background image size to cover the entire div
  backgroundImage.style.backgroundSize = windowWidth + "px " + windowHeight + "px";
});
