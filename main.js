// main.js

// Constants
const spaceship = document.getElementById('spaceship');
const enemiesContainer = document.getElementById('enemies');
const powerUpsContainer = document.getElementById('power-ups');
const scoreElement = document.getElementById('score');
const livesElement = document.getElementById('lives');

const gameWidth = 800;
const gameHeight = 600;
const spaceshipWidth = 50;
const spaceshipHeight = 50;
const enemyWidth = 30;
const enemyHeight = 30;
const powerUpWidth = 20;
const powerUpHeight = 20;
const spaceshipSpeed = 5;
const bulletSpeed = 10;
const enemySpeed = 2;
const powerUpSpeed = 3;
const maxLives = 3;

let score = 0;
let lives = maxLives;

// Event listeners
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
document.addEventListener('click', handleMouseClick);

// Spaceship movement
let spaceshipX = gameWidth / 2 - spaceshipWidth / 2;
let spaceshipY = gameHeight - spaceshipHeight;
let isMovingLeft = false;
let isMovingRight = false;

// Bullets
let bullets = [];

// Enemies
let enemies = [];

// Power-ups
let powerUps = [];

// Game loop
function gameLoop() {
    clearGameContainer();
    moveSpaceship();
    moveBullets();
    moveEnemies();
    movePowerUps();
    checkCollision();
    updateScore();
    updateLives();
    requestAnimationFrame(gameLoop);
}

// Clear game container
function clearGameContainer() {
    while (enemiesContainer.firstChild) {
        enemiesContainer.removeChild(enemiesContainer.firstChild);
    }
    while (powerUpsContainer.firstChild) {
        powerUpsContainer.removeChild(powerUpsContainer.firstChild);
    }
}

// Move spaceship
function moveSpaceship() {
    if (isMovingLeft && spaceshipX > 0) {
        spaceshipX -= spaceshipSpeed;
    }
    if (isMovingRight && spaceshipX < gameWidth - spaceshipWidth) {
        spaceshipX += spaceshipSpeed;
    }
    spaceship.style.left = spaceshipX + 'px';
}

// Handle key down event
function handleKeyDown(event) {
    if (event.key === 'ArrowLeft') {
        isMovingLeft = true;
    }
    if (event.key === 'ArrowRight') {
        isMovingRight = true;
    }
}

// Handle key up event
function handleKeyUp(event) {
    if (event.key === 'ArrowLeft') {
        isMovingLeft = false;
    }
    if (event.key === 'ArrowRight') {
        isMovingRight = false;
    }
}

// Handle mouse click event
function handleMouseClick(event) {
    const bulletX = spaceshipX + spaceshipWidth / 2;
    const bulletY = spaceshipY;
    createBullet(bulletX, bulletY);
}

// Create bullet
function createBullet(x, y) {
    const bullet = document.createElement('div');
    bullet.className = 'bullet';
    bullet.style.left = x + 'px';
    bullet.style.top = y + 'px';
    bullets.push(bullet);
    enemiesContainer.appendChild(bullet);
}

// Move bullets
function moveBullets() {
    bullets.forEach((bullet, index) => {
        const bulletTop = parseInt(bullet.style.top);
        if (bulletTop > 0) {
            bullet.style.top = bulletTop - bulletSpeed + 'px';
        } else {
            bullets.splice(index, 1);
            bullet.remove();
        }
    });
}

// Move enemies
function moveEnemies() {
    enemies.forEach((enemy, index) => {
        const enemyTop = parseInt(enemy.style.top);
        if (enemyTop < gameHeight) {
            enemy.style.top = enemyTop + enemySpeed + 'px';
        } else {
            enemies.splice(index, 1);
            enemy.remove();
        }
    });
}

// Move power-ups
function movePowerUps() {
    powerUps.forEach((powerUp, index) => {
        const powerUpTop = parseInt(powerUp.style.top);
        if (powerUpTop < gameHeight) {
            powerUp.style.top = powerUpTop + powerUpSpeed + 'px';
        } else {
            powerUps.splice(index, 1);
            powerUp.remove();
        }
    });
}

// Check collision
function checkCollision() {
    bullets.forEach((bullet, bulletIndex) => {
        const bulletLeft = parseInt(bullet.style.left);
        const bulletTop = parseInt(bullet.style.top);
        enemies.forEach((enemy, enemyIndex) => {
            const enemyLeft = parseInt(enemy.style.left);
            const enemyTop = parseInt(enemy.style.top);
            if (bulletLeft >= enemyLeft && bulletLeft <= enemyLeft + enemyWidth &&
                bulletTop >= enemyTop && bulletTop <= enemyTop + enemyHeight) {
                bullets.splice(bulletIndex, 1);
                bullet.remove();
                enemies.splice(enemyIndex, 1);
                enemy.remove();
                score += 10;
            }
        });
    });

    enemies.forEach((enemy) => {
        const enemyLeft = parseInt(enemy.style.left);
        const enemyTop = parseInt(enemy.style.top);
        if (enemyLeft >= spaceshipX && enemyLeft <= spaceshipX + spaceshipWidth &&
            enemyTop >= spaceshipY && enemyTop <= spaceshipY + spaceshipHeight) {
            enemies.splice(enemies.indexOf(enemy), 1);
            enemy.remove();
            lives--;
            if (lives === 0) {
                endGame();
            }
        }
    });

    powerUps.forEach((powerUp, index) => {
        const powerUpLeft = parseInt(powerUp.style.left);
        const powerUpTop = parseInt(powerUp.style.top);
        if (powerUpLeft >= spaceshipX && powerUpLeft <= spaceshipX + spaceshipWidth &&
            powerUpTop >= spaceshipY && powerUpTop <= spaceshipY + spaceshipHeight) {
            powerUps.splice(index, 1);
            powerUp.remove();
            score += 50;
        }
    });
}

// Update score
function updateScore() {
    scoreElement.textContent = 'Score: ' + score;
}

// Update lives
function updateLives() {
    livesElement.textContent = 'Lives: ' + lives;
}

// End game
function endGame() {
    // Game over logic
}

// Start game
gameLoop();
