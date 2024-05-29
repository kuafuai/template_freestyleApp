# Import required modules
import pandas as pd

# Read Excel data
def read_excel_data():
    data = pd.read_excel('customer_data.xlsx')
    return data

# Filter birthday customers
def filter_birthday_customers(data):
    today = pd.Timestamp.today().date()
    birthday_customers = data[data['Birthday'].dt.date == today]
    return birthday_customers
