// Function to delete an image
function deleteImage(imagePath) {
    // Send a POST request to the server to delete the image
    fetch('/delete_image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'image_path=' + encodeURIComponent(imagePath)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('An error occurred while deleting the image');
        }
        return response.json();
    })
    .then(data => {
        // Display a success message
        alert(data.message);

        // Remove the deleted image from the page
        var imageWrapper = document.querySelector('.image-wrapper');
        if (imageWrapper) {
            imageWrapper.parentNode.removeChild(imageWrapper);
        }

        // Update the image count
        var countElement = document.getElementById('count');
        if (countElement) {
            countElement.textContent = parseInt(countElement.textContent) - 1;
        }
    })
    .catch(error => {
        // Display an error message
        alert(error.message);
    });
}
