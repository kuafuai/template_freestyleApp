# Import necessary libraries
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api

# Create Flask application
app = Flask(__name__)

# Configure database connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'your_database_connection_string'
db = SQLAlchemy(app)

# Register blueprints
from views import index_blueprint, coupon_blueprint, settings_blueprint, member_blueprint, order_blueprint, store_management_blueprint

app.register_blueprint(index_blueprint)
app.register_blueprint(coupon_blueprint)
app.register_blueprint(settings_blueprint)
app.register_blueprint(member_blueprint)
app.register_blueprint(order_blueprint)
app.register_blueprint(store_management_blueprint)

# Create RESTful API
api = Api(app)

# Start the application
if __name__ == '__main__':
    app.run()
