// Gallery Elements
const container = document.querySelector('.gallery-container');
const images = document.querySelectorAll('.gallery-container img');
const btnLeft = document.querySelector('.gallery-btn.left');
const btnRight = document.querySelector('.gallery-btn.right');
const dotsContainer = document.querySelector('.gallery-dots');

// Gallery functionality (only if it exists)
if (container && images.length && btnLeft && btnRight && dotsContainer) {
    let currentIndex = 0;
    dotsContainer.innerHTML = '';

    images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateGallery();
        });
        dotsContainer.appendChild(dot);
    });

    function updateDots() {
        const dots = document.querySelectorAll('.gallery-dots .dot');
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function updateGallery() {
        const imageWidth = images[0].getBoundingClientRect().width + 20;
        container.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        updateDots();
    }

    btnRight.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateGallery();
        }
    });

    btnLeft.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery();
        }
    });

    window.addEventListener('resize', updateGallery);
    updateGallery();
}

// Review Elements
const reviewSlider = document.querySelector('.review-slider');
const reviewCards = document.querySelectorAll('.review-card');
const reviewBtnLeft = document.querySelector('.review-btn.left');
const reviewBtnRight = document.querySelector('.review-btn.right');
const reviewDotsContainer = document.querySelector('.review-dots');

// Review functionality (only if it exists)
if (reviewSlider && reviewCards.length && reviewDotsContainer) {
    let reviewIndex = 0;
    reviewDotsContainer.innerHTML = '';

    reviewCards.forEach((_, i) => {
        const reviewDot = document.createElement('span');
        if (i === 0) reviewDot.classList.add('active');
        reviewDot.addEventListener("click", () => {
            reviewIndex = i;
            updateReviewSlider();
        });
        reviewDotsContainer.appendChild(reviewDot);
    });

    function updateReviewDots() {
        const allDots = document.querySelectorAll('.review-dots span');
        allDots.forEach(dot => dot.classList.remove('active'));
        allDots[reviewIndex].classList.add('active');
    }

    function updateReviewSlider() {
        const cardWidth = document.querySelector('.review-slider-wrapper').clientWidth;
        reviewSlider.style.transform = `translateX(-${cardWidth * reviewIndex}px)`;
        updateReviewDots();
    }

    reviewBtnRight?.addEventListener("click", () => {
        if (reviewIndex < reviewCards.length - 1) {
            reviewIndex++;
            updateReviewSlider();
        }
    });

    reviewBtnLeft?.addEventListener("click", () => {
        if (reviewIndex > 0) {
            reviewIndex--;
            updateReviewSlider();
        }
    });

    window.addEventListener('resize', updateReviewSlider);
    updateReviewSlider();
}

// Menu Bar
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Fade-in animation
const fadeElements = document.querySelectorAll('.fade-in-x, .fade-in-y');

if (fadeElements.length) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
       }, {
          threshold: 0.1
    });
    
    fadeElements.forEach(el => {
        observer.observe(el);
    });
}

// Active nav link based on current URL
const navLinksList = document.querySelectorAll('.nav-link');

navLinksList.forEach(link => {
    const linkPath = link.getAttribute('href');
    const currentPath = window.location.pathname.split('/').pop();
    
    if (linkPath === currentPath || (linkPath === 'index.html' && currentPath === '')) {
        link.classList.add('active');
    }
});

// Update to the current year
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}
