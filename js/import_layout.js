document.getElementById("import-layout-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form data
    var buildingName = document.getElementById("building-name").value;
    var layoutInfo = document.getElementById("layout-info").value;
    
    // Validate form data
    if (buildingName.trim() === "" || layoutInfo.trim() === "") {
        // Display error message if any field is empty
        document.getElementById("error-message").textContent = "Please fill in all fields.";
        return;
    }
    
    // Send form data to backend for processing
    fetch("/process-form", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            buildingName: buildingName,
            layoutInfo: layoutInfo
        })
    })
    .then(function(response) {
        if (response.ok) {
            // Display success message
            document.getElementById("success-message").textContent = "Form submitted successfully.";
        } else {
            // Display error message if backend processing fails
            document.getElementById("error-message").textContent = "An error occurred during form submission.";
        }
    })
    .catch(function(error) {
        // Display error message if there is a network error
        document.getElementById("error-message").textContent = "An error occurred during form submission.";
    });
});
