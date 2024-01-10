# This file contains utility functions

import re

# Define the validate_employee_id function
def validate_employee_id(employee_id):
    # Validate the employee ID format
    # The employee ID should be a string of 6 digits
    # Return True if valid, False otherwise
    if re.match(r'^\d{6}$', employee_id):
        return True
    else:
        return False

# Define the validate_email function
def validate_email(email):
    # Validate the email format
    # The email should be a string in the format "username@domain.com"
    # Return True if valid, False otherwise
    if re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', email):
        return True
    else:
        return False

# Define the validate_leave_id function
def validate_leave_id(leave_id):
    # Validate the leave ID format
    # The leave ID should be a string of 8 alphanumeric characters
    # Return True if valid, False otherwise
    if re.match(r'^[a-zA-Z0-9]{8}$', leave_id):
        return True
    else:
        return False

# Define the validate_department_id function
def validate_department_id(department_id):
    # Validate the department ID format
    # The department ID should be a string of 4 alphanumeric characters
    # Return True if valid, False otherwise
    if re.match(r'^[a-zA-Z0-9]{4}$', department_id):
        return True
    else:
        return False

# Define the validate_company_id function
def validate_company_id(company_id):
    # Validate the company ID format
    # The company ID should be a string of 10 alphanumeric characters
    # Return True if valid, False otherwise
    if re.match(r'^[a-zA-Z0-9]{10}$', company_id):
        return True
    else:
        return False
