var helloWorldDiv = document.getElementById("helloWorldDiv");

if (helloWorldDiv) {
  helloWorldDiv.innerHTML = "Hello World";
} else {
  console.error("Element with id 'helloWorldDiv' not found");
}