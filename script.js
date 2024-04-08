// script.js
// Add event listeners to navigation links
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("nav ul li a");
    links.forEach(function(link) {
        link.addEventListener("click", navigate);
    });
});

// Handle navigation
function navigate(event) {
    event.preventDefault();
    var target = event.target.getAttribute("href");
    var section = document.querySelector(target);
    section.scrollIntoView({ behavior: "smooth" });
}
