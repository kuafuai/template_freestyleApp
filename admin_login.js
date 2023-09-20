// JavaScript file for handling the admin login functionality
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Send a request to the backend API with the username and password
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            // Handle the response to determine if the login was successful or not
            if (response.success) {
                // Redirect to the admin dashboard
                window.location.href = "/admin/dashboard";
            } else {
                // Display an error message
                document.getElementById("errorMessage").innerText = response.message;
            }
        }
    };
    var data = JSON.stringify({ username: username, password: password });
    xhr.send(data);
});
