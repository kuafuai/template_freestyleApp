# This file handles loan request submission and progress tracking

# Import required modules
import database

# Submit loan request
def submit_loan_request(loan_info):
    try:
        # Store loan request in database
        database.store_loan_request(loan_info)
        print("Loan request submitted successfully!")
    except Exception as e:
        print("Error submitting loan request:", str(e))

# Track loan progress
def track_loan_progress(user_id):
    try:
        # Retrieve loan progress from database
        loan_progress = database.get_loan_progress(user_id)
        # Display loan progress to user
        print("Loan progress:", loan_progress)
    except Exception as e:
        print("Error tracking loan progress:", str(e))
