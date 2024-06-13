<!-- BookingForm.html -->

<div class="ui form">
  <div class="field">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Enter your name">
  </div>
  <div class="field">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Enter your email">
  </div>
  <div class="field">
    <label for="phone">Phone</label>
    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">
  </div>
  <div class="field">
    <label for="check-in">Check-in Date</label>
    <input type="date" id="check-in" name="check-in">
  </div>
  <div class="field">
    <label for="check-out">Check-out Date</label>
    <input type="date" id="check-out" name="check-out">
  </div>
  <button class="ui button" onclick="submitForm()">Submit</button>
</div>

<script>
  function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var checkIn = document.getElementById("check-in").value;
    var checkOut = document.getElementById("check-out").value;

    // Perform form validation here

    // Send form data to the server
    var formData = {
      name: name,
      email: email,
      phone: phone,
      checkIn: checkIn,
      checkOut: checkOut
    };

    // Make an AJAX request to submit the form data
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/booking", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Handle successful form submission
        alert("Booking successful!");
      } else {
        // Handle form submission error
        alert("Booking failed. Please try again later.");
      }
    };
    xhr.send(JSON.stringify(formData));
  }
</script>
