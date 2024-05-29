# Import required modules
import smtplib

# Connect to email
def connect_email():
    # Connect to email server
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login('your_email@gmail.com', 'your_password')
    return server

# Build email subject
def build_email_subject(customers):
    subject = f"Today's Birthday Customers: {', '.join(customers['Name'])}"
    return subject

# Build email attachment
def build_email_attachment(customers):
    attachment = customers.to_csv(index=False)
    return attachment

# Send email
def send_email(subject, attachment):
    global server
    # Create email message
    message = f"Subject: {subject}\n\n{attachment}"

    try:
        # Send email
        server.sendmail('your_email@gmail.com', 'your_email@gmail.com', message)
        server.quit()
        print("Email sent successfully!")
    except Exception as e:
        print(f"Error sending email: {str(e)}")

# Connect to email server
server = connect_email()

# Example usage
customers = {'Name': ['John', 'Jane', 'Mike']}
subject = build_email_subject(customers)
attachment = build_email_attachment(customers)
send_email(subject, attachment)
