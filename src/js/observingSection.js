const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const elements = document.querySelectorAll('.obs');

document.addEventListener('DOMContentLoaded', () => {
  elements.forEach(element => {
    observer.observe(element);
  });
});
