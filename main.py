import ui
import schedule
import reminder

# Create the main interface
ui.create_main_interface()

# Handle user interactions
while True:
    # Wait for user input
    while True:
        user_input = ui.get_user_input()
        if user_input in ["create_schedule", "view_schedules", "modify_schedule", "exit"]:
            break
        else:
            ui.display_error_message("Invalid input. Please try again.")

    # Check user input
    if user_input == "create_schedule":
        # Create a new schedule
        try:
            schedule.create_schedule()
            ui.display_success_message("Schedule created successfully.")
        except Exception as e:
            ui.display_error_message(str(e))
    elif user_input == "view_schedules":
        # View existing schedules
        try:
            schedule.view_schedules()
        except Exception as e:
            ui.display_error_message(str(e))
    elif user_input == "modify_schedule":
        # Modify an existing schedule
        try:
            schedule.modify_schedule()
            ui.display_success_message("Schedule modified successfully.")
        except Exception as e:
            ui.display_error_message(str(e))
    elif user_input == "exit":
        # Exit the application
        break