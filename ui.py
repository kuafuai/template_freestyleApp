import html_css_js

def create_page():
    """
    Creates a webpage using HTML/CSS.

    Returns:
    - page: The created webpage.
    """
    page = html_css_js.create_webpage()

    return page

def create_button(text, onclick):
    """
    Creates a button using HTML/CSS.

    Parameters:
    - text: The text to be displayed on the button.
    - onclick: The function to be executed when the button is clicked.

    Returns:
    - button: The created button.
    """
    button = html_css_js.create_button(text, onclick)

    return button