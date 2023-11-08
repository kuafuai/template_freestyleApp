// main.js
// Handle navbar click event
document.getElementById("navbar").addEventListener("click", function(event) {
    var target = event.target;
    if (target.tagName === "BUTTON") {
        var page = target.getAttribute("data-page");
        loadPage(page);
    }
});

// Load page content
function loadPage(page) {
    var content = document.getElementById("content");
    var info = document.getElementById("info");

    // Clear existing content
    content.innerHTML = "";
    info.innerHTML = "";

    // Load page content based on page parameter
    switch (page) {
        case "login":
            loadLoginPage(content);
            break;
        case "register":
            loadRegisterPage(content);
            break;
        case "submit":
            loadSubmitPage(content);
            break;
        case "query":
            loadQueryPage(content);
            break;
        default:
            loadHomePage(content);
            break;
    }
}

// Load login page content
function loadLoginPage(content) {
    content.innerHTML = "<h1>Login Page</h1>";
}

// Load register page content
function loadRegisterPage(content) {
    content.innerHTML = "<h1>Register Page</h1>";
}

// Load submit page content
function loadSubmitPage(content) {
    content.innerHTML = "<h1>Submit Page</h1>";
}

// Load query page content
function loadQueryPage(content) {
    content.innerHTML = "<h1>Query Page</h1>";
}

// Load home page content
function loadHomePage(content) {
    content.innerHTML = "<h1>Home Page</h1>";
}