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

# Update data in the database
def update_data(data_id, new_data):
    data = get_data(Data, data_id)
    if data:
        data.name = new_data['name']
        db.session.commit()

# Get data from the database
def get_data(model, id):
    return model.query.get(id)

# Get all data from the database
def get_all_data(model):
    return model.query.all()

# Search data in the database based on keyword
def search_data(keyword):
    return [{'id': data.id, 'name': data.name} for data in db.session.query(Data).filter(Data.name.like(f'%{keyword}%')).all()]

# Initialize database
Base.metadata.create_all(engine)

# Define database class
class Database:
    def __init__(self):
        self.session = Session()

    def add_data(self, data):
        add_data(data)

    def delete_data(self, data_id):
        delete_data(get_data(Data, data_id))

    def update_data(self, data_id, new_data):
        update_data(data_id, new_data)

    def get_data(self, data_id):
        return get_data(Data, data_id)

    def search_data(self, keyword):
        return search_data(keyword)