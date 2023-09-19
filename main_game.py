import pygame
from snake import Snake
from food import Food
from game_logic import handle_user_input, update_game_state, check_collisions, draw_game_screen
from ui_ux_design import setup_game_screen, display_game_over_message

# Define constants for game settings
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
FPS = 10

# Create an instance of the game
def main():
    pygame.init()
    clock = pygame.time.Clock()
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    pygame.display.set_caption("Snake Game")

    snake = Snake()
    food = Food()

    game_over = False

    # Start the game loop
    while not game_over:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                game_over = True

        handle_user_input(snake)
        update_game_state(snake, food)
        game_over = check_collisions(snake)

        screen.fill((0, 0, 0))
        draw_game_screen(screen, snake, food)

        pygame.display.update()
        clock.tick(FPS)

    display_game_over_message(screen)

    pygame.quit()

if __name__ == "__main__":
    main()