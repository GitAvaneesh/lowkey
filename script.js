// ══════════════════════════════════════
// LOWKEY CORE ENGINE
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. PRELOADER ENGINE
    const initPreloader = () => {
        const preloader = document.getElementById('preloader');
        const plBar = document.getElementById('pl-bar');
        const plPercent = document.getElementById('pl-percent');
        const plLogs = document.getElementById('pl-logs');
        
        const logMessages = [
            "> Booting Lowkey v1.0.4-stable...",
            "> Establishing Rust-Tauri IPC Bridge...",
            "> Initializing Colors Engine (Scintilla Canvas)...",
            "> Spawning PTY Shell Hooks (ConPTY API)...",
            "> Dash AI: Loading Local Model Mesh...",
            "> Dash AI: Connecting to Google Cloud Pool...",
            "> Globe: Handshaking WebRTC Data Channels...",
            "> Syncing CRDT Mutation Buffers...",
            "> Discord Liaison: Webhook Gateway Online...",
            "> Security: Libsodium Keys Verified.",
            "> Kernel Initialization Complete."
        ];

        let progress = 0;
        let logIdx = 0;

        const interval = setInterval(() => {
            progress += Math.random() * 5;
            
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                setTimeout(() => {
                    preloader.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                    startEntranceAnimations();
                }, 1000);
            }
            
            if (plBar) plBar.style.width = `${progress}%`;
            if (plPercent) plPercent.innerText = Math.floor(progress).toString().padStart(3, '0');
            
            if (plLogs && progress > (logIdx + 1) * (100 / logMessages.length) && logIdx < logMessages.length) {
                const log = document.createElement('div');
                log.innerText = logMessages[logIdx];
                plLogs.appendChild(log);
                logIdx++;
                plLogs.scrollTop = plLogs.scrollHeight;
            }
        }, 80);
    };

    // 2. MAGNETIC CURSOR ENGINE
    const initCursor = () => {
        const dot = document.querySelector('.cursor-dot');
        const outline = document.querySelector('.cursor-outline');
        
        if (!dot || !outline) return;

        let mouseX = 0;
        let mouseY = 0;
        let outlineX = 0;
        let outlineY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });

        const animateOutline = () => {
            const distX = mouseX - outlineX;
            const distY = mouseY - outlineY;
            
            outlineX = outlineX + (distX * 0.15);
            outlineY = outlineY + (distY * 0.15);
            
            outline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
            
            requestAnimationFrame(animateOutline);
        };
        animateOutline();

        const interactiveElements = document.querySelectorAll('a, button, .mag-link, .cta-primary');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                outline.style.width = '80px';
                outline.style.height = '80px';
                outline.style.background = 'rgba(107, 33, 255, 0.1)';
                outline.style.borderColor = 'transparent';
            });
            el.addEventListener('mouseleave', () => {
                outline.style.width = '40px';
                outline.style.height = '40px';
                outline.style.background = 'transparent';
                outline.style.borderColor = 'rgba(107, 33, 255, 0.3)';
            });
        });
    };

    // 3. SMOOTH SCROLL (LENIS)
    const initSmoothScroll = () => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return lenis;
    };

    // 4. ENTRANCE ANIMATIONS
    const startEntranceAnimations = () => {
        const tl = gsap.timeline();
        
        tl.to('.reveal-text', {
            y: 0,
            duration: 1.5,
            ease: 'expo.out',
            stagger: 0.1
        })
        .to('.badge-row', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=1.2')
        .to('.hero-lead', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=1')
        .to('.nav', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.5')
        .to('.app-window', {
            rotateX: 0,
            y: 0,
            opacity: 1,
            duration: 2,
            ease: 'expo.out'
        }, '-=1')
        .from('.float-svg', {
            scale: 0.8,
            opacity: 0,
            duration: 2,
            stagger: 0.3,
            ease: 'power2.out'
        }, 0);
    };

    // 5. SCROLL TRIGGERED REVEALS
    const initScrollAnimations = () => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.gsap-reveal').forEach(el => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out'
            });
        });

        // Parallax Hero Window
        gsap.to('.app-window', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            yPercent: -15,
            rotateX: -5,
            ease: 'none'
        });

        // Navigation Background
        const nav = document.querySelector('.nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    };

    // 6. DASH MATRIX DYNAMIC INDICATOR
    const initDashMockup = () => {
        const dashMatrix = [
            { name: 'Standard', color: '#F5C842' },
            { name: 'Local', color: '#EF4444' },
            { name: 'Claude', color: '#D97706' },
            { name: 'Gemini', color: '#2563EB' }
        ];
        let matrixIdx = 0;

        setInterval(() => {
            const indicator = document.querySelector('.active-indicator');
            if (indicator) {
                matrixIdx = (matrixIdx + 1) % dashMatrix.length;
                indicator.style.background = dashMatrix[matrixIdx].color;
                indicator.style.boxShadow = `0 0 20px ${dashMatrix[matrixIdx].color}44`;
            }
        }, 3000);
    };

    // EXECUTION
    initPreloader();
    initCursor();
    initSmoothScroll();
    initScrollAnimations();
    initDashMockup();
});
