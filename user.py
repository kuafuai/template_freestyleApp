# Import necessary modules
from werkzeug.security import generate_password_hash, check_password_hash
from database import db

# Define User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)

    # Define password property
    @property
    def password(self):
        return self.password_hash

    # Define password setter
    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)

    # Define method for password verification
    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

# Define methods for user registration, login, and logout
def register_user(username, password):
    user = User(username=username)
    user.password = password
    db.session.add(user)
    db.session.commit()

def login_user(username, password):
    user = User.query.filter_by(username=username).first()
    if user and user.verify_password(password):
        return user

def logout_user():
    # Perform logout actions
    pass
