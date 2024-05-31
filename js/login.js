// Login Page Logic
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Send login request
    var loginData = {
        username: username,
        password: password
    };
    var loginRequest = new XMLHttpRequest();
    loginRequest.open("POST", "/api/login", true);
    loginRequest.setRequestHeader("Content-Type", "application/json");
    loginRequest.onreadystatechange = function() {
        if (loginRequest.readyState === 4) {
            if (loginRequest.status === 200) {
                // Login successful
                var response = JSON.parse(loginRequest.responseText);
                var token = response.token;
                // Store token in local storage or session storage
                // Redirect to dashboard page
                window.location.href = "/dashboard.html";
            } else {
                // Login failed
                alert("Login failed. Please try again.");
            }
        }
    };
    loginRequest.send(JSON.stringify(loginData));
});
