# Import required libraries
import pygame
from snake import Snake
from food import Food

# Initialize the game
pygame.init()

# Set the screen dimensions
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Snake Game")

# Set the game variables
clock = pygame.time.Clock()
snake = Snake()
food = Food()
score = 0
high_score = 0

# Function to display the score
def display_score():
    font = pygame.font.Font(None, 36)
    score_text = font.render("Score: " + str(score), True, (255, 255, 255))
    screen.blit(score_text, (10, 10))

# Function to display the high score
def display_high_score():
    font = pygame.font.Font(None, 36)
    high_score_text = font.render("High Score: " + str(high_score), True, (255, 255, 255))
    screen.blit(high_score_text, (10, 50))

# Function to handle game over
def game_over():
    font = pygame.font.Font(None, 72)
    game_over_text = font.render("Game Over", True, (255, 0, 0))
    screen.blit(game_over_text, (SCREEN_WIDTH/2 - game_over_text.get_width()/2, SCREEN_HEIGHT/2 - game_over_text.get_height()/2))
    pygame.display.flip()
    pygame.time.wait(2000)

# Game loop
running = True
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

    # Update snake position
    snake.update()

    # Check if snake has eaten the food
    if snake.eat_food(food):
        score += 1
        if score > high_score:
            high_score = score
        food.generate()

    # Check if snake has collided with the boundaries or itself
    if snake.check_collision(SCREEN_WIDTH, SCREEN_HEIGHT):
        game_over()
        snake.reset()
        score = 0

    # Clear the screen
    screen.fill((0, 0, 0))

    # Draw snake and food
    snake.draw(screen)
    food.draw(screen)

    # Display score and high score
    display_score()
    display_high_score()

    # Update the screen
    pygame.display.flip()

    # Set the frame rate
    clock.tick(10)

# Quit the game
pygame.quit()
