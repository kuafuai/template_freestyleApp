from assets import Asset

class InvestmentReturn:
    def __init__(self, asset):
        self.asset = asset

    def display_investment_return_page(self):
        return "Investment Return Forecast Page"

    def get_fund_requirement_order_income(self):
        fund_requirement = self.asset.calculate_fund_requirement()
        order_income = self.asset.calculate_order_income()
        return fund_requirement, order_income

    def calculate_investment_return(self):
        investment_return = self.asset.calculate_investment_return()
        return investment_return

    def compare_investment_returns(self, assets):
        comparison_result = []
        for asset in assets:
            investment_return = asset.calculate_investment_return()
            comparison_result.append(investment_return)
        return comparison_result
