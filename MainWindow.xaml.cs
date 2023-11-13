// This file contains the code for the MainWindow.xaml.cs class

// Import necessary libraries
using System;
using System.IO;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media.Imaging;

// Define the MainWindow class
public class MainWindow : Window
{
    private string[] imagePaths;
    private int currentImageIndex;

    // Define the constructor
    public MainWindow()
    {
        // Set up the window properties
        this.Title = "Image Viewer";
        this.Width = 800;
        this.Height = 600;

        // Get the paths of all images in the directory
        string directoryPath = "path/to/directory";
        imagePaths = Directory.GetFiles(directoryPath, "*.jpg");

        // Check if there are any images in the directory
        if (imagePaths.Length == 0)
        {
            MessageBox.Show("No images found in the directory.");
            return;
        }

        // Create a new Image control
        Image imageControl = new Image();
        imageControl.Width = this.Width;
        imageControl.Height = this.Height;

        // Set the source of the image control to the first image in the directory
        string imagePath = imagePaths[0];
        BitmapImage bitmapImage = new BitmapImage(new Uri(imagePath));
        imageControl.Source = bitmapImage;

        // Add the image control to the window
        this.Content = imageControl;
    }

    // Method to navigate to the next image
    private void NextImage()
    {
        currentImageIndex++;
        if (currentImageIndex >= imagePaths.Length)
        {
            currentImageIndex = 0;
        }

        string imagePath = imagePaths[currentImageIndex];
        BitmapImage bitmapImage = new BitmapImage(new Uri(imagePath));
        ((Image)this.Content).Source = bitmapImage;
    }

    // Method to navigate to the previous image
    private void PreviousImage()
    {
        currentImageIndex--;
        if (currentImageIndex < 0)
        {
            currentImageIndex = imagePaths.Length - 1;
        }

        string imagePath = imagePaths[currentImageIndex];
        BitmapImage bitmapImage = new BitmapImage(new Uri(imagePath));
        ((Image)this.Content).Source = bitmapImage;
    }
}
