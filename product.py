# This file handles loan product browsing and selection

# Import required modules
import database

# Browse loan products
def browse_loan_products():
    # Retrieve loan products from database
    loan_products = database.get_loan_products()
    # Display loan products to user
    print(loan_products)

# Select loan product
def select_loan_product(product_id):
    # Retrieve selected loan product from database
    loan_product = database.get_loan_product(product_id)
    # Display selected loan product to user
    print(loan_product)
