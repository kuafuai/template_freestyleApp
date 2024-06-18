import user_profile
import destination

def display_transportation_arrangement():
    print("Transportation Arrangement")
    print("Please enter your personal information and desired destination:")

    name = input("Name: ")
    while not name:
        print("Name cannot be empty.")
        name = input("Name: ")

    contact_info = input("Contact Information: ")
    while not contact_info:
        print("Contact Information cannot be empty.")
        contact_info = input("Contact Information: ")

    preferences = input("Preferences: ")

    destination = input("Destination: ")
    while not destination:
        print("Destination cannot be empty.")
        destination = input("Destination: ")

    save_transportation_information(name, contact_info, preferences, destination)

    print("Transportation arrangement saved successfully.")

def save_transportation_information(name, contact_info, preferences, destination):
    # Actual code to save the information to the database
    user_profile.save_user_profile(name, contact_info, preferences)
    destination.save_destination(destination)