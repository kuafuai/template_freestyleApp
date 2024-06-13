// main.js
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners for destination buttons
    var destinationButtons = document.querySelectorAll(".destination a");
    destinationButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            var destinationId = button.getAttribute("href");
            // Check if the destinationId exists
            if (document.querySelector(destinationId)) {
                // Scroll to the destination section
                document.querySelector(destinationId).scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});