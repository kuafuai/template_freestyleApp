# Import necessary modules
import pygame
from snake import Snake
from food import Food

# Initialize the game
pygame.init()

# Set up the game window
window_width = 800
window_height = 600
window = pygame.display.set_mode((window_width, window_height))
pygame.display.set_caption("Snake Game")

# Set up the game clock
clock = pygame.time.Clock()

# Set up the game colors
background_color = (0, 0, 0)
snake_color = (0, 255, 0)
food_color = (255, 0, 0)

# Set up the game variables
snake = Snake(window_width, window_height, snake_color)
food = Food(window_width, window_height, food_color)
score = 0

# Set up the game functions
def draw_snake():
    """
    Draw the snake on the game window
    """
    for segment in snake.segments:
        pygame.draw.rect(window, snake.color, (segment[0], segment[1], snake.size, snake.size))

def draw_food():
    """
    Draw the food on the game window
    """
    pygame.draw.rect(window, food.color, (food.x, food.y, food.size, food.size))

def check_collision():
    """
    Check if the snake has collided with the food
    """
    if snake.head[0] == food.x and snake.head[1] == food.y:
        snake.grow()
        food.generate()

def check_game_over():
    """
    Check if the game is over
    """
    if snake.head[0] < 0 or snake.head[0] >= window_width or snake.head[1] < 0 or snake.head[1] >= window_height:
        return True
    for segment in snake.segments[1:]:
        if snake.head[0] == segment[0] and snake.head[1] == segment[1]:
            return True
    return False

# Game loop
running = True
game_speed = 10  # Adjust the game speed here

while running:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP or event.key == pygame.K_w:
                snake.change_direction("UP")
            elif event.key == pygame.K_DOWN or event.key == pygame.K_s:
                snake.change_direction("DOWN")
            elif event.key == pygame.K_LEFT or event.key == pygame.K_a:
                snake.change_direction("LEFT")
            elif event.key == pygame.K_RIGHT or event.key == pygame.K_d:
                snake.change_direction("RIGHT")

    # Update game state
    snake.move()
    check_collision()
    if check_game_over():
        running = False

    # Draw game objects
    window.fill(background_color)
    draw_snake()
    draw_food()
    pygame.display.update()

    # Control game speed
    clock.tick(game_speed)

# Quit the game
pygame.quit()
