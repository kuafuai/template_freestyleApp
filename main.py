# Import necessary libraries
from flask import Flask, jsonify, request
from flask_cors import CORS

# Create Flask application
app = Flask(__name__)
CORS(app)

# Define route for index.html
@app.route('/')
def index():
    return app.send_static_file('index.html')

# Define route for getting data
@app.route('/data', methods=['GET'])
def get_data():
    try:
        # Get data from database or API
        data = {
            'name': 'John Doe',
            'age': 70,
            'oxygen': 98,
            'blood_pressure': '120/80',
            'fallen': False,
            'emergency_contact': {
                'name': 'Jane Smith',
                'phone': '123-456-7890'
            }
        }
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Define route for updating data
@app.route('/data', methods=['POST'])
def update_data():
    try:
        # Get updated data from request body
        updated_data = request.get_json()
        
        # Update data in database or API
        
        # Return success response
        return jsonify({'message': 'Data updated successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Run the application
if __name__ == '__main__':
    app.run()
