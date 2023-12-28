// script.js
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var captcha = document.getElementById("captcha").value;
    var rememberPassword = document.getElementById("rememberPassword").checked;

    // Validate username, password, and captcha
    if (username === "") {
        alert("Please enter your username");
        return;
    }
    if (password === "") {
        alert("Please enter your password");
        return;
    }
    if (captcha === "") {
        alert("Please enter the captcha");
        return;
    }

    // Perform login logic
    if (username === "admin" && password === "password" && captcha === "1234") {
        alert("Login successful");
        // Redirect the user to the home page
        window.location.href = "home.html";
    } else {
        alert("Invalid username, password, or captcha");
    }

    // Save password if rememberPassword is checked
    if (rememberPassword) {
        localStorage.setItem("password", password);
    }
}

// Handle "Forgot Password" link click event
var forgotPasswordLink = document.querySelector("a[href='forgot_password.html']");
forgotPasswordLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "forgot_password.html";
});