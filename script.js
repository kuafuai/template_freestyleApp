const chatOutput = document.getElementById('chat-output');
const userInput = document.getElementById('user-input');

// Function to display a message in the chat output
function displayMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatOutput.appendChild(messageElement);
}

// Function to send user input to the ChatGPT API
function sendUserInput() {
  const input = userInput.value;
  
  // Send input to the API and handle the response
  fetch('https://api.example.com/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ input })
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the API
    displayMessage(data.message);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// Event listener for user input
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendUserInput();
    userInput.value = '';
  }
});
