/**
 * XUR Web — Particle Engine & Interactivity
 * 2026
 */

// ==================== I18N / TRANSLATIONS ====================
const translations = {
    'es': {
        'nav-about': 'EQUIPO',
        'nav-services': 'SERVICIOS',
        'nav-portfolio': 'PORTFOLIO',
        'nav-budget': 'PRESUPUESTO',
        'nav-contact': 'CONTACTO',
        'hero-subtitle': 'ESTUDIO DE ARTE DIGITAL',
        'hero-tagline': 'EXPLORANDO MÁS ALLÁ DE LAS DIMENSIONES',
        'hero-cta': 'VER PROYECTOS »',
        'team-title': 'Quiénes somos',
        'team-intro': 'Somos un colectivo de artistas, diseñadores, programadores, animadores y técnicos con varios años de experiencia en publicidad, eventos, shows internacionales, animación y diseño de objetos.',
        'team-member-1': 'Artista visual / VJ especializado en arte generativo y experiencias interactivas. Experiencia en sistemas de interacción, tracking corporal, procesamiento espacial y visuales generativos aplicados a escena.',
        'team-member-2': 'Diseñadora industrial y productora audiovisual con foco en realización, animación y producción técnica. Amplia experiencia en gestión y coordinación de proyectos de gran escala.',
        'team-member-3': 'Artista multimedia y técnico audiovisual especializado en la integración y sincronización de sistemas de luz, video y sonido.',
        'what-title': 'Qué hacemos',
        'what-statement': 'Diseñamos y desarrollamos experiencias inmersivas que integran arte, tecnología y luz, transformando la percepción del espacio y generando interacción significativa con el público.',
        'cap-1-title': 'Diseño de espacios y objetos interactivos',
        'cap-1-desc': 'Creación de entornos físicos y digitales que responden al movimiento, la presencia y la acción del usuario.',
        'cap-2-title': 'Contenido visual y dirección de arte',
        'cap-2-desc': 'Desarrollo integral de lenguajes visuales, narrativas y sistemas gráficos adaptados a cada proyecto.',
        'cap-3-title': 'Tecnología de sensores propia',
        'cap-3-desc': 'Desarrollo e integración de sistemas de sensado adaptados a cada experiencia.',
        'cap-4-title': 'Software con licencias oficiales',
        'cap-4-desc': 'Utilización de herramientas profesionales licenciadas para garantizar estabilidad, seguridad y escalabilidad.',
        'cap-5-title': 'Equipo interdisciplinario',
        'cap-5-desc': 'Equipo propio con experiencia en arte, tecnología y producción técnica.',
        'cap-6-title': 'Equipo técnico para eventos',
        'cap-6-desc': 'Personal capacitado para montaje, operación y asistencia técnica en instancias en vivo.',
        'services-title': 'Servicios',
        'bento-1-tag': 'PROYECTOS DE MARCA',
        'bento-1-title': 'INSTALACIONES INTERACTIVAS',
        'bento-1-desc': 'Tótems, pisos sensibles y gamificación para activaciones de alto impacto.',
        'bento-2-tag': 'STAGE & PERFORMANCE',
        'bento-2-title': 'LIVE SHOWS & LÁSER',
        'bento-2-desc': 'VJ Sets, shows de láser sincronizado y estructuras cinéticas.',
        'bento-3-tag': 'VISUAL ARCHITECTURE',
        'bento-3-title': 'CONTENT & MAPPING',
        'bento-3-desc': 'Dirección de arte y 3D Mapping sobre superficies complejas.',
        'bento-4-tag': 'PLAY & CONNECT',
        'bento-4-title': 'GAMIFICACIÓN',
        'bento-4-desc': 'Juegos interactivos y dinámicas de competencia para marcas.',
        'budget-title': 'Presupuesto',
        'wiz-step-1-title': '¿Qué tipo de proyecto estás planeando?',
        'wiz-opt-1-1': 'Evento Corporativo',
        'wiz-opt-1-1-desc': 'Lanzamientos, galas y conferencias.',
        'wiz-opt-1-2': 'Activación de Marca',
        'wiz-opt-1-2-desc': 'Pop-up stores y experiencias para fans.',
        'wiz-opt-1-3': 'Instalación Permanente',
        'wiz-opt-1-3-desc': 'Museos, showrooms o locales comerciales.',
        'wiz-opt-1-4': 'Show en Vivo',
        'wiz-opt-1-4-desc': 'Conciertos y producciones teatrales.',
        'wiz-step-2-title': '¿En qué rango de inversión se encuentra tu proyecto?',
        'wiz-opt-2-1': 'Esencial',
        'wiz-opt-2-1-desc': 'Soluciones ágiles de alto impacto visual.',
        'wiz-opt-2-2': 'Avanzado',
        'wiz-opt-2-2-desc': 'Experiencias inmersivas con sensores y desarrollo.',
        'wiz-opt-2-3': 'Premium',
        'wiz-opt-2-3-desc': 'Proyectos customizados de gran escala y complejidad técnica.',
        'wiz-back': 'ATRÁS',
        'wiz-next': 'SIGUIENTE',
        'contact-title': 'Contacto',
        'contact-intro': '¿Tienes un proyecto en mente? Hablemos sobre cómo podemos llevarlo al siguiente nivel con arte y tecnología.',
        'catalog-title': 'Catálogo de Experiencias',
        'catalog-subtitle': 'SELECCIONÁ TU PRÓXIMA ACTIVACIÓN',
        'mundial-title': 'Menú Mundial',
        'mundial-subtitle': 'GAMIFICACIÓN ESPECIAL 2026',
        'spec-event': 'Evento',
        'spec-people': 'Gente',
        'spec-sqm': 'Espacio',
        'spec-price': 'Desde',
        'cat-all': 'TODOS',
        'cat-01': 'Instalaciones Interactivas',
        'cat-03': 'Pantallas Táctiles',
        'cat-04': 'Mapping',
        'cat-06': 'Juegos Interactivos y Competencias',
        'cat-07': 'Sincro Láser',
        'cat-mundial': 'Juegos del Mundial',
        'cat-pack': 'Paquetes Especiales',
        'currency': '$'
    },
    'en': {
        'nav-about': 'TEAM',
        'nav-services': 'SERVICES',
        'nav-portfolio': 'PORTFOLIO',
        'nav-budget': 'BUDGET',
        'nav-contact': 'CONTACT',
        'hero-subtitle': 'DIGITAL ART STUDIO',
        'hero-tagline': 'EXPLORING BEYOND DIMENSIONS',
        'hero-cta': 'VIEW PROJECTS »',
        'team-title': 'Who we are',
        'team-intro': 'We are a collective of artists, designers, programmers, animators and technicians with several years of experience in advertising, events, international shows, animation and object design.',
        'team-member-1': 'Visual artist / VJ specialized in generative art and interactive experiences. Experience in interaction systems, body tracking, spatial processing and generative visuals applied to stage.',
        'team-member-2': 'Industrial designer and audiovisual producer focused on direction, animation and technical production. Extensive experience in management and coordination of large-scale projects.',
        'team-member-3': 'Multimedia artist and audiovisual technician specialized in the integration and synchronization of light, video and sound systems.',
        'what-title': 'What we do',
        'what-statement': 'We design and develop immersive experiences that integrate art, technology and light, transforming the perception of space and generating meaningful interaction with the public.',
        'cap-1-title': 'Interactive Space & Object Design',
        'cap-1-desc': 'Creation of physical and digital environments that respond to user movement, presence and action.',
        'cap-2-title': 'Visual Content & Art Direction',
        'cap-2-desc': 'Comprehensive development of visual languages, narratives and graphic systems adapted to each project.',
        'cap-3-title': 'Proprietary Sensor Technology',
        'cap-3-desc': 'Development and integration of sensing systems tailored to each experience.',
        'cap-4-title': 'Official Licensed Software',
        'cap-4-desc': 'Use of professional licensed tools to guarantee stability, security and scalability.',
        'cap-5-title': 'Interdisciplinary Team',
        'cap-5-desc': 'In-house team with experience in art, technology and technical production.',
        'cap-6-title': 'Event Technical Team',
        'cap-6-desc': 'Trained personnel for setup, operation and technical assistance in live instances.',
        'services-title': 'Services',
        'bento-1-tag': 'BRAND PROJECTS',
        'bento-1-title': 'INTERACTIVE INSTALLATIONS',
        'bento-1-desc': 'Totems, responsive floors and gamification for high-impact activations.',
        'bento-2-tag': 'STAGE & PERFORMANCE',
        'bento-2-title': 'LIVE SHOWS & LASER',
        'budget-title': 'Contactanos',
        'budget-intro': 'Contanos tu idea',
        'wiz-step-text': 'PASO <span id="current-step">01</span> / 05',
        'wiz-step-1-title': 'ESCALA DEL PROYECTO',
        'wiz-step-2-title': 'TIPO DE SERVICIO',
        'wiz-step-3b-title': 'PRESUPUESTO ESTIMADO (USD)',
        'wiz-step-3-title': 'DETALLES DEL EVENTO',
        'wiz-step-4-title': 'DATOS DE CONTACTO',
        'wiz-step-5-title': '✔ SOLICITUD ENVIADA',
        'wiz-back': '← ATRÁS',
        'wiz-next': 'SIGUIENTE →',
        'wiz-disclaimer': '* El resultado es una estimación técnica basada en la complejidad de hardware y software.',
        'contact-title': 'Redes',
        'wiz-report-btn': 'ENVIAR CONSULTA »'
    },
    'en': {
        'nav-about': 'TEAM',
        'nav-services': 'SERVICES',
        'nav-portfolio': 'PORTFOLIO',
        'nav-budget': 'CONTACT US',
        'nav-contact': 'NETWORKS',
        'hero-subtitle': 'DIGITAL ART STUDIO',
        'hero-tagline': 'EXPLORING BEYOND DIMENSIONS',
        'hero-cta': 'VIEW PROJECTS »',
        'team-title': 'Who we are',
        'team-intro': 'We are a collective of artists, designers, programmers, animators and technicians with several years of experience in advertising, events, international shows, animation and object design.',
        'budget-title': 'Contact Us',
        'budget-intro': 'Tell us your idea',
        'wiz-step-text': 'STEP <span id="current-step">01</span> / 05',
        'wiz-step-1-title': 'PROJECT SCALE',
        'wiz-step-2-title': 'SERVICE TYPE',
        'wiz-step-3b-title': 'ESTIMATED BUDGET (USD)',
        'wiz-step-3-title': 'EVENT DETAILS',
        'wiz-step-4-title': 'CONTACT INFORMATION',
        'wiz-step-5-title': '✔ REQUEST SENT',
        'wiz-back': '← BACK',
        'wiz-next': 'NEXT →',
        'wiz-disclaimer': '* The result is a technical estimate based on hardware and software complexity.',
        'contact-title': 'Networks',
        'wiz-report-btn': 'SEND INQUIRY »',
        'catalog-title': 'Experience Catalog',
        'catalog-subtitle': 'SELECT YOUR NEXT ACTIVATION',
        'mundial-title': 'World Cup Menu',
        'mundial-subtitle': 'SPECIAL GAMIFICATION 2026',
        'spec-event': 'Event',
        'spec-people': 'People',
        'spec-sqm': 'Area',
        'spec-price': 'Desde',
        'cat-all': 'ALL',
        'cat-01': 'Interactive Installations',
        'cat-03': 'Touch Screens',
        'cat-04': 'Mapping',
        'cat-06': 'Interactive Games',
        'cat-07': 'Sync Laser',
        'cat-mundial': 'World Cup Games',
        'cat-pack': 'Special Packs',
        'currency': '$'
    }
};

