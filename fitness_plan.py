from app import db

class FitnessPlan(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('fitness_plans', lazy=True))
    date = db.Column(db.Date, nullable=False)
    training_program = db.Column(db.String(100), nullable=False)
    training_time = db.Column(db.Time, nullable=False)
    training_frequency = db.Column(db.Integer, nullable=False)

class FitnessPlanResource(Resource):
    def post(self):
        try:
            # Parse request data
            data = request.get_json()
            
            # Validate input data
            if 'user_id' not in data or 'date' not in data or 'training_program' not in data or 'training_time' not in data or 'training_frequency' not in data:
                return {'message': 'Invalid input data'}, 400
            
            # Create a new fitness plan object
            fitness_plan = FitnessPlan(
                user_id=data['user_id'],
                date=data['date'],
                training_program=data['training_program'],
                training_time=data['training_time'],
                training_frequency=data['training_frequency']
            )
            
            # Add fitness plan to the database
            db.session.add(fitness_plan)
            db.session.commit()
            
            # Return success response
            return {'message': 'Fitness plan created successfully'}, 201
        except Exception as e:
            return {'message': str(e)}, 500
