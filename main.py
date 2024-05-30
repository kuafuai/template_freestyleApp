# This file handles the main logic of the gift recommendation application

# Import necessary modules
from user import User
from recommendation import Recommendation
from favorites import Favorites
from social_media import SocialMedia

# Create a user information form
def create_user_form():
    # Display the form to the user and collect their information
    gender = input("Enter your gender: ")
    age = input("Enter your age: ")
    zodiac_sign = input("Enter your zodiac sign: ")
    personality_traits = input("Enter your personality traits: ")
    relationship = input("Enter your relationship: ")
    purpose = input("Enter your purpose: ")
    price_range = input("Enter your price range: ")

    # Create a User object with the collected information
    user = User(gender, age, zodiac_sign, personality_traits, relationship, purpose, price_range)

    # Call the recommendation function to get gift recommendations for the user
    recommendation = Recommendation()
    recommended_gifts = recommendation.get_recommendations(user)

    # Display the recommended gifts to the user
    display_gifts(recommended_gifts)

    # Allow the user to select the most suitable gift
    selected_gift = select_gift(recommended_gifts)

    # Save the selected gift to the favorites
    favorites = Favorites()
    favorites.add_to_favorites(selected_gift)

    # Display the favorites to the user
    display_favorites(favorites)

    # Allow the user to share the selected gift on social media
    social_media = SocialMedia()
    social_media.share_gift(selected_gift)

# Display the recommended gifts to the user
def display_gifts(gifts):
    if not gifts:
        print("No recommended gifts available.")
    else:
        for gift in gifts:
            print("Gift: ", gift.name)
            print("Description: ", gift.description)
            print("Price: ", gift.price)
            print("Buy Link: ", gift.buy_link)
            print()

# Allow the user to select the most suitable gift
def select_gift(gifts):
    if not gifts:
        print("No gifts available to select.")
        return None

    # Display the gifts to the user and allow them to select one
    for i, gift in enumerate(gifts):
        print(i+1, ". ", gift.name)
    while True:
        try:
            selection = int(input("Select the number of the gift you want: "))
            if selection < 1 or selection > len(gifts):
                print("Invalid selection. Please try again.")
            else:
                selected_gift = gifts[selection-1]
                return selected_gift
        except ValueError:
            print("Invalid input. Please enter a number.")

# Display the favorites to the user
def display_favorites(favorites):
    if not favorites.get_favorites():
        print("No favorites available.")
    else:
        print("Your favorites:")
        for gift in favorites.get_favorites():
            print("Gift: ", gift.name)
            print("Description: ", gift.description)
            print("Price: ", gift.price)
            print("Buy Link: ", gift.buy_link)
            print()

# Call the create_user_form function to start the application
create_user_form()
