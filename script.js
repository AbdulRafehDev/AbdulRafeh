// --- Content State ---
const DEFAULT_CONTENT = {
    name: "Abdul Rafeh",
    heroTitle: "Building Digital Experiences.",
    heroSubtitle: "Passionate Mobile App Developer specializing in Kotlin, Java, and Jetpack Compose.",
    aboutText: "I am a versatile developer with a strong foundation in both Mobile and Web technologies. As a dedicated Mobile Application Developer, I specialize in Android development, creating high-performance, user-centric applications that solve real-world problems. Beyond mobile, I am also proficient in building responsive and dynamic web experiences using HTML, CSS, and JavaScript, as well as developing customized, scalable solutions within the WordPress ecosystem.",
    skills: ["Kotlin", "Java", "Jetpack Compose", "Firebase", "Room SQL", "AWS", "Azure", "Git", "Python", "C++", "Laravel", "Bootstrap", "HTML", "CSS", "JAVASCRIPT", "Wordpress", "Microsoft SQL", "Room DB"],
    projects: [
        { 
            title: "Pregli", 
            category: "Healthcare", 
            desc: "A comprehensive tracking app for expecting mothers.", 
            image: "pregli.webp", 
            link: "https://play.google.com/store/apps/details?id=com.techsasoft.pregli" 
        },
        { 
            title: "iChums", 
            category: "Social", 
            desc: "A social networking platform built for meaningful connections.", 
            image: "ichums.webp", 
            link: "https://play.google.com/store/apps/details?id=4ea0af61-7b6c-49ce-9e86-73f094d55339" 
        },
        { 
            title: "BMI Calculator", 
            category: "Healthcare", 
            desc: "Sleek health utility with metric/imperial support.", 
            image: "bmi.webp", 
            link: "https://play.google.com/store/apps/details?id=com.bmi.calculator.techsacare" 
        },
        { 
            title: "Karvo", 
            category: "Utility", 
            desc: "Efficient tracking and management for specialized tasks.", 
            image: "karvo.webp", 
            link: "https://play.google.com/store/apps/details?id=0f357cde-10a8-4040-bf9a-58485f4c138f" 
        },
        { 
            title: "My Clinic", 
            category: "Healthcare", 
            desc: "Integrated features into existing healthcare app.", 
            image: "myclinic.webp", 
            link: "https://play.google.com/store/apps/details?id=com.myclinic.ksa" 
        },
        { 
            title: "IluvQuran Quiz", 
            category: "Education", 
            desc: "Interactive quiz application for Quranic learning.", 
            image: "iluvquran.webp", 
            link: "https://play.google.com/store/search?q=iluvquran&c=apps" 
        }
    ]
};

let content = JSON.parse(localStorage.getItem('portfolio_content_vanilla')) || DEFAULT_CONTENT;

