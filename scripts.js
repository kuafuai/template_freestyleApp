// This file contains the JavaScript code for the system.

// Add event listeners to form submit buttons
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // Replace with your code to send data to the server
        console.log(data);
    });
});
