// Import required modules
const mongoose = require('mongoose');

// Define the schema for the travel guide
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
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
});

// Define the schema for the review
const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  travelGuide: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TravelGuide'
  }
});

// Create the models
const TravelGuide = mongoose.model('TravelGuide', travelGuideSchema);
const Review = mongoose.model('Review', reviewSchema);

// Export the models
module.exports = {
  TravelGuide,
  Review
};
