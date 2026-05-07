// Data Provider
const DATA = {
    roles: ["Student Representative @ IEEE SPS KC", "Graphic Designer @ IEEE Smart Cities", "Communication Lead @ IEEE CS SYP HIZE"],
    profileImage: "profile.png", 
    about: [
        "I am a B.Tech Computer Science Engineering student at College of Engineering, Attingal (2023 - Present) with a strong passion for UI/UX design, creative development, and technology-driven problem solving.",
        "I enjoy designing clean, user-centric digital experiences that balance aesthetics with functionality. I have hands-on experience in UI/UX designing using Figma, and front-end development using HTML, CSS, JavaScript, and React.",
        "I am an active IEEE member and currently hold key leadership roles, including Student Representative for the IEEE Signal Processing Society Kerala Chapter, Graphic Designer at IEEE Smart Cities Community, and Communication Lead at IEEE CS SYP HIZE.",
        "My work focuses on the intersection of design and technology, where I contribute to global technical communities through creative direction and strategic communication."
    ],
    skills: [
        { title: "Languages", items: ["HTML", "CSS", "Javascript", "Python", "React"], icon: "code" },
        { title: "Design Platforms", items: ["Figma", "Photoshop", "Premiere Pro", "Canva", "AfterEffects"], icon: "palette" },
        { title: "Other Tools", items: ["MS Word", "MS Excel", "PowerPoint"], icon: "layout" }
    ],
    projects: [
        {
            title: "IRIS",
            subtitle: "Event Website",
            desc: "Designed and developed a responsive event website with a focus on visual hierarchy, layout consistency, and cross-device UX.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://thepase.ceal.in/iris-main/",
            image: "iris_website_preview_1778136891629.png"
        },
        {
            title: "Transitix",
            subtitle: "Smart Traffic Management System",
            desc: "Designed and built a modular traffic dashboard with 2D/3D visualization using Three.js and FastAPI. Implemented dynamic signal control with computer vision (OpenCV).",
            tech: ["Three.js", "FastAPI", "OpenCV"],
            link: "#"
        },
        {
            title: "Zia",
            subtitle: "AI Calling System for Hospital Administration",
            desc: "Designed the UI/UX for an AI-powered hospital calling assistant using Flask and Twilio. Built interaction flows for call handling and administrative workflows with OpenAI.",
            tech: ["Flask", "Twilio", "OpenAI", "SQLAlchemy"],
            link: "#"
        },
        {
            title: "Iku2",
            subtitle: "Gesture-Based Interaction Interface",
            desc: "Designed visual feedback systems and real-time interaction flows for a touchless gesture-recognition interface built with Python and computer vision.",
            tech: ["Python", "OpenCV", "MediaPipe"],
            link: "#"
        }
    ],
    experience: [
        {
            title: "Student Representative @ IEEE SPS Kerala Chapter",
            date: "2024 - Present",
            desc: "Representing student interests and coordinating activities for the Signal Processing Society Kerala Chapter.",
            icon: "radio"
        },
        {
            title: "Graphic Designer @ IEEE Smart Cities Community",
            date: "2023 - Present",
            desc: "Creating visual assets and branding materials for IEEE Smart Cities global initiatives.",
            icon: "brush"
        },
        {
            title: "Communication Lead @ IEEE CS SYP HIZE",
            date: "2024 - Present",
            desc: "Managing communication channels and outreach for the Computer Society Students & Young Professionals HIZE.",
            icon: "message-square"
        }
    ],
    posterCount: 24
};

// --- CORE LOGIC ---

// Initialize Typewriter
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

    let typeSpeed = isDeleting ? 50 : 150;

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

