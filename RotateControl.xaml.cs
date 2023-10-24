// Import necessary libraries
using System;
using System.Windows;
using System.Windows.Controls;

// Define the RotateControl class
public class RotateControl : Slider
{
    // Constructor
    public RotateControl()
    {
        // Set the rotate control's properties
        this.ValueChanged += RotateControl_ValueChanged;
    }

    // Event handler for the value changed event
    private void RotateControl_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
    {
        // Get the angle value from the slider
        double angle = e.NewValue;

        // Get the image control from the visual tree
        Image image = FindVisualChild<Image>(this);

        // Rotate the image
        RotateTransform rotateTransform = new RotateTransform(angle);
        image.RenderTransform = rotateTransform;
    }

    // Helper method to find a child control in the visual tree
    private T FindVisualChild<T>(DependencyObject parent) where T : DependencyObject
    {
        for (int i = 0; i < VisualTreeHelper.GetChildrenCount(parent); i++)
        {
            DependencyObject child = VisualTreeHelper.GetChild(parent, i);
            if (child is T)
            {
                return (T)child;
            }
            else
            {
                T result = FindVisualChild<T>(child);
                if (result != null)
                {
                    return result;
                }
            }
        }
        return null;
    }
}