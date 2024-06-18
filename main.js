// Function to get all power companies
function getAllCompanies() {
    // Send GET request to API endpoint to get all power companies
    // Display the list of companies in the company-list element
}

// Function to search power companies
function searchCompanies() {
    // Get the search input value
    // Send POST request to API endpoint to search power companies
    // Display the search results in the search-results element
}

// Function to get company website
function getCompanyWebsite(companyId) {
    // Send GET request to API endpoint to get company website
    // Display the company website in the company-website element
}

// Function to open company website
function openCompanyWebsite() {
    // Get the company website URL
    // Open the URL in a new tab or in the current tab
}

// Event listener for when the search button is clicked
document.getElementById("search-button").addEventListener("click", searchCompanies);

// Event listener for when the company name is clicked
document.getElementById("company-list").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        var companyId = event.target.getAttribute("data-id");
        getCompanyWebsite(companyId);
    }
});

// Event listener for when the open website button is clicked
document.getElementById("open-website-button").addEventListener("click", openCompanyWebsite);
