function goToCustomization() {
    if (pageExists("customization.html")) {
        window.location.href = "customization.html";
    } else {
        displayErrorMessage("The customization page does not exist.");
    }
}

function goToGuide() {
    if (pageExists("guide.html")) {
        window.location.href = "guide.html";
    } else {
        displayErrorMessage("The guide page does not exist.");
    }
}

function pageExists(page) {
    // Check if the page exists by making a HEAD request
    var xhr = new XMLHttpRequest();
    xhr.open("HEAD", page, false);
    xhr.send();
    return xhr.status != 404;
}

function displayErrorMessage(message) {
    // Display the error message to the user
    alert(message);
}
