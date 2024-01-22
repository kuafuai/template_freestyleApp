from flask import Blueprint, render_template

# Create a single blueprint for all pages
pages_blueprint = Blueprint('pages', __name__)

@pages_blueprint.route('/')
def index():
    """
    Renders the index page.
    """
    return render_template('index.html')

@pages_blueprint.route('/coupon')
def coupon():
    """
    Renders the coupon page.
    """
    return render_template('coupon.html')

@pages_blueprint.route('/settings')
def settings():
    """
    Renders the settings page.
    """
    return render_template('settings.html')

@pages_blueprint.route('/member')
def member():
    """
    Renders the member page.
    """
    return render_template('member.html')

@pages_blueprint.route('/order')
def order():
    """
    Renders the order page.
    """
    return render_template('order.html')

@pages_blueprint.route('/store_management')
def store_management():
    """
    Renders the store management page.
    """
    return render_template('store_management.html')
