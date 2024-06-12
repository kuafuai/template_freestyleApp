# main.py

# Import required modules
import meeting_parser
import meeting_summary
import wechat_interface
import logging

# Read meeting record file
def read_file(file_path):
    try:
        with open(file_path, 'r') as file:
            return file.read()
    except FileNotFoundError:
        logging.error("File not found: %s", file_path)
        return None
    except IOError:
        logging.error("Error reading file: %s", file_path)
        return None

meeting_record = read_file("meeting_record.txt")

if meeting_record is not None:
    # Parse meeting record
    parsed_record = meeting_parser.parse(meeting_record)

    # Generate meeting summary
    summary = meeting_summary.generate_summary(parsed_record)

    # Connect to WeChat interface
    wechat = wechat_interface.connect()

    if wechat is not None:
        # Send meeting summary to specified WeChat group
        wechat.send_message(summary, "group_id")
    else:
        logging.error("Failed to connect to WeChat interface")
else:
    logging.error("Failed to read meeting record file")

