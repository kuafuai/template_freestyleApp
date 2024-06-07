import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect('invoices.db')
cursor = conn.cursor()

# Create invoices table if it doesn't exist
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

# Insert invoice into the database
def insert_invoice(content, date, number, amount):
    try:
        cursor.execute('''
            INSERT INTO invoices (content, date, number, amount)
            VALUES (?, ?, ?, ?)
        ''', (content, date, number, amount))
        conn.commit()
    except sqlite3.Error as e:
        print("Error inserting invoice:", e)

# Retrieve invoices from the database
def get_invoices():
    try:
        cursor.execute('SELECT * FROM invoices')
        invoices = cursor.fetchall()
        return invoices
    except sqlite3.Error as e:
        print("Error retrieving invoices:", e)

# Update invoice in the database
def update_invoice(invoice_id, content, date, number, amount):
    try:
        cursor.execute('''
            UPDATE invoices
            SET content = ?, date = ?, number = ?, amount = ?
            WHERE id = ?
        ''', (content, date, number, amount, invoice_id))
        conn.commit()
    except sqlite3.Error as e:
        print("Error updating invoice:", e)

# Delete invoice from the database
def delete_invoice(invoice_id):
    try:
        cursor.execute('DELETE FROM invoices WHERE id = ?', (invoice_id,))
        conn.commit()
    except sqlite3.Error as e:
        print("Error deleting invoice:", e)

# Calculate total amount of invoices
def calculate_total_amount():
    try:
        cursor.execute('SELECT SUM(amount) FROM invoices')
        total_amount = cursor.fetchone()[0]
        return total_amount
    except sqlite3.Error as e:
        print("Error calculating total amount:", e)