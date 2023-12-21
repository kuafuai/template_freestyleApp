# This file contains the logic for handling data upload

# Import necessary modules
from flask import jsonify
from database import Data

def handle_upload(request, db):
    try:
        # Get data from the request
        data = request.get_json()

        # Check if data is present in the request
        if not data:
            return jsonify({'error': 'No data provided'})

        # Extract the required fields from the data
        field1 = data.get('field1')
        field2 = data.get('field2')

        # Check if the required fields are present in the data
        if not field1 or not field2:
            return jsonify({'error': 'Missing required fields'})

        # Create a new data object
        new_data = Data(field1=field1, field2=field2)

        # Add data to the database
        db.add_data(new_data)

        # Return success response
        return jsonify({'message': 'Data uploaded successfully'})
    except Exception as e:
        return jsonify({'error': str(e)})
