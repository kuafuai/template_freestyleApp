// This file contains the backend API logic for retrieving the Beijing Roast Duck information

// Import necessary modules and dependencies
const express = require('express');
const router = express.Router();

// Define the route for getting the Beijing Roast Duck information
router.get('/', (req, res) => {
    // Retrieve the Beijing Roast Duck information from the database or any other data source
    const beijingRoastDuckInfo = {
        image: 'path/to/image.jpg',
        intro: 'Introduction of Beijing Roast Duck',
        history: 'History of Beijing Roast Duck',
        menu: 'Menu of Beijing Roast Duck',
        packages: 'Packages of Beijing Roast Duck'
    };

    // Send the Beijing Roast Duck information as the response
    res.json(beijingRoastDuckInfo);
});

// Export the router
module.exports = router;
