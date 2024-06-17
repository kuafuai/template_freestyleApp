import random

class Food:
    def __init__(self):
        self.position = (0, 0)

    def generate(self):
        self.position = (random.randint(0, 39), random.randint(0, 29))

    def draw(self, window):
        pygame.draw.rect(window, (255, 0, 0), (self.position[0] * 20, self.position[1] * 20, 20, 20))

    def check_collision(self, snake, game):
        if snake.position[0] == self.position:
            snake.position.append((0, 0))
            self.generate(game)
            game.score += 1
