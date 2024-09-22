document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentUrl = window.location.pathname;

    navLinks.forEach(link => {
        if(link.href.includes(currentUrl)) {
            link.style.color = 'yellow'; // Highlight the active page link
        }
    });
});
