class Asset:
    def __init__(self, server_model, unit_price, total_amount, channel, advance_payment_ratio, purchase_date, purchase_channel):
        self.server_model = server_model
        self.unit_price = unit_price
        self.total_amount = total_amount
        self.channel = channel
        self.advance_payment_ratio = advance_payment_ratio
        self.advance_payment_amount = 0
        self.remaining_payment_amount = 0
        self.purchase_date = purchase_date
        self.purchase_channel = purchase_channel

    def get_server_model(self):
        return self.server_model

    def set_server_model(self, server_model):
        self.server_model = server_model

    def get_unit_price(self):
        return self.unit_price

    def set_unit_price(self, unit_price):
        self.unit_price = unit_price

    def get_total_amount(self):
        return self.total_amount

    def set_total_amount(self, total_amount):
        self.total_amount = total_amount

    def get_channel(self):
        return self.channel

    def set_channel(self, channel):
        self.channel = channel

    def get_advance_payment_ratio(self):
        return self.advance_payment_ratio

    def set_advance_payment_ratio(self, advance_payment_ratio):
        self.advance_payment_ratio = advance_payment_ratio

    def get_advance_payment_amount(self):
        return self.advance_payment_amount

    def set_advance_payment_amount(self, advance_payment_amount):
        self.advance_payment_amount = advance_payment_amount

    def get_remaining_payment_amount(self):
        return self.remaining_payment_amount

    def set_remaining_payment_amount(self, remaining_payment_amount):
        self.remaining_payment_amount = remaining_payment_amount

    def get_purchase_date(self):
        return self.purchase_date

    def set_purchase_date(self, purchase_date):
        self.purchase_date = purchase_date

    def get_purchase_channel(self):
        return self.purchase_channel

    def set_purchase_channel(self, purchase_channel):
        self.purchase_channel = purchase_channel
