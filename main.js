// main.js

function generateEmojis() {
    var description = document.getElementById("descriptionInput").value;
    // Call chatgpt SDK to generate 10 emojis based on the description
    // Display the generated emojis in the emojisContainer
    // Add click event listeners to the emojis to select the final emoji

    // Example implementation using a mock API call
    fetch("https://api.example.com/generate-emojis", {
        method: "POST",
        body: JSON.stringify({ description: description }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        var emojisContainer = document.getElementById("emojisContainer");
        emojisContainer.innerHTML = ""; // Clear previous emojis

        data.emojis.forEach(emoji => {
            var emojiElement = document.createElement("div");
            emojiElement.classList.add("emoji");
            emojiElement.innerHTML = emoji;
            emojiElement.addEventListener("click", function() {
                selectEmoji(emoji);
            });
            emojisContainer.appendChild(emojiElement);
        });
    })
    .catch(error => {
        console.error("Error generating emojis:", error);
    });
}

function selectEmoji(emoji) {
    var emojis = document.getElementsByClassName("emoji");
    for (var i = 0; i < emojis.length; i++) {
        emojis[i].classList.remove("selected");
    }
    emoji.classList.add("selected");
}

function downloadEmoji() {
    var selectedEmoji = document.getElementsByClassName("emoji selected")[0];
    if (selectedEmoji) {
        var emojiUrl = selectedEmoji.innerHTML;
        // Trigger a download of the emoji
        var link = document.createElement("a");
        link.href = emojiUrl;
        link.download = "emoji.png";
        link.click();
    } else {
        console.error("No emoji selected");
    }
}

function shareEmoji() {
    var selectedEmoji = document.getElementsByClassName("emoji selected")[0];
    if (selectedEmoji) {
        var emojiUrl = selectedEmoji.innerHTML;
        // Share the emoji on social media platform
        window.open("https://example.com/share?emoji=" + encodeURIComponent(emojiUrl));
    } else {
        console.error("No emoji selected");
    }
}
