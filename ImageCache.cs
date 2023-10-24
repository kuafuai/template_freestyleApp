// Import necessary libraries
using System;
using System.Collections.Generic;

// Define the ImageCache class
public class ImageCache
{
    // Define a dictionary to store the cached images
    private Dictionary<string, Image> cache;

    // Constructor
    public ImageCache()
    {
        // Initialize the cache dictionary
        cache = new Dictionary<string, Image>();
    }

    // Method to add an image to the cache
    public void AddImage(string imagePath, Image image)
    {
        if (string.IsNullOrEmpty(imagePath))
        {
            throw new ArgumentException("Image path cannot be null or empty");
        }

        cache[imagePath] = image;
    }

    // Method to retrieve an image from the cache
    public Image GetImage(string imagePath)
    {
        if (string.IsNullOrEmpty(imagePath))
        {
            throw new ArgumentException("Image path cannot be null or empty");
        }

        if (cache.ContainsKey(imagePath))
        {
            return cache[imagePath];
        }
        else
        {
            return null;
        }
    }
}
