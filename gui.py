import main

class GUI:
    def __init__(self, main_program):
        self.main_program = main_program
        self.graph = None
        self.canvas = None
        self.panel = None
        self.zoom_level = 1.0

    def show_gui(self):
        # Create GUI window and components
        self.create_menu()
        self.create_canvas()
        self.create_panel()

        # Start GUI event loop
        # ...

    def create_menu(self):
        # Create menu bar and options
        # ...

    def create_canvas(self):
        # Create canvas for displaying the graph
        # ...

    def create_panel(self):
        # Create panel for displaying person details
        # ...

    def display_graph(self):
        # Display the graph on the canvas
        # ...

    def zoom_in(self):
        # Zoom in the graph on the canvas
        # ...

    def zoom_out(self):
        # Zoom out the graph on the canvas
        # ...

    def search_person(self, person_id):
        # Search for a person in the graph
        # ...

    def display_person_details(self, details):
        # Display the details of a person in the panel
        # ...

    def handle_menu_open_dc_folder(self):
        # Handle the event of opening the dc folder
        # ...

    def handle_menu_open_mb_excel(self):
        # Handle the event of opening the mb excel file
        # ...

    def handle_menu_zoom_in(self):
        # Handle the event of zooming in the graph
        # ...

    def handle_menu_zoom_out(self):
        # Handle the event of zooming out the graph
        # ...

    def handle_search_button_click(self):
        # Handle the event of clicking the search button
        # ...

    def handle_person_click(self, person_id):
        # Handle the event of clicking on a person in the graph
        # ...

    def handle_error(self, error):
        # Handle and display the error message
        # ...

if __name__ == "__main__":
    program = main.MainProgram()
    gui = GUI(program)
    gui.show_gui()