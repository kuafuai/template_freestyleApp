class TextInput:
    def __init__(self):
        self.text = ""

    def get_text(self):
        # Get text from the input field
        return self.text

class Button:
    def __init__(self, label, callback):
        self.label = label
        self.callback = callback

class TextBox:
    def __init__(self):
        self.text = ""

    def set_text(self, text):
        # Set the text of the text box
        self.text = text

class DropdownMenu:
    def __init__(self):
        self.selected_group = ""

    def get_selected_group(self):
        # Get the selected group from the dropdown menu
        return self.selected_group