function editInvoice(id) {
    // Get invoice details from the user
    var content = prompt("Enter content:");
    var date = prompt("Enter date (YYYY-MM-DD):");
    var number = prompt("Enter number:");
    var amount = prompt("Enter amount:");

    // Send AJAX request to update invoice details
    fetch(`/edit_invoice?id=${id}&content=${content}&date=${date}&number=${number}&amount=${amount}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        location.reload();
    })
    .catch(error => {
        alert("An error occurred while updating the invoice.");
        console.error(error);
    });
}

function deleteInvoice(id) {
    // Confirm deletion with the user
    if (confirm("Are you sure you want to delete this invoice?")) {
        // Send AJAX request to delete invoice
        fetch(`/delete_invoice?id=${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            location.reload();
        })
        .catch(error => {
            alert("An error occurred while deleting the invoice.");
            console.error(error);
        });
    }
}

function calculateTotalAmount() {
    // Send AJAX request to calculate total amount
    fetch("/calculate_total_amount")
    .then(response => response.json())
    .then(data => {
        var totalAmount = data.total_amount;
        document.getElementById("totalAmount").innerHTML = "Total Amount: " + totalAmount;
    })
    .catch(error => {
        alert("An error occurred while calculating the total amount.");
        console.error(error);
    });
}
