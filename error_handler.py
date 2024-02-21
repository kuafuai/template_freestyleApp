import main
import logging

class ErrorHandler:
    def __init__(self, main_program):
        self.main_program = main_program

    def handle_error(self, error):
        try:
            # Handle and display the error message
            logging.error(error)
            print("An error occurred: " + str(error))
        except Exception as e:
            logging.error("Error occurred while handling error: " + str(e))

if __name__ == "__main__":
    logging.basicConfig(filename='error.log', level=logging.ERROR)
    program = main.MainProgram()
    error_handler = ErrorHandler(program)
    try:
        error_handler.handle_error("An error occurred")
    except Exception as e:
        logging.error("Error occurred while handling error: " + str(e))