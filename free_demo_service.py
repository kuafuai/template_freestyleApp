import requests
import json

def get_articles():
    try:
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
        response.raise_for_status()

        # Parse the JSON response data
        data = response.json()

        # Extract the required data from the parsed JSON response
        articles = data['data']['articles']

        return articles

    except requests.exceptions.RequestException as e:
        print("HTTP Request Error:", e)
        return []

    except (KeyError, json.JSONDecodeError) as e:
        print("JSON Parsing Error:", e)
        return []

def display_articles(articles):
    for article in articles:
        print(article['title'])
        print(article['pure_text'])
        print(article['url'])

articles = get_articles()
display_articles(articles)