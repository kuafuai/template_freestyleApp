# Import required modules
from wechatpy import WeChatBot

# Define function to send summary to group
def send_summary_to_group(summary, group_id):
    try:
        # Create WeChat bot instance
        bot = WeChatBot()
        
        # Send summary to the specified group
        bot.send_message(summary, group_id)
        
        return "Summary sent successfully"
    except Exception as e:
        return f"Error sending summary: {str(e)}"

