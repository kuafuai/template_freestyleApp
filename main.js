// main.js

$(document).ready(function() {
  // Handle game character click event
  $('.game-character').click(function(event) {
    var clickPosition = getClickPosition(event);
    var direction = calculateDirection(clickPosition);
    moveCharacter(direction);
  });

  // Handle animal icon click event
  $('.animal-icons').on('click', '.animal-icon', function() {
    var animalId = $(this).data('animal-id');
    showAnimalDetails(animalId);
  });

  // Function to get click position
  function getClickPosition(event) {
    var x = event.clientX;
    var y = event.clientY;
    return { x: x, y: y };
  }

  // Function to calculate direction based on click position
  function calculateDirection(clickPosition) {
    var characterPosition = $('.game-character').position();
    var characterX = characterPosition.left;
    var characterY = characterPosition.top;

    var clickX = clickPosition.x;
    var clickY = clickPosition.y;

    var deltaX = clickX - characterX;
    var deltaY = clickY - characterY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        return 'right';
      } else {
        return 'left';
      }
    } else {
      if (deltaY > 0) {
        return 'down';
      } else {
        return 'up';
      }
    }
  }

  // Function to move game character
  function moveCharacter(direction) {
    var character = $('.game-character');
    var characterPosition = character.position();
    var characterX = characterPosition.left;
    var characterY = characterPosition.top;

    var stepSize = 50; // Adjust this value to control the character's movement speed

    if (direction === 'up') {
      character.css('top', characterY - stepSize);
    } else if (direction === 'down') {
      character.css('top', characterY + stepSize);
    } else if (direction === 'left') {
      character.css('left', characterX - stepSize);
    } else if (direction === 'right') {
      character.css('left', characterX + stepSize);
    }
  }

  // Function to show animal details
  function showAnimalDetails(animalId) {
    // Add code to show the details of the animal
    var animalDetails = getAnimalDetails(animalId);
    // Display the animal details in a modal or a separate section of the page
    // CODE
  }

  // Function to get animal details
  function getAnimalDetails(animalId) {
    // Add code to fetch the animal details from the server or a data source
    // CODE
    // Return the animal details
    return animalDetails;
  }
});