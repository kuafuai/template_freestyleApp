import pygame

# Define constants for colors and fonts
BACKGROUND_COLOR = (0, 0, 0)
SNAKE_COLOR = (0, 255, 0)
FOOD_COLOR = (255, 0, 0)
GAME_OVER_COLOR = (255, 255, 255)
GAME_OVER_FONT_SIZE = 50

# Define a function to set up the game screen
def setup_game_screen(width, height):
    screen = pygame.display.set_mode((width, height))
    pygame.display.set_caption("Snake Game")

# Define a function to display the game over message
def display_game_over_message(screen):
    font = pygame.font.Font(None, GAME_OVER_FONT_SIZE)
    text = font.render("Game Over", True, GAME_OVER_COLOR)
    text_rect = text.get_rect(center=(SCREEN_WIDTH // 2, SCREEN_HEIGHT // 2))
    screen.blit(text, text_rect)
    pygame.display.flip()
