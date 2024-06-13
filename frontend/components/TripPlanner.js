<!DOCTYPE html>
<html>
<head>
    <title>Trip Planner</title>
    <style>
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            font-weight: bold;
        }
        .form-group input[type="text"] {
            width: 100%;
            padding: 5px;
        }
        .form-group button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        .form-group button:hover {
            background-color: #45a049;
        }
        .trip-details {
            margin-top: 20px;
            border: 1px solid #ccc;
            padding: 10px;
        }
        .trip-details h2 {
            margin-top: 0;
        }
    </style>
</head>
<body>
    <div id="trip-planner">
        <div class="form-group">
            <label for="destination">Destination:</label>
            <input type="text" id="destination" placeholder="Enter destination">
        </div>
        <div class="form-group">
            <label for="start-date">Start Date:</label>
            <input type="text" id="start-date" placeholder="Enter start date">
        </div>
        <div class="form-group">
            <label for="end-date">End Date:</label>
            <input type="text" id="end-date" placeholder="Enter end date">
        </div>
        <div class="form-group">
            <button id="plan-trip">Plan Trip</button>
        </div>
        <div class="trip-details">
            <h2>Trip Details</h2>
            <p id="destination-details"></p>
            <p id="start-date-details"></p>
            <p id="end-date-details"></p>
        </div>
    </div>

    <script>
        document.getElementById("plan-trip").addEventListener("click", function() {
            var destination = document.getElementById("destination").value;
            var startDate = document.getElementById("start-date").value;
            var endDate = document.getElementById("end-date").value;

            document.getElementById("destination-details").innerHTML = "Destination: " + destination;
            document.getElementById("start-date-details").innerHTML = "Start Date: " + startDate;
            document.getElementById("end-date-details").innerHTML = "End Date: " + endDate;
        });
    </script>
</body>
</html>
