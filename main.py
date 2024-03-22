import requests
from bs4 import BeautifulSoup
import logging

# Define the URL of the webpage
url = "https://example.com"

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Define the user registration function
def register_user(username, password):
    # Create a session
    session = requests.Session()
    
    # Send a GET request to the registration page
    response = session.get(url + "/register")
    
    # Check if the request was successful
    if response.status_code != 200:
        logging.error("Failed to access registration page")
        return
    
    # Parse the HTML response
    soup = BeautifulSoup(response.text, "html.parser")
    
    # Find the registration form
    form = soup.find("form", {"id": "registration-form"})
    
    # Fill in the registration form with the provided username and password
    form.find("input", {"name": "username"}).value = username
    form.find("input", {"name": "password"}).value = password
    
    # Submit the registration form
    response = session.post(url + "/register", data=form)
    
    # Check if the registration was successful
    if response.status_code == 200:
        logging.info("Registration successful")
    else:
        logging.error("Registration failed")

# Define the user login function
def login_user(username, password):
    # Create a session
    session = requests.Session()
    
    # Send a GET request to the login page
    response = session.get(url + "/login")
    
    # Check if the request was successful
    if response.status_code != 200:
        logging.error("Failed to access login page")
        return
    
    # Parse the HTML response
    soup = BeautifulSoup(response.text, "html.parser")
    
    # Find the login form
    form = soup.find("form", {"id": "login-form"})
    
    # Fill in the login form with the provided username and password
    form.find("input", {"name": "username"}).value = username
    form.find("input", {"name": "password"}).value = password
    
    # Submit the login form
    response = session.post(url + "/login", data=form)
    
    # Check if the login was successful
    if response.status_code == 200:
        logging.info("Login successful")
    else:
        logging.error("Login failed")

# Define the function to get specific content from the webpage
def get_specific_content():
    # Create a session
    session = requests.Session()
    
    # Send a GET request to the webpage
    response = session.get(url)
    
    # Check if the request was successful
    if response.status_code != 200:
        logging.error("Failed to access webpage")
        return
    
    # Parse the HTML response
    soup = BeautifulSoup(response.text, "html.parser")
    
    # Find the specific content on the webpage
    specific_content = soup.find("div", {"class": "specific-content"})
    
    # Print the specific content
    if specific_content:
        logging.info(specific_content.text)
    else:
        logging.warning("Specific content not found")

# Main function
if __name__ == "__main__":
    # Register a user
    register_user("username", "password")
    
    # Login as the registered user
    login_user("username", "password")
    
    # Get the specific content from the webpage
    get_specific_content()