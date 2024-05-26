$(document).ready(function() {
  // Define the colors for the game
  const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];

  // Define the number of cards for each color
  const cardsPerColor = 2;

  // Initialize variables
  let selectedCards = [];
  let matchedCards = 0;
  let score = 0;
  let timer;

  // Generate the game board
  function generateGameBoard() {
    const gameBoard = $('#game-board');
    gameBoard.empty();

    // Shuffle the colors
    const shuffledColors = shuffleArray(colors);

    // Create card elements
    for (let i = 0; i < colors.length * cardsPerColor; i++) {
      const card = $('<div>').addClass('card');
      const color = shuffledColors[Math.floor(i / cardsPerColor)];
      card.css('background-color', color);
      card.click(function() {
        handleCardClick($(this), color);
      });
      gameBoard.append(card);
    }
  }

  // Handle card click event
  function handleCardClick(card, color) {
    if (card.hasClass('selected')) {
      card.removeClass('selected');
      selectedCards = selectedCards.filter(function(selectedCard) {
        return selectedCard !== card;
      });
    } else {
      card.addClass('selected');
      selectedCards.push(card);
      if (selectedCards.length === 2) {
        checkMatch();
      }
    }
  }

  // Check if the selected cards match
  function checkMatch() {
    const card1 = selectedCards[0];
    const card2 = selectedCards[1];
    if (card1.css('background-color') === card2.css('background-color')) {
      card1.addClass('matched');
      card2.addClass('matched');
      matchedCards += 2;
      score += 2;
      if (matchedCards === colors.length * cardsPerColor) {
        endGame();
      }
    } else {
      setTimeout(function() {
        card1.removeClass('selected');
        card2.removeClass('selected');
      }, 1000);
      score -= 1;
    }
    selectedCards = [];
    updateScore();
  }

  // Update the score display
  function updateScore() {
    $('#score').text('Score: ' + score);
  }

  // End the game
  function endGame() {
    clearInterval(timer);
    alert('Game Over! Your score is ' + score);
  }

  // Shuffle an array using Fisher-Yates algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Start the game
  function startGame() {
    generateGameBoard();
    updateScore();
    timer = setInterval(function() {
      score -= 1;
      updateScore();
    }, 1000);
  }

  // Reset the game
  function resetGame() {
    clearInterval(timer);
    selectedCards = [];
    matchedCards = 0;
    score = 0;
    generateGameBoard();
    updateScore();
    timer = setInterval(function() {
      score -= 1;
      updateScore();
    }, 1000);
  }

  // Event listener for reset button click
  $('#reset-button').click(function() {
    resetGame();
  });

  // Start the game
  startGame();
});
