import requests
from bs4 import BeautifulSoup

def get_hot_news_titles():
    # Function to scrape the hot news titles from the homepage of Today's Headlines
    response = requests.get("https://www.toutiao.com/")
    soup = BeautifulSoup(response.content, "html.parser")
    hot_news_elements = soup.select("CSS_SELECTOR_FOR_HOT_NEWS_TITLES")
    hot_news_titles = [element.text for element in hot_news_elements]
    return hot_news_titles

# Main code
hot_news_titles = get_hot_news_titles()
print(hot_news_titles)
