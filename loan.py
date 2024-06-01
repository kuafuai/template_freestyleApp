# This file handles loan request submission and progress tracking

# Import required modules
import database

# Submit loan request
def submit_loan_request(loan_info):
    # Store loan request in database
    database.store_loan_request(loan_info)

# Track loan progress
def track_loan_progress(user_id):
    # Retrieve loan progress from database
    loan_progress = database.get_loan_progress(user_id)
    # Display loan progress to user
    print(loan_progress)
