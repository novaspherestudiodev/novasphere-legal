// THE APP DATABASE
const appDatabase = {

    // APP 1: FOCUSFLOW
    "focusflow": {
        title: "FocusFlow",
        tagline: "Master your time with the ultimate deep-work companion.",
        category: "Productivity",
        // 1. IMAGE CONFIGURATION
        iconClass: "bx-check-shield", // Fallback Icon
        iconImg: "", // LEAVE EMPTY to use Icon. Put "assets/focus-icon.png" to use image.
        accentColor: "#6366f1", 
        banner: "linear-gradient(to right, #4338ca, #6366f1)", 
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
        // 2. LEGAL CONFIGURATION (You can customize specific text here if needed)
        lastUpdated: "December 10, 2025"
    },

    // APP 2: HYDROSYNC
    "hydrosync": {
        title: "HydroSync",
        tagline: "Smart hydration tracking that adapts to your biology.",
        category: "Health & Fitness",
        iconClass: "bx-water",
        iconImg: "assets/hydro-logo.png", // EXAMPLE: This will try to load an image
        accentColor: "#10b981", 
        banner: "linear-gradient(to right, #059669, #10b981)",
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
        lastUpdated: "October 05, 2025"
    }

};

// LOGIC TO LOAD CONTENT
document.addEventListener("DOMContentLoaded", () => {
    
    // Check if we are on the Product Page
    const appTitleEl = document.getElementById('app-title');
    if(!appTitleEl) return; // Exit if not on product page

    const urlParams = new URLSearchParams(window.location.search);
    const appId = urlParams.get('app');

    // 1. Check if app exists
    if (!appId || !appDatabase[appId]) {
        document.querySelector('.container').innerHTML = "<h1 style='text-align:center; padding:100px;'>Data Corruption: App Not Found</h1>";
        return;
    }

    const data = appDatabase[appId];

    // 2. Inject Data
    document.title = `${data.title} - NovaSphere`;
    document.getElementById('app-title').textContent = data.title;
    document.getElementById('app-tagline').textContent = data.tagline;
    document.getElementById('app-category').textContent = data.category;
    document.getElementById('app-category').style.color = data.accentColor;

    // 3. IMAGE / ICON LOGIC
    const iconContainer = document.getElementById('app-icon');
    
    // Clear previous content
    iconContainer.innerHTML = '';
    
    if (data.iconImg && data.iconImg.length > 0) {
        // Create Image Element
        const img = document.createElement('img');
        img.src = data.iconImg;
        img.alt = data.title;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover"; // Ensures image fills the square
        img.style.borderRadius = "20px";
        
        // Error Handler: If image fails, revert to Icon
        img.onerror = function() {
            this.style.display = 'none';
            iconContainer.innerHTML = `<i class='bx ${data.iconClass}'></i>`;
        };
        
        iconContainer.appendChild(img);
        // Remove background color if using image (optional, but looks cleaner)
        iconContainer.style.background = "transparent";
        iconContainer.style.boxShadow = "none";
        
    } else {
        // Use Default Icon
        iconContainer.innerHTML = `<i class='bx ${data.iconClass}'></i>`;
        iconContainer.style.color = data.accentColor;
        iconContainer.style.boxShadow = `0 20px 40px ${data.accentColor}40`;
    }

    // Banner Logic
    const bannerDiv = document.getElementById('hero-bg');
    if(data.banner.includes('http') || data.banner.includes('assets') || data.banner.includes('url')) {
        bannerDiv.style.backgroundImage = `url(${data.banner})`;
    } else {
        bannerDiv.style.background = data.banner;
    }

    // Meta Data
    document.getElementById('meta-version').textContent = data.version;
    document.getElementById('meta-date').textContent = data.updated;
    document.getElementById('meta-size').textContent = data.size;
    document.getElementById('app-description').innerText = data.description;

    // Features
    const featuresList = document.getElementById('app-features');
    featuresList.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');

    // Downloads
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

    // 4. UPDATE LEGAL LINKS
    // These links now point to legal.html with parameters
    const privacyLink = document.getElementById('link-privacy');
    const termsLink = document.getElementById('link-terms');
    
    if(privacyLink) privacyLink.href = `legal.html?app=${appId}&doc=privacy`;
    if(termsLink) termsLink.href = `legal.html?app=${appId}&doc=terms`;

});
