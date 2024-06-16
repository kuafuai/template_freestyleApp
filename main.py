# Import necessary modules
from chatgpt_sdk import generate_description
from emoji_generator import generate_emojis
from user_interface import display_emojis

# Get user input for emoji description
emoji_description = input("Enter the description for the emoji: ")

# Generate emoji description using chatgpt_sdk
generated_description = generate_description(emoji_description)

# Validate generated description
if generated_description:
    # Generate emojis using emoji_generator
    emojis = generate_emojis(generated_description)

    # Display emojis using user_interface
    display_emojis(emojis)
else:
    print("Invalid generated description. Please try again.")
