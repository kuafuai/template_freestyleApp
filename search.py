# This file contains the implementation of the Search class.

class Search:
    """
    The Search class represents a search for tennis rackets and has an attribute for the search keyword.
    """

    def __init__(self, keyword):
        """
        Constructor for the Search class.

        Args:
            keyword (str): The search keyword.
        """
        self.keyword = keyword

def search_tennis_rackets(keyword):
    """
    Function to search for tennis rackets based on a keyword.

    Args:
        keyword (str): The search keyword.

    Returns:
        list: The search results.
    """
    search = Search(keyword)
    search_results = perform_search(keyword)
    return search_results

def perform_search(keyword):
    """
    Function to perform the search.

    Args:
        keyword (str): The search keyword.

    Returns:
        list: The search results.
    """
    search_results = []

    # Perform the search and retrieve the search results
    # Add search results to the list
    result1 = "Search Result 1"
    result2 = "Search Result 2"
    result3 = "Search Result 3"

    search_results.append(result1)
    search_results.append(result2)
    search_results.append(result3)

    return search_results
