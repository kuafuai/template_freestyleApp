# This file is the entry point of the calculator application and handles user interactions.

# Import required modules
import calculator
import interface
import history

# Define the main function
def main():
    # Display the calculator interface
    interface.display_interface()

    # Initialize variables
    calculation_history = []

    # Start the main loop
    while True:
        # Get user input
        user_input = interface.get_user_input()

        # Check if user wants to quit
        if user_input == "quit":
            break

        # Perform calculation
        result = calculator.perform_calculation(user_input)

        # Display the result
        interface.display_result(result)

        # Save the calculation to history
        history.save_calculation(user_input, result, calculation_history)

    # Display the calculation history
    history.display_history(calculation_history)

# Call the main function
if __name__ == "__main__":
    main()
