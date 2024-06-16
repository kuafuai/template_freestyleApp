# Define the Asset class
class Asset:
    # Initialize the Asset object
    def __init__(self, asset_number, name, specifications, purchase_date, purchase_price):
        self.asset_number = asset_number
        self.name = name
        self.specifications = specifications
        self.purchase_date = purchase_date
        self.purchase_price = purchase_price

    # Get the asset number
    def get_asset_number(self):
        return self.asset_number

    # Set the asset number
    def set_asset_number(self, asset_number):
        self.asset_number = asset_number

    # Get the name
    def get_name(self):
        return self.name

    # Set the name
    def set_name(self, name):
        self.name = name

    # Get the specifications
    def get_specifications(self):
        return self.specifications

    # Set the specifications
    def set_specifications(self, specifications):
        self.specifications = specifications

    # Get the purchase date
    def get_purchase_date(self):
        return self.purchase_date

    # Set the purchase date
    def set_purchase_date(self, purchase_date):
        self.purchase_date = purchase_date

    # Get the purchase price
    def get_purchase_price(self):
        return self.purchase_price

    # Set the purchase price
    def set_purchase_price(self, purchase_price):
        self.purchase_price = purchase_price