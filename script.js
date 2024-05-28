// Create the game canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set up the game variables
let playerX = canvas.width / 2;
let playerY = canvas.height - 50;
let obstacleX = canvas.width;
let obstacleY = canvas.height / 2;
let obstacleSpeed = 5;
let score = 0;

// Set up the key event listeners
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

// Handle key down events
function handleKeyDown(event) {
    if (event.key === "ArrowUp") {
        // Move the player up
        playerY -= 10;
    } else if (event.key === "ArrowDown") {
        // Move the player down
        playerY += 10;
    } else if (event.key === "ArrowLeft") {
        // Move the player left
        playerX -= 10;
    } else if (event.key === "ArrowRight") {
        // Move the player right
        playerX += 10;
    }
}

// Handle key up events
function handleKeyUp(event) {
    // Stop the player movement
    playerX = playerX;
    playerY = playerY;
}

// Update the game state
function update() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the player
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(playerX, playerY, 50, 50);

    // Draw the obstacle
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(obstacleX, obstacleY, 50, 50);

    // Move the obstacle
    obstacleX -= obstacleSpeed;

    // Check for collision
    if (playerX < obstacleX + 50 &&
        playerX + 50 > obstacleX &&
        playerY < obstacleY + 50 &&
        playerY + 50 > obstacleY) {
        // Game over
        alert("Game over!");
        reset();
    }

    // Increase the score
    score++;

    // Update the score display
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "24px Arial";
    ctx.fillText("Score: " + score, 10, 30);

    // Request the next frame
    requestAnimationFrame(update);
}

// Reset the game state
function reset() {
    playerX = canvas.width / 2;
    playerY = canvas.height - 50;
    obstacleX = canvas.width;
    obstacleY = canvas.height / 2;
    score = 0;
}

// Start the game
update();
