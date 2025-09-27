// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initHeroSlider();
    initNavigation();
    initGallery();
    initServicePageGallery();
    initTestimonials();
    initScrollAnimations();
    initServiceCards();
    initBookingForm();
    initCountingAnimation();
});

// Hero Slider Functionality
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.hero-indicators .indicator');
    let currentSlide = 0;
    
    // Hero content data based on background images
    const heroContent = [
        {
            title: "Welcome to SK Events",
            subtitle: "Crafting Memories Since 2004",
            description: "With over 20 years of expertise and 1000+ successful events, SK Events Hyderabad is your trusted partner in creating unforgettable weddings, vibrant birthdays, elegant corporate functions, and joyful celebrations. Our mission is to turn your vision into reality with creativity, professionalism, and heart.",
            features: [
                { icon: "fas fa-heart", text: "Wedding Planning" },
                { icon: "fas fa-birthday-cake", text: "Birthday Parties" },
                { icon: "fas fa-briefcase", text: "Corporate Events" }
            ]
        },
        {
            title: "Corporate Excellence",
            subtitle: "Professional Event Solutions",
            description: "From board meetings to product launches, we deliver exceptional corporate events that make a lasting impression. Our professional team ensures seamless execution with attention to detail, branding, and client satisfaction.",
            features: [
                { icon: "fas fa-chart-line", text: "Product Launches" },
                { icon: "fas fa-users", text: "Corporate Meetings" },
                { icon: "fas fa-trophy", text: "Award Ceremonies" }
            ]
        },
        {
            title: "Birthday Celebrations",
            subtitle: "Making Every Birthday Special",
            description: "Whether it's your child's first birthday or a milestone celebration, we create magical birthday experiences with themed decorations, entertainment, and unforgettable moments. Let us make your special day extraordinary.",
            features: [
                { icon: "fas fa-gift", text: "Birthday Parties" },
                { icon: "fas fa-cake", text: "Cake Decorations" },
                { icon: "fas fa-star", text: "Special Themes" }
            ]
        }
    ];
    
    function updateHeroContent(index) {
        const content = heroContent[index];
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroDescription = document.querySelector('.hero-description');
        const heroFeatures = document.querySelector('.hero-features');
        
        if (heroTitle) heroTitle.textContent = content.title;
        if (heroSubtitle) heroSubtitle.textContent = content.subtitle;
        if (heroDescription) heroDescription.textContent = content.description;
        
        if (heroFeatures) {
            heroFeatures.innerHTML = content.features.map(feature => `
                <div class="hero-feature">
                    <i class="${feature.icon}"></i>
                    <span>${feature.text}</span>
                </div>
            `).join('');
        }
    }
    
    function showSlide(index) {
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current slide and indicator
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        
        // Update hero content based on current slide
        updateHeroContent(index);
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Auto-slide every 4 seconds
    setInterval(nextSlide, 4000);
    
    // Indicator click events
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Initialize with first slide content
    updateHeroContent(0);
}

