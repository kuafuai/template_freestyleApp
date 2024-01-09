# This file is responsible for managing customer information.

# Import necessary libraries
from database import create_connection

# Add customer information
def add_customer(name, age, gender):
    connection = create_connection()
    # Replace with your database insert query
    query = f"INSERT INTO customers (name, age, gender) VALUES ('{name}', {age}, '{gender}')"
    connection.execute(query)
    connection.close()

# Edit customer information
def edit_customer(customer_id, name, age, gender):
    connection = create_connection()
    # Replace with your database update query
    query = f"UPDATE customers SET name = '{name}', age = {age}, gender = '{gender}' WHERE id = {customer_id}"
    connection.execute(query)
    connection.close()

# Delete customer information
def delete_customer(customer_id):
    connection = create_connection()
    # Replace with your database delete query
    query = f"DELETE FROM customers WHERE id = {customer_id}"
    connection.execute(query)
    connection.close()

# Classify and search customer information
def classify_and_search(classification):
    connection = create_connection()
    # Replace with your database select query
    query = f"SELECT * FROM customers WHERE classification = '{classification}'"
    result = connection.execute(query)
    connection.close()
    return result
