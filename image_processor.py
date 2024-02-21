import data_reader
import os

class ImageProcessor:
    def __init__(self, data_reader):
        self.data_reader = data_reader

    def process_image(self, image_path):
        # Check if the image file exists
        if not os.path.exists(image_path):
            raise FileNotFoundError("Image file not found")

        # Process the image and extract person ID
        # Add your image processing and person ID extraction logic here
        person_id = self.data_reader.read_person_id(image_path)

        return person_id

if __name__ == "__main__":
    data_reader = data_reader.DataReader()
    image_processor = ImageProcessor(data_reader)
    person_id = image_processor.process_image("image.jpg")
    print("Person ID:", person_id)