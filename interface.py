# This file contains functions for displaying the calculator interface and handling user input.

# Function to display the calculator interface
def display_interface():
    print("Calculator Interface")
    print("--------------------")
    print("Enter a calculation in the following format:")
    print("Operator Operand1 Operand2")
    print("Supported operators: +, -, *, /, square, square_root, sin, cos, tan")
    print("Example: + 2 3")

# Function to get user input
def get_user_input():
    return input("Enter a calculation (or 'quit' to exit): ")

# Function to display the calculation result
def display_result(result):
    print("Result:", result)

# Function to perform the calculation
def calculate(operator, operand1, operand2):
    if operator == '+':
        return operand1 + operand2
    elif operator == '-':
        return operand1 - operand2
    elif operator == '*':
        return operand1 * operand2
    elif operator == '/':
        return operand1 / operand2
    elif operator == 'square':
        return operand1 ** 2
    elif operator == 'square_root':
        return operand1 ** 0.5
    elif operator == 'sin':
        return math.sin(operand1)
    elif operator == 'cos':
        return math.cos(operand1)
    elif operator == 'tan':
        return math.tan(operand1)
    else:
        return "Invalid operator"

# Main function to run the calculator
def run_calculator():
    display_interface()
    while True:
        calculation = get_user_input()
        if calculation == 'quit':
            break
        else:
            calculation = calculation.split()
            if len(calculation) != 3:
                print("Invalid calculation. Please enter in the correct format.")
                continue
            operator = calculation[0]
            operand1 = float(calculation[1])
            operand2 = float(calculation[2])
            result = calculate(operator, operand1, operand2)
            display_result(result)

run_calculator()
