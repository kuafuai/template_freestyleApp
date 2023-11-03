// Define game variables
let snake = [];
let food = {};
let direction = "";
let score = 0;
let length = 1;
let gameover = false;

// Define game initialization function
function initGame() {
  // Set initial snake position
  snake = [{ x: 0, y: 0 }];
  
  // Set initial food position
  food = { x: 200, y: 200 };
  
  // Set initial direction
  direction = "right";
  
  // Set initial score and length
  score = 0;
  length = 1;
  
  // Set game over status
  gameover = false;
  
  // Render game elements
  renderSnake();
  renderFood();
  renderScore();
  renderLength();
}

// Define function to render snake
function renderSnake() {
  const snakeElement = document.getElementById("snake");
  snakeElement.style.left = snake[0].x + "px";
  snakeElement.style.top = snake[0].y + "px";
}

// Define function to render food
function renderFood() {
  const foodElement = document.getElementById("food");
  foodElement.style.left = food.x + "px";
  foodElement.style.top = food.y + "px";
}

// Define function to render score
function renderScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = "Score: " + score;
}

// Define function to render length
function renderLength() {
  const lengthElement = document.getElementById("length");
  lengthElement.textContent = "Length: " + length;
}

// Define function to generate food
function generateFood() {
  const maxX = 380;
  const maxY = 380;
  const minX = 20;
  const minY = 20;
  
  food.x = Math.floor(Math.random() * (maxX - minX + 1) + minX);
  food.y = Math.floor(Math.random() * (maxY - minY + 1) + minY);
  
  renderFood();
}

// Define function to move the snake
function moveSnake() {
  const snakeHead = { x: snake[0].x, y: snake[0].y };
  
  switch (direction) {
    case "up":
      snakeHead.y -= 20;
      break;
    case "down":
      snakeHead.y += 20;
      break;
    case "left":
      snakeHead.x -= 20;
      break;
    case "right":
      snakeHead.x += 20;
      break;
  }
  
  snake.unshift(snakeHead);
  
  if (snake[0].x === food.x && snake[0].y === food.y) {
    score += 10;
    length++;
    generateFood();
  } else {
    snake.pop();
  }
  
  renderSnake();
  renderScore();
  renderLength();
  checkGameOver();
}

// Define function to handle keyboard events
function handleKeyPress(event) {
  switch (event.key) {
    case "ArrowUp":
      if (direction !== "down") {
        direction = "up";
      }
      break;
    case "ArrowDown":
      if (direction !== "up") {
        direction = "down";
      }
      break;
    case "ArrowLeft":
      if (direction !== "right") {
        direction = "left";
      }
      break;
    case "ArrowRight":
      if (direction !== "left") {
        direction = "right";
      }
      break;
  }
}

// Define function to check for game over
function checkGameOver() {
  const snakeHead = snake[0];
  
  if (
    snakeHead.x < 0 ||
    snakeHead.x >= 400 ||
    snakeHead.y < 0 ||
    snakeHead.y >= 400 ||
    snake.slice(1).some(segment => segment.x === snakeHead.x && segment.y === snakeHead.y)
  ) {
    gameover = true;
    alert("Game Over!");
  }
}

// Define function to restart the game
function restartGame() {
  initGame();
}

// Define function to exit the game
function exitGame() {
  // TODO: Implement game exit logic
}

// Add event listeners
document.addEventListener("keydown", handleKeyPress);
document.getElementById("restart-button").addEventListener("click", restartGame);
document.getElementById("exit-button").addEventListener("click", exitGame);

// Initialize the game
initGame();
