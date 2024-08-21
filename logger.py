import datetime
import json

def log_changes(previous_version: list, updated_version: list):
    """Log the changes made to the document content."""
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    try:
        with open('changes_log.txt', 'a') as log_file:  # Open log file in append mode
            log_file.write(f"{timestamp} - Document changed:\n")
            log_file.write(f"Before: {json.dumps(previous_version)}\n")
            log_file.write(f"After: {json.dumps(updated_version)}\n")
            log_file.write("\n")
    except IOError as e:
        print(f"An error occurred while writing to the log file: {e}")
