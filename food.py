import pygame
import random

class Food:
    def __init__(self):
        """
        Initialize the Food class.
        """
        self.position = (random.randint(0, 79) * 10, random.randint(0, 59) * 10)

    def generate(self):
        """
        Generate a random position for the food.
        """
        self.position = (random.randint(0, 79) * 10, random.randint(0, 59) * 10)

    def draw(self, screen):
        """
        Draw the food on the screen.
        :param screen: The screen to draw on.
        """
        pygame.draw.rect(screen, (255, 0, 0), (self.position[0], self.position[1], 10, 10))