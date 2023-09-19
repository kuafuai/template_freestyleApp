import pygame
import random

# Initialize the game
pygame.init()

# Define the colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
GREEN = (0, 255, 0)
RED = (255, 0, 0)

# Set the dimensions of the game window
WINDOW_WIDTH = 800
WINDOW_HEIGHT = 600

# Set the dimensions of the grid
GRID_SIZE = 20
GRID_WIDTH = WINDOW_WIDTH // GRID_SIZE
GRID_HEIGHT = WINDOW_HEIGHT // GRID_SIZE

# Set the initial position and direction of the snake
snake_x = GRID_WIDTH // 2
snake_y = GRID_HEIGHT // 2
snake_direction = "RIGHT"

# Initialize the snake body
snake_body = []
snake_length = 1

# Initialize the food position
food_x = random.randint(0, GRID_WIDTH - 1)
food_y = random.randint(0, GRID_HEIGHT - 1)

# Initialize the obstacle position
obstacle_x = random.randint(0, GRID_WIDTH - 1)
obstacle_y = random.randint(0, GRID_HEIGHT - 1)

# Initialize the power-up position
power_up_x = random.randint(0, GRID_WIDTH - 1)
power_up_y = random.randint(0, GRID_HEIGHT - 1)

# Initialize the score
score = 0

# Create the game window
window = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))
pygame.display.set_caption("Snake Game")

def generate_food():
    """
    Generate a new position for the food item.
    """
    global food_x, food_y
    food_x = random.randint(0, GRID_WIDTH - 1)
    food_y = random.randint(0, GRID_HEIGHT - 1)

def generate_obstacle():
    """
    Generate a new position for the obstacle.
    """
    global obstacle_x, obstacle_y
    obstacle_x = random.randint(0, GRID_WIDTH - 1)
    obstacle_y = random.randint(0, GRID_HEIGHT - 1)

def generate_power_up():
    """
    Generate a new position for the power-up.
    """
    global power_up_x, power_up_y
    power_up_x = random.randint(0, GRID_WIDTH - 1)
    power_up_y = random.randint(0, GRID_HEIGHT - 1)

# Game loop
running = True
clock = pygame.time.Clock()

while running:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP and snake_direction != "DOWN":
                snake_direction = "UP"
            elif event.key == pygame.K_DOWN and snake_direction != "UP":
                snake_direction = "DOWN"
            elif event.key == pygame.K_LEFT and snake_direction != "RIGHT":
                snake_direction = "LEFT"
            elif event.key == pygame.K_RIGHT and snake_direction != "LEFT":
                snake_direction = "RIGHT"

    # Update the snake position
    if snake_direction == "UP":
        snake_y -= 1
    elif snake_direction == "DOWN":
        snake_y += 1
    elif snake_direction == "LEFT":
        snake_x -= 1
    elif snake_direction == "RIGHT":
        snake_x += 1

    # Check for collisions with the food
    if snake_x == food_x and snake_y == food_y:
        # Increase the score
        score += 1

        # Generate a new food position
        generate_food()

        # Increase the snake length
        snake_length += 1

    # Check for collisions with the obstacle
    if snake_x == obstacle_x and snake_y == obstacle_y:
        # Game over
        running = False

    # Check for collisions with the power-up
    if snake_x == power_up_x and snake_y == power_up_y:
        # Increase the score
        score += 5

        # Generate a new power-up position
        generate_power_up()

        # Increase the snake length
        snake_length += 2

    # Check for collisions with the snake body
    if [snake_x, snake_y] in snake_body[:-1]:
        # Game over
        running = False

    # Update the snake body
    snake_body.append([snake_x, snake_y])
    if len(snake_body) > snake_length:
        del snake_body[0]

    # Clear the game window
    window.fill(BLACK)

    # Draw the snake
    for segment in snake_body:
        pygame.draw.rect(window, GREEN, (segment[0] * GRID_SIZE, segment[1] * GRID_SIZE, GRID_SIZE, GRID_SIZE))

    # Draw the food
    pygame.draw.rect(window, RED, (food_x * GRID_SIZE, food_y * GRID_SIZE, GRID_SIZE, GRID_SIZE))

    # Draw the obstacle
    pygame.draw.rect(window, WHITE, (obstacle_x * GRID_SIZE, obstacle_y * GRID_SIZE, GRID_SIZE, GRID_SIZE))

    # Draw the power-up
    pygame.draw.rect(window, WHITE, (power_up_x * GRID_SIZE, power_up_y * GRID_SIZE, GRID_SIZE, GRID_SIZE))

    # Update the display
    pygame.display.update()

    # Limit the frame rate
    clock.tick(10)

# Quit the game
pygame.quit()