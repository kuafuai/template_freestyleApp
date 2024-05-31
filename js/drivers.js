// Drivers Page Logic
window.addEventListener("load", function() {
    // Send request to get drivers data
    var driversRequest = new XMLHttpRequest();
    driversRequest.open("GET", "/api/drivers", true);
    driversRequest.onreadystatechange = function() {
        if (driversRequest.readyState === 4 && driversRequest.status === 200) {
            var driversData = JSON.parse(driversRequest.responseText);
            // Display drivers data on the page
            displayDrivers(driversData);
        }
    };
    driversRequest.send();
});

function displayDrivers(driversData) {
    // Display drivers data on the page
}

document.getElementById("addDriverForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var driverData = {
        // Get driver data from form inputs
    };
    // Send request to add driver
    var addDriverRequest = new XMLHttpRequest();
    addDriverRequest.open("POST", "/api/drivers", true);
    addDriverRequest.setRequestHeader("Content-Type", "application/json");
    addDriverRequest.onreadystatechange = function() {
        if (addDriverRequest.readyState === 4) {
            if (addDriverRequest.status === 201) {
                // Driver added successfully
                var response = JSON.parse(addDriverRequest.responseText);
                // Display success message
                alert("Driver added successfully.");
                // Refresh drivers data
                // displayDrivers(driversData);
            } else {
                // Driver addition failed
                alert("Failed to add driver. Please try again.");
            }
        }
    };
    addDriverRequest.send(JSON.stringify(driverData));
});

// Add logic for editing and deleting drivers
