# Import necessary modules
import tkinter as tk
from tkinter import messagebox

# Define the display function
def display_main_window():
    # Create the main window
    window = tk.Tk()

    # Create the "Add Asset" button
    add_asset_button = tk.Button(window, text="Add Asset", command=show_asset_form)
    add_asset_button.pack()

    # Run the main window
    window.mainloop()

# Show the asset form
def show_asset_form():
    # Create the form window
    form_window = tk.Toplevel()

    # Create the asset form labels and entry fields
    asset_number_label = tk.Label(form_window, text="Asset Number:")
    asset_number_label.pack()
    asset_number_entry = tk.Entry(form_window)
    asset_number_entry.pack()

    name_label = tk.Label(form_window, text="Name:")
    name_label.pack()
    name_entry = tk.Entry(form_window)
    name_entry.pack()

    specifications_label = tk.Label(form_window, text="Specifications:")
    specifications_label.pack()
    specifications_entry = tk.Entry(form_window)
    specifications_entry.pack()

    purchase_date_label = tk.Label(form_window, text="Purchase Date:")
    purchase_date_label.pack()
    purchase_date_entry = tk.Entry(form_window)
    purchase_date_entry.pack()

    purchase_price_label = tk.Label(form_window, text="Purchase Price:")
    purchase_price_label.pack()
    purchase_price_entry = tk.Entry(form_window)
    purchase_price_entry.pack()

    # Create the submit button
    submit_button = tk.Button(form_window, text="Submit", command=lambda: submit_asset_form(form_window, asset_number_entry.get(), name_entry.get(), specifications_entry.get(), purchase_date_entry.get(), purchase_price_entry.get()))
    submit_button.pack()

# Submit the asset form
def submit_asset_form(form_window, asset_number, name, specifications, purchase_date, purchase_price):
    # Check if any field is empty
    if not asset_number or not name or not specifications or not purchase_date or not purchase_price:
        messagebox.showerror("Error", "All fields must be filled")
        return

    # Create a dictionary with the asset information
    asset_info = {
        'asset_number': asset_number,
        'name': name,
        'specifications': specifications,
        'purchase_date': purchase_date,
        'purchase_price': purchase_price
    }

    # Close the form window
    form_window.destroy()

    # Show a success message
    messagebox.showinfo("Success", "Asset added successfully")

    # Return the asset information
    return asset_info

# Get user input
def get_user_input():
    # Call the display_main_window function
    display_main_window()

    # Create the main window
    window = tk.Tk()

    # Run the main window
    window.mainloop()
