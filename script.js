// This file contains the logic for handling form submission and retrieving user inputs

function submitForm() {
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var id = document.getElementById("id").value;
    var time = document.getElementById("time").value;
    var instructor = document.getElementById("instructor").value;

    // Validate form inputs
    if (name === "" || contact === "" || id === "" || time === "" || instructor === "") {
        alert("Please fill in all fields");
        return;
    }

    // Validate contact format
    if (!validateContact(contact)) {
        alert("Please enter a valid contact number");
        return;
    }

    // Call backend API with the form data
    callBackendAPI(name, contact, id, time, instructor);
}

function validateContact(contact) {
    // Validate contact format (e.g. 123-456-7890)
    var regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(contact);
}

function callBackendAPI(name, contact, id, time, instructor) {
    // Make an AJAX request to the backend API with the form data
    // Replace the URL with the actual backend API endpoint
    var url = "https://example.com/api/appointment";
    var data = {
        name: name,
        contact: contact,
        id: id,
        time: time,
        instructor: instructor
    };

    // Send the data to the backend API
    // Replace the method and headers with the appropriate values
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        // Handle the response from the backend API
        console.log(data);
        alert("Appointment submitted successfully");
        // Redirect to confirmation page if desired
        // window.location.href = "confirmation.html";
    })
    .catch(error => {
        // Handle any errors that occur during the API request
        console.error(error);
        alert("An error occurred while submitting the appointment");
    });
}
