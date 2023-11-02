// Import required modules and libraries
const express = require('express');
const controller = require('./controllers');

// Create a router instance
const router = express.Router();

// Define request handling functions for different paths
router.get('/assets', controller.viewAssets);
router.post('/assets', controller.addAsset);
router.get('/cashflow', controller.calculateCashFlow);
router.get('/investment', controller.predictInvestmentReturns);

// Default route handler for non-existent routes
router.use((req, res) => {
  res.status(404).send('Not Found');
});

// Export the router instance
module.exports = router;
