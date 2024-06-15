# Import necessary libraries
from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy

# Create Flask application object
app = Flask(__name__)

# Create API object
api = Api(app)

# Configure database connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

# Import and register API resources
from user import UserResource
api.add_resource(UserResource, '/user')

from fitness_plan import FitnessPlanResource
api.add_resource(FitnessPlanResource, '/fitness_plan')

from training_record import TrainingRecordResource
api.add_resource(TrainingRecordResource, '/training_record')

from feedback import FeedbackResource
api.add_resource(FeedbackResource, '/feedback')

from tutorial import TutorialResource
api.add_resource(TutorialResource, '/tutorial')

from community import CommunityResource
api.add_resource(CommunityResource, '/community')

# Run the application
if __name__ == '__main__':
    app.run()
