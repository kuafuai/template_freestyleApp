# This file handles the emergency contact functionality of the travel customization mini-program

# Function to display the emergency contact page
def display_emergency_contact():
    # Display the emergency contact page
    print("Emergency Contact")
    print("Please find below the emergency contact information:")

    # Get the emergency contact information from the database
    emergency_contact_info = get_emergency_contact_information()

    # Display the emergency contact information
    display_emergency_contact_information(emergency_contact_info)

# Function to get the emergency contact information from the database
def get_emergency_contact_information():
    # Get the emergency contact information from the database
    # Replace this with the actual code to get the information from the database
    emergency_contact_info = {
        "Police": "123",
        "Ambulance": "456",
        "Fire Department": "789"
    }
    return emergency_contact_info

# Function to display the emergency contact information
def display_emergency_contact_information(emergency_contact_info):
    # Display the emergency contact information
    for contact, number in emergency_contact_info.items():
        print(f"{contact}: {number}")
