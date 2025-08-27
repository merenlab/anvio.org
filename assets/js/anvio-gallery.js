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

    setupEventListeners() {
        // Slide clicks for fullscreen
        this.slides.forEach(slide => {
            slide.addEventListener('click', (e) => {
                if (e.target.classList.contains('nav-arrow')) return;
                const img = slide.dataset.fullscreenImg;
                const title = slide.dataset.title;
                const description = slide.dataset.description;
                const learning_resources_tag = slide.dataset.learningResourcesTag

                // Parse the JSON data for authors and reference
                let authors = [];
                let reference = null;

                try {
                    authors = slide.dataset.authors ? JSON.parse(slide.dataset.authors) : [];
                    reference = slide.dataset.reference ? JSON.parse(slide.dataset.reference) : null;
                } catch (e) {
                    console.warn('Error parsing authors or reference data:', e);
                }

                this.openFullscreen(img, title, description, learning_resources_tag, authors, reference);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.isModalOpen()) {
                // ADD THESE LINES for modal navigation
                if (e.key === 'ArrowLeft') this.navigateModal(-1);
                else if (e.key === 'ArrowRight') this.navigateModal(1);
                else if (e.key === 'Escape') this.closeFullscreen();
            } else {
                // Existing slideshow navigation
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

    // CORE METHODS - Keep these as simple as possible

    start() {
        if (!this.autoAdvance) return;

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
            // Start fresh progress animation when resuming
            this.startProgress();
        }
    }

    // Auto advance (internal only) - renamed to avoid conflict
    autoAdvance() {
        this.currentSlideIndex++;
        this.showSlide();
        this.startProgress();
    }

    // Manual change (user triggered)
    manualChange(direction) {
        this.currentSlideIndex += direction;
        this.showSlide();
        // Stop current progress and restart timer completely
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

        // Completely remove any existing transition
        this.progressBar.style.transition = 'none';
        this.progressBar.style.animation = 'none';

        const dashArray = this.progressBar.getAttribute('stroke-dasharray') || '113';
        this.progressBar.style.strokeDasharray = dashArray;
        this.progressBar.style.strokeDashoffset = dashArray;

        // Force multiple reflows to ensure reset
        this.progressBar.offsetHeight;
        this.progressBar.getBoundingClientRect();

        // Use setTimeout instead of requestAnimationFrame for more reliable timing
        setTimeout(() => {
            this.progressBar.style.transition = `stroke-dashoffset ${this.autoAdvanceInterval}ms linear`;
            this.progressBar.style.strokeDashoffset = '0';

            // Log what actually happened
            setTimeout(() => {
                const currentOffset = window.getComputedStyle(this.progressBar).strokeDashoffset;
            }, 100);
        }, 50);
    }

    stopProgress() {
        if (!this.progressBar) return;

        // Get current position before stopping
        const computed = window.getComputedStyle(this.progressBar);
        const currentOffset = computed.strokeDashoffset;

        // Stop transition
        this.progressBar.style.transition = 'none';
        this.progressBar.style.animation = 'none';

        // Reset to start position
        const dashArray = this.progressBar.getAttribute('stroke-dasharray') || '113';
        this.progressBar.style.strokeDashoffset = dashArray;
    }

    // Navigation methods called by global functions
    changeSlide(direction) {
        this.manualChange(direction);
    }

    currentSlide(index) {
        this.currentSlideIndex = index - 1;
        this.showSlide();
        this.start(); // Completely restart timer
    }

    // Modal methods
    isModalOpen() {
        const modal = document.getElementById('fullscreenModal');
        return modal && modal.style.display === 'block';
    }

    openFullscreen(imageSrc, title, description, learning_resources_tag = null, authors = [], reference = null) {
        const modal = document.getElementById('fullscreenModal');
        const image = document.getElementById('fullscreenImage');
        const titleEl = document.getElementById('fullscreenTitle');
        const descEl = document.getElementById('fullscreenDescription');

        this.currentModalIndex = this.currentSlideIndex;

        if (!modal || !image || !titleEl || !descEl) return;

        image.src = imageSrc;
        titleEl.textContent = title;

        // Build the complete description with authors and reference
        let fullDescription = this.parseMarkdown(description);

        // Add authors section
        if (authors && authors.length > 0) {
            fullDescription += '<div class="modal-authors"><strong>Authors:</strong> ';
            const authorLinks = authors.map(author => {
                if (author.url) {
                    return `<a href="${author.url}" target="_blank">${author.name}</a>`;
                }
                return author.name;
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

        console.log(learning_resources_tag);
        // Add learning tags section
        if (learning_resources_tag) {
            fullDescription += '<div class="modal-reference"><strong>Learn more:</strong> Visit resoures on <a href="/learn/' + learning_resources_tag + '" target="_blank">' + learning_resources_tag + '</a></div>';
        }

        descEl.innerHTML = fullDescription;

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

        // Get the slide data
        const slide = this.slides[this.currentModalIndex];
        const img = slide.dataset.fullscreenImg;
        const title = slide.dataset.title;
        const description = slide.dataset.description;
        const learning_resources_tag = slide.dataset.learningResourcesTag;

        // Parse authors and reference
        let authors = [];
        let reference = null;
        try {
            authors = slide.dataset.authors ? JSON.parse(slide.dataset.authors) : [];
            reference = slide.dataset.reference ? JSON.parse(slide.dataset.reference) : null;
        } catch (e) {
            console.warn('Error parsing authors or reference data:', e);
        }

        // Update the modal content without closing/reopening
        this.updateModalContent(img, title, description, learning_resources_tag, authors, reference);
    }

    updateModalContent(imageSrc, title, description, learning_resources_tag = null, authors = [], reference = null) {
        const image = document.getElementById('fullscreenImage');
        const titleEl = document.getElementById('fullscreenTitle');
        const descEl = document.getElementById('fullscreenDescription');

        if (!image || !titleEl || !descEl) return;

        image.src = imageSrc;
        titleEl.textContent = title;

        // Build the complete description (same as existing openFullscreen method)
        let fullDescription = this.parseMarkdown(description);

        if (authors && authors.length > 0) {
            fullDescription += '<div class="modal-authors"><strong>Authors:</strong> ';
            const authorLinks = authors.map(author => {
                if (author.url) {
                    return `<a href="${author.url}" target="_blank">${author.name}</a>`;
                }
                return author.name;
            });
            fullDescription += authorLinks.join(', ') + '</div>';
        }

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

        if (learning_resources_tag) {
            fullDescription += '<div class="modal-reference"><strong>Learn more:</strong> Visit resoures on <a href="/learn/' + learning_resources_tag + '" target="_blank">' + learning_resources_tag + '</a></div>';
        }

        descEl.innerHTML = fullDescription;
    }

    closeFullscreen() {
        const modal = document.getElementById('fullscreenModal');
        if (!modal) return;

        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.start(); // Restart auto-advance when modal closes
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
    if (document.querySelector('.anvio-gallery')) {
        const galleryElement = document.querySelector('.anvio-gallery');
        const config = {
            autoAdvance: galleryElement.dataset.autoAdvance !== 'false',
            autoAdvanceInterval: parseInt(galleryElement.dataset.autoAdvanceInterval) || 5000
        };
        window.anviGallery = new AnvioGallery(config);
    }
});

function navigateModal(direction) {
    if (window.anviGallery) {
        window.anviGallery.navigateModal(direction);
    }
}
