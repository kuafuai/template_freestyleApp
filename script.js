// Define initial position and length of the snake
let snakePosition = [{ x: 0, y: 0 }];
let snakeLength = 1;

// Define initial direction of the snake
let snakeDirection = "right";

// Define food position
let foodPosition = { x: 200, y: 200 };

// Function to handle keyboard input
function handleKeyPress(event) {
  if (event.key === "ArrowUp" && snakeDirection !== "down") {
    snakeDirection = "up";
  } else if (event.key === "ArrowDown" && snakeDirection !== "up") {
    snakeDirection = "down";
  } else if (event.key === "ArrowLeft" && snakeDirection !== "right") {
    snakeDirection = "left";
  } else if (event.key === "ArrowRight" && snakeDirection !== "left") {
    snakeDirection = "right";
  }
}

// Function to update snake position and check for collisions
function updateSnake() {
  // Move snake based on current direction
  let newHead = Object.assign({}, snakePosition[0]);
  if (snakeDirection === "up") {
    newHead.y -= 20;
  } else if (snakeDirection === "down") {
    newHead.y += 20;
  } else if (snakeDirection === "left") {
    newHead.x -= 20;
  } else if (snakeDirection === "right") {
    newHead.x += 20;
  }

  // Check if snake collides with itself or wall
  if (newHead.x < 0 || newHead.x >= 400 || newHead.y < 0 || newHead.y >= 400 || isSnakeCollision(newHead)) {
    // Game over
    return;
  }

  // Add new head to snake position
  snakePosition.unshift(newHead);

  // Check if snake eats food
  if (newHead.x === foodPosition.x && newHead.y === foodPosition.y) {
    // Increase snake length
    snakeLength++;

    // Generate new food position
    generateFood();
  } else {
    // Remove tail segment if snake doesn't eat food
    snakePosition.pop();
  }

  // Update game display
  updateGameDisplay();
}

// Function to check if snake collides with itself
function isSnakeCollision(head) {
  for (let i = 1; i < snakePosition.length; i++) {
    if (head.x === snakePosition[i].x && head.y === snakePosition[i].y) {
      return true;
    }
  }
  return false;
}

// Function to generate new food position
function generateFood() {
  foodPosition.x = Math.floor(Math.random() * 20) * 20;
  foodPosition.y = Math.floor(Math.random() * 20) * 20;
}

// Function to update game display
function updateGameDisplay() {
  // Clear game area
  document.getElementById("game-area").innerHTML = "";

  // Draw snake
  for (let i = 0; i < snakePosition.length; i++) {
    let snakeSegment = document.createElement("div");
    snakeSegment.style.left = snakePosition[i].x + "px";
    snakeSegment.style.top = snakePosition[i].y + "px";
    snakeSegment.className = "snake-segment";
    document.getElementById("game-area").appendChild(snakeSegment);
  }

  // Draw food
  let food = document.createElement("div");
  food.style.left = foodPosition.x + "px";
  food.style.top = foodPosition.y + "px";
  food.className = "food";
  document.getElementById("game-area").appendChild(food);
}

// Add event listener for keyboard input
document.addEventListener("keydown", handleKeyPress);

// Start game loop
setInterval(updateSnake, 200);
