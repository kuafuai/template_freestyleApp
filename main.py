from frontend import start as start_frontend
from backend import start as start_backend

try:
    # Start the frontend service
    start_frontend()

    # Start the backend service
    start_backend()

except Exception as e:
    print(f"An error occurred during startup: {str(e)}")