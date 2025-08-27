// Scroll animations and simple parallax effect for Antrolin site

document.addEventListener('DOMContentLoaded', () => {
  // IntersectionObserver to reveal elements on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.scroll-animate').forEach(elem => {
    observer.observe(elem);
  });

  // Parallax effect for the hero image
  const heroImage = document.querySelector('.hero-image img');
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const offset = window.pageYOffset;
      // Move image slower than scroll for depth illusion
      heroImage.style.transform = `translateY(${offset * 0.1}px)`;
    });
  }
});