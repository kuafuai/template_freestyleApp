# This file is responsible for displaying the user interface, receiving user input, calling the calculator for calculations, displaying the calculation results, and displaying the calculation history.

import calculator
import history

# Initialize calculator
calc = calculator.Calculator()

# Initialize history
hist = history.History()

def start():
    print("Welcome to the calculator!")
    print("1. Perform calculation")
    print("2. Display calculation history")

def get_input():
    user_input = input("Enter your calculation: ")
    return user_input

def display_result(result):
    print("Result: ", result)

def display_history():
    history = hist.get_history()
    print("Calculation History:")
    for calculation in history:
        print(calculation)

start()
user_input = get_input()
result = calc.calculate(user_input)
display_result(result)
display_history()
