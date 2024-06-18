# Import necessary libraries
import datetime

# Define a class for a contact
class Contact:
    def __init__(self, name, email, phone_number):
        self.name = name
        self.email = email
        self.phone_number = phone_number
        self.update_info = None
        self.next_contact_time = None

    def set_next_contact(self, next_contact_time):
        self.next_contact_time = next_contact_time

    def update_contact_info(self, update_info):
        self.update_info = update_info

    def get_contact_info(self):
        return {
            'Name': self.name,
            'Email': self.email,
            'Phone Number': self.phone_number,
            'Update Info': self.update_info,
            'Next Contact Time': self.next_contact_time
        }

    def delete_contact(self):
        self.name = None
        self.email = None
        self.phone_number = None
        self.update_info = None
        self.next_contact_time = None

    @staticmethod
    def search_contacts(contacts, criteria):
        result = []
        for contact in contacts:
            if criteria in contact.get_contact_info().values():
                result.append(contact)
        return result

    @staticmethod
    def sort_contacts(contacts, criteria):
        return sorted(contacts, key=lambda contact: contact.get_contact_info()[criteria])

    @staticmethod
    def export_contacts(contacts, file_name):
        with open(file_name, 'w') as file:
            for contact in contacts:
                file.write(str(contact.get_contact_info()) + '\n')

    @staticmethod
    def import_contacts(file_name):
        contacts = []
        with open(file_name, 'r') as file:
            for line in file:
                contact_info = eval(line)
                contact = Contact(contact_info['Name'], contact_info['Email'], contact_info['Phone Number'])
                contact.update_info = contact_info['Update Info']
                contact.next_contact_time = contact_info['Next Contact Time']
                contacts.append(contact)
        return contacts

    def send_email(self, message):
        print(f"Sending email to {self.email}: {message}")

    def send_message(self, message):
        print(f"Sending message to {self.phone_number}: {message}")

    def schedule_follow_up(self, follow_up_time):
        current_time = datetime.datetime.now()
        if follow_up_time > current_time:
            self.next_contact_time = follow_up_time
        else:
            print("Invalid follow-up time. Please provide a future date and time.")

    def validate_input(self):
        if not self.name:
            print("Name is required.")
            return False
        if not self.email:
            print("Email is required.")
            return False
        if not self.phone_number:
            print("Phone number is required.")
            return False
        return True

    def __str__(self):
        return f"Name: {self.name}, Email: {self.email}, Phone Number: {self.phone_number}"
