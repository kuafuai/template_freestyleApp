import wechat
import ui

# Import the necessary modules
from wechat import connect_and_clear_messages
from ui import create_page, create_button

# Create a webpage
page = create_page()

# Add a button to the webpage
button = create_button("Connect with WeChat", connect_and_clear_messages)

# Add the button to the webpage
page.add_button(button)

# Display the webpage
page.display()