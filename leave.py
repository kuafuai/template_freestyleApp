import database
import utils
from datetime import datetime

# Define the submit_leave_application function
def submit_leave_application():
    while True:
        # Get leave application details
        employee_id = input("Enter your employee ID: ")
        leave_type = input("Enter the leave type: ")
        leave_date = input("Enter the leave date (YYYY-MM-DD): ")
        leave_reason = input("Enter the leave reason: ")

        # Validate employee ID
        if not utils.validate_employee_id(employee_id):
            print("Invalid employee ID. Please try again.")
            continue

        # Validate leave date
        try:
            datetime.strptime(leave_date, "%Y-%m-%d")
        except ValueError:
            print("Invalid leave date format. Please enter the date in YYYY-MM-DD format.")
            continue

        # Save leave application
        leave_application = {
            "employee_id": employee_id,
            "leave_type": leave_type,
            "leave_date": leave_date,
            "leave_reason": leave_reason
        }
        database.save_leave_application(leave_application)
        print("Leave application submitted.")
        break

# Define the upload_documents function
def upload_documents():
    while True:
        # Get leave application details
        employee_id = input("Enter your employee ID: ")
        document_path = input("Enter the path of the document to upload: ")

        # Validate employee ID
        if not utils.validate_employee_id(employee_id):
            print("Invalid employee ID. Please try again.")
            continue

        # Upload document
        document = {
            "employee_id": employee_id,
            "document_path": document_path
        }
        database.upload_document(document)
        print("Document uploaded.")
        break

# Define the view_leave_applications function
def view_leave_applications():
    while True:
        # Get supervisor information
        supervisor_id = input("Enter your supervisor ID: ")

        # Validate supervisor ID
        if not utils.validate_employee_id(supervisor_id):
            print("Invalid supervisor ID. Please try again.")
            continue

        # Get and display leave applications
        leave_applications = database.get_leave_applications(supervisor_id)
        if leave_applications:
            for leave_application in leave_applications:
                print("Leave ID:", leave_application.id)
                print("Employee ID:", leave_application.employee_id)
                print("Leave Type:", leave_application.leave_type)
                print("Leave Date:", leave_application.leave_date)
                print("Leave Reason:", leave_application.leave_reason)
                print("Status:", leave_application.status)
                print()
        else:
            print("No leave applications found.")
        break

# Define the approve_leave_application function
def approve_leave_application():
    while True:
        # Get leave application ID
        leave_id = input("Enter the leave ID to approve: ")

        # Validate leave ID
        if not utils.validate_leave_id(leave_id):
            print("Invalid leave ID. Please try again.")
            continue

        # Approve leave application
        database.approve_leave_application(leave_id)
        print("Leave application approved.")
        break

# Define the reject_leave_application function
def reject_leave_application():
    while True:
        # Get leave application ID
        leave_id = input("Enter the leave ID to reject: ")

        # Validate leave ID
        if not utils.validate_leave_id(leave_id):
            print("Invalid leave ID. Please try again.")
            continue

        # Reject leave application
        database.reject_leave_application(leave_id)
        print("Leave application rejected.")
        break

# Define the add_remarks function
def add_remarks():
    while True:
        # Get leave application ID
        leave_id = input("Enter the leave ID to add remarks: ")

        # Validate leave ID
        if not utils.validate_leave_id(leave_id):
            print("Invalid leave ID. Please try again.")
            continue

        # Get remarks
        remarks = input("Enter remarks: ")

        # Add remarks to leave application
        database.add_remarks_to_leave_application(leave_id, remarks)
        print("Remarks added to leave application.")
        break

# Define the view_leave_history function
def view_leave_history():
    while True:
        # Get employee ID
        employee_id = input("Enter your employee ID: ")

        # Validate employee ID
        if not utils.validate_employee_id(employee_id):
            print("Invalid employee ID. Please try again.")
            continue

        # Get and display leave history
        leave_history = database.get_leave_history(employee_id)
        if leave_history:
            for leave_record in leave_history:
                print("Leave ID:", leave_record.id)
                print("Leave Type:", leave_record.leave_type)
                print("Leave Date:", leave_record.leave_date)
                print("Leave Reason:", leave_record.leave_reason)
                print("Status:", leave_record.status)
                print()
        else:
            print("No leave history found.")
        break

# Define the generate_department_report function
def generate_department_report():
    while True:
        # Get department ID
        department_id = input("Enter the department ID: ")

        # Validate department ID
        if not utils.validate_department_id(department_id):
            print("Invalid department ID. Please try again.")
            continue

        # Generate department report
        report = database.generate_department_report(department_id)
        if report:
            print("Department Report:")
            print(report)
        else:
            print("No report found for the department.")
        break

# Define the generate_personal_report function
def generate_personal_report():
    while True:
        # Get employee ID
        employee_id = input("Enter your employee ID: ")

        # Validate employee ID
        if not utils.validate_employee_id(employee_id):
            print("Invalid employee ID. Please try again.")
            continue

        # Generate personal report
        report = database.generate_personal_report(employee_id)
        if report:
            print("Personal Report:")
            print(report)
        else:
            print("No report found for the employee.")
        break

# Define the view_leave_policy function
def view_leave_policy():
    while True:
        # Get company ID
        company_id = input("Enter the company ID: ")

        # Validate company ID
        if not utils.validate_company_id(company_id):
            print("Invalid company ID. Please try again.")
            continue

        # Get and display leave policy
        leave_policy = database.get_leave_policy(company_id)
        if leave_policy:
            print("Leave Policy:")
            print(leave_policy)
        else:
            print("Leave policy not found.")
        break