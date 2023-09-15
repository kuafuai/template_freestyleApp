import pygame
import random

# Constants
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
PLAYFIELD_WIDTH = 10
PLAYFIELD_HEIGHT = 20
BLOCK_SIZE = 30
FPS = 60
FONT_SIZE = 36
FONT_COLOR = (255, 255, 255)
BACKGROUND_COLOR = (0, 0, 0)
SHAPES = [
    [[1, 1, 1, 1]],
    [[1, 1], [1, 1]],
    [[1, 1, 1], [0, 1, 0]],
    [[1, 1, 1], [1, 0, 0]],
    [[1, 1, 0], [0, 1, 1]],
    [[0, 1, 1], [1, 1, 0]],
    [[1, 1, 0], [0, 1, 1]]
]
SHAPES_COLORS = [
    (255, 0, 0),
    (0, 255, 0),
    (0, 0, 255),
    (255, 255, 0),
    (255, 0, 255),
    (0, 255, 255),
    (255, 165, 0)
]

class Tetromino:
    def __init__(self, shape, position, rotation, color):
        self.shape = shape
        self.position = position
        self.rotation = rotation
        self.color = color

    def move_left(self):
        self.position[0] -= 1

    def move_right(self):
        self.position[0] += 1

    def rotate_clockwise(self):
        self.rotation = (self.rotation + 1) % len(self.shape)

    def rotate_counterclockwise(self):
        self.rotation = (self.rotation - 1) % len(self.shape)

    def move_down(self):
        self.position[1] += 1

    def update_position(self):
        self.position[1] += 1


def generate_random_shape():
    shape_index = random.randint(0, len(SHAPES) - 1)
    shape = SHAPES[shape_index]
    color = SHAPES_COLORS[shape_index]
    return shape, color


def check_movement_validity(tetromino, playfield):
    for y in range(len(tetromino.shape)):
        for x in range(len(tetromino.shape[y])):
            if tetromino.shape[y][x] != 0:
                if tetromino.position[0] + x < 0 or tetromino.position[0] + x >= PLAYFIELD_WIDTH or \
                        tetromino.position[1] + y >= PLAYFIELD_HEIGHT or \
                        playfield[tetromino.position[1] + y][tetromino.position[0] + x] != 0:
                    return False
    return True


def check_line_clear(playfield):
    lines_to_clear = []
    for y in range(PLAYFIELD_HEIGHT):
        if all(playfield[y]):
            lines_to_clear.append(y)
    return lines_to_clear


def clear_lines(playfield, lines_to_clear):
    for line in lines_to_clear:
        del playfield[line]
        playfield.insert(0, [0] * PLAYFIELD_WIDTH)


def calculate_score(lines_cleared, level):
    if lines_cleared == 1:
        return 40 * (level + 1)
    elif lines_cleared == 2:
        return 100 * (level + 1)
    elif lines_cleared == 3:
        return 300 * (level + 1)
    elif lines_cleared == 4:
        return 1200 * (level + 1)
    else:
        return 0


def check_game_over(playfield):
    return any(playfield[0])


def display_interface(screen, playfield, tetromino, score, level, fall_delay):
    screen.fill(BACKGROUND_COLOR)
    for y in range(PLAYFIELD_HEIGHT):
        for x in range(PLAYFIELD_WIDTH):
            if playfield[y][x] != 0:
                pygame.draw.rect(screen, SHAPES_COLORS[playfield[y][x] - 1],
                                 (x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE))
    for y in range(len(tetromino.shape)):
        for x in range(len(tetromino.shape[y])):
            if tetromino.shape[y][x] != 0:
                pygame.draw.rect(screen, tetromino.color,
                                 ((tetromino.position[0] + x) * BLOCK_SIZE, (tetromino.position[1] + y) * BLOCK_SIZE,
                                  BLOCK_SIZE, BLOCK_SIZE))
    font = pygame.font.Font(None, FONT_SIZE)
    score_text = font.render(f"Score: {score}", True, FONT_COLOR)
    level_text = font.render(f"Level: {level}", True, FONT_COLOR)
    fall_delay_text = font.render(f"Fall Delay: {fall_delay}", True, FONT_COLOR)
    screen.blit(score_text, (10, 10))
    screen.blit(level_text, (SCREEN_WIDTH - level_text.get_width() - 10, 10))
    screen.blit(fall_delay_text, (10, SCREEN_HEIGHT - fall_delay_text.get_height() - 10))
    pygame.display.flip()


def handle_user_input(tetromino):
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT]:
        tetromino.move_left()
    if keys[pygame.K_RIGHT]:
        tetromino.move_right()
    if keys[pygame.K_DOWN]:
        tetromino.move_down()
    if keys[pygame.K_UP]:
        tetromino.rotate_clockwise()
    if keys[pygame.K_SPACE]:
        tetromino.rotate_counterclockwise()


def start_game():
    pygame.init()
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    pygame.display.set_caption("Tetris")
    clock = pygame.time.Clock()

    playfield = [[0] * PLAYFIELD_WIDTH for _ in range(PLAYFIELD_HEIGHT)]
    shape, color = generate_random_shape()
    tetromino = Tetromino(shape, [PLAYFIELD_WIDTH // 2 - len(shape[0]) // 2, 0], 0, color)
    score = 0
    level = 1
    lines_cleared = 0
    fall_delay = 60
    fall_counter = 0

    game_over = False
    while not game_over:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                game_over = True

        handle_user_input(tetromino)

        fall_counter += 1
        if fall_counter >= fall_delay:
            if not check_movement_validity(tetromino, playfield):
                for y in range(len(tetromino.shape)):
                    for x in range(len(tetromino.shape[y])):
                        if tetromino.shape[y][x] != 0:
                            playfield[tetromino.position[1] + y][tetromino.position[0] + x] = SHAPES.index(tetromino.shape) + 1
                lines_to_clear = check_line_clear(playfield)
                if lines_to_clear:
                    clear_lines(playfield, lines_to_clear)
                    lines_cleared += len(lines_to_clear)
                    score += calculate_score(len(lines_to_clear), level)
                    if lines_cleared >= level * 10:
                        level += 1
                shape, color = generate_random_shape()
                tetromino = Tetromino(shape, [PLAYFIELD_WIDTH // 2 - len(shape[0]) // 2, 0], 0, color)
                fall_delay -= 1
                if fall_delay < 1:
                    fall_delay = 1
                fall_counter = 0
            else:
                tetromino.update_position()

        display_interface(screen, playfield, tetromino, score, level, fall_delay)
        clock.tick(FPS)

        if check_game_over(playfield):
            game_over = True

    pygame.quit()


def main():
    start_game()


if __name__ == "__main__":
    main()
