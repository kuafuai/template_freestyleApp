// This file contains the code for the Client.cs class

// Import necessary libraries
using System;
using System.Net.Sockets;

// Define the Client class
public class Client
{
    // Define the properties
    public string Name { get; set; }
    public string IPAddress { get; set; }
    public int Port { get; set; }
    private TcpClient client;

    // Define the constructor
    public Client(string name, string ipAddress, int port)
    {
        Name = name;
        IPAddress = ipAddress;
        Port = port;
    }

    // Method to connect to the server
    public void Connect()
    {
        try
        {
            client = new TcpClient();
            client.Connect(IPAddress, Port);
            Console.WriteLine("Connected to the server");
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error connecting to the server: " + ex.Message);
        }
    }

    // Method to disconnect from the server
    public void Disconnect()
    {
        try
        {
            client.Close();
            Console.WriteLine("Disconnected from the server");
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error disconnecting from the server: " + ex.Message);
        }
    }

    // Method to send a message to the server
    public void SendMessage(string message)
    {
        try
        {
            byte[] data = System.Text.Encoding.ASCII.GetBytes(message);
            NetworkStream stream = client.GetStream();
            stream.Write(data, 0, data.Length);
            Console.WriteLine("Message sent to the server");
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error sending message to the server: " + ex.Message);
        }
    }
}
