// main.js

// Constants
const GAME_AREA_WIDTH = 600; // Width of the game area
const GAME_AREA_HEIGHT = 400; // Height of the game area
const SNAKE_SIZE = 20; // Size of each snake segment
const INITIAL_SNAKE_LENGTH = 3; // Initial length of the snake
const SNAKE_SPEED = 200; // Speed of the snake in milliseconds
const FOOD_SIZE = 20; // Size of the food

// Variables
let gameArea; // Reference to the game area element
let snake; // Array to store the snake segments
let food; // Object to store the food position
let direction; // Current direction of the snake
let score; // Current score
let highScore; // Highest score

// Initialize the game
function initializeGame() {
  gameArea = document.getElementById("gameArea");
  snake = [];
  direction = "right";
  score = 0;
  highScore = 0;

  createSnake();
  createFood();
  drawSnake();
  drawFood();

  // Start the game loop
  setInterval(gameLoop, SNAKE_SPEED);
}

// Create the initial snake
function createSnake() {
  let x = Math.floor(GAME_AREA_WIDTH / 2 / SNAKE_SIZE) * SNAKE_SIZE;
  let y = Math.floor(GAME_AREA_HEIGHT / 2 / SNAKE_SIZE) * SNAKE_SIZE;

  for (let i = 0; i < INITIAL_SNAKE_LENGTH; i++) {
    snake.push({ x: x - i * SNAKE_SIZE, y: y });
  }
}

// Create the food at a random position
function createFood() {
  let x = Math.floor(Math.random() * (GAME_AREA_WIDTH / SNAKE_SIZE)) * SNAKE_SIZE;
  let y = Math.floor(Math.random() * (GAME_AREA_HEIGHT / SNAKE_SIZE)) * SNAKE_SIZE;

  food = { x: x, y: y };
}

// Draw the snake on the game area
function drawSnake() {
  gameArea.innerHTML = "";

  for (let i = 0; i < snake.length; i++) {
    let segment = document.createElement("div");
    segment.style.width = SNAKE_SIZE + "px";
    segment.style.height = SNAKE_SIZE + "px";
    segment.style.backgroundColor = "green";
    segment.style.position = "absolute";
    segment.style.left = snake[i].x + "px";
    segment.style.top = snake[i].y + "px";

    gameArea.appendChild(segment);
  }
}

// Draw the food on the game area
function drawFood() {
  let foodElement = document.createElement("div");
  foodElement.style.width = FOOD_SIZE + "px";
  foodElement.style.height = FOOD_SIZE + "px";
  foodElement.style.backgroundColor = "red";
  foodElement.style.position = "absolute";
  foodElement.style.left = food.x + "px";
  foodElement.style.top = food.y + "px";

  gameArea.appendChild(foodElement);
}

// Update the snake position
function updateSnake() {
  let head = { x: snake[0].x, y: snake[0].y };

  if (direction === "right") {
    head.x += SNAKE_SIZE;
  } else if (direction === "left") {
    head.x -= SNAKE_SIZE;
  } else if (direction === "up") {
    head.y -= SNAKE_SIZE;
  } else if (direction === "down") {
    head.y += SNAKE_SIZE;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score++;
    if (score > highScore) {
      highScore = score;
    }
    createFood();
  } else {
    snake.pop();
  }
}

// Check if the game is over
function isGameOver() {
  let head = snake[0];

  // Check if the snake hits the wall
  if (
    head.x < 0 ||
    head.x >= GAME_AREA_WIDTH ||
    head.y < 0 ||
    head.y >= GAME_AREA_HEIGHT
  ) {
    return true;
  }

  // Check if the snake hits itself
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }

  return false;
}

// Handle keyboard input
function handleInput(event) {
  if (event.keyCode === 37 && direction !== "right") {
    direction = "left";
  } else if (event.keyCode === 38 && direction !== "down") {
    direction = "up";
  } else if (event.keyCode === 39 && direction !== "left") {
    direction = "right";
  } else if (event.keyCode === 40 && direction !== "up") {
    direction = "down";
  }
}

// Game loop
function gameLoop() {
  updateSnake();
  drawSnake();

  if (isGameOver()) {
    clearInterval(gameLoop);
    alert("Game Over! Your score: " + score + " High score: " + highScore);
    resetGame();
  }
}

// Reset the game
function resetGame() {
  snake = [];
  direction = "right";
  score = 0;
  createSnake();
  createFood();
  drawSnake();
  drawFood();
}

// Event listeners
document.addEventListener("keydown", handleInput);

// Initialize the game
initializeGame();
