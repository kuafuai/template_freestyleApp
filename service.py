# This file is responsible for managing service records.

# Import necessary libraries
from database import create_connection

# Record services received by customers
def record_service(customer_id, service_type, satisfaction):
    connection = create_connection()
    # Replace with your database insert query
    query = f"INSERT INTO service_records (customer_id, service_type, satisfaction) VALUES ({customer_id}, '{service_type}', {satisfaction})"
    connection.execute(query)
    connection.close()

# Conduct customer satisfaction surveys and record feedback
def conduct_satisfaction_survey_and_record_feedback(customer_id, survey_result, feedback):
    connection = create_connection()
    # Replace with your database update query
    query = f"UPDATE service_records SET survey_result = {survey_result}, feedback = '{feedback}' WHERE customer_id = {customer_id}"
    connection.execute(query)
    connection.close()

# Create and adjust service plans
def create_and_adjust_service_plans(customer_id, plan):
    connection = create_connection()
    # Replace with your database update query
    query = f"UPDATE service_records SET plan = '{plan}' WHERE customer_id = {customer_id}"
    connection.execute(query)
    connection.close()
