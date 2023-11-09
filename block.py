# This file is responsible for creating and managing the block logic.

class Block:
    def __init__(self):
        # Initialize block variables
        self.shape = [[1, 1, 1, 1]]
        self.current_row = 0
        self.current_col = 3

    def move_left(self):
        # Move the block to the left
        if self.current_col > 0:
            self.current_col -= 1

    def move_right(self):
        # Move the block to the right
        if self.current_col < 9:
            self.current_col += 1

    def rotate(self):
        # Rotate the block
        self.shape = list(zip(*self.shape[::-1]))

    def drop(self):
        # Drop the block to the bottom
        self.current_row = 19 - len(self.shape) + 1

    def collides(self, board):
        # Check if the block collides with the board or other blocks
        for i in range(len(self.shape)):
            for j in range(len(self.shape[i])):
                if self.shape[i][j] and (self.current_row + i >= 20 or board[self.current_row + i][self.current_col + j]):
                    return True
        return False

    def update_board(self, board):
        # Update the board with the block
        for i in range(len(self.shape)):
            for j in range(len(self.shape[i])):
                if self.shape[i][j]:
                    board[self.current_row + i][self.current_col + j] = 1
