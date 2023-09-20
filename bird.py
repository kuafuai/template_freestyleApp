# Bird class for the player-controlled bird
import pygame

class Bird(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()

        # Load bird image
        self.image = pygame.image.load("bird.png")
        self.rect = self.image.get_rect()

        # Set initial position
        self.rect.center = (100, 300)

        # Set initial velocity
        self.velocity = pygame.Vector2(0, 0)

    def update(self):
        # Update bird's position based on user input
        keys = pygame.key.get_pressed()
        if keys[pygame.K_UP]:
            self.velocity.y = -5
        elif keys[pygame.K_DOWN]:
            self.velocity.y = 5
        else:
            self.velocity.y = 0

        self.rect.move_ip(self.velocity)

    def draw(self, screen):
        # Draw bird on the screen
        screen.blit(self.image, self.rect)
