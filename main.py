# This file handles user requests and calls the appropriate modules to process the requests

# Import required modules
import user
import loan
import product

# Handle user registration request
def register_user(user_info):
    # Call user module to register user
    user.register(user_info)

# Handle user login request
def login_user(user_info):
    # Call user module to login user
    user.login(user_info)

# Handle loan request submission
def submit_loan_request(loan_info):
    # Call loan module to submit loan request
    loan.submit_loan_request(loan_info)

# Handle loan progress tracking request
def track_loan_progress(user_id):
    # Call loan module to track loan progress
    loan.track_loan_progress(user_id)

# Handle loan product browsing request
def browse_loan_products():
    # Call product module to browse loan products
    product.browse_loan_products()

# Handle loan product selection request
def select_loan_product(product_id):
    # Call product module to select loan product
    product.select_loan_product(product_id)
