// Data Provider - Refined with Professional Copywriting
const DATA = {
    roles: ["UI/UX Designer", "Full-Stack Developer", "Creative Technologist"],
    profileImage: "profile.webp", 
    about: [
        "I am a UI/UX Designer and Full-Stack Developer currently pursuing a B.Tech in Computer Science Engineering at the College of Engineering, Attingal.",
        "I specialize in bridging the gap between design and engineering—crafting elegant, user-centric interfaces and building robust, scalable backend systems. My expertise spans prototyping in Figma to deploying modern web applications using React, Python, and robust frameworks.",
        "Beyond my technical work, I hold leadership roles driving community impact. I serve as the Student Representative for the IEEE Signal Processing Society Kerala Chapter, Graphic Designer at the IEEE Smart Cities Community, and Communication Lead at IEEE CS SYP HIZE.",
        "I thrive at the intersection of aesthetics and functionality, consistently striving to elevate digital experiences for global audiences."
    ],
    skills: [
        { title: "Languages", items: ["JavaScript / TypeScript", "Python", "HTML5 & CSS3", "C++ / Java"], icon: "code" },
        { title: "Frameworks & Tools", items: ["React / Next.js", "FastAPI / Flask", "Tailwind CSS", "Git / GitHub"], icon: "cpu" },
        { title: "Design", items: ["Figma / UI Prototyping", "Adobe Creative Suite", "Interaction Design", "Wireframing"], icon: "palette" }
    ],
    projects: [
        {
            title: "Transitix",
            subtitle: "Smart Traffic Management",
            desc: "Engineered a modular traffic dashboard featuring real-time 2D/3D visualization using Three.js and FastAPI, integrated with OpenCV for dynamic signal control.",
            tech: ["Three.js", "FastAPI", "OpenCV"],
            link: "#",
            color: "#13211a" // Dark green tint for Transitix
        },
        {
            title: "Zia AI",
            subtitle: "Intelligent Hospital Assistant",
            desc: "Designed and developed an AI-powered hospital calling assistant using Flask and Twilio. Streamlined administrative workflows with conversational AI (OpenAI).",
            tech: ["Flask", "Twilio", "OpenAI"],
            link: "#",
            color: "#141726" // Dark blue tint for Zia AI
        },
        {
            title: "IRIS",
            subtitle: "Digital Event Experience",
            desc: "Architected a fully responsive, high-performance event platform focusing on clear visual hierarchy and cross-device accessibility.",
            tech: ["HTML5", "CSS3", "JavaScript"],
            link: "https://ieee.ceal.in/iris/",

            color: "#2b1616" // Dark red tint for IRIS
        },
        {
            title: "Iku2",
            subtitle: "Touchless Gesture Interface",
            desc: "Built a computer-vision powered interface for touchless interactions. Designed intuitive visual feedback systems using Python and MediaPipe.",
            tech: ["Python", "OpenCV", "MediaPipe"],
            link: "#",
            color: "#1f1f1f" // Standard dark grey for Iku2
        }
    ],
    experience: [
        {
            title: "Student Representative @ IEEE SPS Kerala Chapter",
            date: "2024 - Present",
            desc: "Spearheading student engagement and coordinating large-scale technical activities for the Signal Processing Society across the Kerala Chapter.",
            icon: "radio"
        },
        {
            title: "Graphic Designer @ IEEE Smart Cities Community",
            date: "2023 - Present",
            desc: "Directing the visual identity and crafting branding materials for global smart city initiatives and campaigns.",
            icon: "brush"
        },
        {
            title: "Communication Lead @ IEEE CS SYP HIZE",
            date: "2024 - Present",
            desc: "Managing strategic outreach and community communication for the Computer Society Students & Young Professionals.",
            icon: "message-square"
        }
    ],
    posterCount: 24
};

// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Render Dynamic Content
function renderDynamicContent() {
    // About Bio
    const aboutContainer = document.getElementById('about-content');
    if (aboutContainer) {
        aboutContainer.innerHTML = DATA.about.map(p => `<p>${p}</p>`).join('');
    }

    // Projects Grid (Vertical Stacked Cards)
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        DATA.projects.forEach((project, index) => {
            projectsGrid.innerHTML += `
                <div class="project-card premium-card tilt-effect sticky w-full min-h-[55vh] md:min-h-[60vh] rounded-[2rem] group flex flex-col justify-end p-6 md:p-12 mb-6 md:mb-8" 
                     style="background: linear-gradient(135deg, ${project.color} 0%, #0a0a0a 100%); z-index: ${index}; top: calc(6rem + ${index * 1.5}rem);">
                    
                    ${project.image ? `<img src="${project.image}" alt="${project.title}" class="absolute inset-0 w-full h-full object-cover opacity-20 md:opacity-40 group-hover:opacity-60 transition-opacity duration-700">` : ''}
                    
                    <div class="relative z-10 w-full max-w-3xl">
                        <p class="text-lime-400 font-mono text-xs md:text-sm uppercase tracking-widest mb-2">${project.subtitle}</p>
                        <h3 class="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">${project.title}</h3>
                        <p class="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl">${project.desc}</p>
                        
                        <div class="flex flex-wrap gap-2 mb-8 hidden sm:flex">
                            ${project.tech.map(t => `<span class="tech-badge border border-white/20 text-white/80 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider cursor-pointer" data-text="${t}">${t}</span>`).join('')}
                        </div>

                        <a href="${project.link}" target="_blank" class="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold uppercase text-[10px] md:text-xs tracking-wider hover:bg-lime-400 transition-colors w-fit">
                            View Case Study <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
            `;
        });
    }

    // Skills Grid
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        DATA.skills.forEach((skill, index) => {
            skillsGrid.innerHTML += `
                <div class="premium-card tilt-effect p-6 md:p-8 rounded-[2rem] gs_reveal h-full group" style="z-index: ${index};">
                    <div class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black flex items-center justify-center mb-6 border border-white/10 group-hover:bg-lime-400 group-hover:text-black transition-colors">
                        <i data-lucide="${skill.icon}"></i>
                    </div>
                    <h3 class="text-xl md:text-2xl font-black uppercase mb-4 md:mb-6">${skill.title}</h3>
                    <ul class="space-y-3 md:space-y-4 font-light text-sm md:text-base text-gray-400">
                        ${skill.items.map(i => `<li class="flex items-center gap-3"><div class="w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"></div> ${i}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
    }

    // Experience Grid
    const expGrid = document.getElementById('experience-grid');
    if (expGrid) {
        DATA.experience.forEach(exp => {
            expGrid.innerHTML += `
                <div class="flex flex-col md:flex-row gap-4 md:gap-12 p-6 md:p-10 rounded-[2rem] premium-card hover:bg-[#1a1a1a] transition-colors gs_reveal group">
                    <div class="md:w-1/4 shrink-0">
                        <span class="text-lime-400 font-mono text-xs md:text-sm tracking-widest uppercase block mb-2 md:mb-0">${exp.date}</span>
                    </div>
                    <div>
                        <h3 class="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-white">${exp.title}</h3>
                        <p class="text-gray-400 text-sm md:text-base font-light leading-relaxed">${exp.desc}</p>
                    </div>
                </div>
            `;
        });
    }

    // Posters
    const postersContainer = document.getElementById('posters-container');
    if (postersContainer) {
        for (let i = 1; i <= DATA.posterCount; i++) {
            postersContainer.innerHTML += `
                <div class="swiper-slide w-[260px] md:w-[400px] aspect-square rounded-[2rem] overflow-hidden relative group bg-gray-100 shadow-2xl">
                    <img src="poster/${i}.webp" alt="Poster ${i}" 
                         class="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
                         onerror="this.src='https://placehold.co/800x1000/eee/999?text=POSTER+${i}'">
                </div>
            `;
        }
    }
}

