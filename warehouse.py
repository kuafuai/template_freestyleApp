import database

def create_warehouse_record(warehouse_details):
    # Implement the logic to create a warehouse record
    return database.create_record(warehouse_details)

def update_warehouse_record(warehouse_id, warehouse_details):
    # Implement the logic to update a warehouse record
    if database.record_exists(warehouse_id):
        return database.update_record(warehouse_id, warehouse_details)
    else:
        raise ValueError("Warehouse record does not exist")

def deactivate_warehouse_record(warehouse_id):
    # Implement the logic to deactivate a warehouse record
    if database.record_exists(warehouse_id):
        return database.deactivate_record(warehouse_id)
    else:
        raise ValueError("Warehouse record does not exist")

def delete_warehouse_record(warehouse_id):
    # Implement the logic to delete a warehouse record
    if database.record_exists(warehouse_id):
        return database.delete_record(warehouse_id)
    else:
        raise ValueError("Warehouse record does not exist")