# Calculator Program

import tkinter as tk

class Calculator:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Calculator")
        
        self.entry = tk.Entry(self.root, width=30)
        self.entry.grid(row=0, column=0, columnspan=4, padx=10, pady=10)
        
        self.create_buttons()
        
        self.root.mainloop()
    
    def create_buttons(self):
        buttons = [
            '7', '8', '9', '/',
            '4', '5', '6', '*',
            '1', '2', '3', '-',
            '0', '.', '=', '+'
        ]
        
        row = 1
        col = 0
        
        for button in buttons:
            if button == '=':
                tk.Button(self.root, text=button, padx=40, pady=20, command=self.calculate).grid(row=row, column=col)
            else:
                tk.Button(self.root, text=button, padx=40, pady=20, command=lambda button=button: self.add_to_entry(button)).grid(row=row, column=col)
            
            col += 1
            if col > 3:
                col = 0
                row += 1
    
    def add_to_entry(self, value):
        current_value = self.entry.get()
        self.entry.delete(0, tk.END)
        self.entry.insert(tk.END, current_value + value)
    
    def calculate(self):
        try:
            expression = self.entry.get()
            result = eval(expression)
            self.entry.delete(0, tk.END)
            self.entry.insert(tk.END, str(result))
        except ZeroDivisionError:
            self.entry.delete(0, tk.END)
            self.entry.insert(tk.END, "Error: Division by zero")
        except:
            self.entry.delete(0, tk.END)
            self.entry.insert(tk.END, "Error: Invalid input")

if __name__ == "__main__":
    calculator = Calculator()
