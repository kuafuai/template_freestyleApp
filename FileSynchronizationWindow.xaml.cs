// This file contains the code for the FileSynchronizationWindow.xaml.cs class

// Import necessary libraries
using System;
using System.Windows;
using System.Windows.Controls;
using System.IO;

// Define the FileSynchronizationWindow class
public class FileSynchronizationWindow : Window
{
    // Define the constructor
    public FileSynchronizationWindow()
    {
        // Set up the window properties
        this.Title = "File Synchronization";
        this.Width = 800;
        this.Height = 600;

        // Create a new TreeView control
        TreeView treeView = new TreeView();
        treeView.Width = this.Width;
        treeView.Height = this.Height;

        // Populate the treeView with the file directory structure
        string rootDirectory = GetRootDirectory();
        PopulateTreeView(treeView, rootDirectory);

        // Add the treeView to the window
        this.Content = treeView;
    }

    // Method to get the root directory
    private string GetRootDirectory()
    {
        // Use a file dialog to allow the user to select the root directory
        var dialog = new System.Windows.Forms.FolderBrowserDialog();
        System.Windows.Forms.DialogResult result = dialog.ShowDialog();
        if (result == System.Windows.Forms.DialogResult.OK)
        {
            return dialog.SelectedPath;
        }
        else
        {
            // If the user cancels the dialog, return an empty string
            return string.Empty;
        }
    }

    // Method to populate the treeView with the file directory structure
    private void PopulateTreeView(TreeView treeView, string directory)
    {
        // Check if the directory exists
        if (Directory.Exists(directory))
        {
            // Get the directory info
            DirectoryInfo dirInfo = new DirectoryInfo(directory);

            // Create the root tree node
            var rootNode = new TreeViewItem();
            rootNode.Header = dirInfo.Name;
            rootNode.Tag = dirInfo.FullName;
            treeView.Items.Add(rootNode);

            // Recursively populate the tree view with subdirectories and files
            PopulateTreeView(rootNode, dirInfo);
        }
    }

    // Recursive method to populate the tree view with subdirectories and files
    private void PopulateTreeView(TreeViewItem parentNode, DirectoryInfo parentDirectory)
    {
        // Get the subdirectories of the parent directory
        DirectoryInfo[] subDirectories = parentDirectory.GetDirectories();

        // Iterate over the subdirectories
        foreach (var subDirectory in subDirectories)
        {
            // Create a tree node for the subdirectory
            var subDirectoryNode = new TreeViewItem();
            subDirectoryNode.Header = subDirectory.Name;
            subDirectoryNode.Tag = subDirectory.FullName;
            parentNode.Items.Add(subDirectoryNode);

            // Recursively populate the tree view with subdirectories and files
            PopulateTreeView(subDirectoryNode, subDirectory);
        }

        // Get the files in the parent directory
        FileInfo[] files = parentDirectory.GetFiles();

        // Iterate over the files
        foreach (var file in files)
        {
            // Create a tree node for the file
            var fileNode = new TreeViewItem();
            fileNode.Header = file.Name;
            fileNode.Tag = file.FullName;
            parentNode.Items.Add(fileNode);
        }
    }
}

// Create an instance of the FileSynchronizationWindow and run it
public class Program
{
    [STAThread]
    public static void Main()
    {
        FileSynchronizationWindow window = new FileSynchronizationWindow();
        Application app = new Application();
        app.Run(window);
    }
}
