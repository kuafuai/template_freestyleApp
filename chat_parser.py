# This file is responsible for parsing the WeChat chat record file.

def parse_chat_records(file_path):
    """
    Parse the WeChat chat record file and extract the chat records.

    Args:
        file_path (str): The path to the WeChat chat record file.

    Returns:
        list: A list of chat records.
    """
    # Read the chat record file
    chat_records = []
    with open(file_path, 'r') as file:
        # Parse each line of the file
        for line in file:
            # Extract the chat record information
            chat_record = extract_chat_record(line)
            chat_records.append(chat_record)
    
    return chat_records

def extract_chat_record(line):
    """
    Extract the chat record information from a line of the chat record file.

    Args:
        line (str): A line from the chat record file.

    Returns:
        dict: A dictionary containing the chat record information.
    """
    # Extract the relevant information from the line
    # and create a dictionary with the extracted information
    chat_record = {
        'timestamp': extract_timestamp(line),
        'sender': extract_sender(line),
        'message': extract_message(line)
    }
    
    return chat_record

def extract_timestamp(line):
    """
    Extract the timestamp from a line of the chat record file.

    Args:
        line (str): A line from the chat record file.

    Returns:
        str: The timestamp of the chat record.
    """
    # Extract the timestamp from the line
    timestamp = line.split(',')[0]
    
    return timestamp

def extract_sender(line):
    """
    Extract the sender from a line of the chat record file.

    Args:
        line (str): A line from the chat record file.

    Returns:
        str: The sender of the chat record.
    """
    # Extract the sender from the line
    sender = line.split(',')[1]
    
    return sender

def extract_message(line):
    """
    Extract the message from a line of the chat record file.

    Args:
        line (str): A line from the chat record file.

    Returns:
        str: The message of the chat record.
    """
    # Extract the message from the line
    message = line.split(',')[2]
    
    return message
