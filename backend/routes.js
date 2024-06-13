// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of the express application
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the Travel Guide website!');
});

app.get('/destinations', (req, res) => {
  // TODO: Implement code to fetch and return a list of destinations
  // Example code:
  const destinations = [
    { id: 1, name: 'Paris', country: 'France' },
    { id: 2, name: 'Rome', country: 'Italy' },
    { id: 3, name: 'Tokyo', country: 'Japan' }
  ];
  res.json(destinations);
});

app.get('/destinations/:id', (req, res) => {
  // TODO: Implement code to fetch and return a specific destination based on the provided ID
  // Example code:
  const destinationId = req.params.id;
  const destination = { id: destinationId, name: 'Paris', country: 'France' };
  res.json(destination);
});

app.post('/destinations', (req, res) => {
  // TODO: Implement code to create a new destination based on the provided data
  // Example code:
  const newDestination = req.body;
  // Save the new destination to the database or perform any other necessary actions
  res.json(newDestination);
});

app.put('/destinations/:id', (req, res) => {
  // TODO: Implement code to update a specific destination based on the provided ID and data
  // Example code:
  const destinationId = req.params.id;
  const updatedDestination = req.body;
  // Update the destination in the database or perform any other necessary actions
  res.json(updatedDestination);
});

app.delete('/destinations/:id', (req, res) => {
  // TODO: Implement code to delete a specific destination based on the provided ID
  // Example code:
  const destinationId = req.params.id;
  // Delete the destination from the database or perform any other necessary actions
  res.send(`Destination with ID ${destinationId} has been deleted.`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
