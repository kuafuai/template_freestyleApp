from crawler import get_hot_news_titles

def print_hot_news_titles():
    hot_news_titles = get_hot_news_titles()
    for title in hot_news_titles:
        print(title)

print_hot_news_titles()