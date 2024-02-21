import gui
import data_reader
import graph_generator
import error_handler

class MainProgram:
    def __init__(self):
        """
        Initializes the MainProgram class.
        """
        self.gui = gui.GUI(self)
        self.data_reader = data_reader.DataReader(self)
        self.graph_generator = graph_generator.GraphGenerator(self)
        self.error_handler = error_handler.ErrorHandler(self)

    def run(self):
        """
        Starts the GUI event loop.
        """
        self.gui.show_gui()

    def open_dc_folder(self, folder_path: str):
        """
        Called when the user opens the dc folder.
        Reads the data from the folder and generates the graph.
        
        Args:
            folder_path (str): The path to the dc folder.
        """
        try:
            data = self.data_reader.read_dc_folder(folder_path)
            self.graph_generator.generate_graph(data)
            self.gui.display_graph()
        except Exception as e:
            self.error_handler.handle_error(e)

    def open_mb_excel(self, file_path: str):
        """
        Called when the user opens the mb excel file.
        Reads the data from the file and generates the graph.
        
        Args:
            file_path (str): The path to the mb excel file.
        """
        try:
            data = self.data_reader.read_mb_excel(file_path)
            self.graph_generator.generate_graph(data)
            self.gui.display_graph()
        except Exception as e:
            self.error_handler.handle_error(e)

    def zoom_in(self):
        """
        Called when the user zooms in on the graph.
        """
        self.gui.zoom_in()

    def zoom_out(self):
        """
        Called when the user zooms out on the graph.
        """
        self.gui.zoom_out()

    def search_person(self, person_id: str):
        """
        Called when the user searches for a person in the graph.
        
        Args:
            person_id (str): The ID of the person to search for.
        """
        self.gui.search_person(person_id)

    def display_person_details(self, person_id: str):
        """
        Called when the user selects a person in the graph to display their details.
        
        Args:
            person_id (str): The ID of the person to display details for.
        """
        details = self.data_reader.get_person_details(person_id)
        self.gui.display_person_details(details)

    def handle_error(self, error: Exception):
        """
        Called when an error occurs and handles the error message.
        
        Args:
            error (Exception): The error that occurred.
        """
        self.error_handler.handle_error(error)

if __name__ == "__main__":
    program = MainProgram()
    program.run()