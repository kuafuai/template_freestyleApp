# Import required modules
from chatgpt import generate_summary
from wechat_bot import send_summary_to_group
from ui_components import TextInput, Button, TextBox, DropdownMenu

# Define function to handle button click event
def handle_button_click():
    try:
        # Get input from text input field
        meeting_record = text_input.get_text()
        
        # Generate meeting summary using ChatGPT
        summary = generate_summary(meeting_record)
        
        # Display the summary in the text box
        text_box.set_text(summary)
        
        # Get selected group from dropdown menu
        selected_group = dropdown_menu.get_selected_group()
        
        # Send the summary to the selected group using WeChat bot
        send_summary_to_group(summary, selected_group)
    except Exception as e:
        # Handle any exceptions that may occur
        print(f"An error occurred: {str(e)}")

# Create text input field
text_input = TextInput()

# Create button
button = Button("Generate Summary", handle_button_click)

# Create text box
text_box = TextBox()

# Create dropdown menu
dropdown_menu = DropdownMenu()

# Create send button
send_button = Button("Send Summary", handle_button_click)

# Add components to the UI
ui.add_component(text_input)
ui.add_component(button)
ui.add_component(text_box)
ui.add_component(dropdown_menu)
ui.add_component(send_button)
