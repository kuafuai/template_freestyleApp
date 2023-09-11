import requests
from bs4 import BeautifulSoup

def get_hot_news_titles():
    # Sends a GET request to the homepage of Today's Headlines
    response = requests.get("https://www.toutiao.com/")
    
    # Parses the HTML content of the response
    soup = BeautifulSoup(response.content, "html.parser")
    
    # Locates the elements that contain the hot news titles
    hot_news_elements = soup.select(".hotnews .title")
    
    # Extracts the content of the hot news titles elements
    hot_news_titles = [element.text for element in hot_news_elements]
    
    return hot_news_titles

# Main part of the code
if __name__ == "__main__":
    hot_news_titles = get_hot_news_titles()
    for title in hot_news_titles:
        print(title)