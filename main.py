from flask import Flask, jsonify, request
from user import User
from friend import Friend
from message import Message
from news import News
from timeline import Timeline
from notification import Notification

app = Flask(__name__)

# Create instances of necessary classes
user = User()
friend = Friend()
message = Message()
news = News()
timeline = Timeline()
notification = Notification()

# Route for creating user profile
@app.route('/create_profile', methods=['POST'])
def create_profile():
    # Get user data from request
    user_data = request.json
    
    # Create user profile
    user.create_profile(user_data)
    
    # Return success message
    return jsonify({'message': 'User profile created successfully'})

# Route for adding a friend
@app.route('/add_friend', methods=['POST'])
def add_friend():
    # Get friend data from request
    friend_data = request.json
    
    # Add friend
    friend.add_friend(friend_data)
    
    # Return success message
    return jsonify({'message': 'Friend added successfully'})

# Route for sending a message
@app.route('/send_message', methods=['POST'])
def send_message():
    # Get message data from request
    message_data = request.json
    
    # Send message
    message.send_message(message_data)
    
    # Return success message
    return jsonify({'message': 'Message sent successfully'})

# Route for receiving messages
@app.route('/receive_message', methods=['GET'])
def receive_message():
    # Get user ID from request
    user_id = request.args.get('user_id')
    
    # Receive messages
    messages = message.receive_message(user_id)
    
    # Return messages
    return jsonify({'messages': messages})

# Route for browsing news
@app.route('/browse_news', methods=['GET'])
def browse_news():
    # Get user ID from request
    user_id = request.args.get('user_id')
    
    # Browse news
    news_list = news.browse_news(user_id)
    
    # Return news list
    return jsonify({'news': news_list})

# Route for viewing timeline
@app.route('/view_timeline', methods=['GET'])
def view_timeline():
    # Get user ID from request
    user_id = request.args.get('user_id')
    
    # View timeline
    timeline_data = timeline.view_timeline(user_id)
    
    # Return timeline data
    return jsonify({'timeline': timeline_data})

# Route for receiving notifications
@app.route('/receive_notification', methods=['GET'])
def receive_notification():
    # Get user ID from request
    user_id = request.args.get('user_id')
    
    # Receive notifications
    notifications = notification.receive_notification(user_id)
    
    # Return notifications
    return jsonify({'notifications': notifications})

if __name__ == '__main__':
    app.run()
