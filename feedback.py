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
        
        # Check if all required fields are present in the request data
        if 'user_id' not in data or 'training_record_id' not in data or 'feedback' not in data:
            return {'message': 'Missing required fields'}, 400
        
        # Validate the input data
        try:
            user_id = int(data['user_id'])
            training_record_id = int(data['training_record_id'])
        except ValueError:
            return {'message': 'Invalid user_id or training_record_id'}, 400
        
        # Check if the user and training record exist
        user = User.query.get(user_id)
        training_record = TrainingRecord.query.get(training_record_id)
        if not user or not training_record:
            return {'message': 'User or training record does not exist'}, 404
        
        # Create a new feedback object
        feedback = Feedback(
            user_id=user_id,
            training_record_id=training_record_id,
            feedback=data['feedback']
        )
        
        # Add feedback to the database
        db.session.add(feedback)
        db.session.commit()
        
        # Return success response
        return {'message': 'Feedback created successfully'}, 201
