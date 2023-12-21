# This file contains the main logic for the web application

# Import necessary modules
from flask import Flask, request, jsonify
from database import Database
from upload import handle_upload
from manage import handle_manage
from search import handle_search

# Create Flask application
app = Flask(__name__)

# Create database instance
db = Database()

# Route for uploading data
@app.route('/upload', methods=['POST'])
def upload_data():
    try:
        return handle_upload(request, db)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Route for managing data
@app.route('/manage', methods=['GET', 'POST', 'PUT', 'DELETE'])
def manage_data():
    try:
        return handle_manage(request, db)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Route for searching data
@app.route('/search', methods=['GET'])
def search_data():
    try:
        return handle_search(request, db)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Run the application
if __name__ == '__main__':
    app.run()
