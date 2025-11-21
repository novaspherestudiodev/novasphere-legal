// THE APP DATABASE
const appDatabase = {
    
    // APP 1: FOCUSFLOW
    "focusflow": {
        title: "FocusFlow",
        tagline: "Master your time with the ultimate deep-work companion.",
        category: "Productivity",
        iconClass: "bx-check-shield",
        accentColor: "#6366f1", // Indigo
        // Use a real image URL or a gradient for the banner
        banner: "linear-gradient(to right, #4338ca, #6366f1)", 
        version: "2.1.0",
        updated: "Nov 20, 2025",
        size: "45 MB",
        description: `FocusFlow isn't just a timer; it's a workflow philosophy. Designed for freelancers and developers, it combines the Pomodoro technique with advanced distraction blocking.

        It helps you get into the "Zone" faster and stay there longer. With detailed analytics, you can see exactly where your time goes.`,
        features: [
            "Customizable Pomodoro Timer",
            "Website & App Blocker (Strict Mode)",
            "Ambient Noise Generator (Rain, Cafe, White Noise)",
            "Daily & Weekly Productivity Heatmaps",
            "Cloud Sync across devices"
        ],
        downloads: [
            { name: "Google Play", icon: "bxl-play-store", link: "#" },
            { name: "AppGallery", icon: "bxl-android", link: "#" }, // Huawei
            { name: "APK Pure", icon: "bx-box", link: "#" }
        ]
    },

    // APP 2: HYDROSYNC
    "hydrosync": {
        title: "HydroSync",
        tagline: "Smart hydration tracking that adapts to your biology.",
        category: "Health & Fitness",
        iconClass: "bx-water",
        accentColor: "#10b981", // Emerald
        banner: "linear-gradient(to right, #059669, #10b981)",
        version: "1.4.2",
        updated: "Oct 15, 2025",
        size: "28 MB",
        description: `Most water trackers are dumb. They tell everyone to drink 8 glasses. HydroSync is different. 

        It calculates your exact water needs based on your weight, the current local temperature (Weather API), and your daily step count.`,
        features: [
            "Bio-adaptive hydration goals",
            "Weather integration",
            "Apple Health & Google Fit Sync",
            "Home Screen Widgets",
            "No Ads"
        ],
        downloads: [
            { name: "Google Play", icon: "bxl-play-store", link: "#" },
            { name: "Direct APK", icon: "bx-download", link: "#" }
        ]
    }
};

// LOGIC TO LOAD CONTENT
document.addEventListener("DOMContentLoaded", () => {
    // 1. Get the "app" parameter from the URL (e.g. product.html?app=focusflow)
    const urlParams = new URLSearchParams(window.location.search);
    const appId = urlParams.get('app');

    // 2. Check if app exists in database
    if (!appId || !appDatabase[appId]) {
        // If app not found, redirect home or show error
        document.querySelector('.container').innerHTML = "<h1 style='text-align:center; padding:50px;'>App Not Found</h1>";
        return;
    }

    const data = appDatabase[appId];

    // 3. Inject Data into HTML
    document.title = `${data.title} - NovaSphere Studio`;
    document.getElementById('app-title').textContent = data.title;
    document.getElementById('app-tagline').textContent = data.tagline;
    document.getElementById('app-category').textContent = data.category;
    document.getElementById('app-category').style.color = data.accentColor;
    
    // Icon Logic
    const iconContainer = document.getElementById('app-icon');
    iconContainer.innerHTML = `<i class='bx ${data.iconClass}'></i>`;
    iconContainer.style.color = data.accentColor;
    iconContainer.style.boxShadow = `0 20px 40px ${data.accentColor}40`;

    // Banner Logic (Image or Gradient)
    const bannerDiv = document.getElementById('hero-bg');
    if(data.banner.includes('http') || data.banner.includes('assets')) {
        bannerDiv.style.backgroundImage = `url(${data.banner})`;
    } else {
        bannerDiv.style.background = data.banner;
    }

    // Meta Data
    document.getElementById('meta-version').textContent = data.version;
    document.getElementById('meta-date').textContent = data.updated;
    document.getElementById('meta-size').textContent = data.size;
    document.getElementById('app-description').innerText = data.description;

    // Features List
    const featuresList = document.getElementById('app-features');
    featuresList.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');

    // Generate Download Buttons
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
});
