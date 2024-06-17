# This file is responsible for defining the database model for storing income and expense records.

# Import necessary modules
from flask_sqlalchemy import SQLAlchemy

# Create SQLAlchemy object
db = SQLAlchemy()

# Define database model
class Record(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Float, nullable=False)
    category = db.Column(db.String(50), nullable=False)
    date = db.Column(db.Date, nullable=False)

    def __init__(self, amount, category, date):
        self.amount = amount
        self.category = category
        self.date = date
