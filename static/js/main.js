// Accessibility enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Add keyboard navigation support
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                link.click();
            }
        });
    });

    // Add focus states for better screen reader support
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(el => {
        el.addEventListener('focus', () => {
            el.classList.add('focused');
        });
        el.addEventListener('blur', () => {
            el.classList.remove('focused');
        });
    });
});