// Render Dynamic Content
function renderDynamicContent() {
    // Profile Image
    const profileImg = document.getElementById('profile-img');
    if (profileImg) profileImg.src = DATA.profileImage;

    // About Bio
    const aboutContainer = document.getElementById('about-content');
    if (aboutContainer) {
        aboutContainer.innerHTML = DATA.about.map(p => `<p class="reveal">${p}</p>`).join('');
    }

    // Technical Projects
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        DATA.projects.forEach(project => {
            projectsGrid.innerHTML += `
                <div class="flex-none w-[280px] md:w-[450px] bg-white text-black border-4 border-black p-6 md:p-8 brutal-shadow-hover transition-all group relative overflow-hidden flex flex-col scroll-skew">
                    <div class="flex-grow">
                        <div class="flex justify-between items-start mb-6">
                            <h3 class="text-4xl md:text-6xl font-black uppercase leading-none">${project.title}</h3>
                            <div class="bg-lime-400 border-2 border-black p-2 brutal-shadow-small group-hover:-translate-y-1 transition-transform">
                                <i data-lucide="code-2" class="w-6 h-6"></i>
                            </div>
                        </div>
                        <p class="text-xs font-black text-lime-600 uppercase mb-4 tracking-widest bg-lime-100 inline-block px-2 py-0.5 border border-lime-600">${project.subtitle}</p>
                        <p class="text-base md:text-lg mb-8 opacity-80 leading-tight font-bold">${project.desc}</p>
                        
                        <div class="flex flex-wrap gap-2 mb-8">
                            ${project.tech.map(t => `<span class="bg-black text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-widest">${t}</span>`).join('')}
                        </div>
                    </div>
                    
                    <a href="${project.link}" target="_blank" class="mt-auto inline-flex items-center justify-between w-full font-black uppercase border-4 border-black p-4 bg-black text-white hover:bg-lime-400 hover:text-black transition-all group/btn">
                        View Live <i data-lucide="arrow-up-right" class="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"></i>
                    </a>

                    <div class="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500">
                         <img src="${project.image || 'https://placehold.co/800x800/000/fff?text=' + project.title}" 
                              alt="${project.title}" 
                              class="w-full h-full object-cover">
                    </div>
                </div>
            `;
        });
    }

    // Skills
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        DATA.skills.forEach(skill => {
            skillsGrid.innerHTML += `
                <div class="bg-white border-4 border-black p-8 brutal-shadow-hover transition-all group scroll-skew">
                    <div class="bg-black text-white w-12 h-12 flex items-center justify-center mb-6 brutal-shadow group-hover:bg-lime-500 group-hover:text-black transition-colors">
                        <i data-lucide="${skill.icon}"></i>
                    </div>
                    <h3 class="text-2xl font-black uppercase mb-4">${skill.title}</h3>
                    <ul class="space-y-2 font-bold opacity-60">
                        ${skill.items.map(i => `<li>- ${i}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
    }

    // Experience
    const expGrid = document.getElementById('experience-grid');
    if (expGrid) {
        DATA.experience.forEach(exp => {
            expGrid.innerHTML += `
                <div class="flex flex-col md:flex-row gap-6 bg-white border-4 border-black p-8 brutal-shadow-hover transition-all relative overflow-hidden group scroll-skew">
                    <div class="md:w-1/4">
                        <span class="bg-black text-white px-4 py-1 text-sm font-black uppercase italic">${exp.date}</span>
                    </div>
                    <div class="md:w-3/4">
                        <h3 class="text-3xl font-black uppercase mb-2 group-hover:text-lime-600 transition-colors">${exp.title}</h3>
                        <p class="text-lg font-medium opacity-70">${exp.desc}</p>
                    </div>
                    <div class="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <i data-lucide="${exp.icon}" class="w-32 h-32"></i>
                    </div>
                </div>
            `;
        });
    }

    // Posters
    const postersContainer = document.getElementById('posters-container');
    if (postersContainer) {
        const posterItems = [];
        for (let i = 1; i <= DATA.posterCount; i++) {
            posterItems.push(`
                <div class="flex-none w-[300px] aspect-square border-4 border-black bg-white brutal-shadow overflow-hidden group cursor-pointer">
                    <img src="poster/${i}.png" alt="Poster ${i}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 select-none"
                         draggable="false"
                         onerror="this.src='https://placehold.co/800x800/000/fff?text=POSTER+${i}'">
                </div>
            `);
        }
        postersContainer.innerHTML = [...posterItems, ...posterItems, ...posterItems, ...posterItems].join('');
    }
}

