// Accept Page Logic
window.addEventListener("load", function() {
    // Send request to get available drivers data
    var driversRequest = new XMLHttpRequest();
    driversRequest.open("GET", "/api/availableDrivers", true);
    driversRequest.onreadystatechange = function() {
        if (driversRequest.readyState === 4 && driversRequest.status === 200) {
            var driversData = JSON.parse(driversRequest.responseText);
            // Display available drivers data on the page
            displayAvailableDrivers(driversData);
        }
    };
    driversRequest.send();
});

function displayAvailableDrivers(driversData) {
    // Display available drivers data on the page
}

document.getElementById("acceptDriverForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var driverId = document.getElementById("driverId").value;
    // Send request to accept driver
    var acceptDriverRequest = new XMLHttpRequest();
    acceptDriverRequest.open("POST", "/api/acceptDriver", true);
    acceptDriverRequest.setRequestHeader("Content-Type", "application/json");
    acceptDriverRequest.onreadystatechange = function() {
        if (acceptDriverRequest.readyState === 4) {
            if (acceptDriverRequest.status === 200) {
                // Driver accepted successfully
                var response = JSON.parse(acceptDriverRequest.responseText);
                // Display success message
                alert("Driver accepted successfully.");
                // Refresh available drivers data
                // displayAvailableDrivers(driversData);
            } else {
                // Driver acceptance failed
                alert("Failed to accept driver. Please try again.");
            }
        }
    };
    acceptDriverRequest.send(JSON.stringify({ driverId: driverId }));
});

// Add logic for driver signing, cargo transportation, and cargo signing
