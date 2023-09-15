// Game variables
let gameArea = [];
let currentBlock;
let score = 0;

// Start the game
function startGame() {
    // Initialize game variables
    gameArea = [];
    currentBlock = generateRandomBlock();
    score = 0;

    // Start the block's downward movement
    setInterval(moveBlockDown, 1000);
}

// Generate a random block
function generateRandomBlock() {
    const blocks = [
        // Define the different block shapes
        [[1, 1], [1, 1]], // Square block
        [[1, 1, 1, 1]], // Line block
        [[1, 1, 0], [0, 1, 1]], // Z block
        [[0, 1, 1], [1, 1, 0]], // S block
        [[1, 1, 1], [0, 1, 0]], // T block
        [[1, 1, 1], [0, 0, 1]], // L block
        [[1, 1, 1], [1, 0, 0]] // J block
    ];

    // Generate a random index to select a block shape
    const randomIndex = Math.floor(Math.random() * blocks.length);

    // Create a new block with the selected shape
    const block = blocks[randomIndex];

    // Set initial position of the block
    block.x = Math.floor(gameArea[0].length / 2) - Math.floor(block[0].length / 2);
    block.y = 0;

    return block;
}

// Move the block down one row
function moveBlockDown() {
    // Check if the block can move down
    if (canMoveBlock(0, 1)) {
        // Move the block down
        currentBlock.y += 1;
    } else {
        // Lock the block in place
        lockBlock();

        // Check and remove filled rows
        checkAndRemoveFilledRow();

        // Generate a new block
        currentBlock = generateRandomBlock();
    }

    // Update the game area
    updateGameArea();
}

// Move the block left
function moveBlockLeft() {
    // Check if the block can move left
    if (canMoveBlock(-1, 0)) {
        // Move the block left
        currentBlock.x -= 1;

        // Update the game area
        updateGameArea();
    }
}

// Move the block right
function moveBlockRight() {
    // Check if the block can move right
    if (canMoveBlock(1, 0)) {
        // Move the block right
        currentBlock.x += 1;

        // Update the game area
        updateGameArea();
    }
}

// Rotate the block clockwise
function rotateBlockClockwise() {
    // Create a copy of the current block
    const rotatedBlock = rotateBlock(currentBlock);

    // Check if the rotated block can fit in the game area
    if (canMoveBlock(0, 0, rotatedBlock)) {
        // Update the current block with the rotated block
        currentBlock = rotatedBlock;

        // Update the game area
        updateGameArea();
    }
}

// Rotate the block counterclockwise
function rotateBlockCounterclockwise() {
    // Create a copy of the current block
    const rotatedBlock = rotateBlock(currentBlock);

    // Check if the rotated block can fit in the game area
    if (canMoveBlock(0, 0, rotatedBlock)) {
        // Update the current block with the rotated block
        currentBlock = rotatedBlock;

        // Update the game area
        updateGameArea();
    }
}

// Helper function to rotate a block
function rotateBlock(block) {
    const rotatedBlock = JSON.parse(JSON.stringify(block));

    // Transpose the block matrix
    for (let i = 0; i < rotatedBlock.length; i++) {
        for (let j = 0; j < i; j++) {
            [rotatedBlock[i][j], rotatedBlock[j][i]] = [rotatedBlock[j][i], rotatedBlock[i][j]];
        }
    }

    // Reverse each row of the block matrix
    for (let i = 0; i < rotatedBlock.length; i++) {
        rotatedBlock[i].reverse();
    }

    return rotatedBlock;
}

// Check if a row is completely filled and remove it
function checkAndRemoveFilledRow() {
    gameArea = gameArea.filter(row => !row.every(cell => cell !== 0));

    const emptyRow = Array.from({ length: gameArea[0].length }).fill(0);
    while (gameArea.length < 20) {
        gameArea.unshift(emptyRow);
    }

    // Increment the score
    score += 10;

    // Update the score
    updateScore();
}

// Update the score
function updateScore() {
    document.getElementById("score").innerText = score;
}

// Check if the block can move to the specified position
function canMoveBlock(dx, dy, block = currentBlock) {
    return block.every((row, y) => {
        return row.every((cell, x) => {
            if (cell !== 0) {
                const newX = block.x + x + dx;
                const newY = block.y + y + dy;

                // Check if the new position is within the game area
                if (newX < 0 || newX >= gameArea[0].length || newY >= gameArea.length || newY < 0) {
                    return false;
                }

                // Check if the new position is occupied by another block
                if (newY >= 0 && gameArea[newY][newX] !== 0) {
                    return false;
                }
            }
            return true;
        });
    });
}

// Lock the current block in place
function lockBlock() {
    currentBlock.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell !== 0) {
                const gameAreaX = currentBlock.x + x;
                const gameAreaY = currentBlock.y + y;

                // Lock the block in the game area
                gameArea[gameAreaY][gameAreaX] = currentBlock[y][x];
            }
        });
    });
}

// Update the game area
function updateGameArea() {
    const blockSize = 30;
    const colors = ["red", "blue", "green", "yellow", "orange", "purple", "cyan"];

    const gameAreaElement = document.getElementById("gameArea");
    gameAreaElement.innerHTML = "";

    gameArea.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell !== 0) {
                const blockElement = document.createElement("div");
                blockElement.className = "block";
                blockElement.style.backgroundColor = colors[cell - 1];
                blockElement.style.left = (x * blockSize) + "px";
                blockElement.style.top = (y * blockSize) + "px";
                gameAreaElement.appendChild(blockElement);
            }
        });
    });
}

// Check if the game is over
function checkGameOver() {
    return gameArea[0].some(cell => cell !== 0);
}

// Event listener for start button click
document.getElementById("startButton").addEventListener("click", startGame);

// Event listener for exit button click
document.getElementById("exitButton").addEventListener("click", exitGame);

// Exit the game
function exitGame() {
    gameArea = [];
    score = 0;
    updateScore();
    updateGameArea();
}
