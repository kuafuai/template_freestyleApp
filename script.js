// script.js

// Define an array containing words and their corresponding answer options
var wordData = [
    { word: "apple", options: ["苹果", "香蕉", "橙子"] },
    { word: "cat", options: ["猫", "狗", "鸟"] },
    { word: "book", options: ["书", "笔", "纸"] },
    // Add more words and options as needed
];

// Define variables to track game state
var score = 0;
var errorRate = 0;
var currentWordIndex = 0;

// Function to randomly select a word and display it on the page
function displayWord() {
    var wordDisplayElement = document.getElementById("word-display");
    var randomIndex = Math.floor(Math.random() * wordData.length);
    var word = wordData[randomIndex].word;
    wordDisplayElement.textContent = word;
}

// Function to display answer options for the current word
function displayAnswerOptions() {
    var answerOptionsContainer = document.getElementById("answer-options");
    answerOptionsContainer.innerHTML = "";

    var options = wordData[currentWordIndex].options;
    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        var optionElement = document.createElement("div");
        optionElement.classList.add("answer-option");
        optionElement.textContent = option;
        optionElement.addEventListener("click", handleAnswerSelection);
        answerOptionsContainer.appendChild(optionElement);
    }
}

// Function to handle player's answer selection
function handleAnswerSelection(event) {
    var selectedOption = event.target.textContent;
    var correctOption = wordData[currentWordIndex].options[0];

    if (selectedOption === correctOption) {
        score++;
    } else {
        errorRate++;
    }

    currentWordIndex++;
    displayWord();
    displayAnswerOptions();
    displayScore();
}

// Function to calculate and display player's score and error rate
function displayScore() {
    var scoreDisplay = document.getElementById("score-display");
    scoreDisplay.textContent = "Score: " + score + " | Error Rate: " + errorRate;
}

// Function to start the game
function startGame() {
    displayWord();
    displayAnswerOptions();
    displayScore();
}

// Call the startGame function to begin the game
startGame();