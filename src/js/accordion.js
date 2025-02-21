document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
    accordion.addEventListener('click', function () {
      const panel = this.nextElementSibling;
      const isActive = this.classList.contains('active');

      document.querySelectorAll('.panel').forEach(p => {
        p.style.maxHeight = null;
        p.style.marginTop = null;
        p.previousElementSibling.classList.remove('active');
      });

      if (!isActive) {
        this.classList.add('active');

        if (window.innerWidth >= 1200) {
          panel.style.maxHeight = '300px'; // Desktop max height
          panel.style.marginTop = '24px';
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          panel.style.marginTop = '24px'; // Mobile max height
        }
      }
    });
  });
});
