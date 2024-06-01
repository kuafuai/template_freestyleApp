import pygame
import random

# Define the Snake class
class Snake:
    def __init__(self):
        self.body = [(200, 200)]
        self.direction = "RIGHT"

    def change_direction(self, direction):
        if direction == "UP" and self.direction != "DOWN":
            self.direction = "UP"
        elif direction == "DOWN" and self.direction != "UP":
            self.direction = "DOWN"
        elif direction == "LEFT" and self.direction != "RIGHT":
            self.direction = "LEFT"
        elif direction == "RIGHT" and self.direction != "LEFT":
            self.direction = "RIGHT"

    def update(self):
        head = self.body[0]
        x, y = head

        if self.direction == "UP":
            y -= 10
        elif self.direction == "DOWN":
            y += 10
        elif self.direction == "LEFT":
            x -= 10
        elif self.direction == "RIGHT":
            x += 10

        self.body.insert(0, (x, y))
        self.body.pop()

    def eat_food(self, food):
        head = self.body[0]
        if head == food.position:
            self.body.append(self.body[-1])
            return True
        return False

    def check_collision(self, screen_width, screen_height):
        head = self.body[0]
        x, y = head
        if x < 0 or x >= screen_width or y < 0 or y >= screen_height:
            return True
        if head in self.body[1:]:
            return True
        return False

    def draw(self, screen):
        for segment in self.body:
            pygame.draw.rect(screen, (0, 255, 0), (segment[0], segment[1], 10, 10))

    def reset(self):
        self.body = [(200, 200)]
        self.direction = "RIGHT"

# Define the Food class
class Food:
    def __init__(self, screen_width, screen_height):
        self.screen_width = screen_width
        self.screen_height = screen_height
        self.position = self.generate_position()

    def generate_position(self):
        x = random.randint(0, self.screen_width - 10)
        y = random.randint(0, self.screen_height - 10)
        return (x, y)

    def draw(self, screen):
        pygame.draw.rect(screen, (255, 0, 0), (self.position[0], self.position[1], 10, 10))

# Initialize pygame
pygame.init()

# Set screen dimensions
screen_width = 400
screen_height = 400

# Create the screen
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Snake Game")

# Create the snake
snake = Snake()

# Create the food
food = Food(screen_width, screen_height)

# Game loop
running = True
clock = pygame.time.Clock()

while running:
    clock.tick(10)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP:
                snake.change_direction("UP")
            elif event.key == pygame.K_DOWN:
                snake.change_direction("DOWN")
            elif event.key == pygame.K_LEFT:
                snake.change_direction("LEFT")
            elif event.key == pygame.K_RIGHT:
                snake.change_direction("RIGHT")

    snake.update()

    if snake.eat_food(food):
        food.position = food.generate_position()

    if snake.check_collision(screen_width, screen_height):
        snake.reset()

    screen.fill((0, 0, 0))
    snake.draw(screen)
    food.draw(screen)
    pygame.display.update()

# Quit the game
pygame.quit()