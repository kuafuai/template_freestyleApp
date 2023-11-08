// Add animation effects to sections on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight) {
            section.classList.add('animate');
        } else {
            section.classList.remove('animate');
        }
    });
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        // Submit form
        form.reset();
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all fields.');
    }
});
