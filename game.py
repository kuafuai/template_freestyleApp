import pygame
from bird import Bird
from pipe import Pipe

class Game:
    def __init__(self):
        pygame.init()
        self.screen = pygame.display.set_mode((800, 600))
        pygame.display.set_caption("小鸟飞行游戏")

        self.bird = Bird()

        self.pipes = pygame.sprite.Group()
        self.create_pipes()

        self.score = 0
        self.game_over = False

    def create_pipes(self):
        # Create pipe objects and add them to the group
        for i in range(3):
            pipe = Pipe()
            pipe.rect.x = 400 + i * 300
            self.pipes.add(pipe)

    def handle_events(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                self.game_over = True

    def update(self):
        self.bird.update()
        self.pipes.update()

        if pygame.sprite.spritecollide(self.bird, self.pipes, False):
            self.game_over = True

    def draw(self):
        self.screen.fill((255, 255, 255))

        self.bird.draw(self.screen)
        self.pipes.draw(self.screen)

        font = pygame.font.Font(None, 36)
        score_text = font.render(f"Score: {self.score}", True, (0, 0, 0))
        self.screen.blit(score_text, (10, 10))

        pygame.display.flip()

    def run(self):
        while not self.game_over:
            self.handle_events()
            self.update()
            self.draw()

        pygame.quit()

if __name__ == "__main__":
    game = Game()
    game.run()