// This file contains the code for the ImageSearcher.cs class

// Import necessary libraries
using System;
using System.Collections.Generic;
using System.Data.SQLite;

// Define the ImageSearcher class
public class ImageSearcher
{
    // Define the properties
    private DatabaseManager databaseManager;

    // Define the constructor
    public ImageSearcher(DatabaseManager dbManager)
    {
        databaseManager = dbManager;
    }

    // Method to search for images in the database
    public List<string> SearchImages(string keyword)
    {
        List<string> imagePaths = new List<string>();

        // Query the database to retrieve the image paths based on the provided keyword
        string query = "SELECT path FROM images WHERE keyword = @keyword";
        using (SQLiteConnection connection = databaseManager.GetConnection())
        {
            connection.Open();
            using (SQLiteCommand command = new SQLiteCommand(query, connection))
            {
                command.Parameters.AddWithValue("@keyword", keyword);
                using (SQLiteDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        string imagePath = reader.GetString(0);
                        imagePaths.Add(imagePath);
                    }
                }
            }
        }

        return imagePaths;
    }
}