import time
import os
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from oauth2client.service_account import ServiceAccountCredentials
from config import DOCUMENT_ID, SCOPES
from logger import log_changes
from utils import compare_documents

def initialize_google_docs_api() -> object:
    """Initialize the Google Docs API client."""
    try:
        credentials = ServiceAccountCredentials.from_json_keyfile_name('credentials.json', SCOPES)
        service = build('docs', 'v1', credentials=credentials)
        return service
    except Exception as e:
        print(f"Error initializing Google Docs API: {e}")
        raise

def get_document_content(service) -> list:
    """Fetch the content of the document with exponential backoff."""
    attempts = 0
    while attempts < 5:
        try:
            document = service.documents().get(documentId=DOCUMENT_ID).execute()
            return document.get('body').get('content')
        except HttpError as e:
            attempts += 1
            if e.resp.status in [403, 404]:
                print(f"Error fetching document content: {e}")
                break
            time.sleep(2 ** attempts)  # Exponential backoff

    return []

def check_for_updates(service, last_content: list) -> list:
    """Check for updates in the document content."""
    current_content = get_document_content(service)
    if current_content != last_content:
        log_changes(last_content, current_content)
        return current_content
    return last_content

def main():
    """Main execution loop."""
    service = initialize_google_docs_api()
    last_content = get_document_content(service)

    while True:
        last_content = check_for_updates(service, last_content)
        time.sleep(60)  # Wait for one minute before the next check

if __name__ == '__main__':
    main()
