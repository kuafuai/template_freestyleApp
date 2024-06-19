// script.js
// Add event listeners for navigation links
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("nav ul li a");
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = link.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);
            if (targetSection) {
                if (window.scrollTo) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: "smooth"
                    });
                } else {
                    var targetOffsetTop = targetSection.offsetTop;
                    var scrollStep = Math.PI / (targetOffsetTop / 500);
                    var count = 0;
                    var scrollInterval = setInterval(function() {
                        if (window.pageYOffset === targetOffsetTop) {
                            clearInterval(scrollInterval);
                        }
                        count += 1;
                        var scrollPosition = targetOffsetTop * 0.5 * (1 - Math.cos(count * scrollStep));
                        window.scrollTo(0, scrollPosition);
                    }, 10);
                }
            } else {
                console.error("Target section does not exist");
            }
        });
    });
});