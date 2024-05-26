# Import required modules
import tkinter as tk

# Show game rules
def show_game_rules():
    # Create help window
    help_window = tk.Toplevel()
    help_window.title("Game Rules")

    # Create game rules label
    game_rules_label = tk.Label(help_window, text="Game Rules:\n\n1. The game is played on a 15x15 grid.\n2. Players take turns placing their chess pieces on the grid.\n3. The goal is to get five chess pieces in a row, either horizontally, vertically, or diagonally.\n4. The first player to achieve this wins the game.")

    # Add game rules label to the window
    game_rules_label.pack()

    # Run the help window
    help_window.mainloop()
