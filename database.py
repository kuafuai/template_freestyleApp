# This file handles database operations

import sqlalchemy

# Store user information in database
def store_user_info(user_info):
    try:
        # Connect to the database
        engine = sqlalchemy.create_engine('database_connection_string')
        connection = engine.connect()

        # Store user information in database
        query = "INSERT INTO users (name, email) VALUES (:name, :email)"
        connection.execute(query, name=user_info['name'], email=user_info['email'])

        # Close the database connection
        connection.close()

        print("User information stored in database")
    except Exception as e:
        print("Error storing user information in database:", str(e))

# Check if user exists in database
def check_user_exists(user_info):
    try:
        # Connect to the database
        engine = sqlalchemy.create_engine('database_connection_string')
        connection = engine.connect()

        # Check if user exists in database
        query = "SELECT COUNT(*) FROM users WHERE email = :email"
        result = connection.execute(query, email=user_info['email']).scalar()

        # Close the database connection
        connection.close()

        return result > 0
    except Exception as e:
        print("Error checking if user exists in database:", str(e))
        return False

# Store loan request in database
def store_loan_request(loan_info):
    try:
        # Connect to the database
        engine = sqlalchemy.create_engine('database_connection_string')
        connection = engine.connect()

        # Store loan request in database
        query = "INSERT INTO loan_requests (user_id, amount) VALUES (:user_id, :amount)"
        connection.execute(query, user_id=loan_info['user_id'], amount=loan_info['amount'])

        # Close the database connection
        connection.close()

        print("Loan request stored in database")
    except Exception as e:
        print("Error storing loan request in database:", str(e))

# Retrieve loan progress from database
def get_loan_progress(user_id):
    try:
        # Connect to the database
        engine = sqlalchemy.create_engine('database_connection_string')
        connection = engine.connect()

        # Retrieve loan progress from database
        query = "SELECT progress FROM loan_progress WHERE user_id = :user_id"
        result = connection.execute(query, user_id=user_id).scalar()

        # Close the database connection
        connection.close()

        return result
    except Exception as e:
        print("Error retrieving loan progress from database:", str(e))
        return None

# Retrieve loan products from database
def get_loan_products():
    try:
        # Connect to the database
        engine = sqlalchemy.create_engine('database_connection_string')
        connection = engine.connect()

        # Retrieve loan products from database
        query = "SELECT * FROM loan_products"
        result = connection.execute(query).fetchall()

        # Close the database connection
        connection.close()

        return result
    except Exception as e:
        print("Error retrieving loan products from database:", str(e))
        return None

# Retrieve selected loan product from database
def get_loan_product(product_id):
    try:
        # Connect to the database
        engine = sqlalchemy.create_engine('database_connection_string')
        connection = engine.connect()

        # Retrieve selected loan product from database
        query = "SELECT * FROM loan_products WHERE id = :product_id"
        result = connection.execute(query, product_id=product_id).fetchone()

        # Close the database connection
        connection.close()

        return result
    except Exception as e:
        print("Error retrieving selected loan product from database:", str(e))
        return None
