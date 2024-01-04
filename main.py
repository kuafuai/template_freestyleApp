import calculator
import ui
import history

def start():
    ui.start()

def get_input():
    return ui.get_input()

def display_result(result):
    ui.display_result(result)

def display_history():
    hist.display_history()

def main():
    # Initialize calculator
    calc = calculator.Calculator()

    # Initialize history
    hist = history.History()

    # Start user interface
    start()

    # Loop for user input
    while True:
        # Get user input
        user_input = get_input()

        # Check if user wants to quit
        if user_input == "quit":
            break

        try:
            # Perform calculation
            result = calc.calculate(user_input)

            # Display calculation result
            display_result(result)

            # Save calculation history
            hist.save_calculation(user_input, result)
        except Exception as e:
            print("An error occurred:", str(e))

    # Display calculation history
    display_history()

if __name__ == "__main__":
    main()