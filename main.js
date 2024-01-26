// main.js

// Get the game canvas element
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define game variables
let playerX = canvas.width / 2;
let playerY = canvas.height - 50;
let playerSpeed = 10;
let playerWidth = 50;
let playerHeight = 50;

let enemies = [];
let enemySpeed = 5;
let enemyWidth = 50;
let enemyHeight = 50;

let bullets = [];
let bulletSpeed = 5;
let bulletWidth = 5;
let bulletHeight = 10;

let score = 0;
let lives = 3;
let gameover = false;

// Function to draw the player
function drawPlayer() {
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
}

// Function to move the player
function movePlayer(direction) {
    if (direction === 'left' && playerX > 0) {
        playerX -= playerSpeed;
    } else if (direction === 'right' && playerX < canvas.width - playerWidth) {
        playerX += playerSpeed;
    } else if (direction === 'up' && playerY > 0) {
        playerY -= playerSpeed;
    } else if (direction === 'down' && playerY < canvas.height - playerHeight) {
        playerY += playerSpeed;
    }
}

// Function to draw the enemies
function drawEnemies() {
    ctx.fillStyle = '#ff0000';
    for (let i = 0; i < enemies.length; i++) {
        ctx.fillRect(enemies[i].x, enemies[i].y, enemyWidth, enemyHeight);
    }
}

// Function to move the enemies
function moveEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].y += enemySpeed;
        if (enemies[i].y > canvas.height) {
            enemies.splice(i, 1);
        }
    }
    if (enemies.length === 0) {
        let randomX = Math.random() * (canvas.width - enemyWidth);
        let randomY = Math.random() * -canvas.height;
        enemies.push({ x: randomX, y: randomY });
    }
}

// Function to draw the bullets
function drawBullets() {
    ctx.fillStyle = '#ffff00';
    for (let i = 0; i < bullets.length; i++) {
        ctx.fillRect(bullets[i].x, bullets[i].y, bulletWidth, bulletHeight);
    }
}

// Function to move the bullets
function moveBullets() {
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].y -= bulletSpeed;
        if (bullets[i].y < 0) {
            bullets.splice(i, 1);
        }
    }
}

// Function to handle collisions
function handleCollisions() {
    for (let i = 0; i < enemies.length; i++) {
        for (let j = 0; j < bullets.length; j++) {
            if (
                bullets[j].x < enemies[i].x + enemyWidth &&
                bullets[j].x + bulletWidth > enemies[i].x &&
                bullets[j].y < enemies[i].y + enemyHeight &&
                bullets[j].y + bulletHeight > enemies[i].y
            ) {
                enemies.splice(i, 1);
                bullets.splice(j, 1);
                score += 10;
            }
        }

        if (
            playerX < enemies[i].x + enemyWidth &&
            playerX + playerWidth > enemies[i].x &&
            playerY < enemies[i].y + enemyHeight &&
            playerY + playerHeight > enemies[i].y
        ) {
            enemies.splice(i, 1);
            lives--;
            if (lives === 0) {
                gameover = true;
            }
        }
    }
}

// Function to update the game state
function update() {
    if (!gameover) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawPlayer();
        drawEnemies();
        drawBullets();

        moveEnemies();
        moveBullets();

        handleCollisions();

        // Display score and lives
        ctx.fillStyle = '#ffffff';
        ctx.font = '20px Arial';
        ctx.fillText('Score: ' + score, 10, 30);
        ctx.fillText('Lives: ' + lives, canvas.width - 100, 30);

        requestAnimationFrame(update);
    } else {
        // Display game over message
        ctx.fillStyle = '#ffffff';
        ctx.font = '30px Arial';
        ctx.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
        ctx.fillText('Final Score: ' + score, canvas.width / 2 - 100, canvas.height / 2 + 40);
    }
}

// Function to handle keyboard input
function handleKeyPress(event) {
    if (event.key === 'ArrowLeft') {
        movePlayer('left');
    } else if (event.key === 'ArrowRight') {
        movePlayer('right');
    } else if (event.key === 'ArrowUp') {
        movePlayer('up');
    } else if (event.key === 'ArrowDown') {
        movePlayer('down');
    } else if (event.key === ' ') {
        bullets.push({ x: playerX + playerWidth / 2 - bulletWidth / 2, y: playerY });
    }
}

// Function to handle continuous shooting
function handleKeyHold(event) {
    if (event.key === ' ') {
        bullets.push({ x: playerX + playerWidth / 2 - bulletWidth / 2, y: playerY });
    }
}

// Add event listeners
const startButton = document.getElementById('startButton');
const replayButton = document.getElementById('replayButton');

startButton.addEventListener('click', function() {
    score = 0;
    lives = 3;
    gameover = false;
    playerX = canvas.width / 2;
    playerY = canvas.height - 50;
    enemies = [];
    bullets = [];
    update();
});

replayButton.addEventListener('click', function() {
    score = 0;
    lives = 3;
    gameover = false;
    update();
});

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', handleKeyHold);

// Function to generate new enemies at regular intervals
function generateEnemies() {
    let randomX = Math.random() * (canvas.width - enemyWidth);
    let randomY = Math.random() * -canvas.height;
    enemies.push({ x: randomX, y: randomY });
}

// Start the game
update();
setInterval(generateEnemies, 2000);
