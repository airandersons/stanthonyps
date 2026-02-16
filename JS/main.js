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



// /js/main.js (full version with academics support – add to existing)
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


// /js/main.js (full version with admissions support – add to existing)
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

  // ---------- CAROUSEL (only on index, safe) ----------
  const slides = document.querySelectorAll('.carousel-slide');
  if (slides.length > 0) {
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

  // ---------- set active nav link ----------
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

  // ---------- smooth scroll for anchor links ----------
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
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



// /js/main.js (full version with lightbox for gallery)
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

  // ---------- CAROUSEL (only on index, safe) ----------
  const slides = document.querySelectorAll('.carousel-slide');
  if (slides.length > 0) {
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

  // ---------- LIGHTBOX (gallery) ----------
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtnLight = document.querySelector('.lightbox-prev');
  const nextBtnLight = document.querySelector('.lightbox-next');

  let currentImageIndex = 0;
  const images = [];

  // build array from gallery items
  if (galleryItems.length > 0) {
    galleryItems.forEach((item, idx) => {
      const img = item.querySelector('img');
      const caption = item.querySelector('.caption')?.innerText || 'St. Anthony’s';
      images.push({
        src: img.src,
        alt: img.alt,
        caption: caption
      });

      // attach click event
      item.addEventListener('click', function () {
        currentImageIndex = idx;
        openLightbox(idx);
      });
    });
  }

  function openLightbox(index) {
    if (!lightbox || images.length === 0) return;
    updateLightboxImage(index);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent scrolling
  }

  function updateLightboxImage(index) {
    const image = images[index];
    if (image) {
      lightboxImg.src = image.src;
      lightboxImg.alt = image.alt;
      lightboxCaption.innerText = image.caption;
    }
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function prevImage() {
    if (images.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateLightboxImage(currentImageIndex);
  }

  function nextImage() {
    if (images.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateLightboxImage(currentImageIndex);
  }

  // event listeners for lightbox controls
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtnLight) prevBtnLight.addEventListener('click', prevImage);
  if (nextBtnLight) nextBtnLight.addEventListener('click', nextImage);

  // click outside image to close (but allow click on image itself to do nothing)
  lightbox?.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });

  // keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (!lightbox?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });

  // ---------- set active nav link ----------
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

  // ---------- smooth scroll for anchor links ----------
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
