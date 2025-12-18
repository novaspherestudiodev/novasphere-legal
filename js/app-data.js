// ==========================================
// 1. THE APP DATABASE (PLATFORM INTELLIGENCE)
// ==========================================
const appDatabase = {

   // APP 1: KYT 
    "kyt": {
        title: "Kyt: Know Your Things",
        tagline: "The smart manual for your things and the playbook for your life.",
        category: "Lifestyle",
        
        // PLATFORMS: Android specified
        platforms: ["mobile"], 

        // VISUALS
        iconClass: "bx-cube", // Fallback icon
        iconImg: "apps/kyt/icon.png", 
        accentColor: "#3b82f6", // Intelligence Blue
        banner: "linear-gradient(to right, #1e3a8a, #3b82f6)", 
        
        // SCREENSHOTS: Place 3-5 images in apps/kyt/
        screenshots: [
            "apps/kyt/screen1.jpg", 
            "apps/kyt/screen2.jpg",
            "apps/kyt/screen3.jpg",
            "apps/kyt/screen4.jpg",
            "apps/kyt/screen5.jpg"
        ],
        videoPreview: "", // Add YouTube link if available

        // STATS
        rating: 4.9,
        reviewsCount: "New Release",
        ageRating: "4+",
        chartPos: "#2 in Lifestyle",
        
        version: "1.0.0",
        updated: "Dec 18, 2025",
        size: "35 MB",
        
        whatsNew: "Welcome to the official launch of Kyt! Introducing Playbooks: Design, run, and perfect your own interactive step-by-step routines. Explore our online library or build from scratch.",

        description: `Welcome to Kyt, the intelligent system for your life's most important assets and actions.

        We live in a world filled with complex objects and responsibilities, but they don't come with a user manual. Critical information is scattered across junk drawers and email inboxes. Important routines and best practices live only in our heads.
        
        **Kyt solves this.**
        
        Kyt is your single source of truth. It's a secure vault for everything you need to know about your things—from your dishwasher's model number to your car's maintenance history. Our "Big Brain" intelligence engine proactively scans this data to give you timely reminders for warranty expirations and scheduled maintenance.

        **Go Beyond Knowing:**
        With our groundbreaking **Playbooks** feature, you can now define how you get things done. Design, run, and perfect your personal and professional processes, from a "Mindful Morning Routine" to a "Pre-Meeting Briefing."`,
        
        features: [
            "📦 Build Your Life 'Kyts' (Inventory)",
            "▶️ Run Interactive Playbooks (Workflows)",
            "🧠 The 'Big Brain' Intelligence Engine",
            "📊 Advanced Task & History Log",
            "☁️ Secure Cloud Sync & Sharing"
        ],
        
        downloads: [
            { name: "Google Play", icon: "bxl-play-store", link: "#" },
            { name: "Direct APK", icon: "bx-download", link: "#" }
        ],

        // Uses Auto-Generated Legal (Unless you create custom files later)
        customPrivacy: "", 
        customTerms: ""    
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

   // APP 3: NOVAWALLET (GENESIS BUILD)
    "novawallet": {
        title: "NovaWallet",
        tagline: "The Offline-First Financial Terminal for the Sovereign Professional.",
        category: "Finance",
    
        platforms: ["mobile", "pc"], 

        // ASSETS:
        iconClass: "bx-wallet", 
        iconImg: "apps/novawallet/icon.png", 
        accentColor: "#f59e0b", // Amber/Gold for Wealth
        banner: "linear-gradient(to right, #000000, #f59e0b)", // Dark Finance Vibe
        
        // SCREENSHOTS:
        screenshots: [
            "apps/novawallet/screen1.jpg",
            "apps/novawallet/screen2.jpg",
            "apps/novawallet/screen3.jpg",
            "apps/novawallet/screen4.jpg",
            "apps/novawallet/screen5.jpg"
        ],
        
        // Video Link 
        videoPreview: "", 

        // STATS
        rating: 5.0, // Genesis launch usually starts high or N/A
        reviewsCount: "Genesis",
        ageRating: "3+",
        chartPos: "New Release",
        
        version: "1.0.0",
        updated: "Dec 17, 2025",
        size: "38 MB",
        
        whatsNew: "Genesis Launch. Deployed the 'War Room' simulation engine, Visual Intelligence sunburst charts, and the Entropy Engine. Your financial operating system is now online.",

        description: `Stop renting your financial data. NovaWallet is the "Bloomberg Terminal" for the global gig economy—engineered for freelancers, remote workers, and business owners who demand absolute privacy and military-grade control over their wealth.

        Unlike standard banking apps that rely on cloud servers, NovaWallet is Offline-First. Your ledger lives physically on your device, encrypted with AES-256 and locked behind biometric security. We cannot see your money. We cannot sell your data. You are the bank.
        
        **Why NovaWallet?**
        • **For the Global Citizen:** Live in Accra, earn in USD, save in Euros. Our Offline FX Engine unifies your Net Worth in real-time.
        • **For the Freelancer:** Track Client Trust Scores, generate professional PDF Invoices, and scan receipts into a secure local vault.
        • **For the Strategist:** Don't just track expenses—simulate survival. The War Room module predicts your "Zero Date" based on active debts and austerity scenarios.`,
        
        features: [
            "🛡️ Sovereign Vault (AES-256 + Biometrics)",
            "🌍 Multi-Verse Architecture (Unlimted Currencies)",
            "🧠 Nova Automata (IFTTT Rules)",
            "☢️ The Debt Reactor (Visual Liability Mgmt)",
            "☁️ Sovereign Cloud Sync (You hold the keys)"
        ],
        
        downloads: [
            { name: "Google Play", icon: "bxl-play-store", link: "#" }, // link
            { name: "Windows (Soon)", icon: "bxl-windows", link: "#" } // Placeholder
        ],

        // CUSTOM LEGAL PROTOCOL
        customPrivacy: "apps/novawallet/privacy.html", 
        customTerms: "apps/novawallet/terms.html"    
    },

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
