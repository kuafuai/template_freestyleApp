import pygame

class Scoreboard:
    def __init__(self):
        self.score = 0

    def update_score(self, score):
        self.score = score

    def draw(self, window):
        if isinstance(window, pygame.Surface):
            font = pygame.font.Font(None, 36)
            text = font.render("Score: " + str(self.score), True, (255, 255, 255))
            window.blit(text, (10, 10))