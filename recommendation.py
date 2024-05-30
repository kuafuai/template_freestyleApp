# This file contains the Recommendation class and methods

class Recommendation:
    def get_recommendations(self, user):
        # Use the user information to filter and recommend gifts
        # Implement the AI algorithm to select 3-5 suitable gifts
        
        # Validate the user object
        if not self._is_valid_user(user):
            raise ValueError("Invalid user object")
        
        # Generate recommendations using AI algorithm
        recommended_gifts = self._generate_recommendations(user)
        
        return recommended_gifts
    
    def _is_valid_user(self, user):
        # Check if the user object is valid and contains necessary information
        if not isinstance(user, dict):
            return False
        if "age" not in user or "gender" not in user or "interests" not in user:
            return False
        return True
    
    def _generate_recommendations(self, user):
        # Implement the AI algorithm to generate recommendations based on user information
        # This is a placeholder implementation, replace it with the actual AI algorithm
        
        # Get user information
        age = user["age"]
        gender = user["gender"]
        interests = user["interests"]
        
        # Generate recommendations based on user information
        recommended_gifts = []
        
        if age < 18:
            recommended_gifts.append("Toy")
        else:
            if gender == "Male":
                recommended_gifts.append("Watch")
            else:
                recommended_gifts.append("Jewelry")
        
        for interest in interests:
            recommended_gifts.append(interest + " Book")
        
        return recommended_gifts
