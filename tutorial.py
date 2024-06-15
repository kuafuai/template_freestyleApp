from app import db

class Tutorial(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(200), nullable=False)
    video_url = db.Column(db.String(200), nullable=False)
    image_url = db.Column(db.String(200), nullable=False)

class TutorialResource(Resource):
    def get(self):
        # Get all tutorials from the database
        tutorials = Tutorial.query.all()
        
        # Serialize tutorials data using list comprehension
        result = [{
            'id': tutorial.id,
            'title': tutorial.title,
            'description': tutorial.description,
            'video_url': tutorial.video_url,
            'image_url': tutorial.image_url
        } for tutorial in tutorials]
        
        # Return tutorials data or 404 error if no tutorials found
        if not result:
            return {'message': 'No tutorials found'}, 404
        return {'tutorials': result}, 200
