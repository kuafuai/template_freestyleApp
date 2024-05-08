# database.py
# This file handles the connection and operations with the database.

import psycopg2

# Connect to the database
def connect():
    """
    Connects to the database.
    Returns:
        connection: A connection object to the database.
    """
    try:
        connection = psycopg2.connect(database="your_database", user="your_user", password="your_password", host="your_host", port="your_port")
        return connection
    except psycopg2.Error as e:
        print("Error connecting to the database:", e)
        return None

# Disconnect from the database
def disconnect(connection):
    """
    Disconnects from the database.
    Args:
        connection: A connection object to the database.
    """
    try:
        connection.close()
        print("Disconnected from the database.")
    except psycopg2.Error as e:
        print("Error disconnecting from the database:", e)
