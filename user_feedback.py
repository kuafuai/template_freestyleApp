# Import necessary modules
from flask_restful import Resource, reqparse
from database import db, UserFeedback

# Create request parser
parser = reqparse.RequestParser()
parser.add_argument('feedback', type=str, required=True, help='Feedback is required')

# Define UserFeedbackResource
class UserFeedbackResource(Resource):
    def post(self):
        args = parser.parse_args()
        feedback = args['feedback'].strip()
        
        if not feedback:
            return {'message': 'Feedback cannot be empty'}, 400
        
        try:
            feedback_entry = UserFeedback(feedback=feedback)
            db.session.add(feedback_entry)
            db.session.commit()
            return {'message': 'Feedback submitted successfully'}, 201
        except Exception as e:
            db.session.rollback()
            return {'message': 'An error occurred while submitting feedback'}, 500
        finally:
            db.session.close()
