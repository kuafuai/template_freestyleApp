# This file is responsible for creating the frontend login interface.

import login

# Create password login interface
def create_password_login():
    # Implement password login interface creation
    while True:
        password = input("Enter password: ")
        if password:
            break
        else:
            print("Invalid password. Please enter a valid password.")
    login.password_login(password)

# Create email verification code login interface
def create_email_login():
    # Implement email verification code login interface creation
    while True:
        email = input("Enter email: ")
        if email:
            break
        else:
            print("Invalid email. Please enter a valid email.")
    while True:
        verification_code = input("Enter verification code: ")
        if verification_code:
            break
        else:
            print("Invalid verification code. Please enter a valid verification code.")
    login.email_login(email, verification_code)
