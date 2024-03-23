import tkinter as tk

class Calculator:
    def __init__(self):
        self.window = tk.Tk()
        self.window.title("Calculator")

        self.display = tk.Entry(self.window, width=30)
        self.display.grid(row=0, column=0, columnspan=4)

        for i in range(10):
            button = tk.Button(self.window, text=str(i), command=lambda i=i: self.append_to_display(str(i)))
            button.grid(row=(9-i)//3+1, column=(i-1)%3)

        operators = ['+', '-', '*', '/']
        for i, operator in enumerate(operators):
            button = tk.Button(self.window, text=operator, command=lambda operator=operator: self.append_to_display(operator))
            button.grid(row=i+1, column=3)

        equal_button = tk.Button(self.window, text='=', command=self.calculate)
        equal_button.grid(row=4, column=0)

        clear_button = tk.Button(self.window, text='C', command=self.clear_display)
        clear_button.grid(row=4, column=1)

        delete_button = tk.Button(self.window, text='DEL', command=self.delete_character)
        delete_button.grid(row=4, column=2)

    def append_to_display(self, character):
        current_text = self.display.get()
        self.display.delete(0, tk.END)
        self.display.insert(tk.END, current_text + character)

    def clear_display(self):
        self.display.delete(0, tk.END)

    def delete_character(self):
        current_text = self.display.get()
        self.display.delete(0, tk.END)
        self.display.insert(tk.END, current_text[:-1])

    def calculate(self):
        expression = self.display.get()
        try:
            result = eval(expression)
            self.display.delete(0, tk.END)
            self.display.insert(tk.END, str(result))
        except:
            self.display.delete(0, tk.END)
            self.display.insert(tk.END, "Error")

    def run(self):
        self.window.mainloop()

calculator = Calculator()
calculator.run()