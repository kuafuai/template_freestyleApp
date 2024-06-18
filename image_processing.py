# image_processing.py

# Import required modules
from PIL import Image

# Generate virtual image
def generate_virtual_image(photo, selected_clothes):
    try:
        # Open the photo
        photo_image = Image.open(photo)

        # Resize the photo to fit the virtual image
        resized_photo = photo_image.resize((500, 500))

        # Create a blank virtual image
        virtual_image = Image.new("RGB", (500, 500))

        # Paste the resized photo onto the virtual image
        virtual_image.paste(resized_photo, (0, 0))

        # Load the selected clothes
        clothes_image = Image.open(selected_clothes)

        # Resize the clothes image to fit the virtual image
        resized_clothes = clothes_image.resize((200, 200))

        # Check if the clothes image is larger than the virtual image
        if resized_clothes.size[0] > virtual_image.size[0] or resized_clothes.size[1] > virtual_image.size[1]:
            # Resize the clothes image to fit within the virtual image
            resized_clothes = resized_clothes.resize(virtual_image.size)

        # Paste the resized clothes onto the virtual image
        virtual_image.paste(resized_clothes, (150, 150))

        # Return the virtual image
        return virtual_image

    except Exception as e:
        print("Error: ", str(e))
        return None
