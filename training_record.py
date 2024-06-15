from app import db

class TrainingRecord(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('training_records', lazy=True))
    date = db.Column(db.Date, nullable=False)
    training_program = db.Column(db.String(100), nullable=False)
    training_time = db.Column(db.Time, nullable=False)
    training_completion = db.Column(db.Boolean, nullable=False)
    weight = db.Column(db.Float, nullable=False)
    circumference = db.Column(db.Float, nullable=False)
    heart_rate = db.Column(db.Integer, nullable=False)

class TrainingRecordResource(Resource):
    def post(self):
        # Parse request data
        data = request.get_json()
        
        # Create a new training record object
        training_record = TrainingRecord(
            user_id=data['user_id'],
            date=data['date'],
            training_program=data['training_program'],
            training_time=data['training_time'],
            training_completion=data['training_completion'],
            weight=data['weight'],
            circumference=data['circumference'],
            heart_rate=data['heart_rate']
        )
        
        # Add training record to the database
        db.session.add(training_record)
        db.session.commit()
        
        # Return success response
        return {'message': 'Training record created successfully'}, 201
