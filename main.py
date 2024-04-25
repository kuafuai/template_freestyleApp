# This file is responsible for starting the chatbot application

# Import the necessary modules
from chatbot import Chatbot
from ui import UI

# Create an instance of the Chatbot class
chatbot = Chatbot()

# Create an instance of the UI class
ui = UI()

# Display the chat interface
ui.display_chat_interface()

# Loop to receive user input and generate responses
while True:
    # Receive user input
    user_input = ui.receive_user_input()

    # Check if the user wants to exit
    if user_input == "exit":
        break

    # Generate a response based on the user input
    response = chatbot.generate_response(user_input)

    # Display the response
    ui.display_response(response)
