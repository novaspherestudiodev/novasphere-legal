// ==========================================
// 1. THE APP DATABASE (PLATFORM INTELLIGENCE)
// ==========================================
const appDatabase = {

    // APP 1: KYT (REPLACES FOCUSFLOW)
     "kyt": {
         title: "Kyt",
         tagline: "The Operating System for Your Assets and Routines.",
         category: "Productivity",
         
         // Mobile Only (Android)
         platforms: ["mobile"], 
 
         // ASSETS
         iconClass: "bx-cube", 
         iconImg: "apps/kyt/icon.png", 
         accentColor: "#2563eb", // Tech Blue
         
         // CINEMATIC BANNER
         headerBanner: "apps/kyt/kyt_banner.png", 
         banner: "linear-gradient(to right, #1e3a8a, #2563eb)", 
         
         // VIRUS SCAN PROOF
         virusTestScreen: "apps/kyt/virus_scan.jpeg",
         
         // SCREENSHOTS
        screenshots: [
             { 
                 src: "apps/kyt/screen1.jpg", 
                 caption: "Organize Everything." 
             },
             { 
                 src: "apps/kyt/screen2.jpg", 
                 caption: "Your Trusted Pros, One Tap Away." 
             },
             { 
                 src: "apps/kyt/screen3.jpg", 
                 caption: "Stay Ahead of Your Schedule." 
             },
             { 
                 src: "apps/kyt/screen4.jpg", 
                 caption: "Track Your Progress." 
             },
             { 
                 src: "apps/kyt/screen5.jpg", 
                 caption: "Start with Expert Templates." 
             },
             { 
                 src: "apps/kyt/screen6.jpg", 
                 caption: "Build Powerful Workflows." 
             },
             { 
                 src: "apps/kyt/screen7.jpg", 
                 caption: "Prepared for Anything." 
             }
         ],
        
         videoPreview: "", 
 
         // STATS
         rating: 4.9,
         reviewsCount: "Genesis",
         ageRating: "4+",
         chartPos: "New Release",
         
         version: "1.0.0",
         updated: "Dec 18, 2025",
         size: "82 MB",
         
         whatsNew: "Welcome to Kyt 1.0! Your personal operations manual has arrived. This initial release combines powerful asset management with our advanced Playbook engine.",
 
         description: `We live in a world filled with complex objects, appliances, and responsibilities, but life doesn't come with a unified user manual. Information is scattered across junk drawers, email inboxes, and mental notes.
 
         **Kyt (Know Your Things)** solves this by creating a secure, digital twin of your life. It is more than just an organizer; it is a proactive "Smart Assistant" that helps you manage the lifecycle of everything you own and the execution of everything you do.
         
         **Why Kyt?**
         • **Turn "To-Do" into "How-To":** With the Playbooks engine, follow interactive, step-by-step guides for everything from "Morning Routines" to "Wi-Fi Troubleshooting."
         • **Never Forget Maintenance:** Kyt predicts when tasks are due. From "change the furnace filter" to "rotate tires," it understands usage patterns.
         • **A "Forever" Logbook:** Keep a searchable history of every repair and upgrade. Gain insights with heatmaps.
         • **Privacy First:** Built on a "Local-First" architecture. Your data works perfectly offline.`,
         
         features: [
             "🚀 Smart Playbooks Engine (Workflows)",
             "🧠 'Big Brain' Intelligence (Auto-Reminders)",
             "📋 Smart Item Templates (50+ Pre-built)",
             "📊 Performance Analytics (Heatmaps)",
             "🔒 Local-First & Biometric Lock"
         ],
         downloads: [
             // PRIMARY CHANNEL: Itch.io (The Storefront)
             { 
                 name: "Itch.io", 
                 icon: "bxs-store", // Official Store Icon
                 link: "https://novaspherestudiodev.itch.io/kyt" // REPLACE with your real Itch link
             },
             
             // SECONDARY CHANNEL: GitHub Releases (The Direct Uplink)
             { 
                 name: "Direct APK", 
                 icon: "bxl-github", // GitHub Icon
                 // This triggers the Installation Modal because it says "Direct"
                 link: "https://github.com/novaspherestudiodev/novasphere-legal/releases/download/v1.0.0-kyt/app-release.apk" 
             }
         ],
 
         // Default Legal
         customPrivacy: "apps/kyt/privacy.html", 
         customTerms: "apps/kyt/terms.html"   
     },
 
    // APP 2: INNERVERSE (REPLACES HYDROSYNC)
     "innerverse": {
         title: "InnerVerse",
         tagline: "A living, breathing operating system for your mind.",
         category: "Bio-Digital OS",
         
         // Mobile Only (Android)
         platforms: ["mobile"], 
 
         // ASSETS
         iconClass: "bx-dna", 
         iconImg: "apps/innerverse/icon.png", 
         accentColor: "#a855f7", // Void Violet
         
         // CINEMATIC BANNER
         headerBanner: "apps/innerverse/innerverse_banner.png", 
         banner: "linear-gradient(to right, #2e1065, #a855f7)", // Deep Space gradient
         
         // VIRUS SCAN PROOF
         virusTestScreen: "apps/innerverse/virus_scan.jpeg",
         
         // SCREENSHOTS
        screenshots: [
             { 
                 src: "apps/innerverse/screen1.jpg", 
                 caption: "The InnerScape: Your emotions visualized as a living landscape." 
             },
             { 
                 src: "apps/innerverse/screen2.jpg", 
                 caption: "Scroll through time: See your journey from valleys to peaks." 
             },
             { 
                 src: "apps/innerverse/screen3.jpg", 
                 caption: "Connect your thoughts in a living 3D network." 
             },
             { 
                 src: "apps/innerverse/screen4.jpg", 
                 caption: "Map your memories: Explore the galaxy of your past." 
             },
             { 
                 src: "apps/innerverse/screen5.jpg", 
                 caption: "Nurture your ideas from seeds to towering trees." 
             },
             { 
                 src: "apps/innerverse/screen6.jpg", 
                 caption: "Panic Protocol: Emergency messages from your calm self." 
             },
             { 
                 src: "apps/innerverse/screen7.jpg", 
                 caption: "he Whirl: Navigate empathy with evolving characters." 
             },
             { 
                 src: "apps/innerverse/screen8.jpg", 
                 caption: "MindMaze: Daily questions to unlock deep self-discovery." 
             }
         ],
        
         videoPreview: "", 
         
         // ACTIVATE THE WARNING
         showSecurityOverride: true,
         
         // PATH TO YOUR SCREENSHOT (Take a screenshot of the Play Protect warning on your phone)
         securityScreen: "apps/innerverse/play-protect-warning.jpg", 
         
         // STATS
         rating: 5.0,
         reviewsCount: "Genesis",
         ageRating: "12+", // Thematic elements
         chartPos: "New Release",
         
         version: "1.0.0",
         updated: "Dec 18, 2025",
         size: "72 MB",
         
         whatsNew: "Protocol: GENESIS Initiated. The simulation is live.\n• New: The Mycelial Network (Physics-based thought graph)\n• New: Bio-Sync (Heartbeat synchronization)\n• New: Spectral AR (Location-based memory ghosts)\n• New: Temporal Duets (Split-screen past self interaction)",
 
         description: `Stop managing your data. Start cultivating your mind.
         
         **InnerVerse** is not a productivity app. It is a **Bio-Digital Symbiote**. Designed to be 100% offline and private, it uses advanced procedural engines to turn your thoughts, habits, and memories into a living ecosystem that breathes in sync with you.
         
         Forget lists and spreadsheets. Enter a universe where your mind is the terrain.
 
         **🌌 The 5 Realms of the InnerVerse:**
         
         **🌿 The Bloom Realm (The Mycelial Network)**
         Your thoughts are a living web. View ideas as a floating, physics-based constellation. Connect thoughts to spark "Hybrid Ideas." Ideas that are ignored will wilt; water them with attention to keep them alive.
         
         **🏔️ The Companion Realm (The Sympathetic Mirror)**
         A dashboard that feels what you feel. Don't just log "Sad"—watch the InnerScape summon rain and fog in real-time. Place your thumb on the screen to sync the entire digital world's animation speed to your physical heartbeat.
         
         **⏳ The Echo Realm (The Temporal Reactor)**
         Your memories are stars in a navigable 3D void. Unlocked memories burn bright; sealed ones pulse like nebulae. Use "Spectral AR" to leave digital ghosts at specific GPS coordinates, visible only when you return to that spot.
         
         **🧭 The Explore Realm (The Mental Playground)**
         Navigate "MindMaze," a daily engine for self-discovery that maps your "Thought Trails" on a radar chart.
         
         **🔒 Zero-Knowledge Privacy**
         Your mind belongs to you. InnerVerse works entirely offline. No accounts, no servers, no tracking.`,
         
         features: [
             "🌿 Mycelial Network (Physics-based Graph)",
             "❤️ Bio-Rhythmic Sync (Heartbeat UI)",
             "👻 Spectral AR (GPS Memory Hunting)",
             "⏳ Temporal Duets (Past-Self Interaction)",
             "🗑️ Entropy System (Fading Memories)"
         ],
         downloads: [
             // PRIMARY CHANNEL: Itch.io (The Storefront)
             { 
                 name: "Itch.io", 
                 icon: "bxs-store", // Official Store Icon
                 link: "https://novaspherestudiodev.itch.io/innerverse" // REPLACE with your real Itch link
             },
             
             // SECONDARY CHANNEL: GitHub Releases (The Direct Uplink)
             { 
                 name: "Direct APK", 
                 icon: "bxl-github", // GitHub Icon
                 // This triggers the Installation Modal because it says "Direct"
                 link: "https://github.com/novaspherestudiodev/novasphere-legal/releases/download/v1.0.0-innerverse/app-apkpure-release.apk" 
             }
         ],
 
         customPrivacy: "apps/innerverse/privacy.html", 
         customTerms: "apps/innerverse/terms.html"
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
         
         // CINEMATIC BANNER
         headerBanner: "apps/novawallet/nova_wallet_banner.png", 
         banner: "linear-gradient(to right, #000000, #f59e0b)", 
         
         // VIRUS SCAN PROOF
         virusTestScreen: "apps/novawallet/virus_scan.jpeg",
         
         // SCREENSHOTS:
         screenshots: [
             { 
                 src: "apps/novawallet/screen1.jpg", 
                 caption: "Global Net Worth: Aggregate unlimited multi-currency wallets into a single, unified financial truth." 
             },
             { 
                 src: "apps/novawallet/screen2.jpg", 
                 caption: "Client Intelligence: Track Trust Scores, calculate payment velocity, and generate PDF invoices in seconds." 
             },
             { 
                 src: "apps/novawallet/screen3.jpg", 
                 caption: "The Command Deck: Full operational control over cash flow, automation rules, and recurring cycles." 
             },
             { 
                 src: "apps/novawallet/screen4.jpg", 
                 caption: "Visual Intelligence: X-Ray your finances. Trace the flow of every dollar from income source to final expense." 
             },
             { 
                 src: "apps/novawallet/screen5.jpg", 
                 caption: "The War Room: Predict your exact financial survival date under crisis conditions with the 'Total War' simulator." 
             },
             { 
                 src: "apps/novawallet/screen6.jpg", 
                 caption: "Entropy Engine: Visualize how inflation decay and forex shocks impact your real purchasing power in real-time." 
             },
             { 
                 src: "apps/novawallet/screen7.jpg", 
                 caption: "The Debt Reactor: Monitor liabilities as volatile elements. Deploy capital to neutralize debts before they breach." 
             },
             { 
                 src: "apps/novawallet/screen8.jpg", 
                 caption: "Sovereign Cloud: Military-grade AES-256 encryption. You hold the keys, you own the data. Zero server-side tracking." 
             },
             { 
                 src: "apps/novawallet/screen9.jpg", 
                 caption: "Client Intelligence: Manage relationships with the Tactical Dossier. Monitor algorithmic Trust Scores, track Payment Velocity, and deploy PDF invoices in seconds." 
             }
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
         size: "83 MB",
         
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
             // PRIMARY CHANNEL: Itch.io (The Storefront)
             { 
                 name: "Itch.io", 
                 icon: "bxs-store", // Official Store Icon
                 link: "https://novaspherestudiodev.itch.io/novawallet" // REPLACE with your real Itch link
             },
             
             // SECONDARY CHANNEL: GitHub Releases (The Direct Uplink)
             { 
                 name: "Direct APK", 
                 icon: "bxl-github", // GitHub Icon
                 // This triggers the Installation Modal because it says "Direct"
                 link: "https://github.com/novaspherestudiodev/novasphere-legal/releases/download/v1.0.0-novawallet/app-release.apk" 
             }
         ],
 
         // CUSTOM LEGAL PROTOCOL
         customPrivacy: "apps/novawallet/privacy.html", 
         customTerms: "apps/novawallet/terms.html"    
     },
    // APP 4: PROJECT ONYX (CLASSIFIED)
     "project-onyx": {
         title: "Project ONYX",
         tagline: "Awaiting Declassification.",
         category: "Infrastructure", // Short for "Cybernetic Economic Infrastructure"
         
         // Unknown platforms adds mystery
         platforms: ["pc", "mobile"], 
 
         // Icon: A microchip or lock
         iconClass: "bx-microchip", 
         iconImg: "apps/onyx/icon.png", 
         accentColor: "#ffffff", // Stark White/Black contrast
         banner: "linear-gradient(to right, #000000, #333333)", 
         
         // Empty Gallery = "No Intel"
         screenshots: [], 
         videoPreview: "", 
 
         // STATS
         rating: "N/A",
         reviewsCount: "---",
         ageRating: "Unrated",
         chartPos: "Classified",
         
         version: "Alpha 0.1",
         updated: "Q1 2026",
         size: "Unknown",
         
         whatsNew: "System Initialization Pending... \nSecure Uplink Established. \nAwaiting Decryption Key.",
 
         // REDACTED DESCRIPTION
         description: `**IDENTITY PROTECTED**
         
         This project is currently operating under strict stealth protocols. 
         
         Target Domain: **Cybernetic Economic Infrastructure**.
         
         Operational details are redacted to prevent competitive interception.
         
         ██████████ ████ ██████. The infrastructure for █████████ ████ is being forged. ████ █████ ████████.
         
         **Status:** In Development
         **Release Window:** Q1 2026`,
         
         // REDACTED FEATURES
         features: [
             "████████ Protocol",
             "Secure ██████ Sync",
             "Automated ████████ Engine",
             "Zero-Knowledge ██████"
         ],
         
         // NO DOWNLOADS - Just a Waitlist link (Contact Form)
         downloads: [
             { name: "Join Waitlist", icon: "bx-envelope", link: "contact.html" }
         ],
 
         customPrivacy: "", 
         customTerms: ""    
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
 
     // INJECT BANNER (Cinematic Logic)
     const bannerDiv = document.getElementById('hero-bg');
     
     // Priority 1: High-Res Image Banner
     if (data.headerBanner && data.headerBanner !== "") {
         bannerDiv.style.backgroundImage = `url(${data.headerBanner})`;
     } 
     // Priority 2: Fallback to Gradient/Color defined in 'banner'
     else if (data.banner) {
         // If it's a URL in the old field
         if(data.banner.includes('http') || data.banner.includes('assets') || data.banner.includes('/')) {
              bannerDiv.style.backgroundImage = `url(${data.banner})`;
         } else {
              // It's a CSS gradient string
              bannerDiv.style.background = data.banner;
         }
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
 
    // GALLERY GENERATOR 
     const galleryContainer = document.getElementById('gallery-container');
     
     if(data.screenshots.length > 0) {
         galleryContainer.innerHTML = data.screenshots.map(item => {
             // Check if it's the Old String format or New Object format
             const src = (typeof item === 'string') ? item : item.src;
             const caption = (typeof item === 'string') ? '' : item.caption;
             
             // Only render caption div if text exists
             const captionHTML = caption ? `<div class="gallery-caption">${caption}</div>` : '';
 
             return `
                 <div class="gallery-item skeleton">
                     <img src="${src}" alt="Screenshot" onload="this.parentElement.classList.remove('skeleton')" onerror="this.src='https://placehold.co/300x600/1a1a1a/FFF?text=No+Image'">
                     ${captionHTML}
                 </div>
             `;
         }).join('');
     } else {
         galleryContainer.innerHTML = `<p style="padding:0 2rem; opacity:0.6;">No intel available.</p>`;
     }
 
     // VIDEO
     const videoSection = document.getElementById('video-section');
     if (data.videoPreview && data.videoPreview !== "") {
         videoSection.style.display = "block";
         document.getElementById('video-frame').src = data.videoPreview;
     } else {
         videoSection.style.display = "none";
     }
 
    // ==========================================
    // DESCRIPTION & FEATURES
    // ==========================================
    // ADVANCED PARSER: Converts **Bold** into real HTML and handles line breaks
    const rawDescription = data.description;
    const formattedDescription = rawDescription
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Converts **Text** to <b>Text</b>
        .replace(/\n/g, '<br>'); // Converts new lines to breaks
        
    document.getElementById('app-description').innerHTML = formattedDescription;

    if (document.getElementById('app-features')) {
        document.getElementById('app-features').innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
    }
    
    document.getElementById('meta-version').textContent = data.version;
    document.getElementById('meta-date').textContent = data.updated;
    document.getElementById('meta-size').textContent = data.size;

    // ==========================================
     // DOWNLOADS & INSTALLATION PROTOCOL
     // ==========================================
     const downloadContainer = document.getElementById('download-container');
     
     // 1. Generate Buttons
     const buttonsHTML = data.downloads.map(store => {
         // Check if this is a "Sideload" (APK or Windows or Direct)
         // We add the class 'trigger-install-modal' to these specific buttons
         const isSideload = store.name.includes("APK") || store.name.includes("Windows") || store.name.includes("Direct");
         
         const specialClass = isSideload ? "trigger-install-modal" : "";
         
         return `
             <a href="${store.link}" class="store-btn ${specialClass}">
                 <i class='bx ${store.icon}'></i>
                 <div class="store-text">
                     Get it on
                     <span>${store.name}</span>
                 </div>
             </a>
         `;
     }).join('');
     
     downloadContainer.innerHTML = buttonsHTML;
 
     // 2. Attach Smart Listeners to Sideload Buttons
     // This logic decides if we show the "Security Override" warning or just the normal guide
     document.querySelectorAll('.trigger-install-modal').forEach(btn => {
         btn.addEventListener('click', (e) => {
             // Note: We DO NOT preventDefault(). 
             // We want the download to start immediately while the modal opens.
             
             const modal = document.getElementById('install-modal');
             const securityBlock = document.getElementById('security-override-block');
             const securityImg = document.getElementById('security-screenshot');
 
             // CHECK: Does this specific app entry have the "showSecurityOverride" flag set to true?
             if (data.showSecurityOverride === true) {
                 // Show the Red/Yellow Warning Section
                 securityBlock.style.display = 'block';
                 
                 // Load the custom screenshot (e.g. apps/innerverse/warning.jpg)
                 if(data.securityScreen && securityImg) {
                     securityImg.src = data.securityScreen;
                     securityImg.style.display = 'inline-block';
                 } else if (securityImg) {
                     securityImg.style.display = 'none';
                 }
             } else {
                 // Hide the warning section for normal apps (Kyt, NovaWallet)
                 if(securityBlock) securityBlock.style.display = 'none';
             }
 
             // Open the Modal
             if(modal) modal.classList.add('active');
         });
     });
 
     // ==========================================
     // LEGAL LINKS
     // ==========================================
     const privacyLink = document.getElementById('link-privacy');
     const termsLink = document.getElementById('link-terms');
     
     if(privacyLink) privacyLink.href = (data.customPrivacy && data.customPrivacy !== "") ? data.customPrivacy : `legal.html?app=${appId}&doc=privacy`;
     if(termsLink) termsLink.href = (data.customTerms && data.customTerms !== "") ? data.customTerms : `legal.html?app=${appId}&doc=terms`;
 
    // ==========================================
    // SECURITY PROOF LOGIC (NEW)
    // ==========================================
    const secCard = document.getElementById('security-card');
    const proofModal = document.getElementById('proof-modal');
    const proofImg = document.getElementById('proof-image');
    const secText = document.getElementById('security-status-text');

    // Check if this app has a Proof Screenshot
    if (data.virusTestScreen && data.virusTestScreen !== "") {
        // 1. Make it clickable
        if(secCard) {
            secCard.style.cursor = "pointer";
            if(secText) secText.innerHTML = "View Scan Report <i class='bx bx-link-external' style='font-size:10px'></i>";
            
            // 2. Add Click Event
            secCard.onclick = function() {
                if(proofImg) proofImg.src = data.virusTestScreen;
                if(proofModal) proofModal.classList.add('active');
            };
            
            // 3. Add Hover Effect (Optional JS visual enhancement)
            secCard.onmouseover = () => secCard.style.transform = "translateY(-3px)";
            secCard.onmouseout = () => secCard.style.transform = "translateY(0)";
        }
    } else {
        // No screenshot provided - keep it static
        if(secCard) {
            secCard.style.cursor = "default";
            secCard.onclick = null;
        }
    }
    
    // Close Modal on Outside Click
    if(proofModal) {
        proofModal.addEventListener('click', (e) => {
            if (e.target === proofModal) proofModal.classList.remove('active');
        });
    }

 });
