document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ANIMATION OBSERVER (The Eyes)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 2. PRODUCT PAGE LOGIC (Only runs on product.html)
    if (window.location.pathname.includes('product.html')) {
        loadProduct();
    }
});

function loadProduct() {
    const params = new URLSearchParams(window.location.search);
    const appId = params.get('app');
    
    // Redirect if invalid
    if (!appId || !appDatabase[appId]) {
        document.querySelector('.container').innerHTML = "<h1 style='text-align:center; padding-top:100px'>404: DATA_NOT_FOUND</h1>";
        return;
    }

    const data = appDatabase[appId];

    // Text Injection
    document.title = `${data.title} | NovaSphere`;
    setText('app-title', data.title);
    setText('app-tagline', data.tagline);
    setText('app-desc', data.description);
    setText('meta-version', data.version);
    setText('meta-size', data.size);
    setText('meta-date', data.updated);

    // Visual Injection
    const iconEl = document.getElementById('app-icon-container');
    // Check if image exists, otherwise fall back or handle error
    iconEl.innerHTML = `<img src="${data.iconImage}" alt="${data.title}" class="app-icon-img" onerror="this.style.display='none'">`;
    
    document.getElementById('hero-bg').style.background = data.banner;

    // Feature List
    const featList = document.getElementById('app-features');
    featList.innerHTML = data.features.map(f => `<li><i class='bx bx-check-circle' style='color:var(--accent-primary)'></i> ${f}</li>`).join('');

    // Download Buttons
    const dlContainer = document.getElementById('download-buttons');
    dlContainer.innerHTML = data.downloads.map(btn => `
        <a href="${btn.link}" class="btn btn-primary" style="margin-right:10px; margin-bottom:10px;">
            <i class='bx ${btn.icon}'></i> ${btn.name}
        </a>
    `).join('');

    // Legal Links for this specific app
    document.getElementById('link-terms').href = data.legal.terms;
    document.getElementById('link-privacy').href = data.legal.privacy;
}

// Helper
function setText(id, text) {
    const el = document.getElementById(id);
    if(el) el.innerText = text;
}
