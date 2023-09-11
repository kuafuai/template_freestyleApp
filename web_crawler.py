import requests
from bs4 import BeautifulSoup
import csv

# URL of the Today's Headlines website
URL = "https://www.todayheadlines.com/"

# Function to scrape headlines from the website
def scrape_headlines():
    # Send a GET request to the website
    response = requests.get(URL)
    
    # Check if the request was successful
    if response.status_code == 200:
        # Parse the HTML content of the web page
        soup = BeautifulSoup(response.content, "html.parser")
        
        # Find all the headline elements on the page
        headlines = soup.find_all("h2", class_="headline")
        
        # Extract the text content of the headlines
        headlines_text = [headline.text.strip() for headline in headlines]
        
        return headlines_text
    else:
        print("Failed to retrieve headlines. Status code:", response.status_code)
        return []

# Function to write headlines to a CSV file
def write_to_csv(headlines):
    # Specify the file path for the CSV file
    file_path = "headlines.csv"
    
    # Open the CSV file in write mode
    with open(file_path, "w", newline="", encoding="utf-8") as file:
        # Create a CSV writer object
        writer = csv.writer(file)
        
        # Write the headlines to the CSV file
        writer.writerow(["Headline"])
        writer.writerows([[headline] for headline in headlines])
    
    print("Headlines written to", file_path)

# Main function to execute the web scraping process
def main():
    # Scrape headlines from the website
    headlines = scrape_headlines()
    
    # Write headlines to a CSV file
    write_to_csv(headlines)

# Execute the main function
if __name__ == "__main__":
    main()