document.getElementById("import-layout-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form data
    var buildingName = document.getElementById("building-name").value;
    var layoutInfo = document.getElementById("layout-info").value;
    
    // Send form data to backend for processing
    // ...
});
