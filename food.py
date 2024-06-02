import random

class Food:
    def __init__(self):
        self.position = (0, 0)

    def generate(self):
        x = random.randint(0, 79) * 10
        y = random.randint(0, 59) * 10
        self.position = (x, y)

    def draw(self, screen):
        pygame.draw.rect(screen, (255, 0, 0), (self.position[0], self.position[1], 10, 10))