// Navigation Functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Only prevent default for hash links (internal navigation)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            // For external links (like index.html#about), let the browser handle navigation normally
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Gallery Functionality
function initGallery() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const galleryGrid = document.querySelector('.gallery-grid');
    
    // Only initialize main gallery if we're on the main page
    if (!galleryGrid) return;
    
    // Skip if we're on a service page (not the main page)
    const currentPage = window.location.pathname;
    if (currentPage.includes('weddings.html') || currentPage.includes('birthdays.html') || currentPage.includes('corporate.html') || currentPage.includes('privacy-policy.html') || currentPage.includes('terms-conditions.html')) return;
    
    // Gallery data structure
    const galleryData = {
        all: [
            { src: 'Assets/images/Gallery-images/All-images/1.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/All-images/2.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/All-images/3.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/All-images/4.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/All-images/5.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/All-images/6.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/All-images/7.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/All-images/8.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/All-images/9.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/All-images/10.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/All-images/11.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/All-images/12.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/birthday-event-images/1.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/birthday-event-images/2.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/birthday-event-images/3.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/birthday-event-images/4.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/birthday-event-images/5.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/birthday-event-images/6.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/corporate-event-images/1.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/corporate-event-images/2.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/corporate-event-images/3.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/corporate-event-images/4.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/corporate-event-images/5.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/corporate-event-images/6.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/1.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/2.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/3.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/4.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/5.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/6.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/Mehandi-images/1.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/Mehandi-images/2.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/Mehandi-images/3.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/Mehandi-images/4.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/Mehandi-images/5.png', category: 'all' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/Mehandi-images/6.png', category: 'all' }
        ],
        weddings: [
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/1.png', category: 'weddings' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/2.png', category: 'weddings' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/3.png', category: 'weddings' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/4.png', category: 'weddings' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/5.png', category: 'weddings' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/6.png', category: 'weddings' }
        ],
        birthdays: [
            { src: 'Assets/images/Gallery-images/birthday-event-images/1.png', category: 'birthdays' },
            { src: 'Assets/images/Gallery-images/birthday-event-images/2.png', category: 'birthdays' },
            { src: 'Assets/images/Gallery-images/birthday-event-images/3.png', category: 'birthdays' },
            { src: 'Assets/images/Gallery-images/birthday-event-images/4.png', category: 'birthdays' },
            { src: 'Assets/images/Gallery-images/birthday-event-images/5.png', category: 'birthdays' },
            { src: 'Assets/images/Gallery-images/birthday-event-images/6.png', category: 'birthdays' }
        ],
        corporate: [
            { src: 'Assets/images/Gallery-images/corporate-event-images/1.png', category: 'corporate' },
            { src: 'Assets/images/Gallery-images/corporate-event-images/2.png', category: 'corporate' },
            { src: 'Assets/images/Gallery-images/corporate-event-images/3.png', category: 'corporate' },
            { src: 'Assets/images/Gallery-images/corporate-event-images/4.png', category: 'corporate' },
            { src: 'Assets/images/Gallery-images/corporate-event-images/5.png', category: 'corporate' },
            { src: 'Assets/images/Gallery-images/corporate-event-images/6.png', category: 'corporate' }
        ]
    };
    
    function renderGallery(category) {
        galleryGrid.innerHTML = '';
        const images = galleryData[category] || [];
        
        // For "all" category, show only first 6 images initially
        const imagesToShow = category === 'all' ? images.slice(0, 6) : images;
        
        imagesToShow.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.style.animationDelay = `${index * 0.1}s`;
            
            galleryItem.innerHTML = `
                <img src="${image.src}" alt="Gallery Image ${index + 1}" loading="lazy">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            `;
            
            // Add click event for image modal
            galleryItem.addEventListener('click', () => {
                openImageModal(image.src);
            });
            
            galleryGrid.appendChild(galleryItem);
        });
        
        // Add "See More" button for "all" category if there are more than 6 images
        if (category === 'all' && images.length > 6) {
            const seeMoreBtn = document.createElement('div');
            seeMoreBtn.className = 'see-more-container';
            seeMoreBtn.innerHTML = `
                <button class="btn btn-primary see-more-btn" onclick="showAllImages()">
                    See More
                </button>
            `;
            galleryGrid.appendChild(seeMoreBtn);
        }
    }
    
    // Function to show all images
    window.showAllImages = function() {
        const images = galleryData['all'] || [];
        
        // Remove the see more button
        const seeMoreContainer = document.querySelector('.see-more-container');
        if (seeMoreContainer) {
            seeMoreContainer.remove();
        }
        
        // Add remaining images
        const remainingImages = images.slice(6);
        remainingImages.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.style.animationDelay = `${(index + 6) * 0.1}s`;
            
            galleryItem.innerHTML = `
                <img src="${image.src}" alt="Gallery Image ${index + 7}" loading="lazy">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            `;
            
            // Add click event for image modal
            galleryItem.addEventListener('click', () => {
                openImageModal(image.src);
            });
            
            galleryGrid.appendChild(galleryItem);
        });
    }
    
    // Tab button functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get category and render gallery
            const category = button.getAttribute('data-tab');
            renderGallery(category);
        });
    });
    
    // Initialize with 'all' category
    renderGallery('all');
}

// Service Page Gallery Functionality
function initServicePageGallery() {
    // Check if we're on a service page and load appropriate gallery
    const currentPage = window.location.pathname;
    
    // Only initialize service gallery if we're on a service page
    if (currentPage.includes('weddings.html')) {
        loadServiceGallery('weddings', 'wedding-gallery');
    } else if (currentPage.includes('birthdays.html')) {
        loadServiceGallery('birthdays', 'birthday-gallery');
    } else if (currentPage.includes('corporate.html')) {
        loadServiceGallery('corporate', 'corporate-gallery');
    }
}

