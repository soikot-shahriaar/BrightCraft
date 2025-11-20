// Portfolio Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    
    portfolioItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = '';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 50);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Lightbox Modal
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.getElementById('lightboxImage');

// Update to work with new portfolio layout
document.querySelectorAll('.portfolio-info a').forEach(link => {
  link.addEventListener('click', function (e) {
    const imgSrc = this.getAttribute('href');
    lightboxImage.src = imgSrc;
  });
});

if (lightboxModal) {
  lightboxModal.addEventListener('hidden.bs.modal', () => {
    lightboxImage.src = '';
  });
}

// Smooth Scroll for Nav Links
const navLinks = document.querySelectorAll('nav a.nav-link, a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#') && href !== '#') {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
        
        // Close offcanvas menu if open
        const offcanvas = document.getElementById('mobileMenu');
        if (offcanvas) {
          const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
          if (bsOffcanvas) bsOffcanvas.hide();
        }
      }
    }
  });
});

// Animate Service Icons on Scroll
function animateServiceIcons() {
  const icons = document.querySelectorAll('.service-icon');
  icons.forEach(icon => {
    const rect = icon.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      icon.classList.add('animate');
    }
  });
}

// Initialize animations and effects
window.addEventListener('scroll', animateServiceIcons);
window.addEventListener('DOMContentLoaded', () => {
  animateServiceIcons();
  
  // Add transition styles to portfolio items
  portfolioItems.forEach(item => {
    item.style.transition = 'opacity 0.3s ease, transform 0.3s ease, display 0.3s ease';
    item.style.opacity = '1';
    item.style.transform = 'scale(1)';
  });
}); 