let currentLang = localStorage.getItem('xur-lang') || 'es';

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
    
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.innerText = currentLang === 'es' ? 'EN' : 'ES';
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            localStorage.setItem('xur-lang', currentLang);
            updateContent();
        });
    }
});

(function () {
    'use strict';

    // ==================== PARTICLE SYSTEM (solo en Hero) ====================
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let W, H;
    let mouseX = 0, mouseY = 0;
    let particles = [];
    let isGathering = false;
    let gatherX = 0, gatherY = 0;
    const PARTICLE_COUNT = 150;
    const CONNECTION_DIST = 160;
    let particlesActive = true; // Solo activas en Hero

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Observar hero para activar/desactivar partículas
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                particlesActive = entry.isIntersecting;
                canvas.style.opacity = particlesActive ? '1' : '0';
                canvas.style.transition = 'opacity 0.8s ease';
            });
        }, { threshold: 0.1 });
        heroObserver.observe(heroSection);
    }

    class Particle {
        constructor() {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 2 + 0.5;
            this.baseAlpha = Math.random() * 0.5 + 0.1;
        }

        update() {
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (isGathering) {
                const gdx = gatherX - this.x;
                const gdy = gatherY - this.y;
                const force = 0.005;
                this.vx += gdx * force;
                this.vy += gdy * force;
                this.vx *= 0.92; // High friction to group
                this.vy *= 0.92;
            } else if (dist < 300) {
                const force = 0.0004;
                this.vx += dx * force;
                this.vy += dy * force;
            }

            this.x += this.vx;
            this.y += this.vy;

            // Friction
            this.vx *= 0.999;
            this.vy *= 0.999;

            // Wrap edges
            if (this.x < 0) this.x = W;
            if (this.x > W) this.x = 0;
            if (this.y < 0) this.y = H;
            if (this.y > H) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 229, 255, ${this.baseAlpha})`;
            ctx.fill();
        }
    }

    // Spawn on mouse move (solo si hero activo)
    let spawnTimer = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!particlesActive) return; // No spawnear fuera del hero

        // Spawn particles near cursor
        spawnTimer++;
        if (spawnTimer % 2 === 0 && particles.length < PARTICLE_COUNT + 60) {
            const p = new Particle();
            p.x = e.clientX + (Math.random() - 0.5) * 20;
            p.y = e.clientY + (Math.random() - 0.5) * 20;
            p.radius = Math.random() * 2 + 0.5;
            p.baseAlpha = Math.random() * 0.7 + 0.3;
            p.vx = (Math.random() - 0.5) * 3;
            p.vy = (Math.random() - 0.5) * 3;
            particles.push(p);
        }
    });

    // Initial particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECTION_DIST) {
                    const alpha = (1 - dist / CONNECTION_DIST) * 0.15;
                    ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, W, H);

        // Limit particle count
        if (particles.length > PARTICLE_COUNT + 60) {
            particles.splice(0, particles.length - PARTICLE_COUNT);
        }

        if (particlesActive) {
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            drawConnections();
        }
        requestAnimationFrame(animate);
    }

    animate();

    // ==================== SCROLL REVEAL ====================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    window.xurObserver = observer; // Expose for dynamic content

    // ==================== SMOOTH NAV ====================
    document.querySelectorAll('.nav-links a, .cta-btn').forEach(a => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Cierra menu mobile si está abierto
                const navLinks = document.getElementById('nav-links');
                const hamburger = document.getElementById('hamburger');
                if (navLinks) navLinks.classList.remove('open');
                if (hamburger) hamburger.classList.remove('open');
            }
        });
    });

    // ==================== HAMBURGER MENU ====================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
    }

    // ==================== MOBILE PREVIEW (tecla M) ====================
    const mobilePreviewBtn = document.getElementById('mobile-preview-btn');
    let mobilePreviewActive = false;

    function toggleMobilePreview() {
        mobilePreviewActive = !mobilePreviewActive;
        document.body.classList.toggle('mobile-preview', mobilePreviewActive);
        if (mobilePreviewBtn) {
            mobilePreviewBtn.classList.toggle('active', mobilePreviewActive);
            mobilePreviewBtn.title = mobilePreviewActive ? 'Salir vista Mobile [M]' : 'Vista Mobile [M]';
        }
        // Wrap/unwrap content in mobile frame
        let frame = document.getElementById('mobile-frame');
        if (mobilePreviewActive) {
            if (!frame) {
                frame = document.createElement('div');
                frame.id = 'mobile-frame';
                // Mover todos los hijos directos del body (excepto el botón y el frame)
                const children = Array.from(document.body.children).filter(c => c.id !== 'mobile-preview-btn' && c.id !== 'mobile-frame');
                children.forEach(c => frame.appendChild(c));
                document.body.appendChild(frame);
            }
        } else {
            if (frame) {
                const children = Array.from(frame.children);
                children.forEach(c => document.body.insertBefore(c, mobilePreviewBtn));
                frame.remove();
            }
        }
    }

    if (mobilePreviewBtn) {
        mobilePreviewBtn.addEventListener('click', toggleMobilePreview);
    }

    // Tecla M (solo si no hay foco en input)
    window.addEventListener('keydown', (e) => {
        const tag = document.activeElement?.tagName;
        if (e.key === 'm' || e.key === 'M') {
            if (tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT') {
                toggleMobilePreview();
            }
        }
    });

    // ==================== HERO PARALLAX & LOGO CLICK ====================
    const heroLogo = document.querySelector('.hero-logo');
    window.addEventListener('mousemove', (e) => {
        if (heroLogo && !isGathering) {
            const mx = (e.clientX - W / 2) / 30;
            const my = (e.clientY - H / 2) / 30;
            heroLogo.style.transform = `translate(${mx}px, ${my}px)`;
        }
    });

    if (heroLogo) {
        heroLogo.addEventListener('click', () => {
            const rect = heroLogo.getBoundingClientRect();
            gatherX = rect.left + rect.width / 2;
            gatherY = rect.top + rect.height / 2;
            
            isGathering = true;
            heroLogo.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                isGathering = false;
                heroLogo.style.transform = '';
            }, 1000);
        });
    }

    // ==================== BUDGET WIZARD (FULL) ====================
    const wizSteps = document.querySelectorAll('.wizard-step');
    const wizProgress = document.getElementById('wiz-progress');
    const wizBack = document.getElementById('wiz-back');
    const wizNext = document.getElementById('wiz-next');
    const wizOpts = document.querySelectorAll('.option-card');
    const wizStepIndicator = document.getElementById('current-step');

    let currentWizStep = 1;
    const totalWizSteps = 5;
    let wizardData = { escala: '', servicio: '', presupuesto: '', detalles: {}, contacto: {} };

    function scrollToWizard() {
        // Disabled to prevent unwanted layout movement as per user request
        // const wizard = document.getElementById('presupuesto');
        // if (wizard) window.scrollTo({ top: wizard.offsetTop - 70, behavior: 'smooth' });
    }

    function updateWizard() {
        wizSteps.forEach(step => {
            step.classList.toggle('active', parseInt(step.dataset.step) === currentWizStep);
        });

        if (wizStepIndicator) wizStepIndicator.textContent = String(currentWizStep).padStart(2, '0');
        
        // Progress bar
        const progressValue = (currentWizStep / 5) * 100;
        if (wizProgress) wizProgress.style.width = `${progressValue}%`;

        // Buttons
        if (wizBack) wizBack.style.display = (currentWizStep === 1 || currentWizStep >= 6) ? 'none' : 'block';
        if (wizNext) {
            if (currentWizStep >= 6) {
                wizNext.style.display = 'none';
            } else {
                wizNext.style.display = 'block';
                const isFinish = currentWizStep === 5;
                wizNext.textContent = currentLang === 'es' ? (isFinish ? 'ENVIAR CONSULTA' : 'SIGUIENTE →') : (isFinish ? 'SEND INQUIRY' : 'NEXT →');
            }
        }
        
        if (currentWizStep > 1) scrollToWizard();
    }

    wizOpts.forEach(opt => {
        opt.addEventListener('click', () => {
            const step = opt.closest('.wizard-step');
            step.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
            opt.classList.add('selected');

            const stepNum = parseInt(step.dataset.step);
            if (stepNum === 1) wizardData.escala = opt.dataset.value;
            if (stepNum === 2) wizardData.servicio = opt.dataset.value;
            if (stepNum === 3) wizardData.presupuesto = opt.dataset.value;
        });
    });

    if (wizNext) {
        wizNext.addEventListener('click', () => {
            if (currentWizStep === 4) {
                wizardData.detalles = {
                    fecha: document.getElementById('budget-date')?.value || 'No especificada',
                    duracion: document.getElementById('budget-duration')?.value || '',
                    ubicacion: document.getElementById('budget-location')?.value || '',
                    audiencia: document.getElementById('budget-audience')?.value || ''
                };
            }
            
            if (currentWizStep === 5) {
                wizardData.contacto = {
                    nombre: document.getElementById('budget-name')?.value || '',
                    email: document.getElementById('budget-email')?.value || '',
                    notas: document.getElementById('budget-notes')?.value || ''
                };
                
                generateSummary();
            }

            if (currentWizStep < 6) {
                currentWizStep++;
                updateWizard();
            }
        });
    }

    if (wizBack) {
        wizBack.addEventListener('click', () => {
            if (currentWizStep > 1) {
                currentWizStep--;
                updateWizard();
            }
        });
    }

    function generateSummary() {
        const summaryEl = document.getElementById('budget-summary');
        if (summaryEl) {
            const labels = currentLang === 'es' ? {
                scale: 'Escala',
                service: 'Servicio',
                pres: 'Inversión',
                loc: 'Ubicación',
                cont: 'Contacto',
                report: 'CONSULTA DE PROYECTO — DIAGONAL XUR',
                notes: 'Notas',
                btn: 'ENVIAR CONSULTA »'
            } : {
                scale: 'Scale',
                service: 'Service',
                pres: 'Inversion',
                loc: 'Location',
                cont: 'Contact',
                report: 'PROJECT INQUIRY — DIAGONAL XUR',
                notes: 'Notes',
                btn: 'SEND INQUIRY »'
            };

            const reportText = `${labels.report}%0D%0A------------------------------------%0D%0A` +
                `${labels.scale}: ${wizardData.escala}%0D%0A` +
                `${labels.service}: ${wizardData.servicio}%0D%0A` +
                `${labels.pres}: ${wizardData.presupuesto}%0D%0A` +
                `Fecha: ${wizardData.detalles.fecha}%0D%0A` +
                `${labels.loc}: ${wizardData.detalles.ubicacion}%0D%0A` +
                `${labels.cont}: ${wizardData.contacto.nombre}%0D%0A` +
                `Email: ${wizardData.contacto.email}%0D%0A` +
                `${labels.notes}: ${wizardData.contacto.notes || '---'}`;

            summaryEl.innerHTML = `
                <div class="summary-list" style="line-height: 1.8; margin-bottom: 2rem; color: var(--text-dim);">
                    <div><strong>${labels.scale}:</strong> ${wizardData.escala}</div>
                    <div><strong>${labels.service}:</strong> ${wizardData.servicio}</div>
                    <div><strong>${labels.pres}:</strong> ${wizardData.presupuesto}</div>
                    <div><strong>${labels.loc}:</strong> ${wizardData.detalles.ubicacion}</div>
                    <div><strong>${labels.cont}:</strong> ${wizardData.contacto.nombre}</div>
                </div>
                <a href="mailto:hola.xur@gmail.com?subject=${labels.report} - ${wizardData.contacto.nombre}&body=${reportText}" 
                   class="cta-btn email-report-btn" 
                   style="display: inline-block; padding: 1rem 2rem; background: var(--accent); color: black; text-decoration: none; font-weight: 700; border-radius: 4px;">
                   ${labels.btn}
                </a>
            `;
        }
    }

    updateWizard();

    // ==================== BENTO MOODBOARD (SLIDER) LOGIC ====================
    const projectsMedia = {
        'interactiva': {
            title: 'INSTALACIONES INTERACTIVAS',
            items: [
                'assets/video/sevicios/Instalaciones Interactivas/DIAGONAL XUR_MUESTRA DANZA-min.mp4',
                'assets/video/sevicios/Instalaciones Interactivas/EVENTO DIAGONAL XUR_LA RURAL-min.mp4',
                'assets/video/sevicios/Pantallas táctiles y objetos digitales/La rural pantalla-min.mp4',
                'assets/video/sevicios/Pantallas táctiles y objetos digitales/Interactive wall & floor@touchdesigner(1)-min.mp4'
            ]
        },
        'live': {
            title: 'LIVE SHOWS & LÁSER',
            items: [
                'assets/video/sevicios/wow momet sincro laser AV/07_SL_03-min.mp4',
                'assets/video/sevicios/wow momet sincro laser AV/07_SL_04-min.mp4',
                'assets/video/sevicios/wow momet sincro laser AV/Copy of Faena completo-min.mp4'
            ]
        },
        'mapping': {
            title: 'CONTENT & MAPPING',
            items: [
                'assets/video/sevicios/Mapping/ARMADO DIAGONAL XUR_LA RURAL_2-min.mp4',
                'assets/video/sevicios/Mapping/04_M_01-min.mp4',
                'assets/video/sevicios/Mapping/04_M_03-min.mp4'
            ]
        },
        'games': {
            title: 'GAMIFICACIÓN',
            items: [
                'assets/video/sevicios/Juegos interactivos  gamificación/06_JI_02-min.mp4',
                'assets/video/sevicios/Juegos interactivos  gamificación/06_JI_04-min.mp4'
            ]
        }
    };

    const bentoCards = document.querySelectorAll('.bento-card');
    const moodboardExplorer = document.getElementById('moodboard-explorer');
    const moodboardTitle = document.getElementById('moodboard-title');
    const moodboardSlider = document.getElementById('moodboard-slider');
    const moodboardPagination = document.getElementById('slider-pagination');
    const closeMoodboard = document.getElementById('close-moodboard');
    const moodPrevBtn = document.getElementById('moodboard-prev');
    const moodNextBtn = document.getElementById('moodboard-next');

    let currentMediaIndex = 0;
    let currentProjectItems = [];

    function updateSlider() {
        if (!moodboardSlider) return;
        moodboardSlider.style.transform = `translateX(-${currentMediaIndex * 100}%)`;
        document.querySelectorAll('.dot').forEach((dot, idx) => dot.classList.toggle('active', idx === currentMediaIndex));

        const videos = moodboardSlider.querySelectorAll('video');
        videos.forEach((vid, idx) => {
            if (idx === currentMediaIndex) {
                vid.play().catch(() => {});
            } else {
                vid.pause();
                vid.currentTime = 0;
            }
        });
    }

    bentoCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.project;
            const data = projectsMedia[projectId];

            if (data) {
                currentProjectItems = data.items;
                currentMediaIndex = 0;
                moodboardTitle.textContent = data.title;
                moodboardSlider.innerHTML = '';
                moodboardPagination.innerHTML = '';

                currentProjectItems.forEach((src, idx) => {
                    const slide = document.createElement('div');
                    slide.className = 'moodboard-item';
                    
                    if (src.toLowerCase().endsWith('.mp4')) {
                        slide.innerHTML = `<video src="${src}" loop muted playsinline></video>`;
                    } else {
                        slide.innerHTML = `<img src="${src}" alt="Project View">`;
                    }
                    moodboardSlider.appendChild(slide);

                    const dot = document.createElement('div');
                    dot.className = 'dot';
                    if (idx === 0) dot.classList.add('active');
                    dot.addEventListener('click', () => {
                        currentMediaIndex = idx;
                        updateSlider();
                    });
                    moodboardPagination.appendChild(dot);
                });

                moodboardExplorer.classList.add('active');
                document.body.style.overflow = 'hidden';
                document.querySelector('.navbar').style.display = 'none'; // Hide navbar
                updateSlider();
            }
        });
    });

    if (closeMoodboard) {
        console.log("Close button found and listener attached");
        closeMoodboard.addEventListener('click', () => {
            console.log("Close button clicked");
            moodboardExplorer.classList.remove('active');
            document.body.style.overflow = '';
            document.querySelector('.navbar').style.display = 'flex'; // Show navbar
            if (moodboardSlider) moodboardSlider.querySelectorAll('video').forEach(v => v.pause());
        });
    } else {
        console.error("Close button NOT found");
    }

    if (moodPrevBtn) {
        moodPrevBtn.addEventListener('click', () => {
            currentMediaIndex = (currentMediaIndex > 0) ? currentMediaIndex - 1 : currentProjectItems.length - 1;
            updateSlider();
        });
    }

    if (moodNextBtn) {
        moodNextBtn.addEventListener('click', () => {
            currentMediaIndex = (currentMediaIndex < currentProjectItems.length - 1) ? currentMediaIndex + 1 : 0;
            updateSlider();
        });
    }

    window.addEventListener('keydown', (e) => {
        if (!moodboardExplorer || !moodboardExplorer.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') moodPrevBtn?.click();
        if (e.key === 'ArrowRight') moodNextBtn?.click();
        if (e.key === 'Escape') closeMoodboard?.click();
    });

    // ==================== DYNAMIC CATALOG ENGINE ====================
    let catalogDays = 1;
    let catalogSort = 'default'; // 'default' | 'price-asc' | 'popular'

    const CATALOG_DATABASE = [
        // 01_Instalaciones Interactivas
        {
            id: 'portal',
            category: '01',
            title: 'Portal Láser Premium',
            desc: 'Portal interactivo de láseres que se abre al paso de los visitantes.',
            price: 1500000,
            people: '500+',
            sqm: '15m²',
            popularity: 5
        },
        {
            id: 'grafiti',
            category: '01',
            title: 'Grafiti Digital',
            desc: 'Experiencia de grafiti digital para crear arte en tiempo real.',
            price: 2800000,
            people: '200+',
            sqm: '12m²',
            popularity: 8
        },
        {
            id: 'danza',
            category: '01',
            title: 'Danza Generativa',
            desc: 'El movimiento de los participantes se transforma en visuales únicas y fluidas.',
            price: 2800000,
            people: '150+',
            sqm: '10m²',
            popularity: 7,
            imgExt: 'png'
        },
        {
            id: 'piso-botones',
            category: '01',
            title: 'Piso Interactivo + Botones',
            desc: 'El movimiento de los participantes genera visuales únicas. Permite descubrir contenido de marca mediante botones físicos.',
            price: 2800000,
            people: '200+',
            sqm: '20m²',
            popularity: 6
        },
        // 03_Pantallas Táctiles
        {
            id: 'totem',
            category: '03',
            title: 'Tótem Táctil',
            desc: 'Pantalla interactiva para descubrir contenido de forma simple y dinámica.',
            price: 1800000,
            people: '100+',
            sqm: '2m²',
            popularity: 7,
            imgExt: 'png'
        },
        {
            id: 'totem-proyeccion',
            category: '03',
            title: 'Tótem Táctil + Proyección',
            desc: 'La interacción táctil se representa en superficies mappeadas a gran escala.',
            price: 2600000,
            people: '200+',
            sqm: '30m²',
            popularity: 6,
            imgExt: 'png'
        },
        {
            id: 'pared-touch',
            category: '03',
            title: 'Pared Interactiva',
            desc: 'Gran pantalla táctil para jugar, explorar y participar en grupo.',
            price: 2800000,
            people: '300+',
            sqm: '20m²',
            popularity: 9
        },
        {
            id: 'pared-vs',
            category: '03',
            title: 'Pared Interactiva Vs',
            desc: 'Gran pantalla táctil para jugar, explorar y competir 1 vs 1.',
            price: 3500000,
            people: '300+',
            sqm: '20m²',
            popularity: 7
        },
        {
            id: 'pared-botones',
            category: '03',
            title: 'Pared Interactiva + Botones',
            desc: 'Gran pantalla táctil para jugar y mostrar elementos emergentes a partir de botones (fotos, videos, texto).',
            price: 2800000,
            people: '300+',
            sqm: '20m²',
            popularity: 6
        },
        {
            id: 'descubri',
            category: '03',
            title: 'Descubrí',
            desc: 'Juego multijugador usando dispositivos móviles como linternas en la proyección.',
            price: 2500000,
            people: '200+',
            sqm: '10m²',
            popularity: 7,
            icon: '🔦'
        },
        // 04_Mapping
        {
            id: 'mapping-arch',
            category: '04',
            title: 'Mapping Arquitectónico',
            desc: 'La fachada cobra vida con animaciones y efectos visuales impactantes.',
            price: 6500000,
            people: '1000+',
            sqm: '50m²+',
            popularity: 8
        },
        // 05_Realidad Aumentada
        {
            id: 'ar-filter',
            category: '05',
            title: 'AR Experience',
            desc: 'Filtros y activaciones de realidad aumentada para redes y pantallas.',
            price: 1500000,
            people: 'Masivo',
            sqm: 'Personal',
            popularity: 5,
            icon: '✨'
        },
        // 07_Sincro Laser
        {
            id: 'laser-show',
            category: '07',
            title: 'Show Sincro Láser',
            desc: 'Performance de láseres sincronizados con música y video de alto impacto.',
            price: 4000000,
            people: '1000+',
            sqm: '30m²',
            popularity: 9
        },
        // JUEGOS_DEL_MUNDIAL
        {
            id: 'dibu',
            category: 'mundial',
            title: 'Penales con el Dibu',
            desc: 'Poné a prueba tus reflejos atajando penales en un arco interactivo.',
            price: 2500000,
            people: '300+',
            sqm: '10m²',
            popularity: 10,
            icon: '🧤'
        },
        {
            id: 'copa',
            category: 'mundial',
            title: 'Atrapá la Copa',
            desc: 'Corré, esquivá y atrapá la copa en una experiencia de tracking corporal.',
            price: 2500000,
            people: '200+',
            sqm: '8m²',
            popularity: 9,
            icon: '🏆'
        },
        {
            id: 'estadio',
            category: 'mundial',
            title: 'Entrada al Estadio',
            desc: 'Viví la energía de la cancha con un piso LED que responde a cada paso.',
            price: 2800000,
            people: '500+',
            sqm: '20m²',
            popularity: 8,
            icon: '⚽'
        },
        {
            id: 'piso-pelota',
            category: 'mundial',
            title: 'Esquivando con Pelota',
            desc: 'Conducí una pelota real esquivando obstáculos móviles y defensores proyectados.',
            price: 2800000,
            people: '150+',
            sqm: '10m²',
            popularity: 8,
            icon: '⚽'
        },
        {
            id: 'trivia',
            category: 'mundial',
            title: 'Trivia Mundialista',
            desc: 'Competí con amigos y descubrí quién sabe más de fútbol en pantalla gigante.',
            price: 1500000,
            people: '100+',
            sqm: '4m²',
            popularity: 7,
            icon: '💡'
        },
        {
            id: 'figus',
            category: 'mundial',
            title: 'Encontrá las Figus',
            desc: 'Las figus del mundial están dispersas en la tribuna y mediante pantalla táctil podés descubrirlas y ganar.',
            price: 1500000,
            people: '100+',
            sqm: '10m²',
            popularity: 7,
            icon: '📇'
        },
        {
            id: 'memo-test',
            category: 'mundial',
            title: 'Memo Test Mundial',
            desc: 'Encontrá las parejas de figus del mundial sobre superficies táctiles y ganá.',
            price: 1500000,
            people: '100+',
            sqm: '10m²',
            popularity: 6,
            icon: '🎴'
        },
        // PAQUETES
        {
            id: 'pack-muni-pro',
            category: 'pack',
            title: 'Pack Mundial Pro',
            desc: 'Incluye 3 experiencias del Mundial reunidas en una única activación.',
            price: 7500000,
            people: '1000+',
            sqm: '50m²',
            popularity: 8,
            isPack: true
        },
        // DESARROLLOS ESPECIFICOS
        {
            id: 'desarrollos-especificos',
            category: '01',
            title: 'Desarrollos Específicos',
            desc: 'Proyectos 100% a medida para marcas y eventos. Concepto, diseño y ejecución técnica desde cero.',
            price: 3500000,
            people: 'A definir',
            sqm: 'A definir',
            popularity: 5,
            icon: '⚙️'
        }
    ];

    function getSorted(arr) {
        const copy = [...arr];
        if (catalogSort === 'price-asc') {
            return copy.sort((a, b) => a.price - b.price);
        } else if (catalogSort === 'popular') {
            return copy.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
        }
        return copy;
    }

    function renderCatalog(filter = 'all') {
        const grid = document.getElementById('catalog-render-grid');
        if (!grid) return;

        grid.innerHTML = '';
        let filtered = filter === 'all' ? CATALOG_DATABASE : CATALOG_DATABASE.filter(item => item.category === filter);
        filtered = getSorted(filtered);

        const isConsultar = catalogDays === 99;
        const multiplier = 1 + 0.3 * (catalogDays - 1);


        filtered.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = `product-card ${item.isPack ? 'pack-card' : ''}`;
            card.style.opacity = '0';
            card.style.animation = `fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards ${index * 0.05}s`;
            
            let mediaHtml = '';
            if (item.icon && item.id === 'desarrollos-especificos') {
                mediaHtml = `<div class="product-icon-wrapper">${item.icon}</div>`;
            } else {
                const ext = item.imgExt || 'jpg';
                mediaHtml = `<div class="product-image-wrapper">
                    <img src="assets/img/catalog/${item.id}/main.${ext}" 
                         onerror="this.src='assets/img/placeholder-xur.jpg'; this.parentElement.classList.add('placeholder-loading')"
                         alt="${item.title}">
                </div>`;
            }

            const currentPrice = item.price * multiplier;
            const priceDisplay = isConsultar ? 'CONSULTAR' : `$ ${currentPrice.toLocaleString('es-AR')}`;
            const labelDisplay = isConsultar ? '+5 días' : (catalogDays === 1 ? 'Desde' : catalogDays + ' días');

            const wppMessage = `Hola! Quiero pedir la experiencia: ${item.title} (${isConsultar ? '+5 días' : catalogDays + ' día/s'})`;
            const wppUrl = `https://wa.me/5491133903141?text=${encodeURIComponent(wppMessage)}`;

            card.innerHTML = `
                ${mediaHtml}
                <div class="product-info">
                    <span class="product-tag">${item.category.toUpperCase()}</span>
                    <h3>${item.title}</h3>
                    <p class="product-desc">${item.desc}</p>
                    <div class="product-specs">
                        <div class="spec-item">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            <span>${item.people}</span>
                        </div>
                        <div class="spec-item">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 3v18"/></svg>
                            <span>${item.sqm}</span>
                        </div>
                    </div>
                    <div class="product-price-row">
                        <span class="price-label">${labelDisplay}</span>
                        <span class="price-amount">${priceDisplay}</span>
                    </div>
                    <a href="${wppUrl}" target="_blank" class="wpp-order-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.885 9.885 0 019.885 9.885c0 5.451-4.435 9.883-9.885 9.884m8.411-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        PEDIR AHORA
                    </a>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Initialize catalog filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('catalog-sort-select');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCatalog(btn.dataset.filter);
        });
    });

    const daysSelect = document.getElementById('catalog-days-select');
    if (daysSelect) {
        daysSelect.addEventListener('change', (e) => {
            catalogDays = parseInt(e.target.value);
            const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
            renderCatalog(activeFilter);
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            catalogSort = e.target.value;
            const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
            renderCatalog(activeFilter);
        });
    }

    renderCatalog();

})();
