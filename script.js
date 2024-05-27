/* script.js */
/* This file is responsible for handling the interactive logic of the clothing store webpage. */

function searchClothing() {
    var searchInput = document.getElementById("searchInput").value;
    // Perform clothing search based on searchInput
    // Display search results
    console.log("Performing clothing search for: " + searchInput);
}

function openModal(clothingDetails) {
    var modal = document.getElementById("clothingDetailsModal");
    var clothingDetailsElement = document.getElementById("clothingDetails");
    if (clothingDetails) {
        clothingDetailsElement.innerHTML = clothingDetails;
        modal.style.display = "block";
    } else {
        console.error("Error: clothingDetails is empty or undefined");
    }
}

function closeModal() {
    var modal = document.getElementById("clothingDetailsModal");
    if (modal) {
        modal.style.display = "none";
    } else {
        console.error("Error: clothingDetailsModal element not found");
    }
}

// Add event listeners to each clothing image
var clothingImages = document.getElementsByTagName("img");
for (var i = 0; i < clothingImages.length; i++) {
    clothingImages[i].addEventListener("click", function() {
        var clothingDetails = this.alt + " Details";
        openModal(clothingDetails);
    });
}