function loadServiceGallery(category, galleryId) {
    const galleryGrid = document.getElementById(galleryId);
    if (!galleryGrid) return;
    
    // Gallery data structure (same as main gallery)
    const galleryData = {
        weddings: [
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/1.png', category: 'weddings' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/2.png', category: 'weddings' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/3.png', category: 'weddings' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/4.png', category: 'weddings' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/5.png', category: 'weddings' },
            { src: 'Assets/images/Gallery-images/Marriage-events-images/marriage-images/6.png', category: 'weddings' }
        ],
        birthdays: [
            { src: 'Assets/images/Gallery-images/birthday-event-images/1.png', category: 'birthdays' },
            { src: 'Assets/images/Gallery-images/birthday-event-images/2.png', category: 'birthdays' },
            { src: 'Assets/images/Gallery-images/birthday-event-images/3.png', category: 'birthdays' },
            { src: 'Assets/images/Gallery-images/birthday-event-images/4.png', category: 'birthdays' },
            { src: 'Assets/images/Gallery-images/birthday-event-images/5.png', category: 'birthdays' },
            { src: 'Assets/images/Gallery-images/birthday-event-images/6.png', category: 'birthdays' }
        ],
        corporate: [
            { src: 'Assets/images/Gallery-images/corporate-event-images/1.png', category: 'corporate' },
            { src: 'Assets/images/Gallery-images/corporate-event-images/2.png', category: 'corporate' },
            { src: 'Assets/images/Gallery-images/corporate-event-images/3.png', category: 'corporate' },
            { src: 'Assets/images/Gallery-images/corporate-event-images/4.png', category: 'corporate' },
            { src: 'Assets/images/Gallery-images/corporate-event-images/5.png', category: 'corporate' },
            { src: 'Assets/images/Gallery-images/corporate-event-images/6.png', category: 'corporate' }
        ]
    };
    
    const images = galleryData[category] || [];
    
    images.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 0.1}s`;
        
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${category} Image ${index + 1}" loading="lazy">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        `;
        
        // Add click event for image modal
        galleryItem.addEventListener('click', () => {
            openImageModal(image.src);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Booking Form Functionality
function initBookingForm() {
    const bookingForm = document.querySelector('.booking-form');
    if (!bookingForm) return;
    
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(bookingForm);
        const eventType = formData.get('event-type');
        const name = formData.get('name');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const eventDate = formData.get('event-date');
        const guests = formData.get('guests');
        const message = formData.get('message');
        
        // Create WhatsApp message
        const whatsappMessage = `Hello SK Events! I would like to book an event:

Event Type: ${eventType}
Name: ${name}
Phone: ${phone}
Email: ${email}
Event Date: ${eventDate}
Number of Guests: ${guests}
Additional Details: ${message}

Please contact me for further details. Thank you!`;
        
        // Encode message for WhatsApp
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/918885878854?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        showNotification('Booking request sent! We will contact you soon.', 'success');
        
        // Reset form
        bookingForm.reset();
    });
}

// Notification function
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : '#3B82F6'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-weight: 500;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// Testimonials Grid Pagination
function initTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const indicators = document.querySelectorAll('.testimonial-indicators .indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentPage = 0;
    const cardsPerPage = 3;
    const totalPages = Math.ceil(testimonialCards.length / cardsPerPage);
    
    function showPage(pageIndex) {
        // Hide all cards
        testimonialCards.forEach(card => {
            card.style.display = 'none';
        });
        
        // Show cards for current page
        const startIndex = pageIndex * cardsPerPage;
        const endIndex = Math.min(startIndex + cardsPerPage, testimonialCards.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            if (testimonialCards[i]) {
                testimonialCards[i].style.display = 'block';
                testimonialCards[i].style.animation = 'fadeInUp 0.6s ease';
            }
        }
        
        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === pageIndex);
        });
        
        // Update navigation buttons
        if (prevBtn) prevBtn.disabled = pageIndex === 0;
        if (nextBtn) nextBtn.disabled = pageIndex === totalPages - 1;
    }
    
    function nextPage() {
        if (currentPage < totalPages - 1) {
            currentPage++;
            showPage(currentPage);
        }
    }
    
    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    }
    
    // Initialize
    showPage(0);
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextPage);
    if (prevBtn) prevBtn.addEventListener('click', prevPage);
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentPage = index;
            showPage(currentPage);
        });
    });
    
    // Auto-rotate pages every 8 seconds
    setInterval(() => {
        nextPage();
        if (currentPage === totalPages - 1) {
            currentPage = -1; // Reset to show first page after last
        }
    }, 8000);
}

