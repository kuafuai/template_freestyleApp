// This is the JavaScript file for the Anhui University Zhejiang Alumni Association promotional webpage

// Add event listeners to navigation links
document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = link.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});