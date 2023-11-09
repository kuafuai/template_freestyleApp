# This file is responsible for creating the game object and starting the game.

# Import necessary modules
from game import Game
from gui import GUI

# Create a game object
game = Game()

# Create a GUI object
gui = GUI(game)

# Start the game
gui.start_game()
