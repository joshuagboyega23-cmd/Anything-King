document.addEventListener('DOMContentLoaded', () => {
const anything = document.getElementById('anything');
const navLinks = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-btn');

anything.addEventListener('click', () => {
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







 