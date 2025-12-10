const appDatabase = {
    "focusflow": {
        title: "FocusFlow",
        tagline: "Weaponize your attention span.",
        category: "Productivity",
        // Path to image in your assets folder. If no image, it falls back to icon logic in main.js
        iconImage: "assets/icons/focusflow.png", 
        // Gradient fallback if image fails
        accentColor: "#6366f1", 
        banner: "linear-gradient(to right, #0f172a, #312e81)", 
        version: "2.1.0",
        updated: "Dec 1, 2025",
        size: "45 MB",
        description: `FocusFlow is not a timer. It is a neurological anchor. 
        
        Designed for the deep-work operative, it combines Pomodoro cycles with aggressive distraction blocking. Statistics are stored locally—your data never leaves the device.`,
        features: [
            "Neuro-adaptive Timer",
            "Strict Void Mode (Block All)",
            "Binaural Beats Generator",
            "Local-only Data Encryption"
        ],
        downloads: [
            { name: "Play Store", icon: "bxl-play-store", link: "#" },
            { name: "Direct .APK", icon: "bxs-file-apk", link: "#" }
        ],
        legal: {
            terms: "legal/terms.html",
            privacy: "legal/privacy.html"
        }
    },
    
    "hydrosync": {
        title: "HydroSync",
        tagline: "Biological maintenance assistant.",
        category: "Health",
        iconImage: "assets/icons/hydrosync.png",
        accentColor: "#06b6d4",
        banner: "linear-gradient(to right, #0f172a, #0e7490)",
        version: "1.4.2",
        updated: "Oct 15, 2025",
        size: "28 MB",
        description: `Your biology requires precision. HydroSync calculates hydration needs based on real-time weather APIs and your activity metrics.`,
        features: [
            "Weather API Integration",
            "Bio-metric calculation",
            "Widget Support"
        ],
        downloads: [
            { name: "Play Store", icon: "bxl-play-store", link: "#" }
        ],
        legal: {
            terms: "legal/terms.html",
            privacy: "legal/privacy.html"
        }
    }
};
