import tkinter as tk

# Initialize variables
first_player_var = tk.StringVar()
chess_color_var = tk.StringVar()

# Create the root window
root = tk.Tk()

# Open settings
def open_settings():
    # Create settings window
    settings_window = tk.Toplevel(root)
    settings_window.title("Settings")

    # Create labels and menus
    first_player_label = tk.Label(settings_window, text="First Player:")
    first_player_menu = tk.OptionMenu(settings_window, first_player_var, "Player 1", "Player 2")
    chess_color_label = tk.Label(settings_window, text="Chess Color:")
    chess_color_menu = tk.OptionMenu(settings_window, chess_color_var, "Black", "White")

    # Add labels and menus to the window
    first_player_label.pack()
    first_player_menu.pack()
    chess_color_label.pack()
    chess_color_menu.pack()

# Select difficulty
def select_difficulty():
    # Create difficulty selection window
    difficulty_window = tk.Toplevel(root)
    difficulty_window.title("Select Difficulty")

    # Create buttons
    easy_button = tk.Button(difficulty_window, text="Easy", command=lambda: set_difficulty("Easy"))
    medium_button = tk.Button(difficulty_window, text="Medium", command=lambda: set_difficulty("Medium"))
    hard_button = tk.Button(difficulty_window, text="Hard", command=lambda: set_difficulty("Hard"))

    # Add buttons to the window
    easy_button.pack()
    medium_button.pack()
    hard_button.pack()

# Set difficulty
def set_difficulty(difficulty):
    print(f"Difficulty set to {difficulty}.")

# Call the open_settings function
open_settings()

# Start the main event loop
root.mainloop()