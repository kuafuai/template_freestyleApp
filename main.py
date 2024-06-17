# This file is responsible for setting up the application's routes and starting the server.

# Import necessary modules
from flask import Flask, render_template, request
from models import db, Record

# Create Flask application
app = Flask(__name__)

# Define routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_record', methods=['GET', 'POST'])
def add_record():
    if request.method == 'POST':
        return save_record(request.form)
    else:
        return render_template('add_record.html')

@app.route('/view_records')
def view_records():
    records = Record.query.all()
    return render_template('view_records.html', records=records)

@app.route('/filter_records', methods=['GET', 'POST'])
def filter_records():
    if request.method == 'POST':
        return filter_and_render_records(request.form)
    else:
        return render_template('filter_records.html')

@app.route('/generate_chart')
def generate_chart():
    return render_template('generate_chart.html')

# Save record to database
def save_record(form):
    amount = form['amount']
    category = form['category']
    date = form['date']
    
    record = Record(amount=amount, category=category, date=date)
    db.session.add(record)
    db.session.commit()
    
    return 'Record saved successfully!'

# Filter and render records based on user input
def filter_and_render_records(form):
    category = form['category']
    start_date = form['start_date']
    end_date = form['end_date']
    
    records = Record.query.filter_by(category=category).filter(Record.date.between(start_date, end_date)).all()
    return render_template('view_records.html', records=records)

# Start the server
if __name__ == '__main__':
    app.run()
