# Import necessary modules
from flask_sqlalchemy import SQLAlchemy

# Create database object
db = SQLAlchemy()

# Define TestEquipment model
class TestEquipment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    model = db.Column(db.String(100), nullable=False)
    manufacturer = db.Column(db.String(100), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'model': self.model,
            'manufacturer': self.manufacturer
        }

# Define TestProgram model
class TestProgram(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(100), nullable=False)
    version = db.Column(db.String(100), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'version': self.version
        }

# Define methods for adding, deleting, updating, and querying data
def add_data(data):
    db.session.add(data)
    db.session.commit()

def delete_data(data):
    db.session.delete(data)
    db.session.commit()

def update_data():
    db.session.commit()

def get_data(model, id):
    return model.query.get(id)

def get_all_data(model):
    return model.query.all()
