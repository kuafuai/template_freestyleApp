// This file contains the code-behind for the client_app_image_browsing.xaml file

// Import necessary namespaces
using System.Windows;

namespace ClientApp
{
    public partial class ImageBrowsingWindow : Window
    {
        // Define class variables and properties
        private List<string> imagePaths;
        private int currentIndex;

        // Define constructor
        public ImageBrowsingWindow()
        {
            InitializeComponent();

            // Initialize class variables
            imagePaths = new List<string>();
            currentIndex = 0;

            // Load images
            LoadImages();
        }

        // Define event handlers for UI elements
        private void PreviousButton_Click(object sender, RoutedEventArgs e)
        {
            if (currentIndex > 0)
            {
                currentIndex--;
                DisplayImage();
            }
        }

        private void NextButton_Click(object sender, RoutedEventArgs e)
        {
            if (currentIndex < imagePaths.Count - 1)
            {
                currentIndex++;
                DisplayImage();
            }
        }

        // Define methods for displaying images
        private void LoadImages()
        {
            // Add image paths to the list
            imagePaths.Add("image1.jpg");
            imagePaths.Add("image2.jpg");
            imagePaths.Add("image3.jpg");

            // Display the first image
            DisplayImage();
        }

        private void DisplayImage()
        {
            string imagePath = imagePaths[currentIndex];
            // Display the image in the UI
            Image.Source = new BitmapImage(new Uri(imagePath));
        }

        // Define other helper methods
        private void FilterImages(string filter)
        {
            // Filter the image paths based on the given filter
            // ...
        }

        private void SortImages()
        {
            // Sort the image paths
            // ...
        }
    }
}