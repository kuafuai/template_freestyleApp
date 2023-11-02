// Import required modules and libraries
const express = require('express');
const routes = require('./routes');

// Create a server instance
const app = express();

// Set the server listening port
const port = process.env.PORT || 3000;

// Add middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Bind the routes to the server
app.use('/', routes);

// Start the server with error handling
try {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.error(`Error starting the server: ${error}`);
}
