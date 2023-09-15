// Game variables
let gameArea;
let currentBlock;
let score;

// Start the game
function startGame() {
    // Initialize game variables
    gameArea = document.getElementById("gameArea");
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
    const rotatedBlock = JSON.parse(JSON.stringify(currentBlock));

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
    const rotatedBlock = JSON.parse(JSON.stringify(currentBlock));

    // Reverse each row of the block matrix
    for (let i = 0; i < rotatedBlock.length; i++) {
        rotatedBlock[i].reverse();
    }

    // Transpose the block matrix
    for (let i = 0; i < rotatedBlock.length; i++) {
        for (let j = 0; j < i; j++) {
            [rotatedBlock[i][j], rotatedBlock[j][i]] = [rotatedBlock[j][i], rotatedBlock[i][j]];
        }
    }

    // Check if the rotated block can fit in the game area
    if (canMoveBlock(0, 0, rotatedBlock)) {
        // Update the current block with the rotated block
        currentBlock = rotatedBlock;

        // Update the game area
        updateGameArea();
    }
}

// Check if a row is completely filled and remove it
function checkAndRemoveFilledRow() {
    for (let y = gameArea.length - 1; y >= 0; y--) {
        let rowFilled = true;
        for (let x = 0; x < gameArea[y].length; x++) {
            if (gameArea[y][x] === 0) {
                rowFilled = false;
                break;
            }
        }
        if (rowFilled) {
            // Remove the filled row
            gameArea.splice(y, 1);

            // Add a new empty row at the top
            gameArea.unshift(Array(gameArea[0].length).fill(0));

            // Increment the score
            score += 10;
        }
    }

    // Update the score
    updateScore();
}

// Update the score
function updateScore() {
    document.getElementById("score").innerText = score;
}

// Check if the block can move to the specified position
function canMoveBlock(dx, dy, block = currentBlock) {
    for (let y = 0; y < block.length; y++) {
        for (let x = 0; x < block[y].length; x++) {
            if (block[y][x] !== 0) {
                const newX = currentBlock.x + x + dx;
                const newY = currentBlock.y + y + dy;

                // Check if the new position is within the game area
                if (newX < 0 || newX >= gameArea[0].length || newY >= gameArea.length) {
                    return false;
                }

                // Check if the new position is occupied by another block
                if (newY >= 0 && gameArea[newY][newX] !== 0) {
                    return false;
                }
            }
        }
    }

    return true;
}

// Lock the current block in place
function lockBlock() {
    for (let y = 0; y < currentBlock.length; y++) {
        for (let x = 0; x < currentBlock[y].length; x++) {
            if (currentBlock[y][x] !== 0) {
                const gameAreaX = currentBlock.x + x;
                const gameAreaY = currentBlock.y + y;

                // Lock the block in the game area
                gameArea[gameAreaY][gameAreaX] = currentBlock[y][x];
            }
        }
    }
}

// Update the game area
function updateGameArea() {
    // Clear the game area
    gameArea.innerHTML = "";

    // Draw the blocks in the game area
    for (let y = 0; y < gameArea.length; y++) {
        for (let x = 0; x < gameArea[y].length; x++) {
            if (gameArea[y][x] !== 0) {
                // Create a new block element
                const blockElement = document.createElement("div");
                blockElement.className = "block";

                // Set the block color based on the value in the game area
                blockElement.style.backgroundColor = colors[gameArea[y][x]];

                // Set the block position
                blockElement.style.left = (x * blockSize) + "px";
                blockElement.style.top = (y * blockSize) + "px";

                // Append the block element to the game area
                gameArea.appendChild(blockElement);
            }
        }
    }
}

// Check if the game is over
function checkGameOver() {
    for (let x = 0; x < gameArea[0].length; x++) {
        if (gameArea[0][x] !== 0) {
            return true;
        }
    }
    return false;
}

// Event listener for start button click
document.getElementById("startButton").addEventListener("click", startGame);

// Event listener for exit button click
document.getElementById("exitButton").addEventListener("click", exitGame);
