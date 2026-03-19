// Grab the elements from the HTML
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('#nav-links li a');

// Listen for a click on the hamburger menu icon
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class to show or hide the menu
    navLinks.classList.toggle('active');
});

// Close the mobile menu automatically when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});