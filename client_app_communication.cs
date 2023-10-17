// This file contains the code for communicating with the server in the client application

// Import necessary namespaces
using System;
using System.Net;
using System.Net.Sockets;
using System.Text;

namespace ClientApp
{
    public class Communication
    {
        private const int bufferSize = 1024;
        private const string serverIP = "127.0.0.1";
        private const int serverPort = 8080;

        public void StartCommunication()
        {
            try
            {
                // Connect to the server
                using (TcpClient client = new TcpClient())
                {
                    client.Connect(serverIP, serverPort);
                    Console.WriteLine("Connected to the server.");

                    // Send data to the server
                    SendData(client.GetStream(), "Hello, server!");

                    // Receive data from the server
                    string receivedData = ReceiveData(client.GetStream());
                    Console.WriteLine("Received data from the server: " + receivedData);

                    // Close the connection
                    client.Close();
                    Console.WriteLine("Connection closed.");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("An error occurred: " + ex.Message);
            }
        }

        private void SendData(NetworkStream stream, string data)
        {
            byte[] buffer = Encoding.ASCII.GetBytes(data);
            stream.Write(buffer, 0, buffer.Length);
            Console.WriteLine("Sent data to the server: " + data);
        }

        private string ReceiveData(NetworkStream stream)
        {
            byte[] buffer = new byte[bufferSize];
            int bytesRead = stream.Read(buffer, 0, bufferSize);
            return Encoding.ASCII.GetString(buffer, 0, bytesRead);
        }
    }
}
