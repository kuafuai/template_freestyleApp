// API utility functions for the frontend of the travel guide website

// Function to handle data requests
function handleDataRequest(url, method, data) {
  return new Promise((resolve, reject) => {
    // Make an AJAX request to the server
    $.ajax({
      url: url,
      method: method,
      data: data,
      success: function(response) {
        resolve(response);
      },
      error: function(error) {
        reject(error);
      }
    });
  });
}

// Function to handle data responses
function handleDataResponse(response) {
  // Process the response data
  // ...
}

// Example usage
handleDataRequest('/api/data', 'GET')
  .then(handleDataResponse)
  .catch(function(error) {
    console.error('Error:', error);
  });
