import pygame
from tetris import Tetris

class Game:
    def __init__(self):
        self.screen_width = 800
        self.screen_height = 600
        self.screen = pygame.display.set_mode((self.screen_width, self.screen_height))
        self.clock = pygame.time.Clock()
        self.is_running = False
        self.tetris = Tetris()

    def run(self):
        self.is_running = True
        while self.is_running:
            self.handle_events()
            self.update()
            self.render()
            self.clock.tick(60)

    def handle_events(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                self.is_running = False
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    self.tetris.move_left()
                elif event.key == pygame.K_RIGHT:
                    self.tetris.move_right()
                elif event.key == pygame.K_DOWN:
                    self.tetris.move_down()
                elif event.key == pygame.K_SPACE:
                    self.tetris.drop()

    def update(self):
        self.tetris.update()

    def render(self):
        self.screen.fill((0, 0, 0))
        self.tetris.render(self.screen)
        pygame.display.flip()

game = Game()
game.run()