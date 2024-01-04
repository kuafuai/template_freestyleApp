# This file contains functions for performing basic and advanced mathematical calculations.

# Import required modules
import math

# Function to perform basic calculations
def perform_basic_calculation(operator, operand1, operand2):
    if operator == "+":
        return operand1 + operand2
    elif operator == "-":
        return operand1 - operand2
    elif operator == "*":
        return operand1 * operand2
    elif operator == "/":
        return operand1 / operand2

# Function to perform advanced calculations
def perform_advanced_calculation(operator, operand):
    if operator == "square":
        return operand ** 2
    elif operator == "square_root":
        return math.sqrt(operand)
    elif operator == "sin":
        return math.sin(operand)
    elif operator == "cos":
        return math.cos(operand)
    elif operator == "tan":
        return math.tan(operand)

# Function to perform calculation based on user input
def perform_calculation(user_input):
    # Split the user input into operator and operands
    operator, operands = user_input.split(" ", 1)
    operands = operands.split()

    # Convert operands to float
    operands = [float(operand) for operand in operands]

    # Perform calculation based on operator
    if operator in ["+", "-", "*", "/"]:
        return perform_basic_calculation(operator, operands[0], operands[1])
    elif operator in ["square", "square_root", "sin", "cos", "tan"]:
        return perform_advanced_calculation(operator, operands[0])
