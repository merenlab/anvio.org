class AnvioGallery {
    constructor(config = {}) {
        this.currentSlideIndex = 0;
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.dot');
        this.totalSlides = this.slides.length;
        this.autoAdvanceEnabled = config.autoAdvance !== false;
        this.autoAdvanceInterval = config.autoAdvanceInterval || 5000;
        this.currentModalIndex = 0;

        // Simple state management
        this.timer = null;
        this.progressBar = document.querySelector('.progress-bar');

        this.init();
    }

    init() {
        if (this.totalSlides === 0) return;
        this.setupEventListeners();
        if (this.autoAdvanceEnabled) {
            this.start();
        }
        this.setupTouchEvents();
    }

    // Simple markdown parser
    parseMarkdown(text) {
        if (!text) return '';
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/__(.*?)__/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/_(.*?)_/g, '<em>$1</em>')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/\n/g, '<br>');
    }

    // Helper method to extract slide data at given index
    getSlideData(index) {
        const slide = this.slides[index];
        if (!slide) return null;

        const data = {
            img: slide.dataset.fullscreenImg,
            title: slide.dataset.title,
            description: slide.dataset.description,
            learningResourcesTag: slide.dataset.learningResourcesTag,
            authors: [],
            reference: null
        };

        // Parse JSON data safely
        try {
            data.authors = slide.dataset.authors ? JSON.parse(slide.dataset.authors) : [];
            data.reference = slide.dataset.reference ? JSON.parse(slide.dataset.reference) : null;
        } catch (e) {
            console.warn('Error parsing authors or reference data:', e);
        }

        return data;
    }

    // Helper method to build complete modal description
    buildModalDescription(description, learningResourcesTag, authors, reference) {
        let fullDescription = this.parseMarkdown(description);

        // Add authors section
        if (authors && authors.length > 0) {
            fullDescription += '<div class="modal-authors"><strong>Authors:</strong> ';
            const authorLinks = authors.map(author => {
                return author.url
                    ? `<a href="${author.url}" target="_blank">${author.name}</a>`
                    : author.name;
            });
            fullDescription += authorLinks.join(', ') + '</div>';
        }

        // Add reference section
        if (reference && reference.title) {
            fullDescription += '<div class="modal-reference"><strong>Appears In:</strong> ';

            if (reference.url) {
                fullDescription += `<a href="${reference.url}" target="_blank">${reference.title}</a>`;
            } else {
                fullDescription += reference.title;
            }

            if (reference.outlet) {
                fullDescription += `, <i>${reference.outlet}</i>.`;
            }
            fullDescription += '</div>';
        }

        // Add learning resources section
        if (learningResourcesTag) {
            fullDescription += `<div class="modal-reference"><strong>Learn more:</strong> Visit resoures on <a href="/learn/${learningResourcesTag}" target="_blank">${learningResourcesTag}</a></div>`;
        }

        return fullDescription;
    }

    // Centralized method to update modal content
    updateModalContent(slideData) {
        const image = document.getElementById('fullscreenImage');
        const titleEl = document.getElementById('fullscreenTitle');
        const descEl = document.getElementById('fullscreenDescription');

        if (!image || !titleEl || !descEl || !slideData) return;

        image.src = slideData.img;
        titleEl.textContent = slideData.title;

        const fullDescription = this.buildModalDescription(
            slideData.description,
            slideData.learningResourcesTag,
            slideData.authors,
            slideData.reference
        );

        descEl.innerHTML = fullDescription;
    }

    setupEventListeners() {
        // Slide clicks for fullscreen
        this.slides.forEach(slide => {
            slide.addEventListener('click', (e) => {
                if (e.target.classList.contains('nav-arrow')) return;
                this.openFullscreen(this.currentSlideIndex);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.isModalOpen()) {
                if (e.key === 'ArrowLeft') this.navigateModal(-1);
                else if (e.key === 'ArrowRight') this.navigateModal(1);
                else if (e.key === 'Escape') this.closeFullscreen();
            } else {
                if (e.key === 'ArrowLeft') this.manualChange(-1);
                else if (e.key === 'ArrowRight') this.manualChange(1);
            }
        });

        // Modal events
        const modal = document.getElementById('fullscreenModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeFullscreen();
            });
        }
    }

    setupTouchEvents() {
        let touchStartX = 0;
        const container = document.querySelector('.slideshow-container');
        if (!container) return;

        container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        container.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                this.manualChange(diff > 0 ? 1 : -1);
            }
        });
    }

    // CORE METHODS

    start() {
        if (!this.autoAdvanceEnabled) return;

        this.stop(); // Always stop first
        this.isPaused = false; // Make sure we're not paused
        this.startProgress();

        this.timer = setInterval(() => {
            if (!this.isPaused) {
                this.autoAdvance();
            }
        }, this.autoAdvanceInterval);
    }

    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        this.stopProgress();
    }

    pause() {
        this.isPaused = true;
        this.pauseProgress();
    }

    resume() {
        if (!this.isModalOpen()) {
            this.isPaused = false;
            this.startProgress();
        }
    }

    // Auto advance (internal only)
    autoAdvance() {
        this.currentSlideIndex++;
        this.showSlide();
        this.startProgress();
    }

    // Manual change (user triggered)
    manualChange(direction) {
        this.currentSlideIndex += direction;
        this.showSlide();
        this.stop();
        this.start();
    }

    // Show slide and handle wrapping
    showSlide() {
        // Handle wrapping
        if (this.currentSlideIndex >= this.totalSlides) {
            this.currentSlideIndex = 0;
        }
        if (this.currentSlideIndex < 0) {
            this.currentSlideIndex = this.totalSlides - 1;
        }

        // Update display
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlideIndex);
        });
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlideIndex);
        });
    }

    // Progress bar methods
    startProgress() {
        if (!this.progressBar) return;

        // Reset progress bar
        this.progressBar.style.transition = 'none';
        this.progressBar.style.animation = 'none';

        const dashArray = this.progressBar.getAttribute('stroke-dasharray') || '113';
        this.progressBar.style.strokeDasharray = dashArray;
        this.progressBar.style.strokeDashoffset = dashArray;

        // Force reflows
        this.progressBar.offsetHeight;
        this.progressBar.getBoundingClientRect();

        // Start animation
        setTimeout(() => {
            this.progressBar.style.transition = `stroke-dashoffset ${this.autoAdvanceInterval}ms linear`;
            this.progressBar.style.strokeDashoffset = '0';
        }, 50);
    }

    stopProgress() {
        if (!this.progressBar) return;

        // Stop transition and reset
        this.progressBar.style.transition = 'none';
        this.progressBar.style.animation = 'none';

        const dashArray = this.progressBar.getAttribute('stroke-dasharray') || '113';
        this.progressBar.style.strokeDashoffset = dashArray;
    }

    pauseProgress() {
        // Note: pauseProgress method was referenced but not implemented in original
        // Adding basic implementation for consistency
        if (!this.progressBar) return;

        const computed = window.getComputedStyle(this.progressBar);
        const currentOffset = computed.strokeDashoffset;
        this.progressBar.style.transition = 'none';
        this.progressBar.style.strokeDashoffset = currentOffset;
    }

    // Navigation methods called by global functions
    changeSlide(direction) {
        this.manualChange(direction);
    }

    currentSlide(index) {
        this.currentSlideIndex = index - 1;
        this.showSlide();
        this.start();
    }

    // Modal methods
    isModalOpen() {
        const modal = document.getElementById('fullscreenModal');
        return modal && modal.style.display === 'block';
    }

    openFullscreen(slideIndex = this.currentSlideIndex) {
        const modal = document.getElementById('fullscreenModal');
        if (!modal) return;

        this.currentModalIndex = slideIndex;
        const slideData = this.getSlideData(slideIndex);

        if (!slideData) return;

        this.updateModalContent(slideData);

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        this.stop();
    }

    navigateModal(direction) {
        this.currentModalIndex += direction;

        // Handle wrapping
        if (this.currentModalIndex >= this.totalSlides) {
            this.currentModalIndex = 0;
        } else if (this.currentModalIndex < 0) {
            this.currentModalIndex = this.totalSlides - 1;
        }

        const slideData = this.getSlideData(this.currentModalIndex);
        this.updateModalContent(slideData);
    }

    closeFullscreen() {
        const modal = document.getElementById('fullscreenModal');
        if (!modal) return;

        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.start();
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

function navigateModal(direction) {
    if (window.anviGallery) {
        window.anviGallery.navigateModal(direction);
    }
}

// Initialize gallery when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.anvio-gallery')) {
        const galleryElement = document.querySelector('.anvio-gallery');
        const config = {
            autoAdvance: galleryElement.dataset.autoAdvance !== 'false',
            autoAdvanceInterval: parseInt(galleryElement.dataset.autoAdvanceInterval) || 5000
        };
        window.anviGallery = new AnvioGallery(config);
    }
});
