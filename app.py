from flask import Flask, jsonify, request
import requests
import json

app = Flask(__name__)

# Route to serve the index.html file
@app.route('/')
def index():
    return app.send_static_file('index.html')

# API endpoint to fetch the JSON data
@app.route('/get_data', methods=['POST'])
def get_data():
    # Define the URL for the HTTP request
    url = 'https://developer.work.weixin.qq.com/community/api/article/get?lang=zh_CN&ajax=1&f=json&random=946794'

    # Set the headers for the HTTP request
    headers = {
        'authority': 'developer.work.weixin.qq.com',
        'accept': 'application/json, text/plain, */*',
        'content-type': 'application/x-www-form-urlencoded',
        'origin': 'https://developer.work.weixin.qq.com',
        'referer': 'https://developer.work.weixin.qq.com/community/question',
        'sec-ch-ua-platform': '"macOS"'
    }

    # Set the request payload data
    payload = {
        'order': '1',
        'type': '0',
        'offset': '40'
    }

    # Make the HTTP request
    response = requests.post(url, headers=headers, data=payload)

    # Parse the JSON response data
    data = json.loads(response.text)

    # Extract the required data from the parsed JSON response
    articles = data['data']['articles']

    # Return the JSON response
    return jsonify({'articles': articles})

if __name__ == '__main__':
    app.run()