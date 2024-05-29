# Import required modules
import pandas as pd

# Read Excel data
def read_excel_data(file_path):
    try:
        data = pd.read_excel(file_path)
        return data
    except FileNotFoundError:
        print("File not found.")
        return None
    except Exception as e:
        print("Error occurred while reading Excel data:", str(e))
        return None

# Filter birthday customers
def filter_birthday_customers(data):
    try:
        today = pd.Timestamp.today().date()
        birthday_customers = data[data['Birthday'].dt.date == today]
        return birthday_customers
    except Exception as e:
        print("Error occurred while filtering birthday customers:", str(e))
        return None
