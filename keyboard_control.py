class KeyboardControl:
    def __init__(self):
        # Initialize the keyboard control
        self.airplane_position = (0, 0)
        
    def move_airplane(self, direction):
        # Move the airplane based on the given direction
        x, y = self.airplane_position
        if direction == "up":
            y += 1
        elif direction == "down":
            y -= 1
        elif direction == "left":
            x -= 1
        elif direction == "right":
            x += 1
        self.airplane_position = (x, y)
        
    def shoot_bullet(self):
        # Shoot a bullet
        print("Bullet shot!")