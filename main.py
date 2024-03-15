import requests

API_ENDPOINT = "https://gitlab.example.com/api/v4"
PROJECT_ID = 1234
from_time = "2022-01-01T00:00:00Z"
to_time = "2022-01-01T01:00:00Z"

url = f"{API_ENDPOINT}/projects/{PROJECT_ID}/pipelines?status=failed&created_after={from_time}&created_before={to_time}"

try:
    response = requests.get(url)
    response.raise_for_status()
    pipelines = response.json()
    
    pipeline_info = []
    
    for pipeline in pipelines:
        pipeline_id = pipeline["id"]
        pipeline_status = pipeline["status"]
        pipeline_url = pipeline["web_url"]
        
        pipeline_info.append({
            "Pipeline ID": pipeline_id,
            "Status": pipeline_status,
            "URL": pipeline_url
        })
    
    for info in pipeline_info:
        print(f"Pipeline ID: {info['Pipeline ID']}")
        print(f"Status: {info['Status']}")
        print(f"URL: {info['URL']}")
        
except requests.exceptions.RequestException as e:
    print(f"Failed to retrieve CI failures from GitLab API: {e}")
    
except ValueError as e:
    print(f"Failed to parse response JSON: {e}")