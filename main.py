# Import necessary modules
import pygame
from snake import Snake
from food import Food

# Initialize the game
pygame.init()

# Set the screen size
screen_width = 800
screen_height = 600
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Snake Game")

# Set the game variables
snake = Snake()
food = Food()
clock = pygame.time.Clock()
game_over = False

# Game loop
while not game_over:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            game_over = True
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP:
                snake.change_direction("UP")
            elif event.key == pygame.K_DOWN:
                snake.change_direction("DOWN")
            elif event.key == pygame.K_LEFT:
                snake.change_direction("LEFT")
            elif event.key == pygame.K_RIGHT:
                snake.change_direction("RIGHT")

    # Update snake position
    snake.move()

    # Check if snake has eaten food
    if snake.check_collision(food):
        snake.grow()
        food.generate()

    # Check if game is over
    if snake.check_boundary_collision(screen_width, screen_height) or snake.check_self_collision():
        game_over = True

    # Clear the screen
    screen.fill((0, 0, 0))

    # Draw snake and food
    snake.draw(screen)
    food.draw(screen)

    # Update the display
    pygame.display.update()

    # Set the game speed
    clock.tick(10)

# Quit the game
pygame.quit()
