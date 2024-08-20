const chatInput = document.getElementById('chatInput');
const chatDisplay = document.getElementById('chat');
const messageLimit = 200; // Set a character limit for messages

document.getElementById('sendChat').addEventListener('click', function() {
    const message = chatInput.value;
    if (validateMessage(message)) {
        sendMessage(message);
        chatInput.value = '';
    } else {
        alert('Message must be non-empty and under 200 characters.');
    }
});

// Function to validate and sanitize messages
function validateMessage(message) {
    const trimmedMessage = message.trim();
    return trimmedMessage.length > 0 && trimmedMessage.length <= messageLimit;
}

// Function to sanitize message to prevent XSS
function sanitizeMessage(message) {
    const div = document.createElement('div');
    div.innerText = message; // Use innerText to escape HTML
    return div.innerHTML;
}

// Function to display messages
function displayMessage(message) {
    const sanitizedMessage = sanitizeMessage(message);
    const messageElement = document.createElement('div');
    messageElement.innerHTML = sanitizedMessage; // Use innerHTML only with sanitization
    chatDisplay.appendChild(messageElement);
}

// Dummy sendMessage function with error handling
function sendMessage(message) {
    try {
        // Simulate message sending
        console.log("Sending message:", message);
        // Call displayMessage on successful send
        displayMessage(message); 
    } catch (error) {
        console.error("Error sending message:", error);
        alert('Failed to send message. Please try again.');
    }
}
