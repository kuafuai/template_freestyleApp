# This file contains the user interface of the chatbot

# Import the necessary modules
import tkinter as tk

class UI:
    def __init__(self):
        # Initialize any necessary variables or resources
        self.window = tk.Tk()
        self.chat_history = []

    def display_chat_interface(self):
        # Create the chat interface window
        self.window.title("Chatbot")
        
        self.chat_history_text = tk.Text(self.window)
        self.chat_history_text.pack()
        
        self.user_input_entry = tk.Entry(self.window)
        self.user_input_entry.pack()
        
        self.send_button = tk.Button(self.window, text="Send", command=self.process_user_input)
        self.send_button.pack()
        
        self.window.mainloop()

    def receive_user_input(self):
        # Receive user input from the chat interface
        user_input = self.user_input_entry.get()
        self.user_input_entry.delete(0, tk.END)
        return user_input

    def display_response(self, response):
        # Display the response in the chat interface
        self.chat_history.append(response)
        self.chat_history_text.insert(tk.END, response + "\n")

    def process_user_input(self):
        # Process the user input
        user_input = self.receive_user_input()
        # Call the chatbot to generate a response based on the user input
        response = chatbot.generate_response(user_input)
        # Display the response in the chat interface
        self.display_response(response)

# Create an instance of the UI class
ui = UI()
# Display the chat interface
ui.display_chat_interface()
