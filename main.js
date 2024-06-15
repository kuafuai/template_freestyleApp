// Purpose: Handle form submission and select a random option

document.getElementById('options-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var optionsInput = document.getElementById('options');
    var options = optionsInput.value.split(',');

    if (options.length > 0) {
        var randomIndex = Math.floor(Math.random() * options.length);
        var randomOption = options[randomIndex];

        document.getElementById('result').textContent = randomOption;
    }
});
