const toggleSwitch = document.querySelector('#theme-toggle');
const currentTheme = localStorage.getItem('theme');

// 1. Check Local Storage or System Preference
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
}

// 2. Toggle Function
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// 3. Event Listener (if button exists)
if(toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false);
    // Set correct state of checkbox on load
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        toggleSwitch.checked = true;
    }
}
