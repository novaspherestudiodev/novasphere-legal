// ==========================================
// 1. THE APP DATABASE (PLATFORM INTELLIGENCE)
// ==========================================
const appDatabase = {

    // APP 1: FOCUSFLOW (PC ONLY EXAMPLE)
    "focusflow": {
        title: "FocusFlow",
        tagline: "Master your time with the ultimate deep-work companion.",
        category: "Productivity",
        
        // PLATFORMS: "pc" (Windows/Mac/Linux), "mobile" (Android/iOS), or both
        platforms: ["pc"], 

        iconClass: "bx-check-shield", 
        iconImg: "", 
        accentColor: "#6366f1", 
        banner: "linear-gradient(to right, #4338ca, #6366f1)", 
        
        screenshots: ["assets/focus-1.jpg", "assets/focus-2.jpg", "assets/focus-3.jpg"],
        videoPreview: "https://www.youtube.com/embed/dQw4w9WgXcQ", 

        rating: 4.8, reviewsCount: "12.4K", ageRating: "4+", chartPos: "#1 in Efficiency",
        
        version: "2.1.0", updated: "Nov 20, 2025", size: "145 MB",
        whatsNew: "Protocol v2.1: Optimized for Windows 11 Snap Layouts.",

        description: `FocusFlow combines the Pomodoro technique with advanced distraction blocking.`,
        features: ["Pomodoro Timer", "Website Blocker", "Heatmaps"],
        
        // PC Downloads
        downloads: [
            { name: "Windows (x64)", icon: "bxl-windows", link: "#" },
            { name: "MacOS", icon: "bxl-apple", link: "#" }
        ],

        customPrivacy: "", customTerms: ""    
    },

    // APP 2: HYDROSYNC (MOBILE ONLY EXAMPLE)
    "hydrosync": {
        title: "HydroSync",
        tagline: "Smart hydration tracking that adapts to your biology.",
        category: "Health & Fitness",
        
        platforms: ["mobile"], 

        iconClass: "bx-water", iconImg: "assets/hydro-logo.png", accentColor: "#10b981", 
        banner: "linear-gradient(to right, #059669, #10b981)",
        
        screenshots: ["assets/hydro-1.jpg", "assets/hydro-2.jpg", "assets/hydro-3.jpg"],
        videoPreview: "", 

        rating: 4.6, reviewsCount: "8.2K", ageRating: "Everyone", chartPos: "#5 in Health",

        version: "1.4.2", updated: "Oct 15, 2025", size: "28 MB",
        whatsNew: "Winter Update: Algorithm adjusted for colder climates.",

        description: `HydroSync calculates your exact water needs based on biology.`,
        features: ["Bio-adaptive goals", "Apple Health Sync", "Widgets"],
        
        // Mobile Downloads
        downloads: [
            { name: "Google Play", icon: "bxl-play-store", link: "#" },
            { name: "Direct APK", icon: "bx-download", link: "#" }
        ],

        customPrivacy: "hydrosync-privacy.html", customTerms: "hydrosync-terms.html"      
    },

    // APP 3: NOVAWALLET (HYBRID EXAMPLE)
    "novawallet": {
        title: "NovaWallet",
        tagline: "Manage finances anywhere.",
        category: "Finance",
        
        platforms: ["pc", "mobile"], 

        iconClass: "bx-wallet", iconImg: "", accentColor: "#f59e0b", 
        banner: "linear-gradient(to right, #f59e0b, #d97706)",
        
        screenshots: [], videoPreview: "", 
        rating: 4.2, reviewsCount: "1.2K", ageRating: "Teen", chartPos: "#10 in Finance",
        version: "0.9.0", updated: "Dec 01, 2025", size: "40 MB",
        whatsNew: "Cloud Sync enabled between Desktop and Mobile.",
        description: `Sync your finances across all devices.`,
        features: ["Cloud Sync", "Expense Tracking"],
        
        downloads: [
            { name: "Windows", icon: "bxl-windows", link: "#" },
            { name: "Google Play", icon: "bxl-play-store", link: "#" }
        ],
        customPrivacy: "", customTerms: ""
    }

};

