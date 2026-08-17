// Data Provider - Refined with Professional Copywriting
const DATA = {
    roles: ["UI/UX Designer", "Full-Stack Developer", "Creative Technologist"],
    profileImage: "Pranav-S.webp", 
    about: [
        "I move pixels for a living and then write code to make them behave.",
        "Currently surviving a B.Tech in Computer Science Engineering at the College of Engineering, Attingal, while convincing developers that 8px spacing actually matters and reminding designers that it still has to work in production.",
        "I design clean, user-friendly experiences in Figma, build them with React and Python, and occasionally spend three hours adjusting a button by 2 pixels because yes, users will definitely notice.",
        "When I'm not arguing with alignment, I'm leading communities through IEEE as a Student Representative, Graphic Designer, and Communication Lead—making technology look as good as it functions."
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
            link: "https://github.com/pase5/Zia-Assistant",
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
            link: "https://github.com/pase5/iku2_binary",
            color: "#1f1f1f" // Standard dark grey for Iku2
        }
    ],
    experience: [
        {
            title: "UI/UX and graphic designer intern @ Multi graphics group",
            date: "2024 - Present",
            desc: "Designing user-centric digital experiences and crafting engaging graphic materials to enhance brand identity and user interaction.",
            icon: "radio"
        },
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
    sessions: [
        {
            title: "Basics of IoT",
            topic: "Internet of Things",
            date: "Recent Session",
            desc: "An introductory session on IoT architecture, sensors, and practical applications in smart environments.",
            images: [
                "iot_session_images/1758084814931.jpg",
                "iot_session_images/1758084821647.jpg",
                "iot_session_images/1758084832621.jpg",
                "iot_session_images/1758084849211.jpg",
                "iot_session_images/1758084853430.jpg",
                "iot_session_images/1770523508576.jpg"
            ] 
        },
        {
            title: "UI/UX Masterclass",
            topic: "Design Systems",
            date: "Recent Session",
            desc: "Deep dive into creating scalable design systems, typography hierarchy, and accessibility in modern web design.",
            images: [
                "ux_session_images/1771907420391.jpg",
                "ux_session_images/1771907435955.jpg",
                "ux_session_images/1771907444279.jpg"
            ]
        },
        {
            title: "IEEE Membership Development",
            topic: "Community Building",
            date: "Recent Session",
            desc: "Strategies for driving IEEE membership growth and fostering active student engagement within the community.",
            images: [
                "ieee_mdsession/1750095272862.jpg",
                "ieee_mdsession/1771257915493.jpg",
                "ieee_mdsession/1774789881666.jpg"
            ]
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
        aboutContainer.innerHTML = DATA.about.map(p => `<p class="about-p transition-all duration-300 hover:text-white hover:translate-x-2">${p}</p>`).join('');
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
                        <p class="text-cyan-400 font-mono text-xs md:text-sm uppercase tracking-widest mb-2">${project.subtitle}</p>
                        <h3 class="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">${project.title}</h3>
                        <p class="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl">${project.desc}</p>
                        
                        <div class="flex flex-wrap gap-2 mb-8 hidden sm:flex">
                            ${project.tech.map(t => `<span class="tech-badge border border-white/20 text-white/80 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider cursor-pointer" data-text="${t}">${t}</span>`).join('')}
                        </div>

                        <a href="${project.link}" target="_blank" class="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold uppercase text-[10px] md:text-xs tracking-wider hover:bg-cyan-400 transition-colors w-fit">
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
                    <div class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black flex items-center justify-center mb-6 border border-white/10 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                        <i data-lucide="${skill.icon}"></i>
                    </div>
                    <h3 class="text-xl md:text-2xl font-black uppercase mb-4 md:mb-6">${skill.title}</h3>
                    <ul class="space-y-3 md:space-y-4 font-light text-sm md:text-base text-gray-400">
                        ${skill.items.map(i => `<li class="flex items-center gap-3"><div class="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></div> ${i}</li>`).join('')}
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
                        <span class="text-cyan-400 font-mono text-xs md:text-sm tracking-widest uppercase block mb-2 md:mb-0">${exp.date}</span>
                    </div>
                    <div>
                        <h3 class="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-white">${exp.title}</h3>
                        <p class="text-gray-400 text-sm md:text-base font-light leading-relaxed">${exp.desc}</p>
                    </div>
                </div>
            `;
        });
    }

    // Sessions Grid
    const sessionsGrid = document.getElementById('sessions-grid');
    if (sessionsGrid) {
        DATA.sessions.forEach((session, sIdx) => {
            let imagesHtml = '';
            if (session.images && session.images.length > 0) {
                imagesHtml = session.images.map((img, i) => `
                    <img src="${img}" alt="${session.title}" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${i === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'} session-img-${sIdx} group-hover:scale-110">
                `).join('');
            } else {
                imagesHtml = `<img src="${session.image}" alt="${session.title}" class="w-full h-full object-cover absolute inset-0 z-10 group-hover:scale-110 transition-transform duration-700">`;
            }

            sessionsGrid.innerHTML += `
                <div class="premium-card bg-[#111] rounded-[2rem] overflow-hidden gs_reveal group border border-white/5 tilt-effect">
                    <div class="h-48 md:h-56 w-full overflow-hidden relative">
                        ${imagesHtml}
                        <div class="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent opacity-80 z-20 pointer-events-none"></div>
                        <span class="absolute bottom-4 left-6 px-3 py-1 bg-lime-400 text-black text-[10px] font-bold uppercase tracking-widest rounded-full z-30">${session.topic}</span>
                    </div>
                    <div class="p-6 md:p-8">
                        <span class="text-gray-500 font-mono text-xs uppercase tracking-widest block mb-2">${session.date}</span>
                        <h3 class="text-xl md:text-2xl font-bold mb-3">${session.title}</h3>
                        <p class="text-gray-400 text-sm leading-relaxed">${session.desc}</p>
                    </div>
                </div>
            `;
        });

        // Setup image rotation
        DATA.sessions.forEach((session, sIdx) => {
            if (session.images && session.images.length > 1) {
                let currentIdx = 0;
                const images = document.querySelectorAll(`.session-img-${sIdx}`);
                setInterval(() => {
                    if (images.length === 0) return;
                    images[currentIdx].classList.remove('opacity-100', 'z-10');
                    images[currentIdx].classList.add('opacity-0', 'z-0');
                    currentIdx = (currentIdx + 1) % session.images.length;
                    images[currentIdx].classList.remove('opacity-0', 'z-0');
                    images[currentIdx].classList.add('opacity-100', 'z-10');
                }, 3000); // Change image every 3 seconds
            }
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
    gsap.set("#navbar", { y: -150, opacity: 0 });

    // --- Hero Animations ---
    const tlHero = gsap.timeline();
    
    // Add initial blur for smoother hero intro
    gsap.set(".hero-title", { filter: "blur(10px)" });
    gsap.set(".hero-desc", { filter: "blur(5px)" });

    tlHero.to(".hero-text", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
    })
    .to(".hero-title", {
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
        stagger: 0.15,
        ease: "expo.out",
        autoAlpha: 1
    }, "-=0.8")
    .to(".hero-desc", {
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        autoAlpha: 1
    }, "-=1")
    .to(".hero-buttons", {
        opacity: 1,
        duration: 1,
        ease: "expo.out",
        autoAlpha: 1
    }, "-=0.8")
    .to("#navbar", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "expo.out"
    }, "-=1.2");

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

    // --- Staggered Text Reveal ---
    const staggeredWords = gsap.utils.toArray(".staggered-word");
    
    // Set initial state: words start blurred and slightly offset
    gsap.set(staggeredWords, { opacity: 0, x: "20vw", filter: "blur(20px)" });

    const tlStagger = gsap.timeline({
        scrollTrigger: {
            trigger: "#staggered-text-section",
            start: "top top",
            end: "+=200%", // Extended scroll duration for ultra-smooth transition
            pin: true,
            scrub: 1.5 // Smooth scrubbing
        }
    });

    // Reveal one by one with a cinematic blur-in effect
    staggeredWords.forEach((word, i) => {
        tlStagger.to(word, {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power3.out"
        }, i * 0.4); // Overlapping stagger
    });

    // --- Reveal Elements (Fade Up with Blur) ---
    const revealElements = gsap.utils.toArray(".gs_reveal");
    revealElements.forEach(el => {
        gsap.fromTo(el, {
            autoAlpha: 0,
            y: 60,
            filter: "blur(10px)"
        }, {
            duration: 1.5,
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "expo.out",
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // --- Image Reveals (Scale Up with Blur) ---
    const revealImages = gsap.utils.toArray(".gs_reveal_img");
    revealImages.forEach(el => {
        gsap.fromTo(el, {
            autoAlpha: 0,
            scale: 0.85,
            filter: "blur(15px)"
        }, {
            duration: 2,
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            ease: "expo.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // --- Stacked Cards Animation (Projects) ---
    const cards = gsap.utils.toArray(".project-card");
    cards.forEach((card, i) => {
        if (i !== cards.length - 1) { 
            gsap.to(card, {
                scale: 0.85,
                opacity: 0.3,
                rotateX: 5,
                transformOrigin: "top center",
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

    // --- Global Parallax Background ---
    const globalBg = document.getElementById('global-parallax-bg');
    if (globalBg) {
        gsap.to(globalBg, {
            yPercent: 30, // move down as you scroll down
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1
            }
        });
    }

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

// ==========================================
// CUSTOM TAB ANIMATION
// ==========================================
(function initTabAnimation() {
    let marqueeInterval;
    let marqueeText = " Pranav S • Graphics Designer • UI/UX Designer • ";
    const originalTitle = document.title;

    function startMarquee() {
        marqueeInterval = setInterval(() => {
            marqueeText = marqueeText.substring(1) + marqueeText[0];
            document.title = marqueeText;
        }, 400);
    }

    function stopMarquee() {
        clearInterval(marqueeInterval);
    }

    // Start immediately
    startMarquee();

    // Add 'Come back!' effect when user leaves the tab
    window.addEventListener("blur", () => {
        stopMarquee();
        document.title = "Come back! 🥺 | Pranav S";
    });

    window.addEventListener("focus", () => {
        startMarquee();
    });
})();

// ==========================================
// DYNAMIC GLOWING FAVICON ANIMATION
// ==========================================
(function initFaviconAnimation() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    
    const logoImg = new Image();
    // Use an absolute or relative path that reliably loads the SVG
    logoImg.src = 'logo.svg';
    
    let angle = 0;
    let isAnimating = true;
    
    function drawFavicon() {
        if (!isAnimating) return;
        
        ctx.clearRect(0, 0, 64, 64);
        
        // 1. Draw spinning gradient background
        ctx.save();
        ctx.translate(32, 32);
        ctx.rotate(angle);
        
        const gradient = ctx.createLinearGradient(-32, -32, 32, 32);
        gradient.addColorStop(0, '#a3e635'); // Lime green
        gradient.addColorStop(0.33, '#000000'); // Black
        gradient.addColorStop(0.66, '#a3e635'); // Lime green
        gradient.addColorStop(1, '#000000'); // Black
        
        ctx.beginPath();
        ctx.arc(0, 0, 32, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
        
        // 2. Draw the logo on top
        if (logoImg.complete && logoImg.naturalHeight !== 0) {
            ctx.drawImage(logoImg, 10, 10, 44, 44);
        }
        
        angle += 0.2;
        
        // 3. Update favicon
        link.type = 'image/png';
        link.href = canvas.toDataURL('image/png');
        
        setTimeout(() => requestAnimationFrame(drawFavicon), 100); // ~10fps
    }
    
    logoImg.onload = () => {
        if (isAnimating) drawFavicon();
    };
    
    window.addEventListener("blur", () => {
        isAnimating = false;
    });
    
    window.addEventListener("focus", () => {
        if (!isAnimating) {
            isAnimating = true;
            drawFavicon();
        }
    });
})();

// ==========================================
// HORROR THEME LOGIC
// ==========================================
(function initHorrorTheme() {
    const horrorBtn = document.getElementById('horror-btn');
    const bgMusic = document.getElementById('bg-music');
    const horrorMusic = document.getElementById('horror-music');
    const canvas = document.getElementById('bg-visualizer');
    const ctx = canvas ? canvas.getContext('2d') : null;
    let isHorror = false;
    let audioCtx = null;
    let analyser = null;
    let dataArray = null;
    let animationId = null;

    if (!horrorBtn || !horrorMusic) return;

    function initAudio() {
        if (audioCtx) return;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        const source = audioCtx.createMediaElementSource(horrorMusic);
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        dataArray = new Uint8Array(analyser.frequencyBinCount);
    }

    function checkBeat() {
        if (!isHorror) return;
        analyser.getByteFrequencyData(dataArray);
        
        if (ctx && canvas) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const barWidth = (canvas.width / dataArray.length) * 2.5;
            let barHeight;
            let x = 0;
            
            for(let i = 0; i < dataArray.length; i++) {
                barHeight = dataArray[i] * 1.5;
                
                // Standard visual bars - red for horror theme
                ctx.fillStyle = `rgb(${barHeight + 50}, 0, 0)`;
                ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                
                x += barWidth + 1;
            }
        }

        animationId = requestAnimationFrame(checkBeat);
    }

    horrorBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isHorror = !isHorror;
        
        if (isHorror) {
            initAudio();
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            document.body.classList.add('horror-theme');
            if (bgMusic) bgMusic.pause();
            horrorMusic.play().catch(err => console.log('Audio play failed', err));
            horrorBtn.classList.add('bg-black', 'text-red-500', 'border-red-600');
            horrorBtn.classList.remove('bg-transparent', 'text-black', 'border-black');
            horrorBtn.style.boxShadow = '0 0 20px rgba(255,0,0,0.6)';
            checkBeat();
        } else {
            document.body.classList.remove('horror-theme');
            horrorMusic.pause();
            horrorMusic.currentTime = 0;
            cancelAnimationFrame(animationId);
            if (ctx && canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
            horrorBtn.classList.remove('bg-black', 'text-red-500', 'border-red-600');
            horrorBtn.classList.add('bg-transparent', 'text-black', 'border-black');
            horrorBtn.style.boxShadow = 'none';
        }
    });
})();

// ==========================================
// 3D STORY SECTION LOGIC (INTERACTIVE BOOK)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const storySection = document.getElementById('story');
    const storyMusic = document.getElementById('story-music');
    const bgMusic = document.getElementById('bg-music');
    const canvas = document.getElementById('story-canvas');

    if (storySection) {
        
        // --- 1. 3D Particle Canvas Background ---
        let ctx = null;
        let particles = [];
        let animationFrame = null;
        
        if (canvas) {
            ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                initParticles();
            });

            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.z = Math.random() * 1000;
                    this.size = Math.random() * 2 + 0.5;
                    this.speedZ = Math.random() * 2 + 1;
                }
                update() {
                    this.z -= this.speedZ;
                    if (this.z <= 0) {
                        this.z = 1000;
                        this.x = Math.random() * canvas.width;
                        this.y = Math.random() * canvas.height;
                    }
                }
                draw() {
                    const fov = 300;
                    const scale = fov / (fov + this.z);
                    const x2d = (this.x - canvas.width/2) * scale + canvas.width/2;
                    const y2d = (this.y - canvas.height/2) * scale + canvas.height/2;
                    const r = this.size * scale;
                    const opacity = Math.max(0, 1 - (this.z / 1000));
                    
                    ctx.beginPath();
                    ctx.arc(x2d, y2d, Math.max(0.1, r), 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(163, 230, 53, ${opacity})`;
                    ctx.fill();
                }
            }

            function initParticles() {
                particles = [];
                for(let i=0; i<150; i++) {
                    particles.push(new Particle());
                }
            }

            function animateParticles() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach(p => {
                    p.update();
                    p.draw();
                });
                animationFrame = requestAnimationFrame(animateParticles);
            }
            
            initParticles();
        }

        // --- 2. 3D Book Logic via ScrollTrigger ---
        const pages = document.querySelectorAll('.book-page');
        let currentPage = 0;
        const totalPages = pages.length;

        function flipNext() {
            if (currentPage < totalPages) {
                const page = pages[currentPage];
                if(page) {
                    page.classList.add('flipped');
                    page.style.zIndex = currentPage; 
                }
                currentPage++;
            }
        }

        function flipPrev() {
            if (currentPage > 0) {
                currentPage--;
                const page = pages[currentPage];
                if(page) {
                    page.classList.remove('flipped');
                    page.style.zIndex = 60 - currentPage * 10;
                }
            }
        }

        // --- 3. Handle Audio & Canvas Lifecycle on Scroll ---
        ScrollTrigger.create({
            trigger: storySection,
            start: "top top",
            end: "+=4000",
            pin: true,
            onEnter: () => {
                if (bgMusic) bgMusic.pause();
                if (storyMusic) {
                    storyMusic.volume = 0;
                    let p = storyMusic.play();
                    if(p !== undefined) {
                        p.then(() => gsap.to(storyMusic, { volume: 0.6, duration: 2 })).catch(e => console.log(e));
                    }
                }
                if(canvas && !animationFrame) animateParticles();
            },
            onLeave: () => {
                if (storyMusic) gsap.to(storyMusic, { volume: 0, duration: 1, onComplete: () => storyMusic.pause() });
                if (bgMusic) bgMusic.play().catch(e=>console.log(e));
                if(animationFrame) { cancelAnimationFrame(animationFrame); animationFrame = null; }
            },
            onEnterBack: () => {
                if (bgMusic) bgMusic.pause();
                if (storyMusic) {
                    storyMusic.volume = 0;
                    storyMusic.play().catch(e=>console.log(e));
                    gsap.to(storyMusic, { volume: 0.6, duration: 1 });
                }
                if(canvas && !animationFrame) animateParticles();
            },
            onLeaveBack: () => {
                if (storyMusic) gsap.to(storyMusic, { volume: 0, duration: 1, onComplete: () => storyMusic.pause() });
                if (bgMusic) bgMusic.play().catch(e=>console.log(e));
                if(animationFrame) { cancelAnimationFrame(animationFrame); animationFrame = null; }
            },
            onUpdate: (self) => {
                let targetPage = Math.floor(self.progress * (totalPages + 1));
                if (targetPage > totalPages) targetPage = totalPages;
                if (targetPage < 0) targetPage = 0;

                while (currentPage < targetPage) {
                    flipNext();
                }
                while (currentPage > targetPage) {
                    flipPrev();
                }
            }
        });
    }
});
