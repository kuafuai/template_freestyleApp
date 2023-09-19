import pygame
from main_game import main

# Define test cases for different game scenarios
def test_game():
    pygame.init()
    main()
    pygame.quit()

# Run the test cases and check the results
if __name__ == "__main__":
    test_game()
