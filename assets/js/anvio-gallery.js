class AnvioGallery {
    constructor(config = {}) {
        this.currentSlideIndex = 0;
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.dot');
        this.totalSlides = this.slides.length;
        this.autoAdvance = config.autoAdvance !== false;
        this.autoAdvanceInterval = config.autoAdvanceInterval || 5000;
        this.autoSlideTimer = null;

        this.init();
    }

    init() {
        if (this.totalSlides === 0) return;

        this.setupEventListeners();
        if (this.autoAdvance) {
            this.startAutoAdvance();
        }
        this.setupTouchEvents();
    }

    setupEventListeners() {
        // Add click event to slides for fullscreen
        this.slides.forEach(slide => {
            slide.addEventListener('click', (e) => {
                if (e.target.classList.contains('nav-arrow')) return;

                const img = slide.dataset.fullscreenImg;
                const title = slide.dataset.title;
                const description = slide.dataset.description;

                this.openFullscreen(img, title, description);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (document.getElementById('fullscreenModal').style.display !== 'block') {
                if (e.key === 'ArrowLeft') {
                    this.changeSlide(-1);
                } else if (e.key === 'ArrowRight') {
                    this.changeSlide(1);
                }
            }
        });

        // Pause auto-advance on hover
        const galleryContainer = document.querySelector('.slideshow-container');
        if (galleryContainer) {
            galleryContainer.addEventListener('mouseenter', () => {
                this.pauseAutoAdvance();
            });

            galleryContainer.addEventListener('mouseleave', () => {
                if (this.autoAdvance) {
                    this.startAutoAdvance();
                }
            });
        }

        // Fullscreen modal events
        const modal = document.getElementById('fullscreenModal');
        if (modal) {
            // Close fullscreen when clicking outside image
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeFullscreen();
                }
            });
        }

        // Close fullscreen with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeFullscreen();
            }
        });
    }

    setupTouchEvents() {
        let touchStartX = 0;
        let touchEndX = 0;
        const galleryContainer = document.querySelector('.slideshow-container');

        if (!galleryContainer) return;

        galleryContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        galleryContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.changeSlide(1); // Swipe left - next slide
            } else {
                this.changeSlide(-1); // Swipe right - previous slide
            }
        }
    }

    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));

        // Normalize index
        if (index >= this.totalSlides) this.currentSlideIndex = 0;
        if (index < 0) this.currentSlideIndex = this.totalSlides - 1;

        // Show current slide
        if (this.slides[this.currentSlideIndex]) {
            this.slides[this.currentSlideIndex].classList.add('active');
        }
        if (this.dots[this.currentSlideIndex]) {
            this.dots[this.currentSlideIndex].classList.add('active');
        }
    }

    changeSlide(offset) {
        this.currentSlideIndex += offset;
        this.showSlide(this.currentSlideIndex);
        this.resetAutoAdvance();
    }

    currentSlide(index) {
        this.currentSlideIndex = index - 1;
        this.showSlide(this.currentSlideIndex);
        this.resetAutoAdvance();
    }

    startAutoAdvance() {
        if (!this.autoAdvance) return;
        this.autoSlideTimer = setInterval(() => {
            this.changeSlide(1);
        }, this.autoAdvanceInterval);
    }

    pauseAutoAdvance() {
        if (this.autoSlideTimer) {
            clearInterval(this.autoSlideTimer);
            this.autoSlideTimer = null;
        }
    }

    resetAutoAdvance() {
        this.pauseAutoAdvance();
        if (this.autoAdvance) {
            this.startAutoAdvance();
        }
    }

    openFullscreen(imageSrc, title, description) {
        const modal = document.getElementById('fullscreenModal');
        const fullscreenImage = document.getElementById('fullscreenImage');
        const fullscreenTitle = document.getElementById('fullscreenTitle');
        const fullscreenDescription = document.getElementById('fullscreenDescription');

        if (!modal || !fullscreenImage || !fullscreenTitle || !fullscreenDescription) return;

        fullscreenImage.src = imageSrc;
        fullscreenTitle.textContent = title;
        fullscreenDescription.textContent = description;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        this.pauseAutoAdvance();
    }

    closeFullscreen() {
        const modal = document.getElementById('fullscreenModal');
        if (!modal) return;

        modal.style.display = 'none';
        document.body.style.overflow = 'auto';

        if (this.autoAdvance) {
            this.startAutoAdvance();
        }
    }
}

// Global functions for backward compatibility
function changeSlide(offset) {
    if (window.anviGallery) {
        window.anviGallery.changeSlide(offset);
    }
}

function currentSlide(index) {
    if (window.anviGallery) {
        window.anviGallery.currentSlide(index);
    }
}

function closeFullscreen() {
    if (window.anviGallery) {
        window.anviGallery.closeFullscreen();
    }
}

// Initialize gallery when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Check if gallery exists on page
    if (document.querySelector('.anvio-gallery')) {
        // Get configuration from data attributes or use defaults
        const galleryElement = document.querySelector('.anvio-gallery');
        const config = {
            autoAdvance: galleryElement.dataset.autoAdvance !== 'false',
            autoAdvanceInterval: parseInt(galleryElement.dataset.autoAdvanceInterval) || 5000
        };

        window.anviGallery = new AnvioGallery(config);
    }
});
