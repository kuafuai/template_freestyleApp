// submit.js
// Handle submit button click event
document.getElementById("submitButton").addEventListener("click", function() {
    var name = document.getElementById("nameInput").value;
    var gender = document.getElementById("genderInput").value;
    var age = document.getElementById("ageInput").value;
    var university = document.getElementById("universityInput").value;

    // Perform input validation
    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (gender === "") {
        alert("Please select your gender");
        return;
    }

    if (age === "" || isNaN(age)) {
        alert("Please enter a valid age");
        return;
    }

    if (university === "") {
        alert("Please enter your university");
        return;
    }

    // Perform application submission logic
    // ...

    // Display success message
    alert("Application submitted successfully");

    // Clear input fields
    document.getElementById("nameInput").value = "";
    document.getElementById("genderInput").value = "";
    document.getElementById("ageInput").value = "";
    document.getElementById("universityInput").value = "";
});