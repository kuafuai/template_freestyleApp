import random

class Food:
    def __init__(self, window_width: int, window_height: int, color: str):
        """
        Initialize the Food class with the given window width, window height, and color.

        Args:
        - window_width (int): The width of the game window.
        - window_height (int): The height of the game window.
        - color (str): The color of the food.

        Returns:
        - None
        """
        self.window_width = window_width
        self.window_height = window_height
        self.color = color
        self.size = 20
        self.x = random.randint(0, (self.window_width - self.size) // self.size) * self.size
        self.y = random.randint(0, (self.window_height - self.size) // self.size) * self.size

    def generate(self) -> None:
        """
        Generate a new position for the food.

        Args:
        - None

        Returns:
        - None
        """
        self.x = random.randint(0, (self.window_width - self.size) // self.size) * self.size
        self.y = random.randint(0, (self.window_height - self.size) // self.size) * self.size