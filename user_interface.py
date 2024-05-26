# This file is responsible for displaying the user interface and handling user input.

def display_user_interface():
    """
    Display the user interface.
    """
    # Display the main menu
    print("Welcome to the WeChat Chat Record Exporter!")
    print("1. Export Chat Records")
    print("2. Search Chat Records")
    print("3. Exit")

def get_user_input():
    """
    Get user input.

    Returns:
        int: The user's choice.
    """
    # Get user input
    user_input = int(input("Enter your choice: "))
    
    return user_input

def display_search_results(search_results):
    """
    Display the search results.

    Args:
        search_results (list): A list of search results.
    """
    # Display the search results
    print("Search Results:")
    for result in search_results:
        print(result)
