// Karmaloop AI - Aurora Design System JavaScript
// Enhanced animations and effects inspired by endgame.io

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAuroraEffects();
    initializeScrollAnimations();
    initializeNavigation();
    initializeParticleSystem();
    initializeStrategyShowcase();
    
    // Initialize typing effect if element exists
    const typedElement = document.querySelector('.typed-text');
    if (typedElement) {
        new TypingEffect(typedElement, [
            'Let us do the talking',
            'While you do the real work',
            'The Shopify for Communications'
        ], {
            typeSpeed: 80,
            deleteSpeed: 40,
            pauseTime: 2000
        });
    }
});

// Aurora Background Effects
function initializeAuroraEffects() {
    // Create aurora container
    const auroraContainer = document.createElement('div');
    auroraContainer.className = 'aurora-container';
    
    // Create multiple aurora waves
    for (let i = 0; i < 3; i++) {
        const wave = document.createElement('div');
        wave.className = 'aurora-wave';
        wave.style.animationDelay = `${i * 6}s`;
        wave.style.opacity = 0.2 - (i * 0.05);
        auroraContainer.appendChild(wave);
    }
    
    document.body.prepend(auroraContainer);
}

// Particle System
function initializeParticleSystem() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    
    // Create floating particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning and animation delay
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        
        // Random particle size
        const size = 1 + Math.random() * 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// Enhanced Navigation
function initializeNavigation() {
    const header = document.querySelector('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('nav ul');
    
    // Glassmorphism effect on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (mobileMenuBtn && navList) {
        mobileMenuBtn.addEventListener('click', () => {
            navList.classList.toggle('mobile-open');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navList && navList.classList.contains('mobile-open') && 
            !event.target.closest('header') && 
            !event.target.closest('.mobile-menu-btn')) {
            navList.classList.remove('mobile-open');
        }
    });
    
    // Active navigation highlighting
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname;
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPage.includes(linkPath) && linkPath !== '/') {
            link.classList.add('active');
        } else if (currentPage === '/' && linkPath === '/') {
            link.classList.add('active');
        }
    });
}

// Strategy Center Showcase Animations
function initializeStrategyShowcase() {
    const dashboard = document.querySelector('.strategy-dashboard');
    
    if (dashboard) {
        // Animate metrics when dashboard comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateMetrics();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(dashboard);
    }
}

// Animate metric numbers counting up
function animateMetrics() {
    const metricNumbers = document.querySelectorAll('.metric-number');
    
    metricNumbers.forEach(number => {
        const finalValue = parseInt(number.textContent) || 0;
        const duration = 2000; // 2 seconds
        const increment = finalValue / (duration / 16); // 60fps
        let currentValue = 0;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(timer);
            }
            number.textContent = Math.floor(currentValue);
        }, 16);
    });
}

// Enhanced Scroll Animations
function initializeScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mouse movement parallax for aurora
function initializeMouseParallax() {
    const auroraWaves = document.querySelectorAll('.aurora-wave');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        auroraWaves.forEach((wave, index) => {
            const speed = (index + 1) * 0.05;
            const x = (mouseX - 0.5) * speed * 100;
            const y = (mouseY - 0.5) * speed * 100;
            
            wave.style.transform += ` translate(${x}px, ${y}px)`;
        });
    });
}

// Initialize advanced effects after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        initializeMouseParallax();
    }, 1000);
});

// FAQ functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't already active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Initialize FAQ when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeFAQ);
