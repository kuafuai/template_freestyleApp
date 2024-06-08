# Import the WeChat SDK module
import wechat_sdk

# Define a function to get the unread messages
def get_unread_messages():
    try:
        # Connect to WeChat API and authenticate the user
        with wechat_sdk.connect() as connection:
            connection.authenticate()

            # Get the unread messages
            unread_messages = connection.get_unread_messages()

        return unread_messages
    except Exception as e:
        print(f"Error getting unread messages: {str(e)}")

# Define a function to mark a message as read
def mark_message_as_read(message):
    try:
        # Connect to WeChat API and authenticate the user
        with wechat_sdk.connect() as connection:
            connection.authenticate()

            # Mark the message as read
            connection.mark_message_as_read(message)
    except Exception as e:
        print(f"Error marking message as read: {str(e)}")

# Define a function to clear the message list
def clear_message_list():
    try:
        # Connect to WeChat API and authenticate the user
        with wechat_sdk.connect() as connection:
            connection.authenticate()

            # Clear the message list
            connection.clear_message_list()
    except Exception as e:
        print(f"Error clearing message list: {str(e)}")
