$(document).ready(function() {
  // Constants
  const COLORS = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
  const MAX_CARDS = 12;
  const MATCH_TIME = 300;

  // Variables
  let score = 0;
  let time = MATCH_TIME;
  let cards = [];

  // Generate random color cards
  function generateCards() {
    let colorCounts = {};
    for (let i = 0; i < MAX_CARDS; i++) {
      let color = COLORS[Math.floor(Math.random() * COLORS.length)];
      if (colorCounts[color] === undefined) {
        colorCounts[color] = 0;
      }
      if (colorCounts[color] < 2) {
        cards.push(color);
        colorCounts[color]++;
      } else {
        i--;
      }
    }
  }

  // Handle card click events
  function handleCardClick() {
    let selectedCards = $('.card.selected');
    if (selectedCards.length === 2) {
      let color1 = selectedCards.eq(0).data('color');
      let color2 = selectedCards.eq(1).data('color');
      if (color1 === color2) {
        score++;
        selectedCards.removeClass('selected');
      } else {
        score--;
        selectedCards.removeClass('selected');
      }
    }
  }

  // Update score
  function updateScore() {
    $('#score').text(score);
  }

  // Update time
  function updateTime() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    $('#time').text(minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0'));
  }

  // Game over
  function gameOver() {
    clearInterval(timer);
    if (score >= 0) {
      alert('Congratulations! You won!');
    } else {
      alert('Game over! You lost!');
    }
  }

  // Restart game
  function restartGame() {
    score = 0;
    time = MATCH_TIME;
    cards = [];
    generateCards();
    updateScore();
    updateTime();
    $('.card').remove();
    clearInterval(timer);
    timer = setInterval(function() {
      time--;
      updateTime();
      if (time === 0) {
        gameOver();
      }
    }, 1000);
  }

  // Generate initial cards
  generateCards();

  // Render cards
  for (let i = 0; i < cards.length; i++) {
    let card = $('<div>').addClass('card').data('color', cards[i]);
    $('#card-area').append(card);
  }

  // Handle card click events
  $('.card').click(function() {
    if (!$(this).hasClass('selected')) {
      $(this).addClass('selected');
      handleCardClick();
      updateScore();
    }
  });

  // Game timer
  let timer = setInterval(function() {
    time--;
    updateTime();
    if (time === 0) {
      gameOver();
    }
  }, 1000);

  // Restart game button click event
  $('#restart-button').click(function() {
    restartGame();
  });
});
