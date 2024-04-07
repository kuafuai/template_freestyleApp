# This file contains methods for validating input fields

# Function to validate input fields
def validate_input_fields(asset_data):
    # Validate asset data fields
    if not asset_data.get('asset_number') or not asset_data.get('name') or not asset_data.get('specification') or not asset_data.get('purchase_date') or not asset_data.get('purchase_price'):
        return False

    # Additional validation logic for other fields

    return True
