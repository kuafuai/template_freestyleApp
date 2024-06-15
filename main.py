# This file is responsible for starting the backend server and handling frontend requests.

# Import necessary modules
import database
import api
from flask import Flask, request, jsonify

# Create Flask app
app = Flask(__name__)

# Create database connection
db = database.Database()

# Create API instance
api = api.API(db)

# Define routes
@app.route('/outbound', methods=['POST'])
def handle_outbound_request():
    try:
        # Get request data
        data = request.get_json()

        # Call API method to handle outbound request
        result = api.handle_outbound_request(data)

        # Return response
        return jsonify(result)
    except Exception as e:
        # Handle any errors and return error response
        return jsonify({'error': str(e)}), 500

@app.route('/inbound', methods=['POST'])
def handle_inbound_request():
    try:
        # Get request data
        data = request.get_json()

        # Call API method to handle inbound request
        result = api.handle_inbound_request(data)

        # Return response
        return jsonify(result)
    except Exception as e:
        # Handle any errors and return error response
        return jsonify({'error': str(e)}), 500

@app.route('/inventory', methods=['GET'])
def get_inventory():
    try:
        # Call API method to get inventory
        inventory = api.get_inventory()

        # Return response
        return jsonify(inventory)
    except Exception as e:
        # Handle any errors and return error response
        return jsonify({'error': str(e)}), 500

# Start the server
if __name__ == '__main__':
    app.run()
