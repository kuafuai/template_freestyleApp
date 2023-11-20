import requests
import re
from validators import url

def extract_video_links():
    video_url = input("Enter the video URL: ")
    
    if not url(video_url):
        print("Invalid video URL")
        return
    
    try:
        # Send an HTTP request to the video website to extract the video links
        response = requests.get(video_url)
        response.raise_for_status()
        
        # Extract the video links from the response
        video_links = extract_video_links_from_response(response)
        
        # Display the extracted video links
        display_video_links(video_links)
    except requests.exceptions.RequestException as e:
        print("Error occurred while making the HTTP request:", str(e))

def extract_video_links_from_response(response):
    # Extract the video links using regular expressions
    video_links = re.findall(r'href=[\'"]?([^\'" >]+)', response.text)
    
    # Return the extracted video links
    return video_links

def display_video_links(video_links):
    print("Extracted video links:")
    for link in video_links:
        print(link)

extract_video_links()