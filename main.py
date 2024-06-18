# Import necessary libraries and modules
from flask import Flask, render_template, request, redirect
from flask_wtf import FlaskForm
from flask_uploads import UploadSet, configure_uploads, IMAGES
from wtforms import DateField, DecimalField, StringField, SelectMultipleField
from wtforms.validators import DataRequired
from flask_sqlalchemy import SQLAlchemy

# Create Flask application
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret_key'
app.config['UPLOADED_PHOTOS_DEST'] = 'static/uploads'

# Configure file uploads
photos = UploadSet('photos', IMAGES)
configure_uploads(app, photos)

# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///expenses.db'
db = SQLAlchemy(app)

# Define Expense model
class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    amount = db.Column(db.Float, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    participants = db.Column(db.String(100), nullable=False)
    image = db.Column(db.String(100), nullable=True)
    category = db.Column(db.String(100), nullable=True)
    payment_method = db.Column(db.String(100), nullable=True)
    description = db.Column(db.String(100), nullable=True)

# Define ExpenseForm
class ExpenseForm(FlaskForm):
    date = DateField('Date', validators=[DataRequired()])
    amount = DecimalField('Amount', validators=[DataRequired()])
    name = StringField('Name', validators=[DataRequired()])
    participants = SelectMultipleField('Participants', validators=[DataRequired()])

# Define routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/expense', methods=['GET', 'POST'])
def expense():
    form = ExpenseForm()
    if form.validate_on_submit():
        try:
            # Save expense to database
            expense = Expense(
                date=form.date.data,
                amount=form.amount.data,
                name=form.name.data,
                participants=', '.join(form.participants.data),
                image=request.files['image'].filename if 'image' in request.files else None,
                category=request.form.get('category'),
                payment_method=request.form.get('payment_method'),
                description=request.form.get('description')
            )
            db.session.add(expense)
            db.session.commit()
            return render_template('success.html')
        except Exception as e:
            return render_template('error.html', error=str(e))
    return render_template('expense_form.html', form=form)

@app.route('/expenses')
def expenses():
    try:
        expenses = Expense.query.all()
        return render_template('expenses.html', expenses=expenses)
    except Exception as e:
        return render_template('error.html', error=str(e))

@app.route('/expense/<int:expense_id>')
def expense_detail(expense_id):
    try:
        expense = Expense.query.get(expense_id)
        return render_template('expense_detail.html', expense=expense)
    except Exception as e:
        return render_template('error.html', error=str(e))

@app.route('/expense/<int:expense_id>/delete', methods=['POST'])
def delete_expense(expense_id):
    try:
        expense = Expense.query.get(expense_id)
        db.session.delete(expense)
        db.session.commit()
        return redirect('/expenses')
    except Exception as e:
        return render_template('error.html', error=str(e))

@app.route('/expense/<int:expense_id>/edit', methods=['GET', 'POST'])
def edit_expense(expense_id):
    try:
        expense = Expense.query.get(expense_id)
        form = ExpenseForm(obj=expense)
        if form.validate_on_submit():
            # Update expense in database
            expense.date = form.date.data
            expense.amount = form.amount.data
            expense.name = form.name.data
            expense.participants = ', '.join(form.participants.data)
            expense.image = request.files['image'].filename if 'image' in request.files else None
            expense.category = request.form.get('category')
            expense.payment_method = request.form.get('payment_method')
            expense.description = request.form.get('description')
            db.session.commit()
            return redirect('/expenses')
        return render_template('edit_expense.html', form=form, expense=expense)
    except Exception as e:
        return render_template('error.html', error=str(e))

# Import necessary libraries and modules
from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_mail import Mail
from flask_babel import Babel
import pandas as pd
import matplotlib.pyplot as plt

# Create Flask app
app = Flask(__name__)

# Configure Flask app
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///expenses.db'
app.config['SECRET_KEY'] = 'secret_key'
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your_email@gmail.com'
app.config['MAIL_PASSWORD'] = 'your_password'
app.config['BABEL_DEFAULT_LOCALE'] = 'en'

# Initialize extensions
db = SQLAlchemy(app)
migrate = Migrate(app, db)
login_manager = LoginManager(app)
mail = Mail(app)
babel = Babel(app)

# Define Expense model
class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    category = db.Column(db.String(50), nullable=False)
    date = db.Column(db.Date, nullable=False)

# Define routes and views
@app.route('/')
def expense_list():
    # Get search query from request
    search_query = request.args.get('search')

    # Get filter options from request
    category_filter = request.args.get('category')
    date_filter = request.args.get('date')

    # Query expenses based on search query and filter options
    expenses = Expense.query.filter(Expense.name.contains(search_query))

    if category_filter:
        expenses = expenses.filter(Expense.category == category_filter)

    if date_filter:
        expenses = expenses.filter(Expense.date == date_filter)

    # Calculate total amount and individual shares
    total_amount = expenses.with_entities(db.func.sum(Expense.amount)).scalar()
    individual_shares = expenses.with_entities(Expense.name, db.func.sum(Expense.amount)).group_by(Expense.name).all()

    # Generate chart or statistics
    chart_data = expenses.with_entities(Expense.category, db.func.sum(Expense.amount)).group_by(Expense.category).all()
    chart_labels = [data[0] for data in chart_data]
    chart_values = [data[1] for data in chart_data]

    # Render expense list template with data
    return render_template('expense_list.html', expenses=expenses, total_amount=total_amount, individual_shares=individual_shares, chart_labels=chart_labels, chart_values=chart_values)

# Run Flask app
if __name__ == '__main__':
    app.run(debug=True)