// GSAP Animations
function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    // Initial Navbar state
    gsap.set("#navbar", { yPercent: -100 });

    // --- Hero Animations ---
    const tlHero = gsap.timeline();
    
    tlHero.to(".hero-text", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
    })
    .to(".hero-title", {
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
        autoAlpha: 1
    }, "-=0.8")
    .to(".hero-desc", {
        y: 0,
        duration: 1,
        ease: "power3.out",
        autoAlpha: 1
    }, "-=0.8")
    .to(".hero-buttons", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        autoAlpha: 1
    }, "-=0.6")
    .to("#navbar", {
        yPercent: 0,
        duration: 1,
        ease: "expo.out"
    }, "-=1");

    // Parallax video in hero (Only active on Desktop via MatchMedia if needed, but simple enough to run everywhere)
    gsap.to(".hero-video", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // --- Marquee Text ---
    gsap.to(".marquee-text", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: ".marquee-container",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    // --- Reveal Elements (Fade Up) ---
    const revealElements = gsap.utils.toArray(".gs_reveal");
    revealElements.forEach(el => {
        gsap.fromTo(el, {
            autoAlpha: 0,
            y: 40
        }, {
            duration: 1,
            autoAlpha: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // --- Image Reveals (Scale Down) ---
    const revealImages = gsap.utils.toArray(".gs_reveal_img");
    revealImages.forEach(el => {
        gsap.fromTo(el, {
            autoAlpha: 0,
            scale: 0.95
        }, {
            duration: 1.5,
            autoAlpha: 1,
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
            }
        });
    });

    // --- Stacked Cards Animation (Projects) ---
    // CSS handles the sticky positioning, GSAP will just add a subtle scale-down effect as cards get stacked over.
    const cards = gsap.utils.toArray(".project-card");
    cards.forEach((card, i) => {
        if (i !== cards.length - 1) { // Skip the last card
            gsap.to(card, {
                scale: 0.9,
                opacity: 0.5,
                ease: "none",
                scrollTrigger: {
                    trigger: card,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    pinSpacing: false
                }
            });
        }
    });
    // --- Parallax Background Elements ---
    document.querySelectorAll('[data-parallax]').forEach(el => {
        const speed = parseFloat(el.getAttribute('data-parallax'));
        gsap.to(el, {
            y: () => window.innerHeight * speed,
            ease: "none",
            scrollTrigger: {
                trigger: el.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    });

    // --- 3D Tilt Project Cards ---
    const tiltElements = gsap.utils.toArray(".tilt-effect");
    tiltElements.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.matchMedia("(pointer: fine)").matches) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left; 
                const y = e.clientY - rect.top;
                const multiplier = 5; // max rotation degrees
                
                const xRot = multiplier * ((y - rect.height / 2) / (rect.height / 2));
                const yRot = -multiplier * ((x - rect.width / 2) / (rect.width / 2));
                
                gsap.to(card, {
                    rotateX: -xRot, // Invert for natural feel
                    rotateY: yRot,
                    duration: 0.5,
                    ease: "power2.out",
                    transformPerspective: 1000,
                    transformOrigin: "center"
                });
            }
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 1,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });
}

// Typewriter
function initTypewriter() {
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const typewriterEl = document.getElementById('typewriter');

    function type() {
        if (!typewriterEl) return;
        const currentRole = DATA.roles[roleIdx];
        if (isDeleting) {
            typewriterEl.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typewriterEl.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
        }

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIdx === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000; 
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % DATA.roles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    type();
}

// Live Status Clock
function updateLiveStatus() {
    const timeEl = document.getElementById('live-time');
    if (timeEl) {
        setInterval(() => {
            timeEl.textContent = new Date().toLocaleTimeString('en-US', {
                hour12: true,
                hour: 'numeric',
                minute: '2-digit',
                timeZoneName: 'short'
            });
        }, 1000);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderDynamicContent();
    lucide.createIcons();
    initTypewriter();
    updateLiveStatus();
    
    // Slight delay for GSAP to ensure DOM is ready and images are mapped
    setTimeout(() => {
        initGSAP();
        ScrollTrigger.refresh();
    }, 100);

    // Start Live Clock
    updateLiveStatus();
    setInterval(updateLiveStatus, 1000);

    // Initialize Fast Average Color
    const fac = new FastAverageColor();

    // Initialize Swiper Coverflow Carousel
    const swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 350,
            modifier: 1,
            slideShadows: true,
        },
        speed: 800,
        on: {
            slideChangeTransitionStart: function () {
                const activeSlide = this.slides[this.activeIndex];
                const img = activeSlide.querySelector('img');
                if (img) {
                    // Make sure image is loaded before getting color
                    if(img.complete) {
                        applyDynamicBackground(img);
                    } else {
                        img.addEventListener('load', () => applyDynamicBackground(img), { once: true });
                    }
                }
            }
        }
    });

    function applyDynamicBackground(img) {
        fac.getColorAsync(img, { algorithm: 'dominant' })
            .then(color => {
                // Set a CSS variable for the active slide's drop shadow
                const tint = `rgba(${color.value[0]}, ${color.value[1]}, ${color.value[2]}, 0.8)`;
                document.querySelector('.mySwiper').style.setProperty('--active-poster-color', tint);
            })
            .catch(e => console.log('Color extraction failed:', e));
    }
    
    // ==========================================
    // CREATIVE ENHANCEMENTS
    // ==========================================
    
    // 1. Custom Interactive Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (cursorDot && cursorOutline && window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            gsap.to(cursorOutline, {
                x: posX,
                y: posY,
                duration: 0.15,
                ease: "power2.out"
            });
        });
        
        const interactables = document.querySelectorAll('a, button, .project-card, .premium-card');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });
    }
    
    // 2. Magnetic Buttons
    const magneticEls = document.querySelectorAll('.magnetic');
    magneticEls.forEach((el) => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const h = rect.width / 2;
            const v = rect.height / 2;
            const x = e.clientX - rect.left - h;
            const y = e.clientY - rect.top - v;
            
            gsap.to(el, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 0.4,
                ease: "power2.out"
            });
            document.body.classList.add('cursor-magnetic');
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.3)"
            });
            document.body.classList.remove('cursor-magnetic');
        });
    });
    
    // 3 & 4. Text Scramble for Tech Badges
    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach(badge => {
        const originalText = badge.getAttribute('data-text');
        badge.addEventListener('mouseenter', () => {
            scrambleText(badge, originalText);
        });
    });

    // 5. Music Player (Auto-play & Canvas Visualizer)
    const bgMusic = document.getElementById('bg-music');
    const canvas = document.getElementById('bg-visualizer');

    if (bgMusic && canvas) {
        bgMusic.volume = 0.5;
        const ctx = canvas.getContext('2d');
        let audioCtx, analyser, source, dataArray;
        let isInitialized = false;
        let animationId;

        function initAudio() {
            if (isInitialized) return;
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioCtx.createAnalyser();
            source = audioCtx.createMediaElementSource(bgMusic);
            source.connect(analyser);
            analyser.connect(audioCtx.destination);
            
            analyser.fftSize = 128; // gives 64 frequency bins
            const bufferLength = analyser.frequencyBinCount;
            dataArray = new Uint8Array(bufferLength);
            isInitialized = true;
        }

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * 0.4;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function drawVisualizer() {
            if (!bgMusic.paused && isInitialized) {
                animationId = requestAnimationFrame(drawVisualizer);
                analyser.getByteFrequencyData(dataArray);
                
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                ctx.beginPath();
                ctx.moveTo(0, canvas.height);
                
                const sliceWidth = canvas.width / dataArray.length;
                let x = 0;
                
                for(let i = 0; i < dataArray.length; i++) {
                    const v = dataArray[i] / 255.0;
                    // amplify height and smooth it
                    const y = canvas.height - (v * canvas.height * 0.9);
                    
                    if (i === 0) {
                        ctx.lineTo(x, y);
                    } else {
                        const prevV = dataArray[i-1] / 255.0;
                        const prevY = canvas.height - (prevV * canvas.height * 0.9);
                        const xc = (x - sliceWidth + x) / 2;
                        const yc = (prevY + y) / 2;
                        ctx.quadraticCurveTo(x - sliceWidth, prevY, xc, yc);
                    }
                    x += sliceWidth;
                }
                
                // Complete the shape
                ctx.lineTo(canvas.width, canvas.height);
                ctx.lineTo(0, canvas.height);
                ctx.closePath();
                
                // Liquid glass gradient
                const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
                gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
                
                ctx.fillStyle = gradient;
                ctx.fill();
                
                // Add a bright border line to the wave top
                ctx.lineWidth = 2;
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.stroke();
            }
        }

        ScrollTrigger.create({
            trigger: "#contact",
            start: "top center",
            onEnter: () => {
                initAudio();
                if (audioCtx && audioCtx.state === 'suspended') {
                    audioCtx.resume();
                }
                
                // Attempt to play, catch if user hasn't interacted yet
                let playPromise = bgMusic.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        drawVisualizer();
                    }).catch(e => {
                        console.log("Audio autoplay blocked pending interaction.");
                        // Add a one-time click listener to start music if autoplay was blocked
                        document.body.addEventListener('click', () => {
                            if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
                            bgMusic.play().then(() => drawVisualizer()).catch(err => console.log(err));
                        }, { once: true });
                    });
                }
            },
            onLeaveBack: () => {
                bgMusic.pause();
                cancelAnimationFrame(animationId);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        });
    }
});

// Scramble Text Effect function
function scrambleText(element, originalText) {
    const chars = '!<>-_\\\\/[]{}—=+*^?#________';
    let iteration = 0;
    
    clearInterval(element.scrambleInterval);
    
    element.scrambleInterval = setInterval(() => {
        element.innerText = originalText
            .split('')
            .map((letter, index) => {
                if(index < iteration) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        
        if(iteration >= originalText.length){ 
            clearInterval(element.scrambleInterval);
            element.innerText = originalText;
        }
        
        iteration += 1 / 3;
    }, 30);
}
