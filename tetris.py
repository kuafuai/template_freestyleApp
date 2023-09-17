import pygame

class Tetris:
    def __init__(self):
        self.block_size = 30
        self.grid_width = 10
        self.grid_height = 20
        self.grid = [[(0, 0, 0) for _ in range(self.grid_width)] for _ in range(self.grid_height)]
        self.current_block = None

    def move_left(self):
        if self.current_block:
            for row in range(len(self.current_block)):
                for col in range(len(self.current_block[row])):
                    if self.current_block[row][col] != 0:
                        if col == 0 or self.grid[row][col-1] != (0, 0, 0):
                            return
            for row in range(len(self.current_block)):
                for col in range(len(self.current_block[row])):
                    if self.current_block[row][col] != 0:
                        self.grid[row][col-1] = self.current_block[row][col]
                        self.grid[row][col] = (0, 0, 0)

    def move_right(self):
        if self.current_block:
            for row in range(len(self.current_block)):
                for col in range(len(self.current_block[row])-1, -1, -1):
                    if self.current_block[row][col] != 0:
                        if col == self.grid_width-1 or self.grid[row][col+1] != (0, 0, 0):
                            return
            for row in range(len(self.current_block)):
                for col in range(len(self.current_block[row])-1, -1, -1):
                    if self.current_block[row][col] != 0:
                        self.grid[row][col+1] = self.current_block[row][col]
                        self.grid[row][col] = (0, 0, 0)

    def move_down(self):
        if self.current_block:
            for row in range(len(self.current_block)-1, -1, -1):
                for col in range(len(self.current_block[row])):
                    if self.current_block[row][col] != 0:
                        if row == self.grid_height-1 or self.grid[row+1][col] != (0, 0, 0):
                            self.current_block = None
                            return
            for row in range(len(self.current_block)-1, -1, -1):
                for col in range(len(self.current_block[row])):
                    if self.current_block[row][col] != 0:
                        self.grid[row+1][col] = self.current_block[row][col]
                        self.grid[row][col] = (0, 0, 0)

    def drop(self):
        if self.current_block:
            while True:
                for row in range(len(self.current_block)-1, -1, -1):
                    for col in range(len(self.current_block[row])):
                        if self.current_block[row][col] != 0:
                            if row == self.grid_height-1 or self.grid[row+1][col] != (0, 0, 0):
                                self.current_block = None
                                return
                for row in range(len(self.current_block)-1, -1, -1):
                    for col in range(len(self.current_block[row])):
                        if self.current_block[row][col] != 0:
                            self.grid[row+1][col] = self.current_block[row][col]
                            self.grid[row][col] = (0, 0, 0)

    def update(self):
        pass

    def render(self, screen):
        screen.fill((0, 0, 0))
        for row in range(len(self.grid)):
            for col in range(len(self.grid[row])):
                pygame.draw.rect(screen, self.grid[row][col], (col*self.block_size, row*self.block_size, self.block_size, self.block_size))
        pygame.display.flip()