// Technical Projects Horizontal Scroll
function setupHorizontalScroll() {
    const container = document.getElementById('projects-horizontal-container');
    const grid = document.getElementById('projects-grid');
    if (!container || !grid) return;

    window.addEventListener('scroll', () => {
        const containerTop = container.offsetTop;
        const containerHeight = container.offsetHeight;
        const scrollPos = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (scrollPos >= containerTop && scrollPos <= containerTop + containerHeight - viewportHeight) {
            const scrollFraction = (scrollPos - containerTop) / (containerHeight - viewportHeight);
            const maxTranslate = grid.scrollWidth - window.innerWidth + 120;
            grid.style.transform = `translateX(-${scrollFraction * maxTranslate}px)`;
        }
    });
}

// LinkedIn DP Synchronization
async function syncLinkedInDP() {
    const badgeUrl = `https://badges.linkedin.com/profile?locale=en_US&badgetype=VERTICAL&badgetheme=light&uid=1258334476&version=v1&maxsize=medium&trk=profile-badge&vanityname=pranavs5`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(badgeUrl)}`;

    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();
        const content = data.contents;
        const imgRegex = /src=\\"(https:\/\/media\.licdn\.com\/dms\/image\/[^"]+)\\"/;
        const imgMatch = content.match(imgRegex);

        if (imgMatch) {
            const liveImageUrl = imgMatch[1].replace(/\\/g, '');
            DATA.profileImage = liveImageUrl;
            document.querySelectorAll('#profile-img, #li-card-img').forEach(img => {
                img.src = liveImageUrl;
            });
        }
    } catch (error) {
        console.error("LinkedIn sync failed:", error);
    }
}

// Setup manual and auto-scroll for posters
function setupPosterScroll() {
    const scroller = document.getElementById('posters-scroller');
    if (!scroller) return;

    let isHovered = false;
    let isDragging = false;
    let startX, scrollLeft;

    const itemWidth = 300;
    const gap = 24;
    const singleSetWidth = DATA.posterCount * (itemWidth + gap);

    scroller.scrollLeft = singleSetWidth;

    scroller.addEventListener('mouseenter', () => isHovered = true);
    scroller.addEventListener('mouseleave', () => {
        isHovered = false;
        isDragging = false;
    });

    scroller.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - scroller.offsetLeft;
        scrollLeft = scroller.scrollLeft;
        e.preventDefault();
    });
    window.addEventListener('mouseup', () => {
        isDragging = false;
    });
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scroller.offsetLeft;
        const walk = (x - startX) * 1.5;
        scroller.scrollLeft = scrollLeft - walk;
    });

    function autoScroll() {
        if (!isHovered && !isDragging) {
            scroller.scrollLeft += 1;
        }
        
        if (scroller.scrollLeft >= singleSetWidth * 2) {
            scroller.scrollLeft -= singleSetWidth;
        } else if (scroller.scrollLeft <= singleSetWidth * 0.5) {
            scroller.scrollLeft += singleSetWidth;
        }
        
        requestAnimationFrame(autoScroll);
    }
    autoScroll();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderDynamicContent();
    setupHorizontalScroll();
    setupPosterScroll();
    lucide.createIcons();
    type();
    syncLinkedInDP();

    // ScrollReveal
    ScrollReveal().reveal('.reveal', { 
        delay: 200, 
        distance: '50px', 
        origin: 'bottom', 
        duration: 1000,
        interval: 100 
    });
    ScrollReveal().reveal('h2', { delay: 100, distance: '80px', origin: 'left', duration: 1200 });
});
