document.getElementById("import-furniture-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form data
    var size = document.getElementById("size").value;
    var color = document.getElementById("color").value;
    var material = document.getElementById("material").value;
    var image = document.getElementById("image").value;
    var productName = document.getElementById("product-name").value;
    var price = document.getElementById("price").value;
    
    // Send form data to backend for processing
    // ...
});
