import database
import ui

# Create a schedule
def create_schedule():
    # Get schedule details from the user
    start_time = ui.get_start_time()
    end_time = ui.get_end_time()
    reminder_setting = ui.get_reminder_setting()

    # Validate input
    if not validate_time(start_time) or not validate_time(end_time):
        ui.display_error_message("Invalid time format. Please enter time in HH:MM format.")
        return

    if not validate_reminder_setting(reminder_setting):
        ui.display_error_message("Invalid reminder setting. Please enter 'on' or 'off'.")
        return

    # Create a new schedule object
    schedule = {
        "start_time": start_time,
        "end_time": end_time,
        "reminder_setting": reminder_setting
    }

    # Save the schedule to the database
    database.save_schedule(schedule)

    # Display success message
    ui.display_success_message("Schedule created successfully.")

# View existing schedules
def view_schedules():
    # Get all schedules from the database
    schedules = database.get_all_schedules()

    # Display the schedules
    ui.display_schedules(schedules)

# Modify an existing schedule
def modify_schedule():
    # Get the schedule ID from the user
    schedule_id = ui.get_schedule_id()

    # Check if the schedule exists
    if not database.schedule_exists(schedule_id):
        ui.display_error_message("Schedule not found.")
        return

    # Get the updated schedule details from the user
    start_time = ui.get_start_time()
    end_time = ui.get_end_time()
    reminder_setting = ui.get_reminder_setting()

    # Validate input
    if not validate_time(start_time) or not validate_time(end_time):
        ui.display_error_message("Invalid time format. Please enter time in HH:MM format.")
        return

    if not validate_reminder_setting(reminder_setting):
        ui.display_error_message("Invalid reminder setting. Please enter 'on' or 'off'.")
        return

    # Update the schedule in the database
    database.update_schedule(schedule_id, start_time, end_time, reminder_setting)

    # Display success message
    ui.display_success_message("Schedule updated successfully.")

# Delete a schedule
def delete_schedule():
    # Get the schedule ID from the user
    schedule_id = ui.get_schedule_id()

    # Check if the schedule exists
    if not database.schedule_exists(schedule_id):
        ui.display_error_message("Schedule not found.")
        return

    # Delete the schedule from the database
    database.delete_schedule(schedule_id)

    # Display success message
    ui.display_success_message("Schedule deleted successfully.")

# Validate time format
def validate_time(time):
    try:
        hours, minutes = time.split(":")
        hours = int(hours)
        minutes = int(minutes)
        if hours < 0 or hours > 23 or minutes < 0 or minutes > 59:
            return False
        return True
    except ValueError:
        return False

# Validate reminder setting
def validate_reminder_setting(setting):
    if setting.lower() == "on" or setting.lower() == "off":
        return True
    return False