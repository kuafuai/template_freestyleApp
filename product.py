# This file handles loan product browsing and selection

# Import required modules
import database

# Browse loan products
def browse_loan_products():
    try:
        # Retrieve loan products from database
        loan_products = database.get_loan_products()
        # Display loan products to user
        display_loan_products(loan_products)
    except Exception as e:
        print("Error occurred while browsing loan products:", str(e))

# Display loan products to user
def display_loan_products(loan_products):
    # Implement user-friendly display using HTML and JavaScript
    print("<h1>Loan Products</h1>")
    print("<ul>")
    for product in loan_products:
        print("<li>" + product + "</li>")
    print("</ul>")

# Select loan product
def select_loan_product(product_id):
    try:
        # Retrieve selected loan product from database
        loan_product = database.get_loan_product(product_id)
        # Display selected loan product to user
        display_selected_loan_product(loan_product)
    except Exception as e:
        print("Error occurred while selecting loan product:", str(e))

# Display selected loan product to user
def display_selected_loan_product(loan_product):
    # Implement user-friendly display using HTML and JavaScript
    print("<h1>Selected Loan Product</h1>")
    print("<p>" + loan_product + "</p>")
