# Import necessary libraries
import datetime

# Define a class for a contact
class Contact:
    def __init__(self, update_info):
        self.update_info = update_info
        self.next_contact_time = None

    def set_next_contact(self, next_contact_time):
        self.next_contact_time = next_contact_time
