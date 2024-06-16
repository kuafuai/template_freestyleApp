// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the asset form element
    var assetForm = document.getElementById("assetForm");
    
    // Add event listener for form submission
    assetForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get the input values
        var assetNumber = document.getElementById("assetNumber").value;
        var assetName = document.getElementById("assetName").value;
        var assetSpec = document.getElementById("assetSpec").value;
        var purchaseDate = document.getElementById("purchaseDate").value;
        var purchasePrice = document.getElementById("purchasePrice").value;
        
        // Validate the input values
        if (validateInput(assetNumber, assetName, assetSpec, purchaseDate, purchasePrice)) {
            // Create a new asset object
            var asset = {
                assetNumber: assetNumber,
                assetName: assetName,
                assetSpec: assetSpec,
                purchaseDate: purchaseDate,
                purchasePrice: purchasePrice
            };
            
            // Add the asset to the asset list
            addAssetToList(asset);
            
            // Clear the form inputs
            clearFormInputs();
        }
    });
});

// Function to validate the input values
function validateInput(assetNumber, assetName, assetSpec, purchaseDate, purchasePrice) {
    // Validate asset number
    if (assetNumber.trim() === "") {
        displayValidationError("assetNumber", "Please enter a valid asset number.");
        return false;
    } else {
        clearValidationError("assetNumber");
    }
    
    // Validate asset name
    if (assetName.trim() === "") {
        displayValidationError("assetName", "Please enter a valid asset name.");
        return false;
    } else {
        clearValidationError("assetName");
    }
    
    // Validate asset specification
    if (assetSpec.trim() === "") {
        displayValidationError("assetSpec", "Please enter a valid asset specification.");
        return false;
    } else {
        clearValidationError("assetSpec");
    }
    
    // Validate purchase date
    if (purchaseDate.trim() === "") {
        displayValidationError("purchaseDate", "Please enter a valid purchase date.");
        return false;
    } else {
        clearValidationError("purchaseDate");
    }
    
    // Validate purchase price
    if (isNaN(purchasePrice) || purchasePrice <= 0) {
        displayValidationError("purchasePrice", "Please enter a valid purchase price.");
        return false;
    } else {
        clearValidationError("purchasePrice");
    }
    
    return true;
}

// Function to display validation error message
function displayValidationError(inputId, errorMessage) {
    var inputElement = document.getElementById(inputId);
    var errorElement = document.createElement("span");
    errorElement.className = "error-message";
    errorElement.textContent = errorMessage;
    
    var parentElement = inputElement.parentElement;
    parentElement.appendChild(errorElement);
}

// Function to clear validation error message
function clearValidationError(inputId) {
    var inputElement = document.getElementById(inputId);
    var parentElement = inputElement.parentElement;
    var errorElement = parentElement.querySelector(".error-message");
    
    if (errorElement) {
        parentElement.removeChild(errorElement);
    }
}

// Function to add the asset to the asset list
function addAssetToList(asset) {
    // Get the asset table body element
    var assetTableBody = document.querySelector("#assetTable tbody");
    
    // Create a new table row
    var row = document.createElement("tr");
    
    // Create table cells for each asset property
    var assetNumberCell = document.createElement("td");
    assetNumberCell.textContent = asset.assetNumber;
    
    var assetNameCell = document.createElement("td");
    assetNameCell.textContent = asset.assetName;
    
    var assetSpecCell = document.createElement("td");
    assetSpecCell.textContent = asset.assetSpec;
    
    var purchaseDateCell = document.createElement("td");
    purchaseDateCell.textContent = asset.purchaseDate;
    
    var purchasePriceCell = document.createElement("td");
    purchasePriceCell.textContent = asset.purchasePrice;
    
    var actionsCell = document.createElement("td");
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
        editAsset(asset);
    });
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        deleteAsset(asset);
    });
    
    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);
    
    // Append the cells to the row
    row.appendChild(assetNumberCell);
    row.appendChild(assetNameCell);
    row.appendChild(assetSpecCell);
    row.appendChild(purchaseDateCell);
    row.appendChild(purchasePriceCell);
    row.appendChild(actionsCell);
    
    // Append the row to the asset table body
    assetTableBody.appendChild(row);
}

// Function to clear the form inputs
function clearFormInputs() {
    document.getElementById("assetNumber").value = "";
    document.getElementById("assetName").value = "";
    document.getElementById("assetSpec").value = "";
    document.getElementById("purchaseDate").value = "";
    document.getElementById("purchasePrice").value = "";
}

// Function to edit an asset
function editAsset(asset) {
    // TODO: Implement edit functionality
    console.log("Editing asset:", asset);
}

// Function to delete an asset
function deleteAsset(asset) {
    // TODO: Implement delete functionality
    console.log("Deleting asset:", asset);
}
