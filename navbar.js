document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------
    // Pill Nav GSAP Logic
    // --------------------------------------------------------
    const ease = 'power3.easeOut';
    
    // Selectors
    const pills = document.querySelectorAll('.pill');
    const logoLink = document.getElementById('navbar-logo-link');
    const logoImg = document.getElementById('navbar-logo-img');
    const navItems = document.querySelector('.pill-nav-items');
    
    // Mobile Menu Selectors
    const hamburger = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu-popover');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');
    const mobileLinks = document.querySelectorAll('.mobile-menu-link');
    
    let isMobileMenuOpen = false;
    
    // Initial Load Animations (Wait for app.js preloader to finish its things)
    // To not conflict with app.js GSAP, we will only do the internal navbar expansion
    if (navItems) {
        gsap.set(navItems, { width: 0, overflow: 'hidden' });
        // Small delay to let the navbar drop in from app.js first
        gsap.to(navItems, {
            width: 'auto',
            duration: 0.8,
            ease,
            delay: 1.5,
            clearProps: "overflow" // Allow dropdowns if any
        });
    }

    if (logoImg) {
        gsap.set(logoImg, { scale: 0 });
        gsap.to(logoImg, {
            scale: 1,
            duration: 0.8,
            ease,
            delay: 1.5
        });
    }
    
    // Pill Hover Animations
    const pillTimelines = [];
    let layoutDone = false;
    
    const layout = () => {
        pills.forEach((pill, i) => {
            const circle = pill.querySelector('.hover-circle');
            const label = pill.querySelector('.pill-label');
            const hoverLabel = pill.querySelector('.pill-label-hover');
            
            if (!circle) return;
            
            const rect = pill.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;
            
            // Math for the expanding circle background
            const R = ((w * w) / 4 + h * h) / (2 * h);
            const D = Math.ceil(2 * R) + 2;
            const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
            const originY = D - delta;
            
            circle.style.width = `${D}px`;
            circle.style.height = `${D}px`;
            circle.style.bottom = `-${delta}px`;
            
            gsap.set(circle, {
                xPercent: -50,
                scale: 0,
                transformOrigin: `50% ${originY}px`
            });
            
            if (label) gsap.set(label, { y: 0 });
            if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });
            
            // Re-create timeline
            if (pillTimelines[i]) {
                pillTimelines[i].kill();
            }
            
            const tl = gsap.timeline({ paused: true });
            
            tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.4, ease, overwrite: 'auto' }, 0);
            
            if (label) {
                tl.to(label, { y: -(h + 8), duration: 0.4, ease, overwrite: 'auto' }, 0);
            }
            
            if (hoverLabel) {
                gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 });
                tl.to(hoverLabel, { y: 0, opacity: 1, duration: 0.4, ease, overwrite: 'auto' }, 0);
            }
            
            pillTimelines[i] = tl;
            
            // Add listeners only once
            if (!layoutDone) {
                pill.addEventListener('mouseenter', () => {
                    pillTimelines[i].tweenTo(pillTimelines[i].duration(), {
                        duration: 0.3,
                        ease,
                        overwrite: 'auto'
                    });
                });
                
                pill.addEventListener('mouseleave', () => {
                    if (!pill.classList.contains('is-active')) {
                        pillTimelines[i].tweenTo(0, {
                            duration: 0.2,
                            ease,
                            overwrite: 'auto'
                        });
                    }
                });
            }
        });
        layoutDone = true;
    };
    
    // Initial Layout Calculation
    if (document.fonts?.ready) {
        document.fonts.ready.then(layout).catch(layout);
    } else {
        layout();
    }
    
    // Recalculate on resize
    window.addEventListener('resize', layout);
    
    // Logo Hover Spin
    if (logoLink && logoImg) {
        let logoTween = null;
        logoLink.addEventListener('mouseenter', () => {
            if (logoTween) logoTween.kill();
            gsap.set(logoImg, { rotate: 0 });
            logoTween = gsap.to(logoImg, {
                rotate: 360,
                duration: 0.4,
                ease,
                overwrite: 'auto'
            });
        });
    }
    
    // Mobile Menu Logic
    if (hamburger && mobileMenu) {
        gsap.set(mobileMenu, { visibility: 'hidden', opacity: 0, scaleY: 1 });
        
        const toggleMobileMenu = () => {
            isMobileMenuOpen = !isMobileMenuOpen;
            
            if (isMobileMenuOpen) {
                // Animate hamburger to X
                gsap.to(hamburgerLines[0], { rotation: 45, y: 3, duration: 0.3, ease });
                gsap.to(hamburgerLines[1], { rotation: -45, y: -3, duration: 0.3, ease });
                
                // Show menu
                gsap.set(mobileMenu, { visibility: 'visible' });
                gsap.fromTo(mobileMenu, 
                    { opacity: 0, y: 10, scaleY: 1 },
                    {
                        opacity: 1,
                        y: 0,
                        scaleY: 1,
                        duration: 0.3,
                        ease,
                        transformOrigin: 'top center'
                    }
                );
            } else {
                // Animate hamburger back to lines
                gsap.to(hamburgerLines[0], { rotation: 0, y: 0, duration: 0.3, ease });
                gsap.to(hamburgerLines[1], { rotation: 0, y: 0, duration: 0.3, ease });
                
                // Hide menu
                gsap.to(mobileMenu, {
                    opacity: 0,
                    y: 10,
                    scaleY: 1,
                    duration: 0.2,
                    ease,
                    transformOrigin: 'top center',
                    onComplete: () => {
                        gsap.set(mobileMenu, { visibility: 'hidden' });
                    }
                });
            }
        };
        
        hamburger.addEventListener('click', toggleMobileMenu);
        
        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMobileMenuOpen) toggleMobileMenu();
            });
        });
    }

    // Scroll Spy for Active Section
    const sections = document.querySelectorAll('section[id]');
    
    if (sections.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '-10% 0px -40% 0px',
            threshold: 0.1
        };
        
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    // Remove is-active from all pills and reverse animation
                    pills.forEach((pill, i) => {
                        if (pill.classList.contains('is-active')) {
                            pill.classList.remove('is-active');
                            if (pillTimelines[i]) {
                                pillTimelines[i].tweenTo(0, { duration: 0.3, ease: 'power3.easeOut', overwrite: 'auto' });
                            }
                        }
                    });
                    
                    // Add is-active to the current one and play animation
                    const activePill = document.querySelector(`.pill[href="#${id}"]`);
                    if (activePill) {
                        activePill.classList.add('is-active');
                        const index = Array.from(pills).indexOf(activePill);
                        if (index !== -1 && pillTimelines[index]) {
                            pillTimelines[index].tweenTo(pillTimelines[index].duration(), { duration: 0.4, ease: 'power3.easeOut', overwrite: 'auto' });
                        }
                    }
                }
            });
        };
        
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        sections.forEach(section => {
            observer.observe(section);
        });
    }
});
