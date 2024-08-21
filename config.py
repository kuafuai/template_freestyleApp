import os

DOCUMENT_ID = os.getenv('GOOGLE_DOCUMENT_ID')  # Store your Google Document ID in an environment variable for security
SCOPES = [
    'https://www.googleapis.com/auth/documents.readonly',  # Read-only access to the document
    # Add additional scopes here if write access is needed in the future, e.g.,
    # 'https://www.googleapis.com/auth/documents'
]

# Note: Modify SCOPES as needed based on application requirements and ensure proper permissions are granted.
