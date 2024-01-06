# Import necessary modules
from flask import Flask, render_template, jsonify
from flask_restful import Api, Resource, reqparse
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from flask_wtf.csrf import CSRFProtect
from database import db
from user import User
from test_equipment import TestEquipmentResource, TestEquipmentListResource
from test_program import TestProgramResource, TestProgramListResource
from data_analysis import DataAnalysisResource
from user_feedback import UserFeedbackResource
from data_import_export import DataImportExportResource

# Create Flask application
app = Flask(__name__)

# Configure Flask application
app.config['SECRET_KEY'] = 'secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize database
db.init_app(app)

# Create API
api = Api(app)

# Create login manager
login_manager = LoginManager()
login_manager.init_app(app)

# Create CSRF protection
csrf = CSRFProtect(app)

# Define user loader function for login manager
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Define routes and views
@app.route('/')
def index():
    return render_template('index.html')

# Add resources to API
api.add_resource(TestEquipmentListResource, '/test-equipment')
api.add_resource(TestEquipmentResource, '/test-equipment/<int:test_equipment_id>')
api.add_resource(TestProgramListResource, '/test-program')
api.add_resource(TestProgramResource, '/test-program/<int:test_program_id>')
api.add_resource(DataAnalysisResource, '/data-analysis')
api.add_resource(UserFeedbackResource, '/user-feedback')
api.add_resource(DataImportExportResource, '/data-import-export')

# Define authentication routes and views
@app.route('/login', methods=['POST'])
def login():
    parser = reqparse.RequestParser()
    parser.add_argument('username', type=str, required=True)
    parser.add_argument('password', type=str, required=True)
    args = parser.parse_args()

    username = args['username']
    password = args['password']

    # Check if username and password are valid
    user = User.query.filter_by(username=username).first()
    if user and user.check_password(password):
        login_user(user)
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'message': 'Invalid username or password'}), 401

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify({'message': 'Logout successful'})

# Run Flask application
if __name__ == '__main__':
    app.run(debug=True)
