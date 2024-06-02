import pygame

class Snake:
    def __init__(self):
        self.position = [(100, 50), (90, 50), (80, 50)]
        self.direction = "RIGHT"

    def change_direction(self, new_direction):
        if new_direction == "UP" and self.direction != "DOWN":
            self.direction = "UP"
        elif new_direction == "DOWN" and self.direction != "UP":
            self.direction = "DOWN"
        elif new_direction == "LEFT" and self.direction != "RIGHT":
            self.direction = "LEFT"
        elif new_direction == "RIGHT" and self.direction != "LEFT":
            self.direction = "RIGHT"

    def move(self):
        head = self.position[0]
        x, y = head

        if self.direction == "UP":
            y -= 10
        elif self.direction == "DOWN":
            y += 10
        elif self.direction == "LEFT":
            x -= 10
        elif self.direction == "RIGHT":
            x += 10

        self.position.insert(0, (x, y))
        self.position.pop()

    def grow(self):
        tail = self.position[-1]
        x, y = tail

        if self.direction == "UP":
            y += 10
        elif self.direction == "DOWN":
            y -= 10
        elif self.direction == "LEFT":
            x += 10
        elif self.direction == "RIGHT":
            x -= 10

        self.position.append((x, y))

    def check_collision(self, food):
        head = self.position[0]
        return head == food.position

    def check_boundary_collision(self, screen_width, screen_height):
        head = self.position[0]
        x, y = head
        return x < 0 or x >= screen_width or y < 0 or y >= screen_height

    def check_self_collision(self):
        head = self.position[0]
        return head in self.position[1:]

    def draw(self, screen):
        for segment in self.position:
            pygame.draw.rect(screen, (0, 255, 0), (segment[0], segment[1], 10, 10))

def handle_user_input(snake):
    for event in pygame.event.get():
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP:
                snake.change_direction("UP")
            elif event.key == pygame.K_DOWN:
                snake.change_direction("DOWN")
            elif event.key == pygame.K_LEFT:
                snake.change_direction("LEFT")
            elif event.key == pygame.K_RIGHT:
                snake.change_direction("RIGHT")

def main():
    pygame.init()
    screen_width = 800
    screen_height = 600
    screen = pygame.display.set_mode((screen_width, screen_height))
    clock = pygame.time.Clock()
    snake = Snake()

    while True:
        handle_user_input(snake)
        snake.move()
        if snake.check_self_collision() or snake.check_boundary_collision(screen_width, screen_height):
            break

        screen.fill((0, 0, 0))
        snake.draw(screen)
        pygame.display.update()
        clock.tick(10)

    pygame.quit()

if __name__ == "__main__":
    main()