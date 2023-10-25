from flask import Flask, request
import requests
from fpdf import FPDF

app = Flask(__name__)

@app.route('/organize_meeting_records', methods=['POST'])
def organize_meeting_records():
    meeting_records = request.get_json()

    meeting_summary = format_meeting_summary(meeting_records)

    send_to_wechat_robot(meeting_summary)

    return {'status': 'success'}

def format_meeting_summary(meeting_records):
    # Format the meeting records into a clear and readable meeting summary
    # Include meeting topic, participants, discussion content, decision result, etc.
    # Return the formatted meeting summary
    meeting_summary = ""
    # Format the meeting records
    for record in meeting_records:
        meeting_summary += f"Topic: {record['topic']}\n"
        meeting_summary += f"Participants: {', '.join(record['participants'])}\n"
        meeting_summary += f"Discussion: {record['discussion']}\n"
        meeting_summary += f"Decision: {record['decision']}\n\n"
    return meeting_summary

def send_to_wechat_robot(meeting_summary):
    # Construct the request data to be sent to the WeChat Enterprise Robot
    # Include group ID and meeting summary content
    # Send the request to the WeChat Enterprise Robot to send the meeting summary to the specified group
    wechat_robot_url = "https://api.wechatrobot.com/send"
    group_id = "123456"
    data = {
        "group_id": group_id,
        "content": meeting_summary
    }
    response = requests.post(wechat_robot_url, json=data)
    if response.status_code == 200:
        print("Meeting summary sent to WeChat Enterprise Robot successfully.")
    else:
        print("Failed to send meeting summary to WeChat Enterprise Robot.")

@app.route('/export_meeting_summary', methods=['POST'])
def export_meeting_summary():
    meeting_summary = request.get_json()

    pdf_file = convert_to_pdf(meeting_summary)

    return pdf_file

def convert_to_pdf(meeting_summary):
    # Convert the meeting summary to PDF format
    # Return the PDF file
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    pdf.multi_cell(0, 10, meeting_summary)
    pdf_file = "meeting_summary.pdf"
    pdf.output(pdf_file)
    return pdf_file

if __name__ == "__main__":
    app.run()