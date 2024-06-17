from flask import request
from flask_restful import Resource
from app import db

class Community(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('communities', lazy=True))
    content = db.Column(db.String(200), nullable=False)
    likes = db.Column(db.Integer, nullable=False)
    comments = db.Column(db.Integer, nullable=False)
    messages = db.Column(db.Integer, nullable=False)

class CommunityResource(Resource):
    def post(self):
        try:
            # Parse request data
            data = request.get_json()
            
            # Validate input data
            if 'user_id' not in data or 'content' not in data or 'likes' not in data or 'comments' not in data or 'messages' not in data:
                return {'message': 'Missing required fields'}, 400
            
            # Create a new community object
            community = Community(
                user_id=data['user_id'],
                content=data['content'],
                likes=data['likes'],
                comments=data['comments'],
                messages=data['messages']
            )
            
            # Add community to the database
            db.session.add(community)
            db.session.commit()
            
            # Return success response
            return {'message': 'Community created successfully'}, 201
        except Exception as e:
            return {'message': str(e)}, 500
