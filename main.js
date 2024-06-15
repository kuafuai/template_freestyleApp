// Function to validate the asset registration form
function validateForm() {
    // Validate asset number, name, specification, purchase date, and purchase price
    // Return true if all fields are valid, otherwise return false
}

// Function to submit the asset registration form
function submitForm() {
    // Get the form data
    // Send a POST request to the backend API with the form data
    // Handle the response from the backend API
    // Update the asset information list in the sidebar
}

// Function to get the asset information list from the backend API
function getAssetList() {
    // Send a GET request to the backend API to retrieve the asset information list
    // Update the asset information list in the sidebar with the retrieved data
}

// Function to switch to another page
function switchPage(page) {
    // Switch to the specified page
}

// Event listener for form submission
document.getElementById("asset-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    if (validateForm()) {
        submitForm();
    }
});

// Event listener for page switch
document.getElementById("nav-link").addEventListener("click", function() {
    switchPage("other-page");
});

// Load the asset information list on page load
window.onload = function() {
    getAssetList();
};
