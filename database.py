import psycopg2

# This file contains methods for interacting with the database

# Function to save asset information to the database
def save_asset_info(asset_data):
    try:
        # Connect to the database
        conn = psycopg2.connect(database="your_database", user="your_username", password="your_password", host="your_host", port="your_port")
        cursor = conn.cursor()

        # Save asset information to the database
        cursor.execute("INSERT INTO asset_table (column1, column2, column3) VALUES (%s, %s, %s)", (asset_data['value1'], asset_data['value2'], asset_data['value3']))
        conn.commit()

        # Close the database connection
        cursor.close()
        conn.close()
    except (Exception, psycopg2.Error) as error:
        print("Error while saving asset information to the database:", error)

# Example usage
asset_data = {
    'value1': 'example1',
    'value2': 'example2',
    'value3': 'example3'
}
save_asset_info(asset_data)