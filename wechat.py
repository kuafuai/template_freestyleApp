import wechat_open_platform_api
import logging

def connect_and_clear_messages():
    try:
        # Connect with the WeChat account
        wechat_open_platform_api.connect()

        # Clear unread messages
        wechat_open_platform_api.clear_messages()

        # Log success message
        logging.info("Messages cleared successfully.")
    except Exception as e:
        # Log error message
        logging.error(f"Error occurred: {str(e)}")

connect_and_clear_messages()