// JavaScript file for handling the admin dashboard functionality
// Display the content of the selected menu item in the content area
document.querySelectorAll(".nav-link").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        var url = this.getAttribute("href");
        
        // Send a request to the backend API to get the content for the selected menu item
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // Display the content in the content area
                document.getElementById("content-area").innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
