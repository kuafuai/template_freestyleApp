import math

class Calculator:
    def __init__(self):
        pass

    def calculate(self, expression):
        result = self.evaluate_expression(expression)
        return result

    def evaluate_expression(self, expression):
        # Perform addition, subtraction, multiplication, and division calculations
        result = self.evaluate_arithmetic(expression)
        
        # Perform decimal calculations
        result = self.decimal_calculations(result)
        
        # Perform basic bracket calculations
        result = self.basic_bracket_calculations(result)
        
        # Perform percentage calculations
        result = self.percentage_calculations(result)
        
        # Perform power calculations
        result = self.power_calculations(result)
        
        # Perform square root calculations
        result = self.square_root_calculations(result)
        
        # Perform negative number calculations
        result = self.negative_number_calculations(result)
        
        # Perform scientific notation calculations
        result = self.scientific_notation_calculations(result)
        
        return result

    def evaluate_arithmetic(self, expression):
        # Perform addition, subtraction, multiplication, and division calculations
        operators = ['+', '-', '*', '/']
        for operator in operators:
            if operator in expression:
                parts = expression.split(operator)
                if operator == '+':
                    result = self.addition(parts[0], parts[1])
                elif operator == '-':
                    result = self.subtraction(parts[0], parts[1])
                elif operator == '*':
                    result = self.multiplication(parts[0], parts[1])
                elif operator == '/':
                    result = self.division(parts[0], parts[1])
                expression = expression.replace(parts[0] + operator + parts[1], str(result))
                break
        return expression

    def addition(self, num1, num2):
        return float(num1) + float(num2)

    def subtraction(self, num1, num2):
        return float(num1) - float(num2)

    def multiplication(self, num1, num2):
        return float(num1) * float(num2)

    def division(self, num1, num2):
        if float(num2) == 0:
            raise ZeroDivisionError("Division by zero is not allowed")
        return float(num1) / float(num2)

    def decimal_calculations(self, expression):
        # Perform decimal calculations
        if '.' in expression:
            parts = expression.split('.')
            if len(parts) == 2:
                result = self.addition(parts[0], '0.' + parts[1])
                expression = str(result)
        return expression

    def basic_bracket_calculations(self, expression):
        # Perform basic bracket calculations
        while '(' in expression:
            start_index = expression.index('(')
            end_index = expression.index(')')
            sub_expression = expression[start_index + 1:end_index]
            result = self.evaluate_expression(sub_expression)
            expression = expression.replace('(' + sub_expression + ')', str(result))
        return expression

    def percentage_calculations(self, expression):
        # Perform percentage calculations
        if '%' in expression:
            parts = expression.split('%')
            if len(parts) == 2:
                result = self.division(parts[0], '100')
                expression = str(result)
        return expression

    def power_calculations(self, expression):
        # Perform power calculations
        if '^' in expression:
            parts = expression.split('^')
            if len(parts) == 2:
                result = math.pow(float(parts[0]), float(parts[1]))
                expression = str(result)
        return expression

    def square_root_calculations(self, expression):
        # Perform square root calculations
        if 'sqrt' in expression:
            start_index = expression.index('sqrt(')
            end_index = expression.index(')')
            sub_expression = expression[start_index + 5:end_index]
            result = math.sqrt(float(sub_expression))
            expression = expression.replace('sqrt(' + sub_expression + ')', str(result))
        return expression

    def negative_number_calculations(self, expression):
        # Perform negative number calculations
        if '-' in expression:
            parts = expression.split('-')
            if len(parts) == 2 and parts[0] == '':
                result = -1 * float(parts[1])
                expression = str(result)
        return expression

    def scientific_notation_calculations(self, expression):
        # Perform scientific notation calculations
        if 'e' in expression:
            parts = expression.split('e')
            if len(parts) == 2:
                result = float(parts[0]) * math.pow(10, float(parts[1]))
                expression = str(result)
        return expression
