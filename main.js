// Function to validate the asset registration form
function validateForm() {
    // Get the form fields
    const assetNumber = document.getElementById("asset-number").value;
    const assetName = document.getElementById("asset-name").value;
    const assetSpecification = document.getElementById("asset-specification").value;
    const purchaseDate = document.getElementById("purchase-date").value;
    const purchasePrice = document.getElementById("purchase-price").value;

    // Validate asset number
    if (assetNumber.trim() === "") {
        alert("Please enter the asset number");
        return false;
    }

    // Validate asset name
    if (assetName.trim() === "") {
        alert("Please enter the asset name");
        return false;
    }

    // Validate asset specification
    if (assetSpecification.trim() === "") {
        alert("Please enter the asset specification");
        return false;
    }

    // Validate purchase date
    if (purchaseDate.trim() === "") {
        alert("Please enter the purchase date");
        return false;
    }

    // Validate purchase price
    if (purchasePrice.trim() === "") {
        alert("Please enter the purchase price");
        return false;
    }

    return true;
}

// Function to submit the asset registration form
function submitForm() {
    // Get the form data
    const assetNumber = document.getElementById("asset-number").value;
    const assetName = document.getElementById("asset-name").value;
    const assetSpecification = document.getElementById("asset-specification").value;
    const purchaseDate = document.getElementById("purchase-date").value;
    const purchasePrice = document.getElementById("purchase-price").value;

    // Create the form data object
    const formData = {
        assetNumber: assetNumber,
        assetName: assetName,
        assetSpecification: assetSpecification,
        purchaseDate: purchaseDate,
        purchasePrice: purchasePrice
    };

    // Send a POST request to the backend API with the form data
    fetch("/api/asset", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the backend API
        if (data.success) {
            alert("Asset registration successful");
            // Update the asset information list in the sidebar
            getAssetList();
        } else {
            alert("Asset registration failed");
        }
    })
    .catch(error => {
        alert("An error occurred during asset registration");
        console.error(error);
    });
}

// Function to get the asset information list from the backend API
function getAssetList() {
    // Send a GET request to the backend API to retrieve the asset information list
    fetch("/api/asset")
    .then(response => response.json())
    .then(data => {
        // Update the asset information list in the sidebar with the retrieved data
        const assetList = document.getElementById("asset-list");
        assetList.innerHTML = ""; // Clear the existing list

        data.forEach(asset => {
            const listItem = document.createElement("li");
            listItem.textContent = `${asset.assetNumber} - ${asset.assetName}`;
            assetList.appendChild(listItem);
        });
    })
    .catch(error => {
        alert("An error occurred while retrieving the asset information list");
        console.error(error);
    });
}

// Function to switch to another page
function switchPage(page) {
    // Switch to the specified page
    console.log(`Switching to ${page}`);
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
