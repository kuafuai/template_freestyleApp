// Define variables
let gameArea = [];
let scoreDisplay = document.getElementById("score-display");
let nextBlockPreview = document.getElementById("next-block-preview");

let currentBlock;
let score = 0;
let gameOver = false;

// Function to handle user input
function handleInput(event) {
  if (event.key === "ArrowLeft") {
    moveBlockLeft();
  } else if (event.key === "ArrowRight") {
    moveBlockRight();
  } else if (event.key === "ArrowDown") {
    moveBlockDown();
  } else if (event.key === "ArrowUp") {
    rotateBlock();
  }
}

// Function to move the current block to the left
function moveBlockLeft() {
  const newBlock = currentBlock.map(row => row.slice(0, -1));
  if (!isCollision(newBlock)) {
    currentBlock = newBlock;
  }
}

// Function to move the current block to the right
function moveBlockRight() {
  const newBlock = currentBlock.map(row => row.slice(1));
  if (!isCollision(newBlock)) {
    currentBlock = newBlock;
  }
}

// Function to move the current block down
function moveBlockDown() {
  const newBlock = currentBlock.slice(1);
  if (!isCollision(newBlock)) {
    currentBlock = newBlock;
  } else {
    mergeBlock();
    generateBlock();
  }
}

// Function to rotate the current block
function rotateBlock() {
  const newBlock = transpose(currentBlock).map(row => row.reverse());
  if (!isCollision(newBlock)) {
    currentBlock = newBlock;
  }
}

// Function to generate random blocks
function generateBlock() {
  const blocks = ["I", "J", "L", "O", "S", "T", "Z"];
  const randomIndex = Math.floor(Math.random() * blocks.length);
  const randomBlock = blocks[randomIndex];
  currentBlock = getRandomBlock(randomBlock);
  return randomBlock;
}

// Function to get the block shape based on the block type
function getRandomBlock(blockType) {
  if (blockType === "I") {
    return [[1, 1, 1, 1]];
  } else if (blockType === "J") {
    return [[1, 0, 0], [1, 1, 1]];
  } else if (blockType === "L") {
    return [[0, 0, 1], [1, 1, 1]];
  } else if (blockType === "O") {
    return [[1, 1], [1, 1]];
  } else if (blockType === "S") {
    return [[0, 1, 1], [1, 1, 0]];
  } else if (blockType === "T") {
    return [[0, 1, 0], [1, 1, 1]];
  } else if (blockType === "Z") {
    return [[1, 1, 0], [0, 1, 1]];
  }
}

// Function to check if a row is full
function isRowFull(row) {
  return gameArea[row].every(cell => cell !== 0);
}

// Function to clear a full row
function clearRow(row) {
  gameArea.splice(row, 1);
  gameArea.unshift(new Array(10).fill(0));
}

// Function to merge the current block with the game area
function mergeBlock() {
  for (let row = 0; row < currentBlock.length; row++) {
    for (let col = 0; col < currentBlock[row].length; col++) {
      if (currentBlock[row][col] !== 0) {
        gameArea[row][col] = currentBlock[row][col];
      }
    }
  }
}

// Function to check if there is a collision between the current block and the game area
function isCollision(block) {
  for (let row = 0; row < block.length; row++) {
    for (let col = 0; col < block[row].length; col++) {
      if (block[row][col] !== 0 && (gameArea[row] && gameArea[row][col] !== 0)) {
        return true;
      }
    }
  }
  return false;
}

// Function to update game state
function updateGameState() {
  if (isRowFull(0)) {
    clearRow(0);
    score += 100;
    scoreDisplay.innerText = score;
  }
  if (gameArea[0].some(cell => cell !== 0)) {
    gameOver = true;
  }
}

// Event listeners for user input
document.addEventListener("keydown", handleInput);

// Game loop
function gameLoop() {
  if (!gameOver) {
    updateGameState();
    moveBlockDown();
    setTimeout(gameLoop, 1000);
  }
}

// Start the game loop
generateBlock();
gameLoop();
