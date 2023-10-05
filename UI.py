from GitLabService import GitLabService

class Button:
    def __init__(self, label):
        self.label = label

    def on_click(self):
        # Call the query_recent_failed_builds method of GitLabService class
        gitlab_service = GitLabService()
        results = gitlab_service.query_recent_failed_builds()

        if results:
            # Display the results using the display_results method of GitLabService class
            parsed_results = gitlab_service.parse_query_results(results)
            gitlab_service.display_results(parsed_results)
        else:
            print("Failed to query recent failed builds")