// Global functions for navigation buttons
window.showNextTestimonials = function() {
    const nextBtn = document.querySelector('.next-btn');
    if (nextBtn && !nextBtn.disabled) {
        nextBtn.click();
    }
};

window.showPreviousTestimonials = function() {
    const prevBtn = document.querySelector('.prev-btn');
    if (prevBtn && !prevBtn.disabled) {
        prevBtn.click();
    }
};

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .stat, .contact-item, .gallery-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Service Cards Animation
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Image Modal Functionality
function openImageModal(imageSrc) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
    `;
    
    const modalImage = document.createElement('img');
    modalImage.src = imageSrc;
    modalImage.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 10px;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        padding: 5px 10px;
    `;
    
    modalContent.appendChild(modalImage);
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Animate in
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    // Close modal functionality
    function closeModal() {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
});

// Remove parallax effect to prevent overlapping issues
// window.addEventListener('scroll', debounce(() => {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     if (hero) {
//         hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// }, 10));

// Add active navigation link highlighting
window.addEventListener('scroll', debounce(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, 100));

// Counting Animation for About Section Stats
function initCountingAnimation() {
    const aboutSection = document.querySelector('#about');
    const statNumbers = document.querySelectorAll('.stat h3');
    
    if (!aboutSection || statNumbers.length === 0) {
        console.log('About section or stats not found');
        return;
    }
    
    // Store original values
    const originalValues = [];
    statNumbers.forEach((stat, index) => {
        const text = stat.textContent;
        const number = parseInt(text.replace(/\D/g, ''));
        const suffix = text.replace(/\d/g, '');
        originalValues[index] = { number, suffix };
    });
    
    let isAnimating = false;
    let animationTimeout;
    
    // Function to animate counting
    function animateCount(statElement, targetNumber, suffix, duration = 2000) {
        return new Promise((resolve) => {
            const startTime = Date.now();
            const startNumber = 0;
            
            function updateCount() {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentNumber = Math.floor(startNumber + (targetNumber - startNumber) * easeOutQuart);
                
                statElement.textContent = currentNumber + suffix;
                
                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    statElement.textContent = targetNumber + suffix;
                    resolve();
                }
            }
            
            updateCount();
        });
    }
    
    // Function to reset and start counting animation
    function startCountingAnimation() {
        if (isAnimating) return;
        
        isAnimating = true;
        console.log('Starting counting animation');
        
        // Reset all numbers to 0
        statNumbers.forEach((stat, index) => {
            stat.textContent = '0' + originalValues[index].suffix;
        });
        
        // Animate each stat with a slight delay
        const animations = originalValues.map((value, index) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    animateCount(statNumbers[index], value.number, value.suffix).then(resolve);
                }, index * 200); // 200ms delay between each stat
            });
        });
        
        Promise.all(animations).then(() => {
            isAnimating = false;
            console.log('Counting animation completed');
        });
    }
    
    // Intersection Observer to detect when About section comes into view
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px', // Trigger when section is 10% visible
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('About section is visible, starting counting animation');
                // Clear any existing timeout
                if (animationTimeout) {
                    clearTimeout(animationTimeout);
                }
                // Start animation after a short delay
                animationTimeout = setTimeout(startCountingAnimation, 300);
            } else {
                console.log('About section is not visible');
                // Clear timeout if section goes out of view
                if (animationTimeout) {
                    clearTimeout(animationTimeout);
                }
            }
        });
    }, observerOptions);
    
    // Start observing the About section
    observer.observe(aboutSection);
    
    // Also listen for scroll events to restart animation when scrolling past
    let lastScrollDirection = 'down';
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', debounce(() => {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
        
        // Check if we're scrolling past the About section
        const aboutRect = aboutSection.getBoundingClientRect();
        const isAboutVisible = aboutRect.top < window.innerHeight && aboutRect.bottom > 0;
        
        if (isAboutVisible && scrollDirection !== lastScrollDirection) {
            console.log('Scroll direction changed near About section, restarting animation');
            startCountingAnimation();
        }
        
        lastScrollDirection = scrollDirection;
        lastScrollY = currentScrollY;
    }, 100));
    
    console.log('Counting animation initialized');
}