// --- UI Rendering ---
function render() {
    // 1. Update Name (LinkedIn Logo Style handling)
    const navName = document.getElementById('nav-name');
    if (navName) {
        navName.innerText = content.name.split(' ')[0] || "Abdul";
    }

    // 2. Update Hero Section
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        // LinkedIn Blue hex for the highlight
        heroTitle.innerHTML = content.heroTitle.replace('Digital', '<span class="text-[#0A66C2]">Digital</span>');
    }
    
    const heroSubtitle = document.getElementById('hero-subtitle');
    if (heroSubtitle) heroSubtitle.innerText = content.heroSubtitle;

    // 3. Update About & Footer
    const aboutText = document.getElementById('about-text');
    if (aboutText) aboutText.innerText = content.aboutText;

    const copyrightText = document.getElementById('copyright-text');
    if (copyrightText) copyrightText.innerText = `© 2026 ${content.name}. All rights reserved.`;

    // 4. Render Skills
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skillsContainer.innerHTML = content.skills.map(skill => `
            <span class="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors cursor-default">${skill}</span>
        `).join('');
    }

    // 5. Render Projects - Center Aligned with Hover Button
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsContainer.innerHTML = content.projects.map(project => `
            <div class="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col items-center text-center">
                <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl group-hover:bg-blue-100 transition-colors"></div>
                
                <div class="mb-6 relative inline-block">
                    <div class="absolute inset-0 bg-[#0A66C2]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img src="${project.image}" alt="${project.title}" class="relative w-24 h-24 rounded-3xl shadow-md object-cover bg-white p-1 border border-slate-50" onerror="this.src='https://picsum.photos/128/128'">
                </div>

                <div class="inline-block px-3 py-1 rounded-lg bg-blue-50 text-[10px] font-bold uppercase tracking-wider text-[#0A66C2] mb-4">
                    ${project.category}
                </div>

                <h3 class="text-2xl font-black text-slate-900 mb-3 group-hover:text-[#0A66C2] transition-colors">${project.title}</h3>
                <p class="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 max-w-[280px]">${project.desc}</p>
                
                <div class="h-12"></div>

                <div class="absolute inset-x-0 bottom-8 px-8 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a href="${project.link}" target="_blank" 
                       class="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#0A66C2] text-white text-xs font-bold rounded-2xl shadow-lg shadow-blue-900/20 hover:bg-[#084d91] transition-all">
                        View on Play Store <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </a>
                </div>
            </div>
        `).join('');
    }
    // 6. Update Admin Inputs
    const inputName = document.getElementById('input-name');
    if (inputName) inputName.value = content.name;

    const inputHeroTitle = document.getElementById('input-hero-title');
    if (inputHeroTitle) inputHeroTitle.value = content.heroTitle;

    const inputHeroSubtitle = document.getElementById('input-hero-subtitle');
    if (inputHeroSubtitle) inputHeroSubtitle.value = content.heroSubtitle;

    if (window.lucide) {
        lucide.createIcons();
    }
}

window.openContactModal = function() {
    const modal = document.getElementById('contact-modal');
    const content = document.getElementById('contact-modal-content');
    
    modal.classList.remove('hidden');
    // Small timeout to allow the transition to trigger
    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
}

window.closeContactModal = function() {
    const modal = document.getElementById('contact-modal');
    const content = document.getElementById('contact-modal-content');
    
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 300);
}

// Update all "Contact" links to trigger the modal instead of jumping to a section
document.querySelectorAll('a[href="#contact"], a[href="#get-in-touch"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        openContactModal();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('contact-dialog');
    const backdrop = document.getElementById('dialog-backdrop');
    const content = document.getElementById('dialog-content');
    const closeBtn = document.getElementById('dialog-close');
    const fab = document.getElementById('fab-trigger');

    function openDialog() {
        dialog.classList.remove('hidden');
        dialog.classList.add('flex');
        document.body.classList.add('modal-open');
        setTimeout(() => dialog.classList.add('dialog-active'), 10);
    }

    function closeDialog() {
        dialog.classList.remove('dialog-active');
        document.body.classList.remove('modal-open');
        setTimeout(() => {
            dialog.classList.add('hidden');
            dialog.classList.remove('flex');
        }, 300);
    }

    fab.addEventListener('click', openDialog);
    closeBtn.addEventListener('click', closeDialog);
    backdrop.addEventListener('click', closeDialog);

    // Overrides all buttons linking to "contact" or "hire me"
    document.querySelectorAll('a[href*="contact"], a[href*="contact-me"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openDialog();
        });
    });
});

// --- Admin Logic ---
let adminClicks = 0;
const copyrightElement = document.getElementById('copyright-text');
if (copyrightElement) {
    copyrightElement.addEventListener('click', () => {
        adminClicks++;
        if (adminClicks >= 5) {
            document.getElementById('admin-modal').classList.add('active');
            adminClicks = 0;
        }
    });
}

window.closeAdmin = function() {
    document.getElementById('admin-modal').classList.remove('active');
}

window.saveContent = function() {
    content.name = document.getElementById('input-name').value;
    content.heroTitle = document.getElementById('input-hero-title').value;
    content.heroSubtitle = document.getElementById('input-hero-subtitle').value;
    
    localStorage.setItem('portfolio_content_vanilla', JSON.stringify(content));
    render();
    window.closeAdmin();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

render();