// This file contains the backend API logic for retrieving the user reviews

// Import necessary modules and dependencies
const express = require('express');
const router = express.Router();

// Define the route for getting the user reviews
router.get('/', (req, res) => {
    // Retrieve the user reviews from the database or any other data source
    const userReviews = [
        {
            title: 'Great experience',
            content: 'I had a great experience at the Beijing Roast Duck restaurant. The food was delicious and the service was excellent.'
        },
        {
            title: 'Highly recommended',
            content: 'I highly recommend the Beijing Roast Duck restaurant. The roast duck is amazing and the atmosphere is cozy.'
        }
    ];

    // Send the user reviews as the response
    res.json(userReviews);
});

// Export the router
module.exports = router;
