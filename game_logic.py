import pygame

# Define a function to handle user input
def handle_user_input(snake):
    keys = pygame.key.get_pressed()
    if keys[pygame.K_UP]:
        snake.change_direction(pygame.K_UP)
    elif keys[pygame.K_DOWN]:
        snake.change_direction(pygame.K_DOWN)
    elif keys[pygame.K_LEFT]:
        snake.change_direction(pygame.K_LEFT)
    elif keys[pygame.K_RIGHT]:
        snake.change_direction(pygame.K_RIGHT)

# Define a function to update the game state
def update_game_state(snake, food):
    snake.move()
    if snake.position[0] == food.position:
        snake.update_length()
        food.update_position()

# Define a function to check for collisions
def check_collisions(snake):
    if snake.check_collision():
        return True
    return False

# Define a function to draw the game screen
def draw_game_screen(screen, snake, food):
    snake.draw(screen)
    food.draw(screen)
