// Import required modules and libraries
const model = require('./models');

// Create a controller instance
const controller = {};

// Method to add new fixed asset information
controller.addAsset = (req, res) => {
  try {
    // Extract asset information from request body
    const { serverModel, price, totalAmount, channel, prepaymentRatio, purchaseDate, purchaseChannel } = req.body;

    // Validate input
    if (!serverModel || !price || !totalAmount || !channel || !prepaymentRatio || !purchaseDate || !purchaseChannel) {
      throw new Error('Missing required fields');
    }

    // Add asset information to the database
    model.addAsset(serverModel, price, totalAmount, channel, prepaymentRatio, purchaseDate, purchaseChannel);

    // Send response
    res.status(200).json({ message: 'Asset added successfully' });
  } catch (error) {
    // Handle error
    res.status(400).json({ error: error.message });
  }
};

// Method to view detailed fixed asset information
controller.viewAssets = (req, res) => {
  try {
    // Retrieve detailed asset information from the database
    const assets = model.getAssets();

    // Send response
    res.status(200).json(assets);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Method to calculate monthly fund requirements based on monthly cash flow forecast
controller.calculateCashFlow = (req, res) => {
  try {
    // Extract monthly order income and other expenses from request query parameters
    const { monthlyOrderIncome, otherExpenses } = req.query;

    // Validate input
    if (!monthlyOrderIncome || !otherExpenses) {
      throw new Error('Missing required fields');
    }

    // Calculate monthly fund requirements
    const fundRequirements = model.calculateFundRequirements(monthlyOrderIncome, otherExpenses);

    // Send response
    res.status(200).json(fundRequirements);
  } catch (error) {
    // Handle error
    res.status(400).json({ error: error.message });
  }
};

// Method to predict investment returns based on upstream customer order income
controller.predictInvestmentReturns = (req, res) => {
  try {
    // Predict investment returns based on upstream customer order income
    const investmentReturns = model.predictInvestmentReturns();

    // Send response
    res.status(200).json(investmentReturns);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Export the controller instance
module.exports = controller;
