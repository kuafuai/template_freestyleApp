from assets import Asset

class ViewAsset:
    def __init__(self, asset):
        self.asset = asset

    def display_view_asset_page(self):
        """
        Display the view asset page.
        """
        print("Asset Name: ", self.asset.name)
        print("Asset Type: ", self.asset.type)
        print("Asset Value: ", self.asset.value)

    def get_added_asset_information(self):
        """
        Get the added asset information.
        """
        asset_name = input("Enter asset name: ")
        asset_type = input("Enter asset type: ")
        asset_value = input("Enter asset value: ")

        self.asset = Asset(asset_name, asset_type, asset_value)

        print("Asset information added successfully.")

# Test the code
asset = Asset("Laptop", "Electronics", 1500)
view_asset = ViewAsset(asset)
view_asset.display_view_asset_page()
view_asset.get_added_asset_information()
view_asset.display_view_asset_page()