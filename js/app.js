document.addEventListener("DOMContentLoaded", () => {
    
    // Select all elements with animation classes
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once animated (for performance)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target elements with these classes
    const hiddenElements = document.querySelectorAll('.reveal-blur, .reveal-pop');
    hiddenElements.forEach((el) => observer.observe(el));
});
