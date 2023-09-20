// JavaScript file for handling the product management functionality
// Add, delete, edit, and view products
// Send requests to the backend API to perform the CRUD operations

// Function to add a product
function addProduct(product) {
  // Send a POST request to the backend API with the product data
  fetch('/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the backend API
    console.log('Product added:', data);
  })
  .catch(error => {
    console.error('Error adding product:', error);
  });
}

// Function to delete a product
function deleteProduct(productId) {
  // Send a DELETE request to the backend API with the product ID
  fetch(`/api/products/${productId}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the backend API
    console.log('Product deleted:', data);
  })
  .catch(error => {
    console.error('Error deleting product:', error);
  });
}

// Function to edit a product
function editProduct(productId, updatedProduct) {
  // Send a PUT request to the backend API with the product ID and updated product data
  fetch(`/api/products/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedProduct)
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the backend API
    console.log('Product updated:', data);
  })
  .catch(error => {
    console.error('Error updating product:', error);
  });
}

// Function to view all products
function viewProducts() {
  // Send a GET request to the backend API to retrieve all products
  fetch('/api/products')
  .then(response => response.json())
  .then(data => {
    // Handle the response from the backend API
    console.log('Products:', data);
  })
  .catch(error => {
    console.error('Error retrieving products:', error);
  });
}
