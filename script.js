document.addEventListener('DOMContentLoaded', () => {
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// close menu//
const links =navLinks.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    })
})
});







 