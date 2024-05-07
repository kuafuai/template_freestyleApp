# Import necessary libraries
from flask import Flask, render_template, request, redirect

# Create Flask application
app = Flask(__name__)

# Define route for login page
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Get username and password from form data
        username = request.form.get('username')
        password = request.form.get('password')

        # Validate username and password
        if validate_credentials(username, password):
            # Redirect to specific operation page
            return redirect('/operation')
        else:
            # Return login page with error message
            return render_template('login.html', error_message='Invalid username or password')
    else:
        # Render login page
        return render_template('login.html', error_message='')

# Function to validate username and password
def validate_credentials(username, password):
    # Add your validation logic here
    # Return True if username and password are valid, otherwise return False
    if username == 'admin' and password == 'password':
        return True
    else:
        return False

# Define route for operation page
@app.route('/operation')
def operation():
    # Add your code for specific operation page here
    return 'This is the operation page'

# Run the application
if __name__ == '__main__':
    app.run()
