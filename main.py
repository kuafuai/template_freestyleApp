import user
import leave
import notification

def main():
    # Handle user authentication and registration
    user.authenticate()  # Authenticates the user
    user.register()  # Registers the user

    # Handle personal information management
    user.view_personal_info()  # Displays the user's personal information
    user.update_personal_info()  # Updates the user's personal information

    # Handle leave application
    leave.submit_leave_application()  # Submits a leave application
    leave.upload_documents()  # Uploads documents related to the leave application

    # Handle leave approval
    leave.view_leave_applications()  # Displays leave applications for approval
    leave.approve_leave_application()  # Approves a leave application
    leave.reject_leave_application()  # Rejects a leave application
    leave.add_remarks()  # Adds remarks to a leave application

    # Handle leave record statistics
    leave.view_leave_history()  # Displays the user's leave history
    leave.generate_department_report()  # Generates a report for the department's leave records
    leave.generate_personal_report()  # Generates a report for the user's leave records

    # Handle leave policy and rules
    leave.view_leave_policy()  # Displays the leave policy

    # Handle reminders and notifications
    notification.send_leave_reminder()  # Sends a reminder for pending leave applications
    notification.send_policy_update_notification()  # Sends a notification for policy updates

    # Handle mobile device compatibility
    user.adapt_to_mobile_devices()  # Adapts the program for mobile devices

if __name__ == "__main__":
    main()