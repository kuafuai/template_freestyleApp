# Import the necessary libraries
import pygame
import random

# Initialize the game
pygame.init()

# Set the width and height of the game window
window_width = 800
window_height = 600

# Set the colors
black = (0, 0, 0)
white = (255, 255, 255)
red = (255, 0, 0)

# Set the size of the snake and the speed of movement
snake_size = 20
snake_speed = 10

# Create the game window
window = pygame.display.set_mode((window_width, window_height))
pygame.display.set_caption("Snake Game")

# Create the snake
def create_snake(snake_size, snake_list):
    for x in snake_list:
        pygame.draw.rect(window, black, [x[0], x[1], snake_size, snake_size])

# Create the food
def create_food():
    food_x = round(random.randrange(0, window_width - snake_size) / 20) * 20
    food_y = round(random.randrange(0, window_height - snake_size) / 20) * 20
    return food_x, food_y

# Main game loop
def game_loop():
    game_over = False
    game_close = False

    # Set the initial position and direction of the snake
    x = window_width / 2
    y = window_height / 2
    dx = 0
    dy = 0

    # Create the snake list and length
    snake_list = []
    snake_length = 1

    # Create the initial food position
    food_x, food_y = create_food()

    # Game loop
    while not game_over:

        # Check for events
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                game_over = True
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    dx = -snake_size
                    dy = 0
                elif event.key == pygame.K_RIGHT:
                    dx = snake_size
                    dy = 0
                elif event.key == pygame.K_UP:
                    dx = 0
                    dy = -snake_size
                elif event.key == pygame.K_DOWN:
                    dx = 0
                    dy = snake_size

        # Update the snake position
        x += dx
        y += dy

        # Check for collision with the boundaries of the window
        if x >= window_width or x < 0 or y >= window_height or y < 0:
            game_close = True

        # Create the snake head and body
        snake_head = []
        snake_head.append(x)
        snake_head.append(y)
        snake_list.append(snake_head)

        # Remove the extra parts of the snake if it exceeds the length
        if len(snake_list) > snake_length:
            del snake_list[0]

        # Check for collision with the snake body
        for segment in snake_list[:-1]:
            if segment == snake_head:
                game_close = True

        # Draw the game window
        window.fill(white)
        create_snake(snake_size, snake_list)
        pygame.draw.rect(window, red, [food_x, food_y, snake_size, snake_size])
        pygame.display.update()

        # Check if the snake has eaten the food
        if x == food_x and y == food_y:
            # Increase the length of the snake
            snake_length += 1
            # Create a new food position
            food_x, food_y = create_food()

        # Set the game speed
        clock = pygame.time.Clock()
        clock.tick(snake_speed)

    # Game over screen
    while game_close:
        window.fill(white)
        font_style = pygame.font.SysFont(None, 50)
        message = font_style.render("Game Over! Your score: " + str(snake_length - 1), True, black)
        window.blit(message, [window_width / 2 - 200, window_height / 2 - 50])
        pygame.display.update()

        # Check for events
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                game_over = True
                game_close = False

# Start the game loop
game_loop()

# Quit the game
pygame.quit()
