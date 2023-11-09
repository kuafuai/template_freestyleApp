import pygame
from pygame.locals import *

class GUI:
    def __init__(self, game):
        # Initialize GUI variables
        self.game = game
        self.screen_width = 400
        self.screen_height = 800
        self.block_size = 40
        self.board_width = 10
        self.board_height = 20
        self.screen = pygame.display.set_mode((self.screen_width, self.screen_height))
        pygame.display.set_caption("Tetris")

    def draw_board(self):
        # Draw the game board
        for row in range(self.board_height):
            for col in range(self.board_width):
                if self.game.board[row][col]:
                    pygame.draw.rect(self.screen, (255, 255, 255), (col * self.block_size, row * self.block_size, self.block_size, self.block_size))

    def draw_current_block(self):
        # Draw the current block
        for i in range(len(self.game.current_block.shape)):
            for j in range(len(self.game.current_block.shape[i])):
                if self.game.current_block.shape[i][j]:
                    pygame.draw.rect(self.screen, (255, 0, 0), ((self.game.current_block.col + j) * self.block_size, (self.game.current_block.row + i) * self.block_size, self.block_size, self.block_size))

    def draw_next_block(self):
        # Draw the next block
        for i in range(len(self.game.next_block.shape)):
            for j in range(len(self.game.next_block.shape[i])):
                if self.game.next_block.shape[i][j]:
                    pygame.draw.rect(self.screen, (0, 0, 255), ((self.board_width + 2 + j) * self.block_size, (2 + i) * self.block_size, self.block_size, self.block_size))

    def draw_score(self):
        # Draw the score
        font = pygame.font.Font(None, 36)
        text = font.render("Score: " + str(self.game.score), True, (255, 255, 255))
        self.screen.blit(text, (self.block_size, self.block_size))

    def handle_user_input(self, event):
        if event.key == K_LEFT:
            self.game.move_block_left()
        elif event.key == K_RIGHT:
            self.game.move_block_right()
        elif event.key == K_UP:
            self.game.rotate_block()
        elif event.key == K_DOWN:
            self.game.drop_block()

    def start_game(self):
        # Start the game loop
        while not self.game.game_over:
            for event in pygame.event.get():
                if event.type == QUIT:
                    pygame.quit()
                    return
                elif event.type == KEYDOWN:
                    self.handle_user_input(event)
            self.game.update_game()
            self.screen.fill((0, 0, 0))
            self.draw_board()
            self.draw_current_block()
            self.draw_next_block()
            self.draw_score()
            pygame.display.update()