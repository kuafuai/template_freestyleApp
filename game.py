# This file is responsible for creating and managing the game logic.

# Import necessary modules
from block import Block

class Game:
    def __init__(self):
        # Initialize game variables
        self.game_over = False
        self.score = 0
        self.current_block = Block()
        self.next_block = Block()
        self.board = [[0] * 10 for _ in range(20)]

    def move_block_left(self):
        # Move the current block to the left
        if not self.game_over:
            self.current_block.move_left()

    def move_block_right(self):
        # Move the current block to the right
        if not self.game_over:
            self.current_block.move_right()

    def rotate_block(self):
        # Rotate the current block
        if not self.game_over:
            self.current_block.rotate()

    def drop_block(self):
        # Drop the current block to the bottom
        if not self.game_over:
            self.current_block.drop()

    def move_block_down(self):
        # Move the current block down one row
        if not self.game_over:
            self.current_block.move_down()

    def update_board(self):
        # Update the game board with the current block
        if not self.game_over:
            self.current_block.update_board(self.board)

    def check_game_over(self):
        # Check if the game is over
        if self.current_block.collides(self.board):
            raise GameOverException("Game Over")

    def update_score(self, lines_cleared):
        # Update the score based on the number of lines cleared
        if not self.game_over:
            self.score += lines_cleared

    def clear_lines(self):
        # Clear completed lines and update the score
        if not self.game_over:
            completed_lines = [row for row in self.board if all(row)]
            lines_cleared = len(completed_lines)
            self.board = [[0] * 10] * lines_cleared + [row for row in self.board if not all(row)]
            self.update_score(lines_cleared)

    def update_game(self):
        # Update the game state
        if not self.game_over:
            self.move_block_down()
            self.update_board()
            self.check_game_over()
            self.clear_lines()
            self.current_block = self.next_block
            self.next_block = Block()

    def start_game(self):
        # Start the game loop
        while not self.game_over:
            self.update_game()

class GameOverException(Exception):
    pass
