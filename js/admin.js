// Admin Page Logic
window.addEventListener("load", function() {
    // Send request to get admin data
    var adminRequest = new XMLHttpRequest();
    adminRequest.open("GET", "/api/admin", true);
    adminRequest.onreadystatechange = function() {
        if (adminRequest.readyState === 4 && adminRequest.status === 200) {
            var adminData = JSON.parse(adminRequest.responseText);
            // Display admin data on the page
            displayAdmin(adminData);
        }
    };
    adminRequest.send();
});

function displayAdmin(adminData) {
    // Display admin data on the page
}

document.getElementById("addUserForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var userData = {
        // Get user data from form inputs
    };
    // Send request to add user
    var addUserRequest = new XMLHttpRequest();
    addUserRequest.open("POST", "/api/users", true);
    addUserRequest.setRequestHeader("Content-Type", "application/json");
    addUserRequest.onreadystatechange = function() {
        if (addUserRequest.readyState === 4) {
            if (addUserRequest.status === 201) {
                // User added successfully
                var response = JSON.parse(addUserRequest.responseText);
                // Display success message
                alert("User added successfully.");
                // Refresh admin data
                // displayAdmin(adminData);
            } else {
                // User addition failed
                alert("Failed to add user. Please try again.");
            }
        }
    };
    addUserRequest.send(JSON.stringify(userData));
});

// Add logic for editing and deleting users and roles
