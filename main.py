# Import necessary libraries
from flask import Flask, request, jsonify
import os
import magic
from werkzeug.utils import secure_filename

# Create Flask application
app = Flask(__name__)

# Set maximum file size limit
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB

# Route for file upload
@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        file = request.files['file']
        if file:
            # Validate file type
            file_type = magic.from_buffer(file.read(), mime=True)
            if file_type not in ['image/jpeg', 'image/png', 'application/pdf']:
                return jsonify({'error': 'Invalid file type. Only JPEG, PNG, and PDF files are allowed.'}), 400
            
            # Validate file size
            file_size = len(file.read())
            if file_size > app.config['MAX_CONTENT_LENGTH']:
                return jsonify({'error': 'File size exceeds the limit.'}), 400
            
            # Save file with secure filename
            filename = secure_filename(file.filename)
            file.save(os.path.join('uploads', filename))
            
            return jsonify({'message': 'File uploaded successfully'})
        else:
            return jsonify({'error': 'No file provided.'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Route for renaming file
@app.route('/rename', methods=['POST'])
def rename_file():
    try:
        new_filename = request.form['new_filename']
        old_filename = request.form['old_filename']
        if not new_filename or not old_filename:
            return jsonify({'error': 'Both new_filename and old_filename are required.'}), 400
        if not os.path.exists(os.path.join('uploads', old_filename)):
            return jsonify({'error': 'File not found.'}), 404
        
        # Rename file with secure filename
        new_filename = secure_filename(new_filename)
        os.rename(os.path.join('uploads', old_filename), os.path.join('uploads', new_filename))
        
        return jsonify({'message': 'File renamed successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Route for retrieving file name
@app.route('/get_filename', methods=['GET'])
def get_filename():
    try:
        filename = request.args.get('filename')
        if not filename:
            return jsonify({'error': 'filename parameter is required.'}), 400
        if not os.path.exists(os.path.join('uploads', filename)):
            return jsonify({'error': 'File not found.'}), 404
        return jsonify({'filename': filename})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Route for retrieving file size
@app.route('/get_filesize', methods=['GET'])
def get_filesize():
    try:
        filename = request.args.get('filename')
        if not filename:
            return jsonify({'error': 'filename parameter is required.'}), 400
        file_path = os.path.join('uploads', filename)
        if not os.path.exists(file_path):
            return jsonify({'error': 'File not found.'}), 404
        file_size = os.path.getsize(file_path)
        return jsonify({'filesize': file_size})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Run the application
if __name__ == '__main__':
    app.run()
