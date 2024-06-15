class Obstacle:
    def __init__(self):
        # Initialize obstacle position
        self.position = (0, 0)

    def move(self):
        # Move the obstacle based on game logic
        # Implement the code to move the obstacle
        # ...

    def validate_position(self, position):
        # Validate the obstacle position
        if isinstance(position, tuple) and len(position) == 2 and all(isinstance(coord, int) for coord in position):
            return True
        return False

    def __str__(self):
        return f"Obstacle position: {self.position}"