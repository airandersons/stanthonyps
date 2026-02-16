// /js/main.js (full version with about page support – add to existing)
document.addEventListener('DOMContentLoaded', function () {
  // ---------- mobile menu toggle ----------
  const toggleBtn = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('mainNav');

  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', function (e) {
      e.preventDefault();
      mainNav.classList.toggle('open');
      const icon = toggleBtn.querySelector('i');
      if (mainNav.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // ---------- CAROUSEL (only on index, but function exists safely) ----------
  const slides = document.querySelectorAll('.carousel-slide');
  if (slides.length > 0) {
    // if we are on index page, initialise carousel
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoInterval;

    function showSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      slides.forEach((slide, i) => {
        if (i === index) slide.classList.add('active');
        else slide.classList.remove('active');
      });
      indicators.forEach((dot, i) => {
        if (i === index) dot.classList.add('active');
        else dot.classList.remove('active');
      });
      currentIndex = index;
    }

    function nextSlide() { showSlide(currentIndex + 1); }
    function prevSlide() { showSlide(currentIndex - 1); }

    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoPlay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoPlay(); });

    indicators.forEach((dot, idx) => {
      dot.addEventListener('click', () => { showSlide(idx); resetAutoPlay(); });
    });

    function startAutoPlay() { autoInterval = setInterval(nextSlide, 5000); }
    function resetAutoPlay() { clearInterval(autoInterval); startAutoPlay(); }

    showSlide(0);
    startAutoPlay();

    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
      carousel.addEventListener('mouseenter', () => clearInterval(autoInterval));
      carousel.addEventListener('mouseleave', startAutoPlay);
    }
  }

  // ---------- set active nav link based on current page ----------
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ---------- smooth scroll for anchor links (if any) ----------
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile menu if open
        if (mainNav && mainNav.classList.contains('open')) {
          mainNav.classList.remove('open');
          const icon = toggleBtn.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      }
    });
  });
});
