const bootLog = document.getElementById('boot-log');
const progressBar = document.getElementById('progress-bar');
const bootScreen = document.getElementById('boot-sequence');
const interfaceLayer = document.getElementById('interface');

const logMessages = [
    "INITIALIZING KERNEL...",
    "LOADING NEURAL NETWORKS...",
    "BYPASSING SECURITY PROTOCOLS...",
    "CONNECTING TO NOVA_MAIN...",
    "OPTIMIZING VISUAL CORTEX...",
    "SYSTEM READY."
];

let progress = 0;
let logIndex = 0;

function updateBoot() {
    if (progress < 100) {
        progress += Math.random() * 5;
        if (progress > 100) progress = 100;
        progressBar.style.width = `${progress}%`;
        
        if (Math.random() > 0.7 && logIndex < logMessages.length) {
            const msg = document.createElement('div');
            msg.textContent = `> ${logMessages[logIndex]}`;
            bootLog.appendChild(msg);
            bootLog.scrollTop = bootLog.scrollHeight;
            logIndex++;
        }
        
        setTimeout(updateBoot, Math.random() * 100 + 50);
    } else {
        setTimeout(() => {
            bootScreen.style.opacity = '0';
            setTimeout(() => {
                bootScreen.style.display = 'none';
                interfaceLayer.classList.remove('hidden');
                interfaceLayer.classList.add('visible');
            }, 500);
        }, 800);
    }
}

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
    document.getElementById('clock').textContent = timeString;
}

updateBoot();
setInterval(updateClock, 1000);
