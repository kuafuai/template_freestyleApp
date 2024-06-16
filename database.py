# Import necessary modules
import sqlite3

# Define the database connection
conn = None

# Initialize the database connection
def initialize():
    global conn
    try:
        conn = sqlite3.connect('assets.db')
        cursor = conn.cursor()

        # Create the asset table if it does not exist
        cursor.execute('''CREATE TABLE IF NOT EXISTS assets
                          (asset_number TEXT, name TEXT, specifications TEXT, purchase_date TEXT, purchase_price REAL)''')
        conn.commit()
    except sqlite3.Error as e:
        print("Error initializing database:", e)

# Store the asset information in the database
def store_asset(asset):
    global conn
    try:
        cursor = conn.cursor()

        # Insert the asset information into the asset table
        cursor.execute("INSERT INTO assets VALUES (?, ?, ?, ?, ?)",
                       (asset.get_asset_number(), asset.get_name(), asset.get_specifications(), asset.get_purchase_date(), asset.get_purchase_price()))
        conn.commit()
    except sqlite3.Error as e:
        print("Error storing asset:", e)

# Close the database connection
def close():
    global conn
    try:
        conn.close()
    except sqlite3.Error as e:
        print("Error closing database connection:", e)
