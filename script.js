// Define variables for game elements
let birdPositionX;
let birdPositionY;
let birdVelocity;
let obstacles;
let score;

// Define constants for game settings
const gravity = 0.5;
const jumpForce = -10;
const obstacleGap = 200;
const obstacleWidth = 80;
const obstacleHeight = 400;
const obstacleSpeed = 5;

// Define game canvas and score display elements
const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext("2d");
const scoreDisplay = document.getElementById("scoreDisplay");

// Define function to handle mouse click event
function handleClick() {
  birdVelocity = jumpForce;
}

// Define function to update bird and obstacle positions
function updatePositions() {
  birdVelocity += gravity;
  birdPositionY += birdVelocity;

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].x -= obstacleSpeed;

    if (obstacles[i].x + obstacleWidth < 0) {
      obstacles.splice(i, 1);
      i--;
    }
  }
}

// Define function to check for collisions and game over
function checkCollisions() {
  if (birdPositionY < 0 || birdPositionY + 30 > canvas.height) {
    gameOver();
  }

  for (let i = 0; i < obstacles.length; i++) {
    if (
      birdPositionX + 30 > obstacles[i].x &&
      birdPositionX < obstacles[i].x + obstacleWidth &&
      (birdPositionY < obstacles[i].y ||
        birdPositionY + 30 > obstacles[i].y + obstacleHeight)
    ) {
      gameOver();
    }
  }
}

// Define function to update score
function updateScore() {
  scoreDisplay.innerHTML = "Score: " + score;
}

// Define function to handle game over
function gameOver() {
  clearInterval(gameLoop);
  canvasContext.fillStyle = "#ffffff";
  canvasContext.font = "30px Arial";
  canvasContext.fillText("Game Over", canvas.width / 2 - 80, canvas.height / 2);
  canvasContext.fillText("Final Score: " + score, canvas.width / 2 - 100, canvas.height / 2 + 40);
}

// Define function to handle game start
function gameStart() {
  birdPositionX = 50;
  birdPositionY = canvas.height / 2;
  birdVelocity = 0;
  obstacles = [];
  score = 0;

  gameLoop = setInterval(function () {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    updatePositions();
    checkCollisions();
    updateScore();
    generateObstacles();

    canvasContext.fillStyle = "#ffffff";
    canvasContext.fillRect(birdPositionX, birdPositionY, 30, 30);

    for (let i = 0; i < obstacles.length; i++) {
      canvasContext.fillStyle = "#00ff00";
      canvasContext.fillRect(obstacles[i].x, obstacles[i].y, obstacleWidth, obstacleHeight);
    }
  }, 30);
}

// Define function to generate obstacles
function generateObstacles() {
  if (obstacles.length === 0 || obstacles[obstacles.length - 1].x < canvas.width - obstacleGap) {
    const obstacleY = Math.random() * (canvas.height - obstacleHeight);
    obstacles.push({ x: canvas.width, y: obstacleY });
  }
}

// Add event listener for mouse click event
document.addEventListener("click", handleClick);

// Call gameStart function to start the game
gameStart();
