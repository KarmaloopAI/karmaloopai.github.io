// Karmaloop AI - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const header = document.querySelector('header');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            header.classList.toggle('mobile-menu-open');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (header.classList.contains('mobile-menu-open') && 
            !event.target.closest('header') && 
            !event.target.closest('.mobile-menu-btn')) {
            header.classList.remove('mobile-menu-open');
        }
    });
    
    // Scroll animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    // Initial check for elements in viewport
    checkAnimations();
    
    // Check elements on scroll
    window.addEventListener('scroll', checkAnimations);
    
    function checkAnimations() {
        const triggerBottom = window.innerHeight * 0.8;
        
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('animate');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
                
                // Close mobile menu if open
                if (header.classList.contains('mobile-menu-open')) {
                    header.classList.remove('mobile-menu-open');
                }
            }
        });
    });
    
    // Form validation for contact form
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let valid = true;
            const nameInput = contactForm.querySelector('input[name="name"]');
            const emailInput = contactForm.querySelector('input[name="email"]');
            const messageInput = contactForm.querySelector('textarea[name="message"]');
            
            // Reset error states
            [nameInput, emailInput, messageInput].forEach(input => {
                if (input) {
                    input.style.borderColor = '';
                }
            });
            
            // Validate name
            if (nameInput && nameInput.value.trim() === '') {
                nameInput.style.borderColor = 'red';
                valid = false;
            }
            
            // Validate email
            if (emailInput) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value.trim())) {
                    emailInput.style.borderColor = 'red';
                    valid = false;
                }
            }
            
            // Validate message
            if (messageInput && messageInput.value.trim() === '') {
                messageInput.style.borderColor = 'red';
                valid = false;
            }
            
            if (valid) {
                // In a real implementation, you would send the form data to a server
                // For now, just show a success message
                contactForm.innerHTML = '<div class="success-message"><h3>Thank you for your message!</h3><p>We will get back to you as soon as possible.</p></div>';
            }
        });
    }
    
    // Set active navigation link based on current page
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Check if the current page matches the link or if we're on index and the link is to the home page
        if (currentPage.endsWith(linkPath) || 
            (currentPage.endsWith('/') && linkPath === 'index.html') ||
            (currentPage.endsWith('index.html') && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
});
