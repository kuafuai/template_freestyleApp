# This file is responsible for handling user requests and returning the corresponding pages.

# Import necessary modules
from flask import render_template, request
from models import db, Record

# Render index page
def render_index():
    return render_template('index.html')

# Render add record page
def render_add_record():
    return render_template('add_record.html')

# Save record to database
def save_record(form):
    amount = form['amount']
    category = form['category']
    date = form['date']
    
    record = Record(amount, category, date)
    db.session.add(record)
    db.session.commit()
    
    return 'Record saved successfully!'

# Render view records page
def render_view_records():
    records = Record.query.all()
    return render_template('view_records.html', records=records)

# Render filter records page
def render_filter_records():
    return render_template('filter_records.html')

# Filter and render records based on user input
def filter_and_render_records(form):
    category = form['category']
    start_date = form['start_date']
    end_date = form['end_date']
    
    records = Record.query.filter_by(category=category).filter(Record.date.between(start_date, end_date)).all()
    return render_template('view_records.html', records=records)

# Render generate chart page
def render_generate_chart():
    return render_template('generate_chart.html')
