# This file contains the Asset class and methods related to asset registration

# Import necessary modules
from database import save_asset_info

# Asset class
class Asset:
    def __init__(self, asset_data):
        """
        Initialize the Asset object with asset_data.
        
        Args:
            asset_data (dict): The asset data to be saved.
        """
        self.asset_data = asset_data

    def save(self):
        """
        Save asset information to the database using the save_asset_info function.
        
        Returns:
            bool: True if the asset information is saved successfully, False otherwise.
        """
        try:
            # Save asset information to the database
            save_asset_info(self.asset_data)
            return True
        except Exception as e:
            print(f"Error saving asset information: {str(e)}")
            return False
