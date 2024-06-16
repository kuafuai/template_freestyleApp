# Import necessary modules
import asset
import database
import ui

# Create instances of required classes
asset_form = ui.AssetForm()
asset_list = ui.AssetList()
edit_asset_form = ui.EditAssetForm()
delete_asset = ui.DeleteAsset()

# Define event handlers for button clicks
def add_asset_button_click():
    asset_form.show_form()

def view_assets_button_click():
    asset_list.show_assets()

def edit_asset_button_click():
    edit_asset_form.show_form()

def delete_asset_button_click():
    delete_asset.delete_asset()

# Define the main function
def main():
    # Initialize the database connection
    database.initialize()

    # Display the user interface
    ui.display()

    # Get user input
    asset_info = ui.get_user_input()

    # Create an Asset object
    new_asset = asset.Asset(asset_info['asset_number'], asset_info['name'], asset_info['specifications'], asset_info['purchase_date'], asset_info['purchase_price'])

    # Store the asset information in the database
    database.store_asset(new_asset)

    # Close the database connection
    database.close()

# Register event handlers for button clicks
ui.add_asset_button.on_click(add_asset_button_click)
ui.view_assets_button.on_click(view_assets_button_click)
ui.edit_asset_button.on_click(edit_asset_button_click)
ui.delete_asset_button.on_click(delete_asset_button_click)

# Call the main function
if __name__ == "__main__":
    main()