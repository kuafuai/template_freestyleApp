# This file handles the theme selection functionality of the travel customization mini-program

import sqlite3

# Function to display the theme selection page
def display_theme_selection():
    # Display the theme selection page
    print("Theme Selection")
    print("Please select your desired travel themes:")

    # Get user input for the desired travel themes
    themes = input("Themes: ")

    # Save the desired travel themes to the database
    save_themes(themes)

    # Display a success message
    print("Themes saved successfully.")

# Function to save the desired travel themes to the database
def save_themes(themes):
    # Save the desired travel themes to the database
    try:
        # Establish a connection to the database
        conn = sqlite3.connect('themes.db')
        cursor = conn.cursor()

        # Create the themes table if it doesn't exist
        cursor.execute('''CREATE TABLE IF NOT EXISTS themes
                          (id INTEGER PRIMARY KEY AUTOINCREMENT,
                           theme TEXT)''')

        # Split the themes string into a list of individual themes
        theme_list = themes.split(',')

        # Insert each theme into the database
        for theme in theme_list:
            cursor.execute("INSERT INTO themes (theme) VALUES (?)", (theme.strip(),))

        # Commit the changes and close the connection
        conn.commit()
        conn.close()

    except sqlite3.Error as e:
        print("An error occurred while saving the themes:", e)

# Call the display_theme_selection function to start the program
display_theme_selection()
