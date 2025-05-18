// Initialize EmailJS when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // Create overlay if it doesn't exist
    let overlay = document.querySelector('.nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }

    function toggleMenu() {
        // Toggle classes
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-active');
        overlay.classList.toggle('active');
        
        // Toggle body scroll
        document.body.style.overflow = nav.classList.contains('nav-active') ? 'hidden' : '';
        
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Log for debugging
        console.log('Menu toggled:', {
            burgerActive: burger.classList.contains('toggle'),
            navActive: nav.classList.contains('nav-active'),
            overlayActive: overlay.classList.contains('active')
        });
    }

    // Event listeners
    burger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
        console.log('Burger clicked');
    });

    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                toggleMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('nav-active') && 
            !nav.contains(e.target) && 
            !burger.contains(e.target)) {
            toggleMenu();
        }
    });

    // Initialize menu state
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    navLinks.forEach(link => {
        link.style.animation = '';
    });

    // Form submission handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', sendEmail);
        
        // Add form validation feedback
        const formInputs = contactForm.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateInput(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('invalid')) {
                    validateInput(this);
                }
            });
        });
    }
});

function sendEmail(event) {
    event.preventDefault();

    // Get the form elements
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const buttonText = submitButton.querySelector('.button-text');
    const buttonLoader = submitButton.querySelector('.button-loader');

    // Show loading state
    buttonText.style.display = 'none';
    buttonLoader.style.display = 'inline';
    submitButton.disabled = true;

    // Prepare the email template parameters
    const templateParams = {
        from_name: form.name.value,
        from_email: form.email.value,
        service: form.service.value,
        message: form.message.value,
        to_email: 'valery.osisolns@gmail.com'
    };

    // Send the email using EmailJS
    try {
        emailjs.send('service_id', 'template_id', templateParams, 'YOUR_PUBLIC_KEY')
            .then(function(response) {
                // Show success message
                showNotification('Message sent successfully!', 'success');
                form.reset();
            }, function(error) {
                // Show error message
                console.error('EmailJS error:', error);
                showNotification('Failed to send message. Please try again.', 'error');
            })
            .finally(function() {
                // Reset button state
                buttonText.style.display = 'inline';
                buttonLoader.style.display = 'none';
                submitButton.disabled = false;
            });
    } catch (err) {
        console.error('Email sending error:', err);
        showNotification('Failed to send message. Please try again.', 'error');
        // Reset button state
        buttonText.style.display = 'inline';
        buttonLoader.style.display = 'none';
        submitButton.disabled = false;
    }

    return false;
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Add notification to page
    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

const serviceDetails = {
    'Web Development': {
        icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
        description: 'We create stunning, responsive websites that drive results. Our web development team combines creative design with technical expertise to build websites that not only look great but also perform exceptionally.',
        features: [
            'Responsive Design for All Devices',
            'Custom CMS Integration',
            'E-commerce Solutions',
            'SEO Optimization',
            'Performance Optimization',
            'Security Implementation'
        ],
        benefits: [
            'Increased Online Visibility',
            'Better User Experience',
            'Higher Conversion Rates',
            'Improved Brand Credibility',
            'Easy Content Management'
        ]
    },
    // Add similar objects for other services
};

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('serviceModal');
    const closeBtn = document.querySelector('.close-modal');
    const serviceCards = document.querySelectorAll('.service-card');

    function openModal(service) {
        const details = serviceDetails[service];
        if (!details) return;

        // Update modal content
        modal.querySelector('.modal-icon').innerHTML = `<path fill="currentColor" d="${details.icon}"/>`;
        modal.querySelector('.modal-title').textContent = service;
        modal.querySelector('.modal-description').textContent = details.description;

        // Update features
        const featuresList = modal.querySelector('.features-list');
        featuresList.innerHTML = details.features.map(feature => `<li>${feature}</li>`).join('');

        // Update benefits
        const benefitsList = modal.querySelector('.benefits-list');
        benefitsList.innerHTML = details.benefits.map(benefit => `<li>${benefit}</li>`).join('');

        // Show modal
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Event listeners
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const service = card.querySelector('h3').textContent;
            openModal(service);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});

// Sound functionality
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Create audio elements programmatically
        const clickSound = new Audio('sounds/click-124467.mp3'); // Crisp digital blip
        const hoverSound = new Audio('sounds/hover-90898.mp3');  // Subtle electronic hover
        
        // Check if sounds can be loaded
        let soundsAvailable = true;
        
        // Error handler for audio loading issues
        const handleAudioError = function() {
            soundsAvailable = false;
            console.log("Sound files could not be loaded. Sound effects disabled.");
        };
        
        // Add error listeners
        clickSound.addEventListener('error', handleAudioError);
        hoverSound.addEventListener('error', handleAudioError);
        
        // Configure sounds with lower volume
        [clickSound, hoverSound].forEach(sound => {
            sound.volume = 0.1; // Reduce volume to 10%
            sound.preload = 'auto';
        });

        // Function to play sound with debouncing
        let lastPlayTime = 0;
        const DEBOUNCE_TIME = 100; // Minimum time between sounds in milliseconds

        function playSound(audio) {
            if (!soundsAvailable) return;
            
            const now = Date.now();
            if (now - lastPlayTime >= DEBOUNCE_TIME) {
                try {
                    audio.currentTime = 0;
                    const playPromise = audio.play();
                    
                    if (playPromise !== undefined) {
                        playPromise.catch(error => {
                            console.log("Sound play failed:", error);
                        });
                    }
                    lastPlayTime = now;
                } catch (error) {
                    console.log("Sound error:", error);
                    soundsAvailable = false;
                }
            }
        }

        // Add sound to interactive elements
        const interactiveElements = document.querySelectorAll('button, .cta-button, .nav-links a, .service-card');
        
        interactiveElements.forEach(element => {
            // Click sound
            element.addEventListener('click', () => {
                playSound(clickSound);
            });
            
            // Hover sound - only play for non-touch devices
            if (!('ontouchstart' in window)) {
                element.addEventListener('mouseenter', () => {
                    playSound(hoverSound);
                });
            }
        });
    } catch (e) {
        console.log("Sound initialization error:", e);
    }
});

// Validate individual form input
function validateInput(input) {
    if (input.checkValidity()) {
        input.classList.remove('invalid');
        
        // Remove any existing error message
        const errorMsg = input.parentNode.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
        }
    } else {
        input.classList.add('invalid');
        
        // Only add error message if it doesn't exist
        if (!input.parentNode.querySelector('.error-message')) {
            const errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            errorMsg.textContent = input.title || 'Please fill out this field correctly.';
            input.parentNode.insertBefore(errorMsg, input.nextSibling);
        }
    }
}

// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll function
    const smoothScroll = function(target, duration) {
        const targetElement = document.querySelector(target);
        if (!targetElement) return;
        
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        const animation = function(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        
        // Easing function
        const ease = function(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        
        requestAnimationFrame(animation);
    };
    
    // Add smooth scrolling to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            smoothScroll(targetId, 800);
        });
    });
}); 