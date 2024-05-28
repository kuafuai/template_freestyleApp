// script.js
// Add any necessary JavaScript code for interactivity

// Example: Toggle content visibility
function toggleContent(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
