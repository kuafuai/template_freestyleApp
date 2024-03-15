// This file contains the JavaScript code for the login page

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Validate the entered credentials
  if (username === "admin" && password === "password") {
    // Successful login
    window.location.href = "dashboard.html";
  } else {
    // Display error message
    document.getElementById("errorMessage").textContent = "Invalid username or password";
  }
});
