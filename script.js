/* The purpose of the file is to define the logic of the Snake game.
   It implements the movement of the snake, generation of food, collision detection,
   and pause/resume functionality. */

// Define constants
const GAME_AREA_WIDTH = 400;
const GAME_AREA_HEIGHT = 400;
const SNAKE_SIZE = 20;
const FOOD_SIZE = 20;
const SNAKE_COLOR = "purple";
const FOOD_COLOR = "red";

// Define variables
let gameArea;
let score;
let snake;
let food;
let direction;
let isPaused;
let gameInterval;

// Initialize the game
function initGame() {
  gameArea = document.querySelector(".game-area");
  score = document.getElementById("score");
  snake = [{ x: 0, y: 0 }];
  food = generateFood();
  direction = "right";
  isPaused = false;
  
  // Add event listener for keydown event
  document.addEventListener("keydown", handleKeyDown);
  
  // Render the game
  renderGame();
}

// Handle keydown event
function handleKeyDown(event) {
  if (event.key === "ArrowUp" && direction !== "down") {
    direction = "up";
  } else if (event.key === "ArrowDown" && direction !== "up") {
    direction = "down";
  } else if (event.key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  } else if (event.key === "ArrowRight" && direction !== "left") {
    direction = "right";
  } else if (event.key === " ") {
    togglePause();
  }
}

// Toggle pause/resume
function togglePause() {
  isPaused = !isPaused;
  
  if (isPaused) {
    clearInterval(gameInterval);
  } else {
    gameInterval = setInterval(moveSnake, 200);
  }
}

// Move the snake
function moveSnake() {
  const head = { x: snake[0].x, y: snake[0].y };
  
  if (direction === "up") {
    head.y -= SNAKE_SIZE;
  } else if (direction === "down") {
    head.y += SNAKE_SIZE;
  } else if (direction === "left") {
    head.x -= SNAKE_SIZE;
  } else if (direction === "right") {
    head.x += SNAKE_SIZE;
  }
  
  snake.unshift(head);
  
  if (isCollision()) {
    gameOver();
    return;
  }
  
  if (isFoodEaten()) {
    score.innerText = parseInt(score.innerText) + 1;
    food = generateFood();
  } else {
    snake.pop();
  }
  
  renderGame();
}

// Generate food
function generateFood() {
  const x = Math.floor(Math.random() * (GAME_AREA_WIDTH / FOOD_SIZE)) * FOOD_SIZE;
  const y = Math.floor(Math.random() * (GAME_AREA_HEIGHT / FOOD_SIZE)) * FOOD_SIZE;
  
  return { x, y };
}

// Check collision
function isCollision() {
  const head = snake[0];
  
  if (head.x < 0 || head.x >= GAME_AREA_WIDTH || head.y < 0 || head.y >= GAME_AREA_HEIGHT) {
    return true;
  }
  
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  
  return false;
}

// Check if food is eaten
function isFoodEaten() {
  const head = snake[0];
  
  return head.x === food.x && head.y === food.y;
}

// Game over
function gameOver() {
  clearInterval(gameInterval);
  alert("Game Over");
}

// Render the game
function renderGame() {
  gameArea.innerHTML = "";
  
  // Render the snake
  snake.forEach((segment, index) => {
    const snakeSegment = document.createElement("div");
    snakeSegment.style.position = "absolute";
    snakeSegment.style.width = SNAKE_SIZE + "px";
    snakeSegment.style.height = SNAKE_SIZE + "px";
    snakeSegment.style.backgroundColor = SNAKE_COLOR;
    snakeSegment.style.left = segment.x + "px";
    snakeSegment.style.top = segment.y + "px";
    
    gameArea.appendChild(snakeSegment);
  });
  
  // Render the food
  const foodElement = document.createElement("div");
  foodElement.style.position = "absolute";
  foodElement.style.width = FOOD_SIZE + "px";
  foodElement.style.height = FOOD_SIZE + "px";
  foodElement.style.backgroundColor = FOOD_COLOR;
  foodElement.style.left = food.x + "px";
  foodElement.style.top = food.y + "px";
  
  gameArea.appendChild(foodElement);
}

// Start the game
initGame();
