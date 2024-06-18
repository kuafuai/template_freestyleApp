import importlib

# Define the main function
def main():
    # Display the home page with buttons for different features
    display_home_page()

# Function to display the home page
def display_home_page():
    while True:
        # Display the buttons for different features
        print("Welcome to the Travel Customization Mini-Program!")
        print("Please select an option:")
        print("1. User Profile")
        print("2. Destination Selection")
        print("3. Budget Setting")
        print("4. Travel Days Planning")
        print("5. Theme Selection")
        print("6. Itinerary Customization")
        print("7. Recommendations")
        print("8. Hotel Reservation")
        print("9. Transportation Arrangement")
        print("10. Restaurant Recommendation")
        print("11. Feedback")
        print("12. Cost Estimation")
        print("13. Emergency Contact")
        print("14. Offline Maps and Navigation")
        print("15. Language Support")
        print("16. Social Sharing")
        print("17. Ratings")
        print("18. Personalized Recommendations")
        print("19. Safety Tips")
        print("20. Insurance Options")
        print("0. Exit")

        # Get user input for the selected option
        option = input("Enter the option number: ")

        # Process the selected option
        if option == "1":
            user_profile = importlib.import_module("user_profile")
            user_profile.display_user_profile()
        elif option == "2":
            destination = importlib.import_module("destination")
            destination.display_destination_selection()
        elif option == "3":
            budget = importlib.import_module("budget")
            budget.display_budget_setting()
        elif option == "4":
            travel_days = importlib.import_module("travel_days")
            travel_days.display_travel_days_planning()
        elif option == "5":
            theme = importlib.import_module("theme")
            theme.display_theme_selection()
        elif option == "6":
            itinerary = importlib.import_module("itinerary")
            itinerary.display_itinerary_customization()
        elif option == "7":
            recommendations = importlib.import_module("recommendations")
            recommendations.display_recommendations()
        elif option == "8":
            hotel_reservation = importlib.import_module("hotel_reservation")
            hotel_reservation.display_hotel_reservation()
        elif option == "9":
            transportation = importlib.import_module("transportation")
            transportation.display_transportation_arrangement()
        elif option == "10":
            restaurant_recommendation = importlib.import_module("restaurant_recommendation")
            restaurant_recommendation.display_restaurant_recommendation()
        elif option == "11":
            feedback = importlib.import_module("feedback")
            feedback.display_feedback()
        elif option == "12":
            cost_estimation = importlib.import_module("cost_estimation")
            cost_estimation.display_cost_estimation()
        elif option == "13":
            emergency_contact = importlib.import_module("emergency_contact")
            emergency_contact.display_emergency_contact()
        elif option == "14":
            offline_maps = importlib.import_module("offline_maps")
            offline_maps.display_offline_maps()
        elif option == "15":
            language_support = importlib.import_module("language_support")
            language_support.display_language_support()
        elif option == "16":
            social_sharing = importlib.import_module("social_sharing")
            social_sharing.display_social_sharing()
        elif option == "17":
            ratings = importlib.import_module("ratings")
            ratings.display_ratings()
        elif option == "18":
            personalized_recommendations = importlib.import_module("personalized_recommendations")
            personalized_recommendations.display_personalized_recommendations()
        elif option == "19":
            safety_tips = importlib.import_module("safety_tips")
            safety_tips.display_safety_tips()
        elif option == "20":
            insurance_options = importlib.import_module("insurance_options")
            insurance_options.display_insurance_options()
        elif option == "0":
            break
        else:
            print("Invalid option. Please try again.")

# Call the main function to start the program
main()