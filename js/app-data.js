// ==========================================
// 1. THE APP DATABASE
// ==========================================
const appDatabase = {

    // APP 1: FOCUSFLOW (Uses Auto-Generated Legal)
    "focusflow": {
        title: "FocusFlow",
        tagline: "Master your time with the ultimate deep-work companion.",
        category: "Productivity",
        
        // VISUALS
        iconClass: "bx-check-shield", 
        iconImg: "", // Empty = Use Icon
        accentColor: "#6366f1", 
        banner: "linear-gradient(to right, #4338ca, #6366f1)", 
        
        // META DATA
        version: "2.1.0",
        updated: "Nov 20, 2025",
        size: "45 MB",
        description: `FocusFlow isn't just a timer; it's a workflow philosophy. Designed for freelancers and developers, it combines the Pomodoro technique with advanced distraction blocking.`,
        features: [
            "Customizable Pomodoro Timer",
            "Website & App Blocker (Strict Mode)",
            "Ambient Noise Generator",
            "Productivity Heatmaps"
        ],
        downloads: [
            { name: "Google Play", icon: "bxl-play-store", link: "#" },
            { name: "AppGallery", icon: "bxl-android", link: "#" }
        ],

        // LEGAL OVERRIDES (Leave empty to use Auto-Generator)
        customPrivacy: "", 
        customTerms: ""    
    },

    // APP 2: HYDROSYNC (Uses Custom Separate Files)
    "hydrosync": {
        title: "HydroSync",
        tagline: "Smart hydration tracking that adapts to your biology.",
        category: "Health & Fitness",
        
        // VISUALS
        iconClass: "bx-water",
        iconImg: "assets/hydro-logo.png", 
        accentColor: "#10b981", 
        banner: "linear-gradient(to right, #059669, #10b981)",
        
        // META DATA
        version: "1.4.2",
        updated: "Oct 15, 2025",
        size: "28 MB",
        description: `HydroSync calculates your exact water needs based on your weight, the current local temperature, and your daily step count.`,
        features: [
            "Bio-adaptive hydration goals",
            "Weather integration",
            "Apple Health Sync",
            "Home Screen Widgets"
        ],
        downloads: [
            { name: "Google Play", icon: "bxl-play-store", link: "#" },
            { name: "Direct APK", icon: "bx-download", link: "#" }
        ],

        // LEGAL OVERRIDES (Points to specific files you create)
        customPrivacy: "hydrosync-privacy.html", 
        customTerms: "hydrosync-terms.html"      
    }

};

// ==========================================
// 2. INJECTION LOGIC
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    
    // Only run if we are on the product page
    const appTitleEl = document.getElementById('app-title');
    if(!appTitleEl) return; 

    const urlParams = new URLSearchParams(window.location.search);
    const appId = urlParams.get('app');

    // ERROR CHECK
    if (!appId || !appDatabase[appId]) {
        document.querySelector('.container').innerHTML = "<h1 style='text-align:center; padding:100px;'>System Error: App Data Not Found</h1>";
        return;
    }

    const data = appDatabase[appId];

    // INJECT TEXT
    document.title = `${data.title} - NovaSphere`;
    document.getElementById('app-title').textContent = data.title;
    document.getElementById('app-tagline').textContent = data.tagline;
    document.getElementById('app-category').textContent = data.category;
    document.getElementById('app-category').style.color = data.accentColor;

    // INJECT ICON / IMAGE
    const iconContainer = document.getElementById('app-icon');
    iconContainer.innerHTML = ''; // Clear defaults
    
    if (data.iconImg && data.iconImg.length > 0) {
        // Image Mode
        const img = document.createElement('img');
        img.src = data.iconImg;
        img.alt = data.title;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.borderRadius = "20px";
        img.onerror = function() {
            this.style.display = 'none';
            iconContainer.innerHTML = `<i class='bx ${data.iconClass}'></i>`; // Fallback
        };
        iconContainer.appendChild(img);
        iconContainer.style.background = "transparent";
        iconContainer.style.boxShadow = "none";
    } else {
        // Icon Mode
        iconContainer.innerHTML = `<i class='bx ${data.iconClass}'></i>`;
        iconContainer.style.color = data.accentColor;
        iconContainer.style.boxShadow = `0 20px 40px ${data.accentColor}40`;
    }

    // INJECT BANNER
    const bannerDiv = document.getElementById('hero-bg');
    if(data.banner.includes('http') || data.banner.includes('assets') || data.banner.includes('url')) {
        bannerDiv.style.backgroundImage = `url(${data.banner})`;
    } else {
        bannerDiv.style.background = data.banner;
    }

    // INJECT META DATA
    document.getElementById('meta-version').textContent = data.version;
    document.getElementById('meta-date').textContent = data.updated;
    document.getElementById('meta-size').textContent = data.size;
    document.getElementById('app-description').innerText = data.description;

    // INJECT FEATURES
    const featuresList = document.getElementById('app-features');
    featuresList.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');

    // INJECT DOWNLOADS
    const downloadContainer = document.getElementById('download-container');
    downloadContainer.innerHTML = data.downloads.map(store => `
        <a href="${store.link}" class="store-btn">
            <i class='bx ${store.icon}'></i>
            <div class="store-text">
                Get it on
                <span>${store.name}</span>
            </div>
        </a>
    `).join('');

    // ==========================================
    // 3. HYBRID LEGAL PROTOCOL
    // ==========================================
    const privacyLink = document.getElementById('link-privacy');
    const termsLink = document.getElementById('link-terms');
    
    if(privacyLink) {
        // Logic: If custom link exists, use it. Else, use generator.
        if(data.customPrivacy && data.customPrivacy !== "") {
            privacyLink.href = data.customPrivacy;
        } else {
            privacyLink.href = `legal.html?app=${appId}&doc=privacy`;
        }
    }

    if(termsLink) {
        if(data.customTerms && data.customTerms !== "") {
            termsLink.href = data.customTerms;
        } else {
            termsLink.href = `legal.html?app=${appId}&doc=terms`;
        }
    }

});
