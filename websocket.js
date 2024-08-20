const socket = new WebSocket('ws://yourserver.com');

socket.onopen = function() {
    console.log('WebSocket connection established');
};

socket.onmessage = function(event) {
    const message = JSON.parse(event.data);
    handleMessage(message);
};

socket.onerror = function(error) {
    console.error('WebSocket error: ', error);
};

socket.onclose = function(event) {
    console.log('WebSocket connection closed: ', event.reason);
    // Optionally: Attempt to reconnect
    setTimeout(() => {
        connectWebSocket();
    }, 5000);
};

function connectWebSocket() {
    socket = new WebSocket('ws://yourserver.com');
}

function handleMessage(message) {
    switch (message.type) {
        case 'chat':
            displayMessage(message.content);
            break;
        case 'gameState':
            updateGameState(message.content);
            break;
        default:
            console.warn('Unknown message type: ', message.type);
    }
}

function sendMessage(content) {
    if (typeof content === 'string' && content.trim() !== '') {
        const sanitizedContent = sanitizeInput(content);
        const message = { type: 'chat', content: sanitizedContent };
        socket.send(JSON.stringify(message));
    } else {
        console.error('Invalid message content');
    }
}

function sanitizeInput(input) {
    const tempDiv = document.createElement('div');
    tempDiv.textContent = input;
    return tempDiv.innerHTML;
}

function displayMessage(content) {
    const chatArea = document.getElementById('chatArea');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = content;
    chatArea.appendChild(messageElement);
}

function updateGameState(content) {
    // Add logic to update the game state based on the received content
}
