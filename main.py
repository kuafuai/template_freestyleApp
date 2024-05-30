from flask import Flask
from homepage import show_homepage
from navbar import show_navbar
from product_detail import show_product_detail
from search import show_search_results
from favorites import show_favorites

app = Flask(__name__)

@app.route('/')
def home():
    return show_homepage()

@app.route('/navbar')
def navbar():
    return show_navbar()

@app.route('/product/<product_id>')
def product_detail(product_id):
    return show_product_detail(product_id)

@app.route('/search')
def search():
    return show_search_results()

@app.route('/favorites')
def favorites():
    return show_favorites()

if __name__ == '__main__':
    app.run()
