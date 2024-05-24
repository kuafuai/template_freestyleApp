# Import necessary modules
from flask import Flask, render_template, request
import news

# Create Flask application
app = Flask(__name__)

# Route for news article list
@app.route('/news')
def news_list():
    # Get latest news articles
    latest_news = news.get_latest_news()

    # Render news list template with latest news articles
    return render_template('news_list.html', news=latest_news)

# Route for news article detail
@app.route('/news/<news_id>')
def news_detail(news_id):
    # Get news article content
    news_content = news.get_news_content(news_id)

    # Render news detail template with news article content
    return render_template('news_detail.html', news=news_content)

# Route for submitting comment
@app.route('/news/<news_id>/comment', methods=['POST'])
def submit_comment(news_id):
    # Get comment from request form
    comment = request.form.get('comment')

    # Save comment for news article
    news.save_comment(news_id, comment)

    # Redirect to news article detail page
    return redirect('/news/' + news_id)

# Run Flask application
if __name__ == '__main__':
    app.run()
