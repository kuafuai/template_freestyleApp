# This file contains the Python code for the backend API

from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://username:password@localhost/database'
db = SQLAlchemy(app)

class Restaurant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    phone = db.Column(db.String(20), nullable=False)

    def __init__(self, name, address, phone):
        self.name = name
        self.address = address
        self.phone = phone

@app.route('/restaurants', methods=['GET'])
def get_restaurants():
    restaurants = Restaurant.query.all()
    result = []
    for restaurant in restaurants:
        result.append({
            'id': restaurant.id,
            'name': restaurant.name,
            'address': restaurant.address,
            'phone': restaurant.phone
        })
    return jsonify(result)

if __name__ == '__main__':
    app.run()
