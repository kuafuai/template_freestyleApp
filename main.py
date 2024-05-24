# This file handles the main functionality of the social media platform

# Import necessary modules
import profile
import friend
import message
import news
import timeline
import notification

# Handle the click event of the "Create Profile" button
def create_profile_button_click():
    try:
        # Call the create_profile function from the profile module
        profile.create_profile()
    except Exception as e:
        print(f"Error creating profile: {str(e)}")

# Handle the click event of the "Add Friend" button
def add_friend_button_click():
    try:
        # Call the add_friend function from the friend module
        friend.add_friend()
    except Exception as e:
        print(f"Error adding friend: {str(e)}")

# Handle the click event of the "Message" button
def message_button_click():
    try:
        # Call the display_messages function from the message module
        message.display_messages()
    except Exception as e:
        print(f"Error displaying messages: {str(e)}")

# Handle the click event of the "News" button
def news_button_click():
    try:
        # Call the display_news function from the news module
        news.display_news()
    except Exception as e:
        print(f"Error displaying news: {str(e)}")

# Handle the click event of the "Timeline" button
def timeline_button_click():
    try:
        # Call the display_timeline function from the timeline module
        timeline.display_timeline()
    except Exception as e:
        print(f"Error displaying timeline: {str(e)}")

# Handle the click event of the "Notification" button
def notification_button_click():
    try:
        # Call the display_notifications function from the notification module
        notification.display_notifications()
    except Exception as e:
        print(f"Error displaying notifications: {str(e)}")
