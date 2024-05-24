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
    
    print("User Activities:")
    for activity in user_activities:
        print(activity)
    
    print("Friend Activities:")
    for activity in friend_activities:
        print(activity)

# Function to get user activities
def get_user_activities():
    # Implement the logic to get user activities
    user_activities = ["User Activity 1", "User Activity 2", "User Activity 3"]
    return user_activities

# Function to get friend activities
def get_friend_activities():
    # Implement the logic to get friend activities
    friend_activities = ["Friend Activity 1", "Friend Activity 2", "Friend Activity 3"]
    return friend_activities
