// This file contains the code for the ServerWindow.xaml.cs class

// Import necessary libraries
using System;
using System.Windows;
using System.Windows.Controls;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Data.SQLite;

// Define the ServerWindow class
public class ServerWindow : Window
{
    // Define the constructor
    public ServerWindow()
    {
        // Set up the window properties
        this.Title = "Server";
        this.Width = 800;
        this.Height = 600;

        // Create a new ListBox control
        ListBox listBox = new ListBox();
        listBox.Width = this.Width;
        listBox.Height = this.Height;

        // Populate the listBox with the connected clients
        List<string> connectedClients = GetConnectedClients();
        foreach (string client in connectedClients)
        {
            listBox.Items.Add(client);
        }

        // Add the listBox to the window
        this.Content = listBox;
    }

    // Method to get the list of connected clients
    private List<string> GetConnectedClients()
    {
        try
        {
            // TODO: Implement logic to get the list of connected clients
            List<string> connectedClients = new List<string>();
            // Add actual logic to retrieve the list of connected clients
            // For example, you can use a database query or network communication
            connectedClients.Add("Client 1");
            connectedClients.Add("Client 2");
            return connectedClients;
        }
        catch (Exception ex)
        {
            // Handle any exceptions that occur during the execution of the code
            // For example, you can display an error message or log the exception
            MessageBox.Show("Error: " + ex.Message);
            return new List<string>();
        }
    }
}
