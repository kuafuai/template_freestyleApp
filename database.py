# This file handles database interactions

# Import required modules
import third_party_database_library

# Define the get_user_by_employee_id function
def get_user_by_employee_id(employee_id):
    # Query the database to get the user by employee ID
    user = third_party_database_library.query("SELECT * FROM users WHERE employee_id = ?", employee_id)
    return user

# Define the get_user_by_email function
def get_user_by_email(email):
    # Query the database to get the user by email
    user = third_party_database_library.query("SELECT * FROM users WHERE email = ?", email)
    return user

# Define the save_user function
def save_user(user):
    # Save the user to the database
    try:
        third_party_database_library.execute("INSERT INTO users VALUES (?, ?, ?, ?, ?)", user.employee_id, user.email, user.name, user.contact, user.address)
    except Exception as e:
        print("Error saving user:", str(e))

# Define the update_user function
def update_user(user):
    # Update the user in the database
    try:
        third_party_database_library.execute("UPDATE users SET name = ?, contact = ?, address = ? WHERE employee_id = ?", user.name, user.contact, user.address, user.employee_id)
    except Exception as e:
        print("Error updating user:", str(e))

# Define the get_leave_applications function
def get_leave_applications(supervisor_id):
    # Query the database to get the leave applications for the supervisor
    leave_applications = third_party_database_library.query("SELECT * FROM leave_applications WHERE supervisor_id = ?", supervisor_id)
    return leave_applications

# Define the save_leave_application function
def save_leave_application(leave_application):
    # Save the leave application to the database
    try:
        third_party_database_library.execute("INSERT INTO leave_applications (employee_id, leave_type, leave_date, leave_reason, status) VALUES (?, ?, ?, ?, ?)", leave_application.employee_id, leave_application.leave_type, leave_application.leave_date, leave_application.leave_reason, "Pending")
    except Exception as e:
        print("Error saving leave application:", str(e))

# Define the upload_document function
def upload_document(document):
    # Upload the document to the database
    try:
        third_party_database_library.execute("INSERT INTO documents (employee_id, document_path) VALUES (?, ?)", document.employee_id, document.document_path)
    except Exception as e:
        print("Error uploading document:", str(e))

# Define the approve_leave_application function
def approve_leave_application(leave_id):
    # Approve the leave application in the database
    try:
        third_party_database_library.execute("UPDATE leave_applications SET status = 'Approved' WHERE id = ?", leave_id)
    except Exception as e:
        print("Error approving leave application:", str(e))

# Define the reject_leave_application function
def reject_leave_application(leave_id):
    # Reject the leave application in the database
    try:
        third_party_database_library.execute("UPDATE leave_applications SET status = 'Rejected' WHERE id = ?", leave_id)
    except Exception as e:
        print("Error rejecting leave application:", str(e))

# Define the add_remarks_to_leave_application function
def add_remarks_to_leave_application(leave_id, remarks):
    # Add remarks to the leave application in the database
    try:
        third_party_database_library.execute("UPDATE leave_applications SET remarks = ? WHERE id = ?", remarks, leave_id)
    except Exception as e:
        print("Error adding remarks to leave application:", str(e))

# Define the get_leave_history function
def get_leave_history(employee_id):
    # Query the database to get the leave history for the employee
    leave_history = third_party_database_library.query("SELECT * FROM leave_history WHERE employee_id = ?", employee_id)
    return leave_history

# Define the generate_department_report function
def generate_department_report(department_id):
    # Query the database to generate the department report
    report = third_party_database_library.query("SELECT * FROM department_report WHERE department_id = ?", department_id)
    return report

# Define the generate_personal_report function
def generate_personal_report(employee_id):
    # Query the database to generate the personal report
    report = third_party_database_library.query("SELECT * FROM personal_report WHERE employee_id = ?", employee_id)
    return report

# Define the get_leave_policy function
def get_leave_policy(company_id):
    # Query the database to get the leave policy
    leave_policy = third_party_database_library.query("SELECT * FROM leave_policy WHERE company_id = ?", company_id)
    return leave_policy

# Define the send_leave_reminder function
def send_leave_reminder(employee_id):
    # Send the leave reminder to the employee
    third_party_notification_library.send_notification(employee_id, "Leave reminder")

# Define the send_policy_update_notification function
def send_policy_update_notification(company_id):
    # Send the policy update notification to all employees
    employees = third_party_database_library.query("SELECT * FROM employees WHERE company_id = ?", company_id)
    for employee in employees:
        third_party_notification_library.send_notification(employee.id, "Policy update notification")
