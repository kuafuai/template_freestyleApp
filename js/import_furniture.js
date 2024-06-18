document.getElementById("import-furniture-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form data
    var size = document.getElementById("size").value;
    var color = document.getElementById("color").value;
    var material = document.getElementById("material").value;
    var image = document.getElementById("image").value;
    var productName = document.getElementById("product-name").value;
    var price = document.getElementById("price").value;
    
    // Validate form data
    if (size === "" || color === "" || material === "" || image === "" || productName === "" || price === "") {
        alert("Please fill out all required fields.");
        return;
    }
    
    // Create form data object
    var formData = {
        size: size,
        color: color,
        material: material,
        image: image,
        productName: productName,
        price: price
    };
    
    // Send form data to backend for processing
    fetch("/api/import-furniture", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error("Error: " + response.status);
        }
        return response.json();
    })
    .then(function(data) {
        // Handle response from backend
        console.log(data);
    })
    .catch(function(error) {
        // Handle error
        console.error(error);
    });
});
