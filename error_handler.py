import main

class ErrorHandler:
    def __init__(self, main_program):
        self.main_program = main_program

    def handle_error(self, error: str) -> None:
        # Handle and display the error message
        print(error)

if __name__ == "__main__":
    program = main.MainProgram()
    error_handler = ErrorHandler(program)
    error_handler.handle_error("An error occurred")