import tkinter as tk

def learning_check_in():
    # Add code here to implement the learning check-in functionality
    print("Learning Check-in functionality implemented")

if __name__ == "__main__":
    root = tk.Tk()
    root.title("Learning Management Software")
    
    check_in_button = tk.Button(root, text="Learning Check-in", command=learning_check_in)
    check_in_button.pack()
    
    root.mainloop()