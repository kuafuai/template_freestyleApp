// Define game state variables
let birdPositionX = 0;
let birdPositionY = 0;
let birdSpeed = 0;
let score = 0;
let gameOver = false;

// Listen for user click event to control bird's movement
document.addEventListener("click", function() {
  birdSpeed = -2; // Move the bird upwards when the user clicks
});

// Define obstacle generation and movement logic
let obstacles = [];

function generateObstacle() {
  const obstacleHeight = Math.floor(Math.random() * 200) + 50; // Random obstacle height between 50 and 250
  const obstacleGap = 200; // Gap between obstacles
  const obstacle = {
    x: 800, // Initial x position of the obstacle
    y: 0, // Initial y position of the obstacle
    width: 50, // Width of the obstacle
    height: obstacleHeight // Height of the obstacle
  };
  obstacles.push(obstacle); // Add the obstacle to the obstacles array
  obstacles.push({
    x: 800, // Initial x position of the bottom obstacle
    y: obstacleHeight + obstacleGap, // Initial y position of the bottom obstacle
    width: 50, // Width of the bottom obstacle
    height: 400 - obstacleHeight - obstacleGap // Height of the bottom obstacle
  });
}

function moveObstacle() {
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].x -= 2; // Move the obstacle to the left
  }
}

// Detect collision between bird and obstacles
function detectCollision() {
  for (let i = 0; i < obstacles.length; i++) {
    if (
      birdPositionX < obstacles[i].x + obstacles[i].width &&
      birdPositionX + 50 > obstacles[i].x &&
      birdPositionY < obstacles[i].y + obstacles[i].height &&
      birdPositionY + 50 > obstacles[i].y
    ) {
      gameOver = true; // Set game over to true if there is a collision
    }
  }
}

// Update score and display game over message logic
function updateScore() {
  if (!gameOver) {
    score++; // Increment the score if the game is not over
  }
}

function displayGameOver() {
  if (gameOver) {
    alert("Game Over! Your score is: " + score); // Display game over message with the final score
  }
}

// Load game background music and sound effects
function loadAudio() {
  // Code to load audio files
}

// Play background music and sound effects based on game actions
function playAudio() {
  // Code to play audio
}

// Call necessary functions to start the game
function startGame() {
  setInterval(function() {
    birdPositionY += birdSpeed; // Update the bird's position based on its speed
    birdSpeed += 0.1; // Increase the bird's speed over time
    moveObstacle(); // Move the obstacles
    detectCollision(); // Detect collision between bird and obstacles
    updateScore(); // Update the score
    displayGameOver(); // Display game over message if the game is over
  }, 20); // Run the game loop every 20 milliseconds
}

// Call startGame function when the page finishes loading
window.onload = startGame;
