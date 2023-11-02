from assets import Asset

class AddAsset:
    def __init__(self, asset):
        self.asset = asset

    def display_add_asset_page(self):
        # Code to render the actual add asset page
        # ...

    def get_asset_information(self):
        while True:
            try:
                asset_name = input("Enter asset name: ")
                asset_type = input("Enter asset type: ")
                asset_value = float(input("Enter asset value: "))
                self.asset = Asset(asset_name, asset_type, asset_value)
                break
            except ValueError:
                print("Invalid input. Please enter a valid value.")

    def calculate_payment_amounts(self):
        # Code to calculate payment amounts based on the asset information provided
        # ...

# Test the code
asset = Asset("", "", 0)
add_asset = AddAsset(asset)
add_asset.display_add_asset_page()
add_asset.get_asset_information()
add_asset.calculate_payment_amounts()