import excel_utils
import email_utils
import logging

def main():
    try:
        # Read Excel data
        data = excel_utils.read_excel_data()

        # Filter today's birthday customers
        today_birthday_customers = excel_utils.filter_birthday_customers(data)

        # Connect to email
        email_utils.connect_email()

        # Build email content
        email_subject = email_utils.build_email_subject(today_birthday_customers)
        email_attachment = email_utils.build_email_attachment(today_birthday_customers)

        # Send email
        email_utils.send_email(email_subject, email_attachment)

    except Exception as e:
        logging.error(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    main()