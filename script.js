// script.js
function showPage(page) {
    var register = document.getElementById("register");
    var demo = document.getElementById("demo");
    var qa = document.getElementById("qa");

    register.style.display = "none";
    demo.style.display = "none";
    qa.style.display = "none";

    if (page === "register") {
        register.style.display = "block";
    } else if (page === "demo") {
        demo.style.display = "block";
    } else if (page === "qa") {
        qa.style.display = "block";
    }
}

function searchDemo() {
    var keyword = document.getElementById("searchDemo").value;
    // Perform search and display results in demoResults div
    var demoResults = document.getElementById("demoResults");
    // CODE to perform search and display results
    demoResults.innerHTML = "Search results for: " + keyword;
}

function askQuestion() {
    var question = document.getElementById("question").value;
    // Perform question search and display results in qaResults div
    var qaResults = document.getElementById("qaResults");
    // CODE to perform question search and display results
    qaResults.innerHTML = "Question results for: " + question;
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var model = document.getElementById("model").value;
    var name = document.getElementById("name").value;
    var spec = document.getElementById("spec").value;
    var releaseDate = document.getElementById("releaseDate").value;
    var price = document.getElementById("price").value;
    // Submit registration form data to server
    // CODE to submit form data to server
    var formData = {
        model: model,
        name: name,
        spec: spec,
        releaseDate: releaseDate,
        price: price
    };
    // Example code to send form data to server using fetch API
    fetch("https://example.com/registration", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(function(response) {
        // Handle response from server
        console.log(response);
    })
    .catch(function(error) {
        // Handle error
        console.error(error);
    });
});