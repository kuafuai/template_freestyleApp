# Import required modules
import random

# Initialize game variables
board = [[0] * 15 for _ in range(15)]
current_player = 1
game_over = False

# Start the game
def start_game():
    global game_over
    game_over = False
    # Reset the board
    reset_board()
    # Randomly choose the first player
    first_player = random.choice([1, 2])
    current_player = first_player
    if current_player == 1:
        print("Player 1 starts the game.")
    else:
        print("Player 2 starts the game.")

# Reset the board
def reset_board():
    global board
    board = [[0] * 15 for _ in range(15)]

# Make a move
def make_move(row, col):
    global board, current_player
    if not game_over and board[row][col] == 0:
        board[row][col] = current_player
        print(f"Player {current_player} makes a move at ({row}, {col}).")
        check_winner()
        switch_player()

# Check if there is a winner
def check_winner():
    global board, game_over
    # Check rows
    for row in range(15):
        for col in range(11):
            if board[row][col] != 0 and board[row][col] == board[row][col+1] == board[row][col+2] == board[row][col+3] == board[row][col+4]:
                print(f"Player {board[row][col]} wins!")
                game_over = True
                return
    # Check columns
    for col in range(15):
        for row in range(11):
            if board[row][col] != 0 and board[row][col] == board[row+1][col] == board[row+2][col] == board[row+3][col] == board[row+4][col]:
                print(f"Player {board[row][col]} wins!")
                game_over = True
                return
    # Check diagonals
    for row in range(11):
        for col in range(11):
            if board[row][col] != 0 and board[row][col] == board[row+1][col+1] == board[row+2][col+2] == board[row+3][col+3] == board[row+4][col+4]:
                print(f"Player {board[row][col]} wins!")
                game_over = True
                return
            if board[row][col+4] != 0 and board[row][col+4] == board[row+1][col+3] == board[row+2][col+2] == board[row+3][col+1] == board[row+4][col]:
                print(f"Player {board[row][col+4]} wins!")
                game_over = True
                return
    # Check if the board is full
    if all(board[row][col] != 0 for row in range(15) for col in range(15)):
        print("It's a draw!")
        game_over = True

# Switch player
def switch_player():
    global current_player
    if current_player == 1:
        current_player = 2
    else:
        current_player = 1

# Save the game
def save_game():
    global board, current_player
    # Save the board and current player to a file

# Load the game
def load_game():
    global board, current_player
    # Load the board and current player from a file

# Show game history
def show_game_history():
    # Show the game history

# Undo a move
def undo_move():
    global board, current_player
    # Undo the last move

# Restart the game
def restart_game():
    global game_over
    game_over = False
    # Reset the board
    reset_board()
    print("Game restarted.")

# Quit the game
def quit_game():
    global game_over
    game_over = True
    print("Game over.")
