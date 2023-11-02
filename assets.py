class Asset:
    def __init__(self, server_model, unit_price, total_amount, channel, advance_payment_ratio, purchase_date, purchase_channel):
        self._server_model = server_model
        self._unit_price = unit_price
        self._total_amount = total_amount
        self._channel = channel
        self._advance_payment_ratio = advance_payment_ratio
        self._advance_payment_amount = 0
        self._remaining_payment_amount = 0
        self._purchase_date = purchase_date
        self._purchase_channel = purchase_channel

    @property
    def server_model(self):
        return self._server_model

    @server_model.setter
    def server_model(self, server_model):
        self._server_model = server_model

    @property
    def unit_price(self):
        return self._unit_price

    @unit_price.setter
    def unit_price(self, unit_price):
        self._unit_price = unit_price

    @property
    def total_amount(self):
        return self._total_amount

    @total_amount.setter
    def total_amount(self, total_amount):
        self._total_amount = total_amount

    @property
    def channel(self):
        return self._channel

    @channel.setter
    def channel(self, channel):
        self._channel = channel

    @property
    def advance_payment_ratio(self):
        return self._advance_payment_ratio

    @advance_payment_ratio.setter
    def advance_payment_ratio(self, advance_payment_ratio):
        self._advance_payment_ratio = advance_payment_ratio

    @property
    def advance_payment_amount(self):
        return self._advance_payment_amount

    @advance_payment_amount.setter
    def advance_payment_amount(self, advance_payment_amount):
        self._advance_payment_amount = advance_payment_amount

    @property
    def remaining_payment_amount(self):
        return self._remaining_payment_amount

    @remaining_payment_amount.setter
    def remaining_payment_amount(self, remaining_payment_amount):
        self._remaining_payment_amount = remaining_payment_amount

    @property
    def purchase_date(self):
        return self._purchase_date

    @purchase_date.setter
    def purchase_date(self, purchase_date):
        self._purchase_date = purchase_date

    @property
    def purchase_channel(self):
        return self._purchase_channel

    @purchase_channel.setter
    def purchase_channel(self, purchase_channel):
        self._purchase_channel = purchase_channel
