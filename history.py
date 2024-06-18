# history.py

# Import required modules
import database

# Get sleep data history from the database
def get_sleep_data_history():
    connection = database.connect()
    sleep_data_history = database.get_sleep_data_history(connection)
    database.disconnect(connection)
    return sleep_data_history
