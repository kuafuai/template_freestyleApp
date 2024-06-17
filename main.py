# This file is responsible for creating the game interface, initializing the snake and food, handling player input, updating the game state, and drawing the snake and food on the game interface.

# Import necessary modules
import pygame
from snake import Snake
from food import Food
from game import Game
from scoreboard import Scoreboard

# Initialize the game
pygame.init()

# Set up the game interface
window_width = 800
window_height = 600
window = pygame.display.set_mode((window_width, window_height))
pygame.display.set_caption("Snake Game")

# Create objects for snake, food, and game
snake = Snake()
food = Food()
game = Game(window_width, window_height)
scoreboard = Scoreboard()

# Game loop
running = True
while running:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP:
                snake.change_direction("up")
            elif event.key == pygame.K_DOWN:
                snake.change_direction("down")
            elif event.key == pygame.K_LEFT:
                snake.change_direction("left")
            elif event.key == pygame.K_RIGHT:
                snake.change_direction("right")

    # Update game state
    snake.move()
    game.check_collision(snake, food)
    game.check_game_over(snake)

    # Update scoreboard
    scoreboard.update_score(snake.length)

    # Draw game objects on the screen
    window.fill((0, 0, 0))
    snake.draw(window)
    food.draw(window)
    scoreboard.draw(window)
    pygame.display.update()

# Quit the game
pygame.quit()