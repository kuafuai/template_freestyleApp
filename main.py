# main.py

# Import required modules
import database
import user_interface

def main():
    try:
        # Initialize database connection
        connection = database.connect()

        # Display main menu
        user_interface.display_main_menu()

        # Get user input for menu option
        option = user_interface.get_menu_option()

        # Process user input
        if option == 1:
            # Record sleep data
            user_interface.display_sleep_data_form()
            sleep_data = user_interface.get_sleep_data()
            database.save_sleep_data(connection, sleep_data)
        elif option == 2:
            # Analyze sleep data
            user_interface.display_analyze_sleep_data()
            sleep_data = database.get_sleep_data(connection)
            analysis = sleep_data.analyze()
            user_interface.display_sleep_data_analysis(analysis)
        elif option == 3:
            # Set alarm
            user_interface.display_alarm_form()
            alarm = user_interface.get_alarm()
            database.save_alarm(connection, alarm)
        elif option == 4:
            # Login
            user_interface.display_login_form()
            credentials = user_interface.get_login_credentials()
            user = database.login(connection, credentials)
            if user:
                user_interface.display_login_success(user)
            else:
                user_interface.display_login_failure()
        elif option == 5:
            # Select language
            user_interface.display_language_selection()
            language = user_interface.get_language()
            user_interface.set_language(language)
        elif option == 6:
            # View sleep data history
            sleep_data_history = database.get_sleep_data_history(connection)
            user_interface.display_sleep_data_history(sleep_data_history)
        else:
            user_interface.display_invalid_option()

    except Exception as e:
        print("An error occurred:", str(e))

    finally:
        # Close database connection
        database.disconnect(connection)

if __name__ == "__main__":
    main()
