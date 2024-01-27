import database_connection_library

def create_inventory_table():
    # Implement the logic to create the inventory table in the database
    database_connection_library.execute_query("CREATE TABLE inventory (id INT PRIMARY KEY, name VARCHAR(255), quantity INT)")

def query_inventory_table(query):
    # Implement the logic to query the inventory table in the database
    return database_connection_library.execute_query(query)

def create_supplier_record_in_database(supplier_details):
    # Implement the logic to create a supplier record in the database
    database_connection_library.execute_query("INSERT INTO suppliers (id, name, address) VALUES (?, ?, ?)", supplier_details)

def update_supplier_record_in_database(supplier_id, supplier_details):
    # Implement the logic to update a supplier record in the database
    database_connection_library.execute_query("UPDATE suppliers SET name = ?, address = ? WHERE id = ?", supplier_details + (supplier_id,))

def deactivate_supplier_record_in_database(supplier_id):
    # Implement the logic to deactivate a supplier record in the database
    database_connection_library.execute_query("UPDATE suppliers SET active = 0 WHERE id = ?", (supplier_id,))

def delete_supplier_record_from_database(supplier_id):
    # Implement the logic to delete a supplier record from the database
    database_connection_library.execute_query("DELETE FROM suppliers WHERE id = ?", (supplier_id,))

def create_warehouse_record_in_database(warehouse_details):
    # Implement the logic to create a warehouse record in the database
    database_connection_library.execute_query("INSERT INTO warehouses (id, name, location) VALUES (?, ?, ?)", warehouse_details)

def update_warehouse_record_in_database(warehouse_id, warehouse_details):
    # Implement the logic to update a warehouse record in the database
    database_connection_library.execute_query("UPDATE warehouses SET name = ?, location = ? WHERE id = ?", warehouse_details + (warehouse_id,))

def deactivate_warehouse_record_in_database(warehouse_id):
    # Implement the logic to deactivate a warehouse record in the database
    database_connection_library.execute_query("UPDATE warehouses SET active = 0 WHERE id = ?", (warehouse_id,))

def delete_warehouse_record_from_database(warehouse_id):
    # Implement the logic to delete a warehouse record from the database
    database_connection_library.execute_query("DELETE FROM warehouses WHERE id = ?", (warehouse_id,))