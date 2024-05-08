# main.py
# This file is the entry point of the application and handles the main functionality.

# Import necessary modules
import database
import user
import standard
import search
import integration
import product_standard

# Create a local application for saving and reading building and construction standards
def create_application():
    # Connect to the database
    database.connect()

    # Prompt the user to register or login
    user.prompt_registration_or_login()

    # Display the main menu options
    display_main_menu()

# Display the main menu options
def display_main_menu():
    while True:
        # Display the main menu options
        print("Main Menu:")
        print("1. Save building standard")
        print("2. Edit building standard")
        print("3. Search building standard")
        print("4. Analyze building standard")
        print("5. Define product standard")
        print("6. Exit")

        # Get the user's choice
        choice = input("Enter your choice: ")

        # Perform the corresponding action based on the user's choice
        if choice == "1":
            standard.save_building_standard()
        elif choice == "2":
            standard.edit_building_standard()
        elif choice == "3":
            search.search_building_standard()
        elif choice == "4":
            integration.analyze_building_standard()
        elif choice == "5":
            product_standard.define_product_standard()
        elif choice == "6":
            # Disconnect from the database and exit the application
            database.disconnect()
            break
        else:
            print("Invalid choice. Please try again.")

# Call the create_application function to start the application
create_application()
