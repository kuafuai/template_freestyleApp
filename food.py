import pygame
import random

# Define the Food class
class Food:
    def __init__(self):
        self.position = (random.randint(0, 79) * 10, random.randint(0, 59) * 10)

    def update_position(self):
        self.position = (random.randint(0, 79) * 10, random.randint(0, 59) * 10)

    def draw(self, screen):
        pygame.draw.rect(screen, (255, 0, 0), (self.position[0], self.position[1], 10, 10))

# Create an instance of the Food class
food = Food()

# Initialize pygame
pygame.init()

# Set up the display
screen = pygame.display.set_mode((800, 600))
pygame.display.set_caption("Food")

# Game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Update the position of the food
    food.update_position()

    # Clear the screen
    screen.fill((0, 0, 0))

    # Draw the food on the screen
    food.draw(screen)

    # Update the display
    pygame.display.flip()

# Quit the game
pygame.quit()