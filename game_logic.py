# Import required modules
import random

# Initialize game variables
board = [[0] * 15 for _ in range(15)]
current_player = 1
game_over = False
game_history = []

# Start the game
def start_game():
    global game_over, current_player
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
    global board, current_player, game_over, game_history
    if not game_over and board[row][col] == 0:
        board[row][col] = current_player
        print(f"Player {current_player} makes a move at ({row}, {col}).")
        game_history.append((current_player, row, col))
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
    global board, current_player, game_history
    with open("game_save.txt", "w") as file:
        file.write(f"{current_player}\n")
        for move in game_history:
            file.write(f"{move[0]},{move[1]},{move[2]}\n")
    print("Game saved.")

# Load the game
def load_game():
    global board, current_player, game_history
    with open("game_save.txt", "r") as file:
        lines = file.readlines()
        current_player = int(lines[0])
        game_history = []
        for line in lines[1:]:
            move = line.strip().split(",")
            player = int(move[0])
            row = int(move[1])
            col = int(move[2])
            game_history.append((player, row, col))
            board[row][col] = player
    print("Game loaded.")

# Show game history
def show_game_history():
    global game_history
    print("Game History:")
    for move in game_history:
        player = move[0]
        row = move[1]
        col = move[2]
        print(f"Player {player} made a move at ({row}, {col}).")

# Undo a move
def undo_move():
    global board, current_player, game_history
    if len(game_history) > 0:
        last_move = game_history.pop()
        player = last_move[0]
        row = last_move[1]
        col = last_move[2]
        board[row][col] = 0
        current_player = player
        print(f"Undo move: Player {player}'s move at ({row}, {col}) has been undone.")
    else:
        print("No moves to undo.")

# Restart the game
def restart_game():
    global game_over, current_player, game_history
    game_over = False
    # Reset the board
    reset_board()
    current_player = random.choice([1, 2])
    game_history = []
    if current_player == 1:
        print("Player 1 starts the game.")
    else:
        print("Player 2 starts the game.")
    print("Game restarted.")

# Quit the game
def quit_game():
    global game_over
    game_over = True
    print("Game over.")
