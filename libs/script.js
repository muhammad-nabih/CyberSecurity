AOS.init({
    duration: 1000,
    once: true
});

// Mobile menu toggle
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('.navbar ul').classList.toggle('show');
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.background = 'rgba(21, 18, 17, 0.9)';
        document.querySelector('.navbar').style.padding = '0.5rem 0';
    } else {
        document.querySelector('.navbar').style.background = '#151211';
        document.querySelector('.navbar').style.padding = '1rem 0';
    }
});
