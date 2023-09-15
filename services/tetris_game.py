# Tetris game implementation

import pygame
import random

# Define constants
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
BLOCK_SIZE = 30
BOARD_WIDTH = 10
BOARD_HEIGHT = 20
FPS = 60
FONT_SIZE = 36
FONT_COLOR = (255, 255, 255)
BACKGROUND_COLOR = (0, 0, 0)
TETROMINO_SHAPES = [
    [[1, 1, 1, 1]],
    [[1, 1], [1, 1]],
    [[1, 1, 0], [0, 1, 1]],
    [[0, 1, 1], [1, 1, 0]],
    [[1, 1, 1], [0, 1, 0]],
    [[1, 1, 1], [1, 0, 0]],
    [[1, 1, 1], [0, 0, 1]]
]

# Initialize pygame
pygame.init()

# Create game window
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Tetris")

# Load font
font = pygame.font.Font(None, FONT_SIZE)

# Define Tetromino class
class Tetromino:
    def __init__(self):
        self.shape = random.choice(TETROMINO_SHAPES)
        self.rotation = 0
        self.x = BOARD_WIDTH // 2 - len(self.shape[0]) // 2
        self.y = 0

    def move_left(self):
        self.x -= 1

    def move_right(self):
        self.x += 1

    def move_down(self):
        self.y += 1

    def rotate_clockwise(self):
        self.rotation = (self.rotation + 1) % len(self.shape)

    def rotate_counterclockwise(self):
        self.rotation = (self.rotation - 1) % len(self.shape)

# Define GameBoard class
class GameBoard:
    def __init__(self):
        self.board = [[0] * BOARD_WIDTH for _ in range(BOARD_HEIGHT)]
        self.score = 0
        self.level = 1

    def update(self, tetromino):
        # Clear previous position of tetromino
        self.clear_tetromino(tetromino)

        # Update position of tetromino
        tetromino.move_down()

        # Check if tetromino collides with the board or other tetrominoes
        if self.check_collision(tetromino):
            # Restore previous position of tetromino
            tetromino.move_up()

            # Add tetromino to the board
            self.add_tetromino(tetromino)

            # Check for completed lines
            self.check_completed_lines()

            # Check if the game is over
            if self.check_game_over():
                self.game_over()

    def clear_tetromino(self, tetromino):
        for y, row in enumerate(tetromino.shape[tetromino.rotation]):
            for x, value in enumerate(row):
                if value:
                    self.board[tetromino.y + y][tetromino.x + x] = 0

    def add_tetromino(self, tetromino):
        for y, row in enumerate(tetromino.shape[tetromino.rotation]):
            for x, value in enumerate(row):
                if value:
                    self.board[tetromino.y + y][tetromino.x + x] = 1

    def check_collision(self, tetromino):
        for y, row in enumerate(tetromino.shape[tetromino.rotation]):
            for x, value in enumerate(row):
                if value:
                    if (
                        tetromino.y + y >= BOARD_HEIGHT or
                        tetromino.x + x < 0 or tetromino.x + x >= BOARD_WIDTH or
                        self.board[tetromino.y + y][tetromino.x + x]
                    ):
                        return True
        return False

    def check_completed_lines(self):
        completed_lines = []
        for y, row in enumerate(self.board):
            if all(row):
                completed_lines.append(y)
        for y in completed_lines:
            del self.board[y]
            self.board.insert(0, [0] * BOARD_WIDTH)
        self.score += len(completed_lines) * self.level

    def check_game_over(self):
        return any(self.board[0])

    def game_over(self):
        pygame.quit()
        quit()

    def draw(self):
        for y, row in enumerate(self.board):
            for x, value in enumerate(row):
                if value:
                    pygame.draw.rect(screen, (255, 255, 255), (x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE))

        score_text = font.render(f"Score: {self.score}", True, FONT_COLOR)
        screen.blit(score_text, (10, 10))

        level_text = font.render(f"Level: {self.level}", True, FONT_COLOR)
        screen.blit(level_text, (10, 10 + FONT_SIZE + 10))

# Define function for handling user input
def handle_user_input(tetromino):
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            quit()
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                tetromino.move_left()
            elif event.key == pygame.K_RIGHT:
                tetromino.move_right()
            elif event.key == pygame.K_DOWN:
                tetromino.move_down()
            elif event.key == pygame.K_UP:
                tetromino.rotate_clockwise()
            elif event.key == pygame.K_SPACE:
                tetromino.rotate_counterclockwise()

# Define function for game loop
def game_loop():
    clock = pygame.time.Clock()

    tetromino = Tetromino()
    game_board = GameBoard()

    while True:
        screen.fill(BACKGROUND_COLOR)

        handle_user_input(tetromino)
        game_board.update(tetromino)
        game_board.draw()

        pygame.display.update()
        clock.tick(FPS)

# Run main function
if __name__ == "__main__":
    game_loop()
