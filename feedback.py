# This file contains the implementation of the Feedback class.

# Define the Feedback class
class Feedback:
    # Constructor
    def __init__(self, rating, comments):
        self.rating = rating
        self.comments = comments

    # Method to calculate the average rating based on multiple feedback instances
    @staticmethod
    def calculate_average_rating(feedback_list):
        total_rating = 0
        for feedback in feedback_list:
            total_rating += feedback.rating
        average_rating = total_rating / len(feedback_list)
        return average_rating

# Function to get the user feedback for a tennis racket
def get_user_feedback(racket, rating, comments):
    if rating < 1 or rating > 5:
        raise ValueError("Rating should be between 1 and 5.")
    feedback = Feedback(rating, comments)
    return feedback
