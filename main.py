# This file handles the main logic of the asset registration feature

# Import necessary modules
from asset import Asset
from validation import validate_input_fields
from attachment import upload_attachment

# Function to handle asset registration
def register_asset(asset_data, attachment):
    # Validate input fields
    valid_fields = validate_input_fields(asset_data)
    if not valid_fields:
        invalid_fields = [field for field, valid in valid_fields.items() if not valid]
        return f"Invalid input fields: {', '.join(invalid_fields)}"

    # Create an instance of Asset class
    asset = Asset(asset_data)

    try:
        # Save asset information to the database
        asset.save()
    except Exception as e:
        return f"Error saving asset information: {str(e)}"

    try:
        # Upload attachment if provided
        if attachment:
            upload_attachment(attachment)
    except Exception as e:
        return f"Error uploading attachment: {str(e)}"

    return "Asset registered successfully"
