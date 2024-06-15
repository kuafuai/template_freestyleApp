from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    height = db.Column(db.Float, nullable=False)
    weight = db.Column(db.Float, nullable=False)
    fitness_goal = db.Column(db.String(50), nullable=False)

class UserResource(Resource):
    def post(self):
        # Parse request data
        data = request.get_json()
        
        # Check if all required fields are present in the request data
        required_fields = ['name', 'email', 'password', 'age', 'gender', 'height', 'weight', 'fitness_goal']
        for field in required_fields:
            if field not in data:
                return {'message': f'Missing required field: {field}'}, 400
        
        # Validate input data
        if not isinstance(data['age'], int) or data['age'] <= 0:
            return {'message': 'Invalid age'}, 400
        
        if data['gender'] not in ['male', 'female']:
            return {'message': 'Invalid gender'}, 400
        
        if not isinstance(data['height'], float) or data['height'] <= 0:
            return {'message': 'Invalid height'}, 400
        
        if not isinstance(data['weight'], float) or data['weight'] <= 0:
            return {'message': 'Invalid weight'}, 400
        
        # Create a new user object
        user = User(
            name=data['name'],
            email=data['email'],
            password=data['password'],
            age=data['age'],
            gender=data['gender'],
            height=data['height'],
            weight=data['weight'],
            fitness_goal=data['fitness_goal']
        )
        
        # Add user to the database
        try:
            db.session.add(user)
            db.session.commit()
        except Exception as e:
            return {'message': 'Failed to create user'}, 500
        
        # Return success response
        return {'message': 'User created successfully'}, 201
