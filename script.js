// script.js
document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("home");
    const productLink = document.getElementById("product");
    const searchLink = document.getElementById("search");
    const inquiryLink = document.getElementById("inquiry");
    const content = document.querySelector(".content");
    const productInfo = document.querySelector(".product-info");
    const searchResults = document.querySelector(".search-results");
    const inquiryForm = document.querySelector(".inquiry-form");
    const productList = document.getElementById("product-list");
    const searchList = document.getElementById("search-list");
    const inquiryFormElement = document.getElementById("inquiry-form");
    const inquiryMessage = document.getElementById("inquiry-message");

    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        content.innerHTML = "<h1>AI综合能源管理软件</h1><p>介绍AI综合能源管理软件的功能和特点。</p>";
        productInfo.classList.remove("active");
        searchResults.classList.remove("active");
        inquiryForm.classList.remove("active");
    });

    productLink.addEventListener("click", function(event) {
        event.preventDefault();
        content.innerHTML = "<h1>AI综合能源管理软件</h1><p>介绍AI综合能源管理软件的功能和特点。</p>";
        productInfo.classList.add("active");
        searchResults.classList.remove("active");
        inquiryForm.classList.remove("active");
        fetchProductInfo();
    });

    searchLink.addEventListener("click", function(event) {
        event.preventDefault();
        content.innerHTML = "<h1>AI综合能源管理软件</h1><p>介绍AI综合能源管理软件的功能和特点。</p>";
        productInfo.classList.remove("active");
        searchResults.classList.add("active");
        inquiryForm.classList.remove("active");
    });

    inquiryLink.addEventListener("click", function(event) {
        event.preventDefault();
        content.innerHTML = "<h1>AI综合能源管理软件</h1><p>介绍AI综合能源管理软件的功能和特点。</p>";
        productInfo.classList.remove("active");
        searchResults.classList.remove("active");
        inquiryForm.classList.add("active");
    });

    inquiryFormElement.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        submitInquiryForm(name, email, message);
    });

    function fetchProductInfo() {
        // Fetch product information from the backend and generate HTML elements to display the information
        // CODE
    }

    function submitInquiryForm(name, email, message) {
        // Send inquiry form data to the backend and display success or failure message
        // CODE
    }
});
