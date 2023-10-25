// This file contains the JavaScript code for the frontend UI

// Add necessary JavaScript code for the frontend UI

// Function to display a message on the UI
function displayMessage(message) {
  const messageElement = document.getElementById('message');
  messageElement.innerText = message;
}

// Function to fetch data from the backend API
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    displayMessage(data.message);
  } catch (error) {
    displayMessage('Error fetching data from the backend API');
  }
}

// Event listener for button click
const button = document.getElementById('fetch-button');
button.addEventListener('click', fetchData);
