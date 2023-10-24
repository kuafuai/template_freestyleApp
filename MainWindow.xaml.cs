using System;
using System.IO;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media.Imaging;

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    private void Window_Loaded(object sender, RoutedEventArgs e)
    {
        // Load folder structure into treeFolders
        LoadFolderStructure();
    }

    private void LoadFolderStructure()
    {
        // Get the selected file path from txtFilePath
        string selectedPath = txtFilePath.Text;

        // Clear existing items in treeFolders
        treeFolders.Items.Clear();

        // Check if the selected path exists
        if (string.IsNullOrEmpty(selectedPath))
        {
            MessageBox.Show("Please enter a valid path");
            return;
        }

        if (!Directory.Exists(selectedPath))
        {
            MessageBox.Show("The selected path is not a valid directory");
            return;
        }

        // Create a new TreeViewItem for the selected path
        TreeViewItem rootItem = new TreeViewItem();
        rootItem.Header = selectedPath;
        rootItem.IsExpanded = true;

        // Recursively add subfolders and files to the rootItem
        AddSubfoldersAndFiles(selectedPath, rootItem);

        // Add the rootItem to treeFolders
        treeFolders.Items.Add(rootItem);
    }

    private void AddSubfoldersAndFiles(string folderPath, TreeViewItem parentItem)
    {
        // Get all subfolders in the folderPath
        string[] subfolders = Directory.GetDirectories(folderPath);

        // Loop through each subfolder
        foreach (string subfolder in subfolders)
        {
            // Create a new TreeViewItem for the subfolder
            TreeViewItem subfolderItem = new TreeViewItem();
            subfolderItem.Header = Path.GetFileName(subfolder);

            // Recursively add subfolders and files to the subfolderItem
            AddSubfoldersAndFiles(subfolder, subfolderItem);

            // Add the subfolderItem to the parentItem
            parentItem.Items.Add(subfolderItem);
        }

        // Get all files in the folderPath
        string[] files = Directory.GetFiles(folderPath);

        // Loop through each file
        foreach (string file in files)
        {
            // Create a new TreeViewItem for the file
            TreeViewItem fileItem = new TreeViewItem();
            fileItem.Header = Path.GetFileName(file);

            // Add the fileItem to the parentItem
            parentItem.Items.Add(fileItem);
        }
    }

    private void treeFolders_SelectedItemChanged(object sender, RoutedPropertyChangedEventArgs<object> e)
    {
        // Get the selected item from treeFolders
        TreeViewItem selectedItem = (TreeViewItem)treeFolders.SelectedItem;

        // Check if the selected item is a file
        if (selectedItem != null && selectedItem.Items.Count == 0)
        {
            // Get the file path
            string filePath = txtFilePath.Text + "\\" + selectedItem.Header.ToString();

            // Check if the file is an image
            if (IsImageFile(filePath))
            {
                // Display the image in imgPreview
                DisplayImage(filePath);
            }
        }
    }

    private bool IsImageFile(string filePath)
    {
        // Get the file extension
        string fileExtension = Path.GetExtension(filePath);

        // Check if the file extension is a supported image format
        return fileExtension.Equals(".jpg", StringComparison.OrdinalIgnoreCase) ||
               fileExtension.Equals(".jpeg", StringComparison.OrdinalIgnoreCase) ||
               fileExtension.Equals(".png", StringComparison.OrdinalIgnoreCase) ||
               fileExtension.Equals(".gif", StringComparison.OrdinalIgnoreCase);
    }

    private void DisplayImage(string filePath)
    {
        // Create a new BitmapImage
        BitmapImage bitmap = new BitmapImage();

        // Set the source of the BitmapImage to the file path
        bitmap.BeginInit();
        bitmap.UriSource = new Uri(filePath);
        bitmap.EndInit();

        // Set the source of imgPreview to the BitmapImage
        imgPreview.Source = bitmap;
    }

    private void btnSearch_Click(object sender, RoutedEventArgs e)
    {
        // Get the search criteria from txtSearchName, dpSearchStartDate, and dpSearchEndDate
        string searchName = txtSearchName.Text;
        DateTime searchStartDate = dpSearchStartDate.SelectedDate ?? DateTime.MinValue;
        DateTime searchEndDate = dpSearchEndDate.SelectedDate ?? DateTime.MaxValue;

        // Perform the search and update lstImages with the results
        SearchImages(searchName, searchStartDate, searchEndDate);
    }

    private void SearchImages(string searchName, DateTime searchStartDate, DateTime searchEndDate)
    {
        // Clear existing items in lstImages
        lstImages.Items.Clear();

        // Get all files in the selected folder
        string[] files = Directory.GetFiles(txtFilePath.Text);

        // Loop through each file
        foreach (string file in files)
        {
            // Check if the file is an image
            if (IsImageFile(file))
            {
                // Get the file name, size, path, and creation time
                string fileName = Path.GetFileName(file);
                long fileSize = new FileInfo(file).Length;
                string filePath = file;
                DateTime fileCreationTime = File.GetCreationTime(file);

                // Check if the file matches the search criteria
                if (fileName.Contains(searchName) && fileCreationTime >= searchStartDate && fileCreationTime <= searchEndDate)
                {
                    // Create a new ListViewItem for the file
                    ListViewItem listItem = new ListViewItem();
                    listItem.Content = new string[] { fileName, fileSize.ToString(), filePath, fileCreationTime.ToString() };

                    // Add the listItem to lstImages
                    lstImages.Items.Add(listItem);
                }
            }
        }
    }

    private void btnPreview_Click(object sender, RoutedEventArgs e)
    {
        // Get the selected item from lstImages
        ListViewItem selectedItem = (ListViewItem)lstImages.SelectedItem;

        // Check if an item is selected
        if (selectedItem != null)
        {
            // Get the file path from the selected item
            string filePath = selectedItem.Content[2].ToString();

            // Check if the file is an image
            if (IsImageFile(filePath))
            {
                // Display the image in imgPreview
                DisplayImage(filePath);
            }
        }
    }

    private void btnShare_Click(object sender, RoutedEventArgs e)
    {
        // Get the selected item from lstImages
        ListViewItem selectedItem = (ListViewItem)lstImages.SelectedItem;

        // Check if an item is selected
        if (selectedItem != null)
        {
            // Get the file path from the selected item
            string filePath = selectedItem.Content[2].ToString();

            // Check if the file is an image
            if (IsImageFile(filePath))
            {
                // Generate the HTTP link for the image
                string httpLink = GenerateHttpLink(filePath);

                // Display the HTTP link
                MessageBox.Show(httpLink);
            }
        }
    }

    private string GenerateHttpLink(string filePath)
    {
        // Generate the HTTP link for the file
        // Replace this with your own implementation

        return "http://example.com/image.jpg";
    }
}