// ==========================================
// 2. INJECTION LOGIC
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    
    const appTitleEl = document.getElementById('app-title');
    if(!appTitleEl) return; 

    const urlParams = new URLSearchParams(window.location.search);
    const appId = urlParams.get('app');

    if (!appId || !appDatabase[appId]) {
        document.querySelector('.container').innerHTML = "<h1 style='text-align:center; padding:100px;'>App Not Found</h1>";
        return;
    }

    const data = appDatabase[appId];

    // INJECT BASIC TEXT
    document.title = `${data.title} - NovaSphere`;
    document.getElementById('app-title').textContent = data.title;
    document.getElementById('app-tagline').textContent = data.tagline;
    document.getElementById('app-category').textContent = data.category;
    document.getElementById('app-category').style.color = data.accentColor;

    // INJECT ICON
    const iconContainer = document.getElementById('app-icon');
    iconContainer.innerHTML = ''; 
    if (data.iconImg && data.iconImg.length > 0) {
        const img = document.createElement('img');
        img.src = data.iconImg; img.alt = data.title;
        img.style.width = "100%"; img.style.height = "100%"; img.style.objectFit = "cover"; img.style.borderRadius = "20px";
        img.onerror = function() { this.style.display = 'none'; iconContainer.innerHTML = `<i class='bx ${data.iconClass}'></i>`; };
        iconContainer.appendChild(img);
        iconContainer.style.background = "transparent"; iconContainer.style.boxShadow = "none";
    } else {
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

    // =====================================
    // PLATFORM LOGIC & DEVICE DETECTION
    // =====================================
    const platformContainer = document.getElementById('platform-badges');
    const warningContainer = document.getElementById('device-warning');
    let platformIconsHTML = '';

    // 1. Generate Badges
    if(data.platforms.includes("pc")) {
        platformIconsHTML += `<span class="platform-tag"><i class='bx bxl-windows'></i> PC</span>`;
    }
    if(data.platforms.includes("mobile")) {
        platformIconsHTML += `<span class="platform-tag"><i class='bx bxl-android'></i> Mobile</span>`;
    }
    platformContainer.innerHTML = platformIconsHTML;

    // 2. Detect User Device
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileUser = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

    // 3. Compare & Warn
    // Scenario A: User is on Mobile, but App is PC Only
    if (isMobileUser && !data.platforms.includes("mobile")) {
        warningContainer.style.display = "flex";
        warningContainer.innerHTML = `<i class='bx bx-laptop'></i> <span>Desktop required. This app does not run on phones.</span>`;
    }
    // Scenario B: User is on PC, but App is Mobile Only
    else if (!isMobileUser && !data.platforms.includes("pc")) {
        warningContainer.style.display = "flex";
        warningContainer.innerHTML = `<i class='bx bx-mobile'></i> <span>Mobile App. Please visit on your phone.</span>`;
    }
    else {
        warningContainer.style.display = "none";
    }

    // =====================================
    // END PLATFORM LOGIC
    // =====================================

    // STATS
    document.getElementById('stat-rating').textContent = data.rating;
    document.getElementById('stat-reviews').textContent = data.reviewsCount + " Ratings";
    document.getElementById('stat-age').textContent = data.ageRating;
    document.getElementById('stat-chart').textContent = data.chartPos;

    // WHATS NEW
    document.getElementById('whats-new-text').textContent = data.whatsNew;
    document.getElementById('whats-new-date').textContent = data.updated;

    // GALLERY
    const galleryContainer = document.getElementById('gallery-container');
    if(data.screenshots.length > 0) {
        galleryContainer.innerHTML = data.screenshots.map(src => `
            <div class="gallery-item skeleton">
                <img src="${src}" alt="Screenshot" onload="this.parentElement.classList.remove('skeleton')" onerror="this.src='https://placehold.co/300x600/1a1a1a/FFF?text=No+Image'">
            </div>
        `).join('');
    } else {
        galleryContainer.innerHTML = `<p style="padding:0 2rem; opacity:0.6;">No screenshots available.</p>`;
    }

    // VIDEO
    const videoSection = document.getElementById('video-section');
    if (data.videoPreview && data.videoPreview !== "") {
        videoSection.style.display = "block";
        document.getElementById('video-frame').src = data.videoPreview;
    } else {
        videoSection.style.display = "none";
    }

    // TEXT & DOWNLOADS
    document.getElementById('app-description').innerText = data.description;
    document.getElementById('app-features').innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
    
    document.getElementById('meta-version').textContent = data.version;
    document.getElementById('meta-date').textContent = data.updated;
    document.getElementById('meta-size').textContent = data.size;

    document.getElementById('download-container').innerHTML = data.downloads.map(store => `
        <a href="${store.link}" class="store-btn">
            <i class='bx ${store.icon}'></i>
            <div class="store-text">
                Get it on
                <span>${store.name}</span>
            </div>
        </a>
    `).join('');

    // LEGAL
    const privacyLink = document.getElementById('link-privacy');
    const termsLink = document.getElementById('link-terms');
    
    if(privacyLink) privacyLink.href = (data.customPrivacy && data.customPrivacy !== "") ? data.customPrivacy : `legal.html?app=${appId}&doc=privacy`;
    if(termsLink) termsLink.href = (data.customTerms && data.customTerms !== "") ? data.customTerms : `legal.html?app=${appId}&doc=terms`;

});
