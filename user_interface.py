import tkinter as tk
from PIL import ImageTk, Image
import os

def display_emojis(emojis, window_size):
    # Create a Tkinter window
    window = tk.Tk()
    window.geometry(window_size)

    # Display emojis in the window
    for i, emoji in enumerate(emojis):
        # Check if emoji file exists
        if not os.path.isfile(emoji):
            print(f"Invalid emoji file: {emoji}")
            continue

        # Check if emoji file is a valid image
        try:
            Image.open(emoji)
        except:
            print(f"Invalid image file: {emoji}")
            continue

        # Convert emoji image to Tkinter PhotoImage
        emoji_image = Image.open(emoji)
        emoji_photo = ImageTk.PhotoImage(emoji_image)

        # Create a label to display the emoji
        emoji_label = tk.Label(window, image=emoji_photo)
        emoji_label.pack()

    # Run the Tkinter event loop
    window.mainloop()

emojis = ["emoji1.png", "emoji2.png", "emoji3.png"]
window_size = "500x500"
display_emojis(emojis, window_size)