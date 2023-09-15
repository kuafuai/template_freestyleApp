class GameInterface:
    def __init__(self):
        # Initialize the game interface with a 10x20 grid
        self.grid = [[0] * 10 for _ in range(20)]

    def display(self):
        # Display the game interface on the screen
        for row in self.grid:
            print(' '.join(str(cell) for cell in row))

game = GameInterface()
game.display()