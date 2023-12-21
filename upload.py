# This file contains the logic for handling data upload

# Import necessary modules
from flask import jsonify
from database import Data

def handle_upload(request, db):
    try:
        # Get data from the request
        data = request.get_json()

        # Check if data is missing or invalid
        if not data:
            return jsonify({'error': 'Invalid data'})

        # Create a new data object
        new_data = Data()

        # Set necessary fields of the data object based on the received data
        if 'field1' in data:
            new_data.field1 = data['field1']
        else:
            return jsonify({'error': 'Missing field1'})

        if 'field2' in data:
            new_data.field2 = data['field2']
        else:
            return jsonify({'error': 'Missing field2'})

        # Add data to the database
        db.add_data(new_data)

        # Return success response
        return jsonify({'message': 'Data uploaded successfully'})
    except Exception as e:
        return jsonify({'error': str(e)})
