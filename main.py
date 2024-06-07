# Import necessary libraries
from flask import Flask, render_template, request, jsonify
import sqlite3

# Create Flask application
app = Flask(__name__)

# Connect to the SQLite database
def connect_db():
    try:
        conn = sqlite3.connect('invoices.db')
        return conn
    except Exception as e:
        return None

# Create invoices table if it doesn't exist
def create_table():
    try:
        conn = connect_db()
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS invoices (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                content TEXT,
                date TEXT,
                number INTEGER,
                amount REAL
            )
        ''')
        conn.commit()
        conn.close()
    except Exception as e:
        return None

create_table()

# Route for uploading invoice
@app.route('/upload_invoice', methods=['GET', 'POST'])
def upload_invoice():
    if request.method == 'POST':
        try:
            # Get invoice details from the form
            content = request.form['content']
            date = request.form['date']
            number = int(request.form['number'])
            amount = float(request.form['amount'])

            # Insert invoice details into the database
            conn = connect_db()
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO invoices (content, date, number, amount)
                VALUES (?, ?, ?, ?)
            ''', (content, date, number, amount))
            conn.commit()
            conn.close()

            return jsonify({'message': 'Invoice uploaded successfully'})
        except Exception as e:
            return jsonify({'error': str(e)})

    return render_template('upload_invoice.html')

# Route for viewing invoices
@app.route('/view_invoices')
def view_invoices():
    try:
        # Retrieve invoices from the database
        conn = connect_db()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM invoices')
        invoices = cursor.fetchall()
        conn.close()

        return render_template('view_invoices.html', invoices=invoices)
    except Exception as e:
        return jsonify({'error': str(e)})

# Route for editing invoice
@app.route('/edit_invoice', methods=['POST'])
def edit_invoice():
    try:
        # Get invoice details from the form
        invoice_id = int(request.form['id'])
        content = request.form['content']
        date = request.form['date']
        number = int(request.form['number'])
        amount = float(request.form['amount'])

        # Update invoice details in the database
        conn = connect_db()
        cursor = conn.cursor()
        cursor.execute('''
            UPDATE invoices
            SET content = ?, date = ?, number = ?, amount = ?
            WHERE id = ?
        ''', (content, date, number, amount, invoice_id))
        conn.commit()
        conn.close()

        return jsonify({'message': 'Invoice updated successfully'})
    except Exception as e:
        return jsonify({'error': str(e)})

# Route for deleting invoice
@app.route('/delete_invoice', methods=['POST'])
def delete_invoice():
    try:
        # Get invoice ID from the form
        invoice_id = int(request.form['id'])

        # Delete invoice from the database
        conn = connect_db()
        cursor = conn.cursor()
        cursor.execute('DELETE FROM invoices WHERE id = ?', (invoice_id,))
        conn.commit()
        conn.close()

        return jsonify({'message': 'Invoice deleted successfully'})
    except Exception as e:
        return jsonify({'error': str(e)})

# Route for calculating total amount
@app.route('/calculate_total_amount')
def calculate_total_amount():
    try:
        # Retrieve total amount from the database
        conn = connect_db()
        cursor = conn.cursor()
        cursor.execute('SELECT SUM(amount) FROM invoices')
        total_amount = cursor.fetchone()[0]
        conn.close()

        return jsonify({'total_amount': total_amount})
    except Exception as e:
        return jsonify({'error': str(e)})

# Error handling for 404 page not found
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
