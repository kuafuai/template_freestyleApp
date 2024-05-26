# This file is responsible for exporting the chat records to categorized directories.

import os
import shutil

def export_chat_records(chat_records):
    """
    Export the chat records to categorized directories.

    Args:
        chat_records (list): A list of chat records.
    """
    # Create a directory for each month
    for chat_record in chat_records:
        month_directory = create_month_directory(chat_record['timestamp'])
        # Export the chat record to the corresponding month directory
        export_chat_record(chat_record, month_directory)

def create_month_directory(timestamp):
    """
    Create a directory for the given month.

    Args:
        timestamp (str): The timestamp of a chat record.

    Returns:
        str: The path to the created month directory.
    """
    # Extract the month from the timestamp
    month = extract_month(timestamp)
    # Create the month directory if it does not exist
    month_directory = f"./{month}"
    if not os.path.exists(month_directory):
        os.makedirs(month_directory)
    
    return month_directory

def extract_month(timestamp):
    """
    Extract the month from a timestamp.

    Args:
        timestamp (str): The timestamp of a chat record.

    Returns:
        str: The month extracted from the timestamp.
    """
    # Extract the month from the timestamp
    month = timestamp.split('-')[1]
    
    return month

def export_chat_record(chat_record, month_directory):
    """
    Export a chat record to the corresponding month directory.

    Args:
        chat_record (dict): A chat record.
        month_directory (str): The path to the month directory.
    """
    # Create a directory for the chat record
    chat_record_directory = create_chat_record_directory(chat_record, month_directory)
    # Export the chat record's message to the chat record directory
    export_message(chat_record['message'], chat_record_directory)

def create_chat_record_directory(chat_record, month_directory):
    """
    Create a directory for the given chat record.

    Args:
        chat_record (dict): A chat record.
        month_directory (str): The path to the month directory.

    Returns:
        str: The path to the created chat record directory.
    """
    # Create a directory name based on the chat record's timestamp and sender
    directory_name = f"{chat_record['timestamp']}_{chat_record['sender']}"
    # Create the chat record directory inside the month directory
    chat_record_directory = os.path.join(month_directory, directory_name)
    if not os.path.exists(chat_record_directory):
        os.makedirs(chat_record_directory)
    
    return chat_record_directory

def export_message(message, chat_record_directory):
    """
    Export a message to the chat record directory.

    Args:
        message (str): The message to be exported.
        chat_record_directory (str): The path to the chat record directory.
    """
    # Export the message to a file in the chat record directory
    with open(os.path.join(chat_record_directory, "message.txt"), 'w') as file:
        file.write(message)
