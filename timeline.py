# This file handles the timeline functionality

# Import necessary modules
import main

# Function to display timeline
def display_timeline():
    # Display user and friend activities
    display_activities()

# Function to display user and friend activities
def display_activities():
    # Implement the logic to display user and friend activities
    user_activities = main.get_user_activities()
    friend_activities = main.get_friend_activities()
    display(user_activities)
    display(friend_activities)

# Function to display activities
def display(activities):
    for activity in activities:
        print(activity)

# Function to get user activities
def get_user_activities():
    # Implement the logic to get user activities
    return ["User activity 1", "User activity 2", "User activity 3"]

# Function to get friend activities
def get_friend_activities():
    # Implement the logic to get friend activities
    return ["Friend activity 1", "Friend activity 2", "Friend activity 3"]

# Call the display_timeline function
display_timeline()
