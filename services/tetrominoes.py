class Tetromino:
    def __init__(self):
        # Initialize a tetromino with four connected blocks
        self.blocks = [[0, 1, 0, 0],
                       [0, 1, 0, 0],
                       [0, 1, 0, 0],
                       [0, 1, 0, 0]]

    def move_left(self):
        # Move the tetromino left
        for row in range(len(self.blocks)):
            for col in range(len(self.blocks[row])):
                if self.blocks[row][col] == 1:
                    if col == 0 or self.blocks[row][col-1] == 1:
                        return
        for row in range(len(self.blocks)):
            for col in range(len(self.blocks[row])):
                if self.blocks[row][col] == 1:
                    self.blocks[row][col] = 0
                    self.blocks[row][col-1] = 1

    def move_right(self):
        # Move the tetromino right
        for row in range(len(self.blocks)):
            for col in range(len(self.blocks[row])-1, -1, -1):
                if self.blocks[row][col] == 1:
                    if col == len(self.blocks[row])-1 or self.blocks[row][col+1] == 1:
                        return
        for row in range(len(self.blocks)):
            for col in range(len(self.blocks[row])-1, -1, -1):
                if self.blocks[row][col] == 1:
                    self.blocks[row][col] = 0
                    self.blocks[row][col+1] = 1

    def rotate_clockwise(self):
        # Rotate the tetromino clockwise
        rotated_blocks = [[0] * len(self.blocks) for _ in range(len(self.blocks[0]))]
        for row in range(len(self.blocks)):
            for col in range(len(self.blocks[row])):
                rotated_blocks[col][len(self.blocks)-1-row] = self.blocks[row][col]
        self.blocks = rotated_blocks

    def rotate_counterclockwise(self):
        # Rotate the tetromino counterclockwise
        rotated_blocks = [[0] * len(self.blocks) for _ in range(len(self.blocks[0]))]
        for row in range(len(self.blocks)):
            for col in range(len(self.blocks[row])):
                rotated_blocks[len(self.blocks[row])-1-col][row] = self.blocks[row][col]
        self.blocks = rotated_blocks

    def move_down(self):
        # Move the tetromino down due to gravity
        for row in range(len(self.blocks)-1, -1, -1):
            for col in range(len(self.blocks[row])):
                if self.blocks[row][col] == 1:
                    if row == len(self.blocks)-1 or self.blocks[row+1][col] == 1:
                        return
        for row in range(len(self.blocks)-1, -1, -1):
            for col in range(len(self.blocks[row])):
                if self.blocks[row][col] == 1:
                    self.blocks[row][col] = 0
                    self.blocks[row+1][col] = 1