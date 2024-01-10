import database
import utils

def send_leave_reminder():
    employee_id = input("Enter your employee ID: ")
    if not utils.validate_employee_id(employee_id):
        print("Invalid employee ID. Please try again.")
        return
    try:
        database.send_leave_reminder(employee_id)
        print("Leave reminder sent.")
    except Exception as e:
        print("Error sending leave reminder:", str(e))

def send_policy_update_notification():
    company_id = input("Enter the company ID: ")
    if not utils.validate_company_id(company_id):
        print("Invalid company ID. Please try again.")
        return
    try:
        database.send_policy_update_notification(company_id)
        print("Policy update notification sent.")
    except Exception as e:
        print("Error sending policy update notification:", str(e))