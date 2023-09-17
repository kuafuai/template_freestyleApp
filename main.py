# Main entry point for the game
# Initialize the game and start the game loop

import pygame
from game import Game

def main():
    pygame.init()
    game = Game()
    game.run()

if __name__ == "__main__":
    main()
