# This file contains functions for saving and displaying the calculation history.

def save_calculation(user_input, result, calculation_history):
    """
    Function to save a calculation to history.

    Parameters:
    user_input (str): The user input for the calculation.
    result (float): The result of the calculation.
    calculation_history (list): The list containing the calculation history.

    Returns:
    None
    """
    if isinstance(calculation_history, list):
        calculation_history.append((user_input, result))
    else:
        raise TypeError("calculation_history must be a list")

def display_history(calculation_history):
    """
    Function to display the calculation history.

    Parameters:
    calculation_history (list): The list containing the calculation history.

    Returns:
    None
    """
    if isinstance(calculation_history, list):
        print("Calculation History")
        print("-------------------")
        for i, (user_input, result) in enumerate(calculation_history):
            print(f"Calculation {i+1}: {user_input} = {result}")
    else:
        raise TypeError("calculation_history must be a list")

def clear_history(calculation_history):
    """
    Function to clear the calculation history.

    Parameters:
    calculation_history (list): The list containing the calculation history.

    Returns:
    None
    """
    if isinstance(calculation_history, list):
        calculation_history.clear()
    else:
        raise TypeError("calculation_history must be a list")
