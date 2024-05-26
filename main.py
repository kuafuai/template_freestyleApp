# This file is responsible for coordinating the different components of the application.

# Import required modules
import chat_parser
import chat_exporter
import user_interface
import search_engine

# Parse the WeChat chat record file
chat_records = chat_parser.parse_chat_records("wechat_chat_records.txt")

# Export the chat records to categorized directories
chat_exporter.export_chat_records(chat_records)

# Display the user interface
user_interface.display_user_interface()

# Handle user input
user_input = user_interface.get_user_input()

# Search for chat records based on user input
search_results = search_engine.search_chat_records(chat_records, user_input)

# Display search results
user_interface.display_search_results(search_results)
