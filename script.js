// This file contains the JavaScript code for the website

// Add event listeners to the navigation menu links
document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll("ul li a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", navigate);
  }
});

// Function to handle navigation
function navigate(event) {
  event.preventDefault();
  var href = this.getAttribute("href");
  loadPage(href);
}

// Function to load a page
function loadPage(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.querySelector(".container").innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}
