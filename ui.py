# ui.py

import tkinter as tk

# Function to design the game interface with colorful layout and start game button
def design_game_interface():
    root = tk.Tk()
    root.title("Game Interface")
    root.geometry("400x300")

    label = tk.Label(root, text="Welcome to the Game", font=("Arial", 20))
    label.pack(pady=20)

    start_button = tk.Button(root, text="Start Game", command=start_game)
    start_button.pack()

    root.mainloop()

# Function to display game instructions and options for users
def display_game_instructions():
    instruction_text = "Game Instructions:\n\n1. Click on the correct answer\n2. Each correct answer adds to your score\n3. Enjoy the game!"
    messagebox.showinfo("Instructions", instruction_text)

# Function to show the game record option for users to check their scores
def show_game_records():
    records = {
        "Player1": 100,
        "Player2": 150,
        "Player3": 200
    }

    record_text = "Game Records:\n\n"
    for player, score in records.items():
        record_text += f"{player} : {score}\n"

    messagebox.showinfo("Game Records", record_text)

def start_game():
    # Add game logic here
    pass
