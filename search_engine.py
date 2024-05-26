# This file is responsible for implementing the search functionality.

def search_chat_records(chat_records, keyword):
    """
    Search for chat records based on a keyword.

    Args:
        chat_records (list): A list of chat records.
        keyword (str): The keyword to search for.

    Returns:
        list: A list of search results.
    """
    # Search for chat records that contain the keyword
    search_results = []
    for chat_record in chat_records:
        if keyword in chat_record['message']:
            search_results.append(chat_record)
    
    return search_results
