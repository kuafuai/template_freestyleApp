import inventory
import supplier
import warehouse

def main():
    try:
        # Implement the main function logic
        # Example code to demonstrate the functionality
        inventory.add_item("Item 1", 10)
        inventory.add_item("Item 2", 5)
        inventory.add_item("Item 3", 15)

        supplier.add_supplier("Supplier 1")
        supplier.add_supplier("Supplier 2")

        warehouse.add_warehouse("Warehouse 1")
        warehouse.add_warehouse("Warehouse 2")

        inventory.assign_supplier("Item 1", "Supplier 1")
        inventory.assign_supplier("Item 2", "Supplier 2")
        inventory.assign_supplier("Item 3", "Supplier 1")

        inventory.assign_warehouse("Item 1", "Warehouse 1")
        inventory.assign_warehouse("Item 2", "Warehouse 2")
        inventory.assign_warehouse("Item 3", "Warehouse 1")

        print("Inventory Management Functionality implemented successfully!")
    except Exception as e:
        print("Error occurred: ", str(e))

if __name__ == "__main__":
    main()