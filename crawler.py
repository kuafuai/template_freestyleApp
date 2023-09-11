import requests
from bs4 import BeautifulSoup
import psycopg2
2222

def get_toutiao_news():
    # Send a GET request to the homepage of Today's Headlines
    response = requests.get("https://www.toutiao.com/")
    
    # Check if the request was successful
    if response.status_code == 200:
        # Parse the HTML content of the response
        soup = BeautifulSoup(response.content, "html.parser")
        
        # Extract the relevant HTML elements that contain the hot news titles
        news_elements = soup.find_all("div", class_="title-box")
        
        # Iterate over the extracted HTML elements
        news_titles = []
        for element in news_elements:
            # Extract the title and publish time of each news article
            title = element.find("a").text
            publish_time = element.find("span", class_="lbtn").text
            
            # Store the extracted title and publish time in a dictionary
            news_title = {
                "title": title,
                "publish_time": publish_time
            }
            news_titles.append(news_title)
            
        # Connect to the database
        conn = psycopg2.connect(database="your_database", user="your_username", password="your_password", host="your_host", port="your_port")
        
        # Create a cursor object to execute SQL queries
        cursor = conn.cursor()
        
        # Create a table in the database to store the news titles, if it doesn't already exist
        create_table_query = "CREATE TABLE IF NOT EXISTS news_titles (id SERIAL PRIMARY KEY, title TEXT, publish_time TEXT);"
        cursor.execute(create_table_query)
        
        # Iterate over the list of news titles
        for news_title in news_titles:
            # Insert each title and publish time into the database table
            insert_query = "INSERT INTO news_titles (title, publish_time) VALUES (%s, %s);"
            cursor.execute(insert_query, (news_title["title"], news_title["publish_time"]))
        
        # Commit the changes to the database
        conn.commit()
        
        # Close the cursor and database connection
        cursor.close()
        conn.close()

get_toutiao_news()