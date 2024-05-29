# Import required modules
import smtplib

# Connect to email
def connect_email():
    # Connect to email server
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login('your_email@gmail.com', 'your_password')

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
    # Create email message
    message = f"Subject: {subject}\n\n{attachment}"

    # Send email
    server.sendmail('your_email@gmail.com', 'your_email@gmail.com', message)
    server.quit()
