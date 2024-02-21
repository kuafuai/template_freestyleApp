import logging
import gui
import data_reader
import graph_generator
import error_handler

class MainProgram:
    def __init__(self):
        self.gui = gui.GUI(self)
        self.data_reader = data_reader.DataReader(self)
        self.graph_generator = graph_generator.GraphGenerator(self)
        self.error_handler = error_handler.ErrorHandler(self)

    def run(self):
        self.gui.show_gui()

    def open_dc_folder(self, folder_path):
        """
        Opens the dc folder and generates the graph from the data in the folder.
        """
        try:
            data = self.data_reader.read_dc_folder(folder_path)
            self.graph_generator.generate_graph(data)
            self.gui.display_graph()
        except FileNotFoundError as e:
            self.error_handler.handle_error(f"Folder not found: {folder_path}")
        except Exception as e:
            self.error_handler.handle_error(str(e))

    def open_mb_excel(self, file_path):
        """
        Opens the mb excel file and generates the graph from the data in the file.
        """
        try:
            data = self.data_reader.read_mb_excel(file_path)
            self.graph_generator.generate_graph(data)
            self.gui.display_graph()
        except FileNotFoundError as e:
            self.error_handler.handle_error(f"File not found: {file_path}")
        except Exception as e:
            self.error_handler.handle_error(str(e))

    def zoom_in(self):
        """
        Zooms in on the graph.
        """
        self.gui.zoom_in()

    def zoom_out(self):
        """
        Zooms out on the graph.
        """
        self.gui.zoom_out()

    def search_person(self, person_id):
        """
        Searches for a person in the graph.
        """
        self.gui.search_person(person_id)

    def display_person_details(self, person_id):
        """
        Displays the details of a person in the graph.
        """
        details = self.data_reader.get_person_details(person_id)
        self.gui.display_person_details(details)

    def handle_error(self, error):
        """
        Handles and logs errors that occur during the execution of the program.
        """
        logging.error(error)
        self.error_handler.handle_error(error)

if __name__ == "__main__":
    logging.basicConfig(filename='error.log', level=logging.ERROR)
    program = MainProgram()
    program.run()