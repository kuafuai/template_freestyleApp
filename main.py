# Import necessary libraries
from flask import Flask, render_template, request, jsonify
import requests
import os
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

# Create Flask application
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///images.db'
db = SQLAlchemy(app)

# Define Image model
class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    path = db.Column(db.String(100), unique=True)

    def __repr__(self):
        return f"Image(path='{self.path}')"

# Define route for submitting image
@app.route('/submit_image', methods=['POST'])
def submit_image():
    # Get the submitted image file
    image_file = request.files['image']

    # Call the API to process the image
    processed_image = process_image(image_file)

    # Save the processed image to local storage
    image_path = save_image(processed_image)

    # Save the image path to the database
    save_image_path(image_path)

    return jsonify({'message': 'Image submitted successfully'})

# Define route for displaying processed images
@app.route('/processed_images', methods=['GET'])
def display_processed_images():
    # Get the list of processed image paths from the database
    image_paths = get_image_paths()

    # Render the HTML template with the image paths
    return render_template('index.html', image_paths=image_paths)

# Define route for deleting an image
@app.route('/delete_image', methods=['POST'])
def delete_image():
    # Get the image path from the request
    image_path = request.form['image_path']

    # Delete the image from local storage
    delete_image_from_local_storage(image_path)

    # Delete the image path from the database
    delete_image_path(image_path)

    return jsonify({'message': 'Image deleted successfully'})

# Define route for getting image count
@app.route('/image_count', methods=['GET'])
def get_image_count():
    # Get the image count from the database
    image_count = get_image_count_from_database()

    return jsonify({'image_count': image_count})

# Function to process the image using an external API
def process_image(image_file):
    # Convert the image file to bytes
    image_bytes = image_file.read()

    # Call the external API to process the image
    response = requests.post('http://external-api.com/process_image', data=image_bytes)

    # Get the processed image from the response
    processed_image = response.content

    return processed_image

# Function to save the processed image to local storage
def save_image(processed_image):
    # Generate a unique filename for the image
    timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
    filename = f'image_{timestamp}.jpg'

    # Save the processed image to a file in the local storage
    file_path = os.path.join('path/to/save', filename)
    with open(file_path, 'wb') as file:
        file.write(processed_image)

    return file_path

# Function to save the image path to the database
def save_image_path(image_path):
    # Create a new Image object
    image = Image(path=image_path)

    # Add the image to the database
    db.session.add(image)
    db.session.commit()

# Function to get the list of processed image paths from the database
def get_image_paths():
    # Get the list of image paths from the database
    image_paths = [image.path for image in Image.query.all()]

    return image_paths

# Function to delete the image from local storage
def delete_image_from_local_storage(image_path):
    # Delete the image file from the local storage
    os.remove(image_path)

# Function to delete the image path from the database
def delete_image_path(image_path):
    # Find the image with the given path in the database
    image = Image.query.filter_by(path=image_path).first()

    # Delete the image from the database
    db.session.delete(image)
    db.session.commit()

# Function to get the image count from the database
def get_image_count_from_database():
    # Get the image count from the database
    image_count = Image.query.count()

    return image_count

# Run the Flask application
if __name__ == '__main__':
    # Create the database tables
    db.create_all()
    app.run()
