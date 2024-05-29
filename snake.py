class Snake:
    def __init__(self, window_width, window_height, color):
        self.window_width = window_width
        self.window_height = window_height
        self.color = color
        self.size = 20
        self.speed = 20
        self.direction = "RIGHT"
        self.head = [self.window_width // 2, self.window_height // 2]
        self.segments = [self.head]

    def change_direction(self, direction):
        if direction == "UP" and self.direction != "DOWN":
            self.direction = "UP"
        elif direction == "DOWN" and self.direction != "UP":
            self.direction = "DOWN"
        elif direction == "LEFT" and self.direction != "RIGHT":
            self.direction = "LEFT"
        elif direction == "RIGHT" and self.direction != "LEFT":
            self.direction = "RIGHT"

    def move(self):
        if self.direction == "UP":
            self.head[1] -= self.speed
        elif self.direction == "DOWN":
            self.head[1] += self.speed
        elif self.direction == "LEFT":
            self.head[0] -= self.speed
        elif self.direction == "RIGHT":
            self.head[0] += self.speed
        self.segments.insert(0, list(self.head))
        if len(self.segments) > 1:
            self.segments.pop()

    def grow(self):
        tail = self.segments[-1]
        if self.direction == "UP":
            self.segments.append([tail[0], tail[1] - self.size])
        elif self.direction == "DOWN":
            self.segments.append([tail[0], tail[1] + self.size])
        elif self.direction == "LEFT":
            self.segments.append([tail[0] - self.size, tail[1]])
        elif self.direction == "RIGHT":
            self.segments.append([tail[0] + self.size, tail[1]])