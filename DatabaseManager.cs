// This file contains the code for the DatabaseManager.cs class

// Import necessary libraries
using System;
using System.Data.SQLite;

// Define the DatabaseManager class
public class DatabaseManager
{
    // Define the connection string
    private string connectionString;

    // Define the constructor
    public DatabaseManager(string databasePath)
    {
        // Set up the connection string
        connectionString = $"Data Source={databasePath}";

        // Create the database if it doesn't exist
        CreateDatabase();
    }

    // Method to create the database if it doesn't exist
    private void CreateDatabase()
    {
        // Check if the database file exists
        if (!System.IO.File.Exists(connectionString))
        {
            // Create a new SQLite database file
            SQLiteConnection.CreateFile(connectionString);
        }
    }

    // Method to execute a SQL query
    public void ExecuteQuery(string query)
    {
        try
        {
            // Create a new SQLite connection
            using (SQLiteConnection connection = new SQLiteConnection(connectionString))
            {
                // Open the connection
                connection.Open();

                // Create a new SQLite command
                using (SQLiteCommand command = new SQLiteCommand(query, connection))
                {
                    // Execute the query
                    command.ExecuteNonQuery();
                }
            }
        }
        catch (Exception ex)
        {
            // Handle the exception (e.g., log the error, display an error message, etc.)
            Console.WriteLine($"Error executing query: {ex.Message}");
        }
    }
}
