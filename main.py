# Import the necessary modules
from game import Game

try:
    # Create a game instance
    game = Game()

    # Start the game
    game.start()

except Exception as e:
    print(f"An error occurred: {str(e)}")
