# This file is responsible for implementing login functionalities.

import user
import re

# Password login
def password_login():
    """
    Implements password login functionality.
    Prompts the user to enter a username and password, then calls the user module's login_with_password function.
    """
    try:
        username = input("Enter username: ")
        password = input("Enter password: ")
        
        if not username or not password:
            print("Error: Username and password cannot be empty.")
            return
        
        user.login_with_password(username, password)
    except Exception as e:
        print("Error: ", str(e))

# Email verification code login
def email_login():
    """
    Implements email verification code login functionality.
    Prompts the user to enter an email and verification code, then calls the user module's login_with_email function.
    """
    try:
        email = input("Enter email: ")
        verification_code = input("Enter verification code: ")
        
        if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
            print("Error: Invalid email format.")
            return
        
        user.login_with_email(email, verification_code)
    except Exception as e:
        print("Error: ", str(e))
