// Mobile menu toggle
var menuToggle = document.getElementById('menuToggle');
var navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
var links = navLinks.querySelectorAll('a');
links.forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
  });
});

// Nav background on scroll
var nav = document.getElementById('nav');
window.addEventListener('scroll', function () {
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(245, 237, 224, 0.97)';
    nav.style.boxShadow = '0 1px 12px rgba(92, 64, 51, 0.08)';
  } else {
    nav.style.background = 'rgba(245, 237, 224, 0.92)';
    nav.style.boxShadow = 'none';
  }
});

// Fade-in on scroll
var observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -60px 0px'
};

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

var fadeElements = document.querySelectorAll('.step, .card, .about-text, .about-pattern, .coming-soon-text');
fadeElements.forEach(function (el) {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});
