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
        
        # Validate input data
        if not all(key in data for key in ['user_id', 'date', 'training_program', 'training_time', 'training_completion', 'weight', 'circumference', 'heart_rate']):
            return {'message': 'Missing required fields'}, 400
        
        try:
            # Convert data types
            user_id = int(data['user_id'])
            date = datetime.strptime(data['date'], '%Y-%m-%d').date()
            training_time = datetime.strptime(data['training_time'], '%H:%M:%S').time()
            training_completion = bool(data['training_completion'])
            weight = float(data['weight'])
            circumference = float(data['circumference'])
            heart_rate = int(data['heart_rate'])
        except (ValueError, TypeError):
            return {'message': 'Invalid data types'}, 400
        
        # Create a new training record object
        training_record = TrainingRecord(
            user_id=user_id,
            date=date,
            training_program=data['training_program'],
            training_time=training_time,
            training_completion=training_completion,
            weight=weight,
            circumference=circumference,
            heart_rate=heart_rate
        )
        
        # Add training record to the database
        db.session.add(training_record)
        db.session.commit()
        
        # Return success response
        return {'message': 'Training record created successfully'}, 201
