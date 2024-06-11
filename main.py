# This file is responsible for orchestrating the different components of the application.

# Import the necessary modules
import meeting_parser
import meeting_summary
import chatgpt
import wechat_bot

# Define the main function
def main():
    # Parse the meeting record
    meeting_data = meeting_parser.parse_meeting_record("meeting_record.txt")

    # Generate the meeting summary
    meeting_summary = meeting_summary.generate_meeting_summary(meeting_data)

    # Generate the detailed meeting summary using ChatGPT
    detailed_summary = chatgpt.generate_detailed_summary(meeting_summary)

    # Send the meeting summary to the WeChat group
    wechat_bot.send_summary_to_wechat_group(detailed_summary)

# Call the main function
if __name__ == "__main__":
    main()
