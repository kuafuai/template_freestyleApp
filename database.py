# Import necessary modules
from flask_sqlalchemy import SQLAlchemy
from typing import List, Union

# Create database object
db = SQLAlchemy()

# Define TestEquipment model
class TestEquipment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    model = db.Column(db.String(100), nullable=False)
    manufacturer = db.Column(db.String(100), nullable=False)

    def serialize(self) -> dict:
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

    def serialize(self) -> dict:
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'version': self.version
        }

# Define methods for adding, deleting, updating, and querying data
def add_data(data: Union[TestEquipment, TestProgram]) -> None:
    try:
        db.session.add(data)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        raise e

def delete_data(data: Union[TestEquipment, TestProgram]) -> None:
    try:
        db.session.delete(data)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        raise e

def update_data() -> None:
    try:
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        raise e

def get_data(model: Union[TestEquipment, TestProgram], id: int) -> Union[TestEquipment, TestProgram]:
    try:
        return model.query.get(id)
    except Exception as e:
        raise e

def get_all_data(model: Union[TestEquipment, TestProgram]) -> List[Union[TestEquipment, TestProgram]]:
    try:
        return model.query.all()
    except Exception as e:
        raise e
