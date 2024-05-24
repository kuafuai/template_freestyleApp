# Import necessary modules
import database

# Get latest news articles
def get_latest_news():
    # Get latest news articles from database
    latest_news = database.get_latest_news()

    return latest_news

# Get news article content
def get_news_content(news_id):
    # Get news article content from database
    news_content = database.get_news_content(news_id)

    return news_content

# Save comment for news article
def save_comment(news_id, comment):
    # Save comment for news article in database
    database.save_comment(news_id, comment)
