// JavaScript file for handling the customer management functionality
// Add, delete, edit, and view customers
// Send requests to the backend API to perform the CRUD operations

// Function to add a new customer
function addCustomer(customer) {
  // Send a POST request to the backend API with the customer data
  fetch('/api/customers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the backend API
    console.log('Customer added successfully:', data);
  })
  .catch(error => {
    console.error('Error adding customer:', error);
  });
}

// Function to delete a customer
function deleteCustomer(customerId) {
  // Send a DELETE request to the backend API with the customer ID
  fetch(`/api/customers/${customerId}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the backend API
    console.log('Customer deleted successfully:', data);
  })
  .catch(error => {
    console.error('Error deleting customer:', error);
  });
}

// Function to edit a customer
function editCustomer(customerId, updatedCustomer) {
  // Send a PUT request to the backend API with the customer ID and updated customer data
  fetch(`/api/customers/${customerId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedCustomer)
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the backend API
    console.log('Customer updated successfully:', data);
  })
  .catch(error => {
    console.error('Error updating customer:', error);
  });
}

// Function to view all customers
function viewCustomers() {
  // Send a GET request to the backend API to retrieve all customers
  fetch('/api/customers')
  .then(response => response.json())
  .then(data => {
    // Handle the response from the backend API
    console.log('Customers:', data);
  })
  .catch(error => {
    console.error('Error retrieving customers:', error);
  });
}
