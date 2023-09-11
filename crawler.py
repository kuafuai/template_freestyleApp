import requests
from bs4 import BeautifulSoup

def get_toutiao_news():
    # Sends a GET request to the homepage of Today's Toutiao
    response = requests.get("https://www.toutiao.com/")
    
    # Checks if the request was successful
    if response.status_code == 200:
        # Parses the HTML content of the response
        soup = BeautifulSoup(response.content, "html.parser")
        
        # Finds the HTML elements that contain the hot news titles
        news_elements = soup.find_all("div", class_="title-box")
        
        # Extracts the text content of the hot news titles and stores them in a list
        news_titles = [element.text for element in news_elements]
        
        # Returns the list of hot news titles
        return news_titles

# Calls the get_toutiao_news function and stores the returned list of hot news titles in a variable
hot_news_titles = get_toutiao_news()

# Prints the list of hot news titles
for title in hot_news_titles:
    print(title)