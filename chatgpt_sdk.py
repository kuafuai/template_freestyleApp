# Import necessary modules
from chatgpt import ChatGPT

# Function to generate emoji description using chatgpt_sdk
def generate_description(emoji_description):
    try:
        # Create an instance of ChatGPT
        chatgpt = ChatGPT()

        # Generate description using chatgpt.generate_response() method
        generated_description = chatgpt.generate_response(emoji_description)

        return generated_description
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return None
