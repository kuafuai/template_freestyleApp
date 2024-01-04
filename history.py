class History:
    def __init__(self):
        self.history = []

    def save_calculation(self, expression, result):
        calculation = {
            'expression': expression,
            'result': result
        }
        self.history.append(calculation)

    def display_history(self):
        for calculation in self.history:
            print(f"Expression: {calculation['expression']}")
            print(f"Result: {calculation['result']}")
            print("--------------------")
