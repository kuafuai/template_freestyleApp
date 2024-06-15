# This module is responsible for integrating all the components and running the product

# Import necessary modules
import data_collection
import report_generation
import market_analysis
import user_interface

# Main function to run the product
def main():
    # Run data collection module
    data_collection.main()
    
    # Run report generation module
    report_generation.main()
    
    # Run market analysis module
    market_analysis.main()
    
    # Run user interface module
    user_interface.main()

# Run the main function
if __name__ == "__main__":
    main()
