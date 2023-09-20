import pygame

class Pipe(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()

        # Load pipe image
        self.image = pygame.image.load("pipe.png")
        self.rect = self.image.get_rect()

        # Set initial position
        self.rect.center = (800, 300)

    def update(self):
        # Update pipe's position
        self.rect.x -= 5

    def draw(self, screen):
        # Draw pipe on the screen
        screen.blit(self.image, self.rect)