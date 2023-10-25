// This file contains the frontend logic of the website

$(document).ready(function() {
    // Function to get Beijing Roast Duck information from the backend API
    function getBeijingRoastDuckInfo() {
        // Send AJAX request to the backend API
        $.ajax({
            url: '/api/beijing-roast-duck',
            method: 'GET',
            success: function(response) {
                // Display the Beijing Roast Duck information on the homepage
                displayHomepageInfo(response);
            },
            error: function(error) {
                // Display an error message to the user
                $('#homepage-error').text('Error retrieving Beijing Roast Duck information. Please try again later.');
                console.log('Error:', error);
            }
        });
    }

    // Function to display the Beijing Roast Duck information on the homepage
    function displayHomepageInfo(data) {
        // Display the image
        $('#homepage-image').attr('src', data.image);

        // Display the introduction and history
        $('#homepage-intro').text(data.intro);
        $('#homepage-history').text(data.history);

        // Display the menu and packages
        $('#homepage-menu').text(data.menu);
        $('#homepage-packages').text(data.packages);
    }

    // Function to get user reviews from the backend API
    function getUserReviews() {
        // Send AJAX request to the backend API
        $.ajax({
            url: '/api/user-reviews',
            method: 'GET',
            success: function(response) {
                // Display the user reviews on the homepage
                displayUserReviews(response);
            },
            error: function(error) {
                // Display an error message to the user
                $('#reviews-error').text('Error retrieving user reviews. Please try again later.');
                console.log('Error:', error);
            }
        });
    }

    // Function to display the user reviews on the homepage
    function displayUserReviews(reviews) {
        var reviewsHtml = '';

        // Generate HTML for each review
        for (var i = 0; i < reviews.length; i++) {
            var review = reviews[i];
            reviewsHtml += '<div class="review">';
            reviewsHtml += '<h3>' + review.title + '</h3>';
            reviewsHtml += '<p>' + review.content + '</p>';
            reviewsHtml += '</div>';
        }

        // Append the reviews HTML to the reviews container
        $('#reviews').html(reviewsHtml);
    }

    // Call the functions to get the Beijing Roast Duck information and user reviews
    getBeijingRoastDuckInfo();
    getUserReviews();
});
