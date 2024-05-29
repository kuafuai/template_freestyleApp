/* This file contains the JavaScript logic for the game */

// Constants
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const AIM_SIZE = 20;
const TARGET_SIZE = 50;
const TARGET_SPEED = 2;
const ATTACK_DELAY = 1000;
const ATTACK_DAMAGE = 1;

// Variables
let score = 0;
let health = 5;
let aimX = GAME_WIDTH / 2;
let aimY = GAME_HEIGHT / 2;
let targets = [];

// DOM elements
const aimElement = document.getElementById('aim');
const targetsElement = document.getElementById('targets');
const scoreElement = document.getElementById('score-value');
const healthElement = document.getElementById('health-value');

// Event listeners
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('click', handleMouseClick);

// Game loop
setInterval(updateGame, 16);

// Functions

/**
 * Handles the mouse movement event
 * @param {MouseEvent} event - The mouse movement event
 */
function handleMouseMove(event) {
    aimX = event.clientX;
    aimY = event.clientY;
}

/**
 * Handles the mouse click event
 */
function handleMouseClick() {
    for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        if (isColliding(aimX, aimY, AIM_SIZE, target.x, target.y, TARGET_SIZE)) {
            score += 10;
            targets.splice(i, 1);
            break;
        }
    }
}

/**
 * Updates the game state
 */
function updateGame() {
    updateTargets();
    updateScore();
    updateHealth();
}

/**
 * Updates the targets' positions and checks for collisions
 */
function updateTargets() {
    for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        target.y += TARGET_SPEED;
        if (target.y > GAME_HEIGHT) {
            targets.splice(i, 1);
            health -= ATTACK_DAMAGE;
        }
    }
    if (Math.random() < 0.01) {
        const target = {
            x: Math.random() * (GAME_WIDTH - TARGET_SIZE),
            y: -TARGET_SIZE
        };
        targets.push(target);
    }
}

/**
 * Updates the score element with the current score value
 */
function updateScore() {
    scoreElement.textContent = score;
}

/**
 * Updates the health element with the current health value
 * Checks if the health is zero or less and ends the game if true
 */
function updateHealth() {
    healthElement.textContent = health;
    if (health <= 0) {
        endGame();
    }
}

/**
 * Checks if two rectangles are colliding
 * @param {number} x1 - The x-coordinate of the first rectangle
 * @param {number} y1 - The y-coordinate of the first rectangle
 * @param {number} size1 - The size of the first rectangle
 * @param {number} x2 - The x-coordinate of the second rectangle
 * @param {number} y2 - The y-coordinate of the second rectangle
 * @param {number} size2 - The size of the second rectangle
 * @returns {boolean} - True if the rectangles are colliding, false otherwise
 */
function isColliding(x1, y1, size1, x2, y2, size2) {
    return x1 < x2 + size2 &&
           x1 + size1 > x2 &&
           y1 < y2 + size2 &&
           y1 + size1 > y2;
}

/**
 * Ends the game
 */
function endGame() {
    // Game over logic
    alert('Game Over');
}
