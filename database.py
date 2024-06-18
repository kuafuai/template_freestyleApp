# database.py

# Import required modules
import sqlite3

# Connect to the database
def connect():
    connection = sqlite3.connect("sleep_data.db")
    return connection

# Disconnect from the database
def disconnect(connection):
    connection.close()

# Save sleep data to the database
def save_sleep_data(connection, sleep_data):
    cursor = connection.cursor()
    cursor.execute("INSERT INTO sleep_data (start_time, end_time, quality) VALUES (?, ?, ?)",
                   (sleep_data.start_time, sleep_data.end_time, sleep_data.quality))
    connection.commit()

# Get sleep data from the database
def get_sleep_data(connection):
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM sleep_data")
    rows = cursor.fetchall()
    sleep_data = []
    for row in rows:
        sleep_data.append(SleepData(row[0], row[1], row[2]))
    return sleep_data

# Save alarm to the database
def save_alarm(connection, alarm):
    cursor = connection.cursor()
    cursor.execute("INSERT INTO alarm (time, method) VALUES (?, ?)",
                   (alarm.time, alarm.method))
    connection.commit()

# Login user
def login(connection, credentials):
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM users WHERE username = ? AND password = ?",
                   (credentials.username, credentials.password))
    row = cursor.fetchone()
    if row:
        return User(row[0], row[1])
    else:
        return None

# Get sleep data history from the database
def get_sleep_data_history(connection):
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM sleep_data")
    rows = cursor.fetchall()
    sleep_data_history = []
    for row in rows:
        sleep_data_history.append(SleepData(row[0], row[1], row[2]))
    return sleep_data_history
