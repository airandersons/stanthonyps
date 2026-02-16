// /js/main.js
// mobile menu toggle with smooth height animation
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('mainNav');

  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', function (e) {
      e.preventDefault();
      mainNav.classList.toggle('open');
      // change icon between bars / times
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

  // optional: smooth scroll for anchor links (if any)
  const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId) return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // if mobile menu is open, close it after click
        if (mainNav && mainNav.classList.contains('open')) {
          mainNav.classList.remove('open');
          const icon = toggleBtn.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  });

  // set active nav based on current page (works for all pages)
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
});
