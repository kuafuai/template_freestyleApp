// Add event listener to add product button
document.getElementById("addProductButton").addEventListener("click", function() {
  showAddProductForm();
});

// Function to show add product form
function showAddProductForm() {
  var form = document.createElement("form");

  var productNumberInput = document.createElement("input");
  productNumberInput.type = "text";
  productNumberInput.placeholder = "Product Number";

  var productNameInput = document.createElement("input");
  productNameInput.type = "text";
  productNameInput.placeholder = "Product Name";

  var productSpecInput = document.createElement("input");
  productSpecInput.type = "text";
  productSpecInput.placeholder = "Product Specification";

  var productSizeInput = document.createElement("input");
  productSizeInput.type = "text";
  productSizeInput.placeholder = "Product Size";

  var productColorInput = document.createElement("input");
  productColorInput.type = "text";
  productColorInput.placeholder = "Product Color";

  var productStyleInput = document.createElement("input");
  productStyleInput.type = "text";
  productStyleInput.placeholder = "Product Style";

  var productPriceInput = document.createElement("input");
  productPriceInput.type = "text";
  productPriceInput.placeholder = "Product Price";

  var productDescriptionInput = document.createElement("textarea");
  productDescriptionInput.placeholder = "Product Description";

  var submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Add Product";

  form.appendChild(productNumberInput);
  form.appendChild(productNameInput);
  form.appendChild(productSpecInput);
  form.appendChild(productSizeInput);
  form.appendChild(productColorInput);
  form.appendChild(productStyleInput);
  form.appendChild(productPriceInput);
  form.appendChild(productDescriptionInput);
  form.appendChild(submitButton);

  showModalDialog(form);
}

// Function to display form as a modal dialog
function showModalDialog(form) {
  var modalDialog = document.createElement("div");
  modalDialog.classList.add("modalDialog");

  var modalDialogContent = document.createElement("div");
  modalDialogContent.classList.add("modalDialogContent");

  modalDialogContent.appendChild(form);

  modalDialog.appendChild(modalDialogContent);

  document.body.appendChild(modalDialog);
}

// Add event listener to product images
var productImages = document.getElementsByClassName("productImage");
for (var i = 0; i < productImages.length; i++) {
  productImages[i].addEventListener("mouseover", function() {
    showProductNameAndPrice(this);
  });

  productImages[i].addEventListener("mouseout", function() {
    hideProductNameAndPrice(this);
  });

  productImages[i].addEventListener("click", function() {
    navigateToProductDetailsPage(this);
  });
}

// Function to show product name and price
function showProductNameAndPrice(productImage) {
  var productName = document.createElement("div");
  productName.textContent = "Product Name";

  var productPrice = document.createElement("div");
  productPrice.textContent = "Product Price";

  productImage.appendChild(productName);
  productImage.appendChild(productPrice);
}

// Function to hide product name and price
function hideProductNameAndPrice(productImage) {
  productImage.innerHTML = "";
}

// Function to navigate to product details page
function navigateToProductDetailsPage(productImage) {
  var productDetailsLink = document.getElementById("productDetailsLink");

  productDetailsLink.href = "productDetails.html";

  productDetailsLink.click();
}
