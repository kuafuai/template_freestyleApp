import database
import utils
import re

# Define the authenticate function
def authenticate():
    # Get user credentials
    username = input("Enter your username (employee ID or email): ")
    password = input("Enter your password: ")

    # Authenticate user
    if utils.validate_employee_id(username):
        user = database.get_user_by_employee_id(username)
    elif utils.validate_email(username):
        user = database.get_user_by_email(username)
    else:
        print("Invalid username. Please try again.")
        return

    if user is None or user.password != password:
        print("Authentication failed. Please try again.")
    else:
        print("Authentication successful.")

# Define the register function
def register():
    # Get user information
    employee_id = input("Enter your employee ID: ")
    email = input("Enter your email (optional): ")
    name = input("Enter your name: ")
    contact = input("Enter your contact information: ")
    address = input("Enter your address: ")

    # Validate employee ID and email
    if not utils.validate_employee_id(employee_id):
        print("Invalid employee ID. Please try again.")
        return

    if email and not utils.validate_email(email):
        print("Invalid email. Please try again.")
        return

    # Validate contact information
    if not validate_contact(contact):
        print("Invalid contact information. Please try again.")
        return

    # Register user
    user = {
        "employee_id": employee_id,
        "email": email,
        "name": name,
        "contact": contact,
        "address": address
    }
    database.save_user(user)
    print("Registration successful.")

# Define the view_personal_info function
def view_personal_info():
    # Get user information
    employee_id = input("Enter your employee ID: ")

    # Validate employee ID
    if not utils.validate_employee_id(employee_id):
        print("Invalid employee ID. Please try again.")
        return

    # Get and display user information
    user = database.get_user_by_employee_id(employee_id)
    if user is None:
        print("User not found.")
    else:
        print("Name:", user.name)
        print("Contact:", user.contact)
        print("Address:", user.address)

# Define the update_personal_info function
def update_personal_info():
    # Get user information
    employee_id = input("Enter your employee ID: ")

    # Validate employee ID
    if not utils.validate_employee_id(employee_id):
        print("Invalid employee ID. Please try again.")
        return

    # Get user information to update
    name = input("Enter your new name: ")
    contact = input("Enter your new contact information: ")
    address = input("Enter your new address: ")

    # Validate contact information
    if not validate_contact(contact):
        print("Invalid contact information. Please try again.")
        return

    # Update user information
    user = {
        "employee_id": employee_id,
        "name": name,
        "contact": contact,
        "address": address
    }
    database.update_user(user)
    print("Personal information updated.")

# Validate contact information
def validate_contact(contact):
    # Validate phone number
    if re.match(r'^\d{10}$', contact):
        return True

    # Validate email address
    if re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', contact):
        return True

    return False