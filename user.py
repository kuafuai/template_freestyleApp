# This file handles user registration, login, and validation

# Import required modules
import database

# Register user
def register(user_info):
    # Validate user information
    if validate_user_info(user_info):
        # Store user information in database
        database.store_user_info(user_info)
    else:
        print("Invalid user information")

# Login user
def login(user_info):
    # Validate user information
    if validate_user_info(user_info):
        # Check if user exists in database
        if database.check_user_exists(user_info):
            print("User logged in successfully")
        else:
            print("User does not exist")
    else:
        print("Invalid user information")

# Validate user information
def validate_user_info(user_info):
    # Perform validation checks on user information
    if user_info["name"] and user_info["phone"] and user_info["id"]:
        return True
    else:
        return False
