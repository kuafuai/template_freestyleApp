import pygame
import random

# Initialize pygame
pygame.init()

# Define game window dimensions
WINDOW_WIDTH = 800
WINDOW_HEIGHT = 600

# Create game window
window = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))
pygame.display.set_caption("Tetris Game")

# Define game area dimensions
GAME_AREA_WIDTH = 10
GAME_AREA_HEIGHT = 20
BLOCK_SIZE = 30

# Define colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

# Define game area
game_area = [[BLACK for _ in range(GAME_AREA_WIDTH)] for _ in range(GAME_AREA_HEIGHT)]

# Define block shapes
block_shapes = [
    [[1, 1, 1, 1]],
    [[1, 1], [1, 1]],
    [[1, 1, 0], [0, 1, 1]],
    [[0, 1, 1], [1, 1, 0]],
    [[1, 1, 1], [0, 1, 0]],
    [[1, 1, 1], [1, 0, 0]],
    [[1, 1, 1], [0, 0, 1]]
]

# Define current block and next block
current_block = None
next_block = None

# Define score and level
score = 0
level = 1

# Define game over flag
game_over = False

# Define pause flag
paused = False

# Define difficulty levels
difficulty_levels = {
    1: {"speed": 1, "score_multiplier": 1},
    2: {"speed": 2, "score_multiplier": 2},
    3: {"speed": 3, "score_multiplier": 3}
}

# Define highest score
highest_score = 0

# Function to generate a new block
def generate_block():
    global current_block, next_block
    current_block = next_block
    next_block = random.choice(block_shapes)

# Function to handle block movement
def move_block(dx, dy):
    global current_block
    new_block = []
    for row in current_block:
        new_row = []
        for cell in row:
            new_row.append(cell)
        new_block.append(new_row)
    for i in range(len(current_block)):
        for j in range(len(current_block[i])):
            if current_block[i][j] == 1:
                new_block[i][j] = BLACK
                if i + dy >= 0 and i + dy < GAME_AREA_HEIGHT and j + dx >= 0 and j + dx < GAME_AREA_WIDTH:
                    if game_area[i + dy][j + dx] != BLACK:
                        return
                    new_block[i + dy][j + dx] = WHITE
    current_block = new_block

# Function to handle block rotation
def rotate_block():
    global current_block
    new_block = []
    for j in range(len(current_block[0])):
        new_row = []
        for i in range(len(current_block) - 1, -1, -1):
            new_row.append(current_block[i][j])
        new_block.append(new_row)
    current_block = new_block

# Function to handle block descent and collision detection
def descend_block():
    global current_block, game_area, score
    new_block = []
    for row in current_block:
        new_row = []
        for cell in row:
            new_row.append(cell)
        new_block.append(new_row)
    for i in range(len(current_block)):
        for j in range(len(current_block[i])):
            if current_block[i][j] == 1:
                new_block[i][j] = BLACK
                if i + 1 >= 0 and i + 1 < GAME_AREA_HEIGHT:
                    if game_area[i + 1][j] != BLACK:
                        for i in range(len(current_block)):
                            for j in range(len(current_block[i])):
                                if current_block[i][j] == 1:
                                    game_area[i][j] = WHITE
                        generate_block()
                        remove_filled_rows()
                        return
                    new_block[i + 1][j] = WHITE
                else:
                    for i in range(len(current_block)):
                        for j in range(len(current_block[i])):
                            if current_block[i][j] == 1:
                                game_area[i][j] = WHITE
                    generate_block()
                    remove_filled_rows()
                    return
    current_block = new_block

# Function to check and remove filled rows
def remove_filled_rows():
    global game_area, score
    rows_to_remove = []
    for i in range(len(game_area)):
        if all(cell != BLACK for cell in game_area[i]):
            rows_to_remove.append(i)
    for row in rows_to_remove:
        del game_area[row]
        game_area.insert(0, [BLACK for _ in range(GAME_AREA_WIDTH)])
        score += 1

# Function to update score
def update_score():
    global score
    score += 1

# Function to update level
def update_level():
    global level
    level += 1

# Function to handle game over
def game_over():
    global game_over
    game_over = True

# Function to handle pause
def pause_game():
    global paused
    paused = not paused

# Function to handle difficulty selection
def select_difficulty(difficulty):
    global level
    level = difficulty

# Function to record and display highest score
def record_highest_score():
    global score, highest_score
    if score > highest_score:
        highest_score = score

# Function to handle block acceleration
def accelerate_block():
    global level
    level += 1

# Main game loop
def main():
    global current_block, game_over, paused, score, level, highest_score
    clock = pygame.time.Clock()
    generate_block()
    while not game_over:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                game_over = True
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    move_block(-1, 0)
                elif event.key == pygame.K_RIGHT:
                    move_block(1, 0)
                elif event.key == pygame.K_DOWN:
                    move_block(0, 1)
                elif event.key == pygame.K_UP:
                    rotate_block()
                elif event.key == pygame.K_SPACE:
                    accelerate_block()
                elif event.key == pygame.K_p:
                    pause_game()
                elif event.key == pygame.K_1:
                    select_difficulty(1)
                elif event.key == pygame.K_2:
                    select_difficulty(2)
                elif event.key == pygame.K_3:
                    select_difficulty(3)
        if not paused:
            descend_block()
        window.fill(BLACK)
        for i in range(GAME_AREA_HEIGHT):
            for j in range(GAME_AREA_WIDTH):
                pygame.draw.rect(window, game_area[i][j], (j * BLOCK_SIZE, i * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE))
        for i in range(len(current_block)):
            for j in range(len(current_block[i])):
                if current_block[i][j] == 1:
                    pygame.draw.rect(window, WHITE, ((j * BLOCK_SIZE), (i * BLOCK_SIZE), BLOCK_SIZE, BLOCK_SIZE))
        pygame.display.update()
        clock.tick(10 * level)

    record_highest_score()

# Run the game
if __name__ == "__main__":
    main()