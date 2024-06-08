import logging
import wechat_api

def mark_all_messages_as_read_and_clear():
    try:
        # Get the WeChat unread message list
        unread_messages = wechat_api.get_unread_messages()

        # Mark all unread messages as read
        for message in unread_messages:
            wechat_api.mark_message_as_read(message)

        # Clear the message list
        wechat_api.clear_message_list()

        logging.info("All messages marked as read and message list cleared successfully.")
    except Exception as e:
        logging.error("An error occurred while marking messages as read and clearing the message list: %s", str(e))

mark_all_messages_as_read_and_clear()