import pygame

class Snake:
    def __init__(self):
        self.length = 1
        self.positions = [(100, 50), (90, 50), (80, 50)]
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
        x, y = self.positions[0]
        if self.direction == "UP":
            y -= 10
        elif self.direction == "DOWN":
            y += 10
        elif self.direction == "LEFT":
            x -= 10
        elif self.direction == "RIGHT":
            x += 10
        self.positions.insert(0, (x, y))
        self.positions.pop()

    def draw(self, screen):
        for segment in self.positions:
            pygame.draw.rect(screen, (0, 255, 0), pygame.Rect(segment[0], segment[1], 10, 10))

    def check_collision(self, game):
        x, y = self.positions[0]
        if x < 0 or x >= game.screen_width or y < 0 or y >= game.screen_height:
            game.game_over = True
        for segment in self.positions[1:]:
            if segment == self.positions[0]:
                game.game_over = True

