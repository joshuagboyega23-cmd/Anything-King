const anythingKing = document.getElementById('anythingking');
const navLinks = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-btn');

anythingKing.addEventListener('click', ()=> {
    navLinks.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});