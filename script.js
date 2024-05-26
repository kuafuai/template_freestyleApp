// Define the colors for the cards
const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

// Initialize variables
let score = 0;
let highScore = 0;
let selectedCards = [];

// Get the card area element
const cardContainer = document.getElementById("card-area");

// Generate random cards and display them in the card area
function generateCards() {
    cardContainer.innerHTML = "";
    selectedCards = [];

    for (let i = 0; i < 12; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.backgroundColor = getRandomColor();
        card.addEventListener("click", selectCard);
        cardContainer.appendChild(card);
    }
}

// Get a random color from the colors array
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Handle card selection
function selectCard(event) {
    const selectedCard = event.target;

    if (selectedCards.includes(selectedCard)) {
        return;
    }

    selectedCard.classList.add("selected");
    selectedCards.push(selectedCard);

    if (selectedCards.length === 2) {
        checkMatch();
    }
}

// Check if the selected cards match
function checkMatch() {
    const firstCard = selectedCards[0];
    const secondCard = selectedCards[1];

    if (firstCard.style.backgroundColor === secondCard.style.backgroundColor) {
        removeCards();
        increaseScore();
    } else {
        deselectCards();
    }
}

// Remove the matched cards from the card area
function removeCards() {
    selectedCards.forEach(card => {
        card.remove();
    });

    selectedCards = [];
}

// Deselect the selected cards
function deselectCards() {
    selectedCards.forEach(card => {
        card.classList.remove("selected");
    });

    selectedCards = [];
}

// Increase the score and update the high score if necessary
function increaseScore() {
    score += 10;
    if (score > highScore) {
        highScore = score;
    }

    updateScore();
}

// Update the score display
function updateScore() {
    const scoreArea = document.getElementById("score-area");
    scoreArea.textContent = "Score: " + score + " | High Score: " + highScore;
}

// Initialize the game
function initGame() {
    generateCards();
    updateScore();
}

// Start the game
initGame();
