from app import db

class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('feedbacks', lazy=True))
    training_record_id = db.Column(db.Integer, db.ForeignKey('training_record.id'), nullable=False)
    training_record = db.relationship('TrainingRecord', backref=db.backref('feedbacks', lazy=True))
    feedback = db.Column(db.String(200), nullable=False)

class FeedbackResource(Resource):
    def post(self):
        # Parse request data
        data = request.get_json()
        
        # Create a new feedback object
        feedback = Feedback(
            user_id=data['user_id'],
            training_record_id=data['training_record_id'],
            feedback=data['feedback']
        )
        
        # Add feedback to the database
        db.session.add(feedback)
        db.session.commit()
        
        # Return success response
        return {'message': 'Feedback created successfully'}, 201
