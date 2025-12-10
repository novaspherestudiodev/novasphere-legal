document.addEventListener("DOMContentLoaded", () => {
    
    /* ============================
       1. THEME LOGIC
       ============================ */
    const toggleSwitch = document.querySelector('#theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    if(toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme, false);
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    /* ============================
       2. SCROLL ANIMATIONS (Performance Optimized)
       ============================ */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before element enters view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop watching once triggered (Saves battery)
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-blur, .reveal-pop').forEach((el) => observer.observe(el));

    /* ============================
       3. MOBILE MENU TOGGLE
       ============================ */
    const mobileBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle Icon between Menu and X
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('bx-menu');
                icon.classList.add('bx-x');
            } else {
                icon.classList.remove('bx-x');
                icon.classList.add('bx-menu');
            }
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                icon.classList.remove('bx-x');
                icon.classList.add('bx-menu');
            });
        });
    }
});
