# user_interface.py

# Import required modules
import language

# Display main menu
def display_main_menu():
    print(language.get_text("main_menu"))

# Get user input for menu option
def get_menu_option():
    option = input(language.get_text("menu_option_prompt"))
    return int(option)

# Display sleep data form
def display_sleep_data_form():
    print(language.get_text("sleep_data_form"))

# Get sleep data from user
def get_sleep_data():
    start_time = input(language.get_text("start_time_prompt"))
    end_time = input(language.get_text("end_time_prompt"))
    quality = input(language.get_text("quality_prompt"))
    return SleepData(start_time, end_time, quality)

# Display analyze sleep data
def display_analyze_sleep_data():
    print(language.get_text("analyze_sleep_data"))

# Display sleep data analysis
def display_sleep_data_analysis(analysis):
    print(language.get_text("sleep_data_analysis").format(analysis))

# Display alarm form
def display_alarm_form():
    print(language.get_text("alarm_form"))

# Get alarm from user
def get_alarm():
    time = input(language.get_text("alarm_time_prompt"))
    method = input(language.get_text("alarm_method_prompt"))
    return Alarm(time, method)

# Display login form
def display_login_form():
    print(language.get_text("login_form"))

# Get login credentials from user
def get_login_credentials():
    username = input(language.get_text("username_prompt"))
    password = input(language.get_text("password_prompt"))
    return Credentials(username, password)

# Display login success message
def display_login_success(user):
    print(language.get_text("login_success").format(user))

# Display login failure message
def display_login_failure():
    print(language.get_text("login_failure"))

# Display language selection
def display_language_selection():
    print(language.get_text("language_selection"))

# Get language selection from user
def get_language():
    language = input(language.get_text("language_prompt"))
    return language

# Set language
def set_language(language):
    language.set_language(language)

# Display sleep data history
def display_sleep_data_history(sleep_data_history):
    print(language.get_text("sleep_data_history"))
    for sleep_data in sleep_data_history:
        print(sleep_data)

# Display invalid option message
def display_invalid_option():
    print(language.get_text("invalid_option"))
