# user.py
# This file handles the user registration and login functionality.

# Prompt the user to register or login
def prompt_registration_or_login():
    while True:
        choice = input("Enter '1' to register or '2' to login: ")
        if choice == '1':
            register_user()
            break
        elif choice == '2':
            login_user()
            break
        else:
            print("Invalid choice. Please try again.")

def register_user():
    username = input("Enter a username: ")
    password = input("Enter a password: ")
    # Save the username and password to a database or file
    # CODE

    print("Registration successful!")

def login_user():
    username = input("Enter your username: ")
    password = input("Enter your password: ")
    # Check if the username and password match the records in the database or file
    # CODE

    print("Login successful!")

prompt_registration_or_login()
