// Define variables for game elements
let birdX;
let birdY;
let birdVelocity;
let obstacleList;
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
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const canvasContext = canvas.getContext("2d");
const scoreDisplay = document.getElementById("scoreDisplay");

// Define function to handle mouse click event
function handleClick() {
  birdVelocity = jumpForce;
}

// Define function to handle space key event
function handleSpaceKey(event) {
  if (event.keyCode === 32) {
    birdVelocity = jumpForce;
  }
}

// Add event listener for mouse click event
document.addEventListener("click", handleClick);
// Add event listener for space key event
window.addEventListener("keydown", handleSpaceKey);

// Define function to update bird and obstacle positions
function updatePositions() {
  birdVelocity += gravity;
  birdY += birdVelocity;

  for (let i = 0; i < obstacleList.length; i++) {
    obstacleList[i].x -= obstacleSpeed;

    if (obstacleList[i].x + obstacleWidth < 0) {
      obstacleList.splice(i, 1);
      i--;
    }
  }
}

// Define function to check for collisions and game over
function checkCollisions() {
  if (birdY < 0 || birdY + 30 > canvas.height) {
    gameOver();
  }

  for (let i = 0; i < obstacleList.length; i++) {
    if (
      birdX + 30 > obstacleList[i].x &&
      birdX < obstacleList[i].x + obstacleWidth &&
      (birdY < obstacleList[i].y ||
        birdY + 30 > obstacleList[i].y + obstacleHeight)
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
  birdX = canvas.width / 10;
  birdY = canvas.height / 2;
  birdVelocity = 0;
  obstacleList = [];
  score = 0;

  gameLoop = setInterval(function () {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    updatePositions();
    checkCollisions();
    updateScore();
    generateObstacles();

    canvasContext.fillStyle = "#ffffff";
    canvasContext.fillRect(birdX, birdY, 30, 30);

    for (let i = 0; i < obstacleList.length; i++) {
      canvasContext.fillStyle = "#00ff00";
      canvasContext.fillRect(obstacleList[i].x, obstacleList[i].y, obstacleWidth, obstacleHeight);
    }
  }, 30);
}

// Define function to generate obstacles
function generateObstacles() {
  if (obstacleList.length === 0 || obstacleList[obstacleList.length - 1].x < canvas.width - obstacleGap) {
    const obstacleY = Math.random() * (canvas.height - obstacleHeight);
    obstacleList.push({ x: canvas.width, y: obstacleY });
  }
}

// Call gameStart function to start the game
gameStart();
