// ==========================================
// 1. THE APP DATABASE (STORE V2.0)
// ==========================================
const appDatabase = {

    // APP 1: FOCUSFLOW
    "focusflow": {
        title: "FocusFlow",
        tagline: "Master your time with the ultimate deep-work companion.",
        category: "Productivity",
        
        // VISUALS
        iconClass: "bx-check-shield", 
        iconImg: "", 
        accentColor: "#6366f1", 
        banner: "linear-gradient(to right, #4338ca, #6366f1)", 
        
        // NEW: VIDEO & SCREENSHOTS (7+ Slots)
        // Use 16:9 or 9:16 aspect ratio images for best results
        screenshots: [
            "assets/focus-shot-1.jpg", 
            "assets/focus-shot-2.jpg",
            "assets/focus-shot-3.jpg",
            "assets/focus-shot-4.jpg",
            "assets/focus-shot-5.jpg",
            "assets/focus-shot-6.jpg",
            "assets/focus-shot-7.jpg"
        ],
        videoPreview: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=Example", // Replace with real Embed URL

        // STORE STATS
        rating: 4.8,
        reviewsCount: "12.4K",
        ageRating: "4+",
        chartPos: "#1 in Efficiency",
        
        // META DATA
        version: "2.1.0",
        updated: "Nov 20, 2025",
        size: "45 MB",
        
        // WHATS NEW
        whatsNew: "Protocol v2.1 initialized. Added 'Deep Void' dark mode, fixed synchronization latency on neural-link devices, and optimized Pomodoro engine for 20% less battery consumption.",

        description: `FocusFlow isn't just a timer; it's a workflow philosophy. Designed for freelancers and developers, it combines the Pomodoro technique with advanced distraction blocking.
        
        It helps you get into the "Zone" faster and stay there longer. With detailed analytics, you can see exactly where your time goes.`,
        
        features: [
            "Customizable Pomodoro Timer",
            "Website & App Blocker (Strict Mode)",
            "Ambient Noise Generator",
            "Productivity Heatmaps",
            "Cloud Sync"
        ],
        downloads: [
            { name: "Google Play", icon: "bxl-play-store", link: "#" },
            { name: "AppGallery", icon: "bxl-android", link: "#" }
        ],

        // LEGAL
        customPrivacy: "", 
        customTerms: ""    
    },

    // APP 2: HYDROSYNC
    "hydrosync": {
        title: "HydroSync",
        tagline: "Smart hydration tracking that adapts to your biology.",
        category: "Health & Fitness",
        
        iconClass: "bx-water",
        iconImg: "assets/hydro-logo.png", 
        accentColor: "#10b981", 
        banner: "linear-gradient(to right, #059669, #10b981)",
        
        screenshots: [
            "assets/hydro-1.jpg", 
            "assets/hydro-2.jpg",
            "assets/hydro-3.jpg",
            "assets/hydro-4.jpg",
            "assets/hydro-5.jpg",
            "assets/hydro-6.jpg",
            "assets/hydro-7.jpg"
        ],
        videoPreview: "", // Leave empty to hide video section

        rating: 4.6,
        reviewsCount: "8.2K",
        ageRating: "Everyone",
        chartPos: "#5 in Health",

        version: "1.4.2",
        updated: "Oct 15, 2025",
        size: "28 MB",
        
        whatsNew: "Winter Update: Algorithm adjusted for colder climates. Added new 'Hot Tea' logging option and widget support for iOS 18.",

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

        customPrivacy: "hydrosync-privacy.html", 
        customTerms: "hydrosync-terms.html"      
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
        document.querySelector('.container').innerHTML = "<h1 style='text-align:center; padding:100px;'>System Error: App Data Not Found</h1>";
        return;
    }

    const data = appDatabase[appId];

    // BASICS
    document.title = `${data.title} - NovaSphere`;
    document.getElementById('app-title').textContent = data.title;
    document.getElementById('app-tagline').textContent = data.tagline;
    document.getElementById('app-category').textContent = data.category;
    document.getElementById('app-category').style.color = data.accentColor;

    // ICON
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

    // BANNER
    const bannerDiv = document.getElementById('hero-bg');
    if(data.banner.includes('http') || data.banner.includes('assets') || data.banner.includes('url')) {
        bannerDiv.style.backgroundImage = `url(${data.banner})`;
    } else {
        bannerDiv.style.background = data.banner;
    }

    // STATS BAR
    document.getElementById('stat-rating').textContent = data.rating;
    document.getElementById('stat-reviews').textContent = data.reviewsCount + " Ratings";
    document.getElementById('stat-age').textContent = data.ageRating;
    document.getElementById('stat-chart').textContent = data.chartPos;

    // WHATS NEW
    document.getElementById('whats-new-text').textContent = data.whatsNew;
    document.getElementById('whats-new-date').textContent = data.updated;

    // SCREENSHOTS GALLERY
    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = data.screenshots.map(src => `
        <div class="gallery-item skeleton">
            <img src="${src}" alt="Screenshot" onload="this.parentElement.classList.remove('skeleton')" onerror="this.src='https://placehold.co/300x600/1a1a1a/FFF?text=No+Image'">
        </div>
    `).join('');

    // VIDEO SECTION
    const videoSection = document.getElementById('video-section');
    const videoFrame = document.getElementById('video-frame');
    
    if (data.videoPreview && data.videoPreview !== "") {
        videoSection.style.display = "block";
        videoFrame.src = data.videoPreview;
    } else {
        videoSection.style.display = "none";
    }

    // DESCRIPTION & FEATURES
    document.getElementById('app-description').innerText = data.description;
    document.getElementById('app-features').innerHTML = data.features.map(f => `<li>${f}</li>`).join('');

    // META
    document.getElementById('meta-version').textContent = data.version;
    document.getElementById('meta-date').textContent = data.updated;
    document.getElementById('meta-size').textContent = data.size;

    // DOWNLOADS
    document.getElementById('download-container').innerHTML = data.downloads.map(store => `
        <a href="${store.link}" class="store-btn">
            <i class='bx ${store.icon}'></i>
            <div class="store-text">
                Get it on
                <span>${store.name}</span>
            </div>
        </a>
    `).join('');

    // LEGAL LINKS
    const privacyLink = document.getElementById('link-privacy');
    const termsLink = document.getElementById('link-terms');
    
    if(privacyLink) privacyLink.href = (data.customPrivacy && data.customPrivacy !== "") ? data.customPrivacy : `legal.html?app=${appId}&doc=privacy`;
    if(termsLink) termsLink.href = (data.customTerms && data.customTerms !== "") ? data.customTerms : `legal.html?app=${appId}&doc=terms`;

});
