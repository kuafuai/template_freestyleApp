// TODO: Implement the database code here

// Import necessary modules
const mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://localhost/travel_guide', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database'))
  .catch((error) => console.error('Failed to connect to the database', error));

// Define schema for travel guide data
const travelGuideSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});

// Create model for travel guide data
const TravelGuide = mongoose.model('TravelGuide', travelGuideSchema);

// Function to add a new travel guide
async function addTravelGuide(title, description, location, rating) {
  try {
    const travelGuide = new TravelGuide({
      title,
      description,
      location,
      rating
    });
    await travelGuide.save();
    console.log('Travel guide added successfully');
  } catch (error) {
    console.error('Failed to add travel guide', error);
  }
}

// Function to get all travel guides
async function getAllTravelGuides() {
  try {
    const travelGuides = await TravelGuide.find();
    return travelGuides;
  } catch (error) {
    console.error('Failed to get travel guides', error);
    return [];
  }
}

// Function to get a travel guide by ID
async function getTravelGuideById(id) {
  try {
    const travelGuide = await TravelGuide.findById(id);
    return travelGuide;
  } catch (error) {
    console.error('Failed to get travel guide', error);
    return null;
  }
}

// Function to update a travel guide by ID
async function updateTravelGuideById(id, title, description, location, rating) {
  try {
    const travelGuide = await TravelGuide.findById(id);
    if (!travelGuide) {
      console.error('Travel guide not found');
      return;
    }
    travelGuide.title = title;
    travelGuide.description = description;
    travelGuide.location = location;
    travelGuide.rating = rating;
    await travelGuide.save();
    console.log('Travel guide updated successfully');
  } catch (error) {
    console.error('Failed to update travel guide', error);
  }
}

// Function to delete a travel guide by ID
async function deleteTravelGuideById(id) {
  try {
    const travelGuide = await TravelGuide.findById(id);
    if (!travelGuide) {
      console.error('Travel guide not found');
      return;
    }
    await travelGuide.remove();
    console.log('Travel guide deleted successfully');
  } catch (error) {
    console.error('Failed to delete travel guide', error);
  }
}

// Export the functions
module.exports = {
  addTravelGuide,
  getAllTravelGuides,
  getTravelGuideById,
  updateTravelGuideById,
  deleteTravelGuideById
};
