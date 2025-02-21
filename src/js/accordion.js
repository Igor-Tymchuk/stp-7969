document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
    accordion.addEventListener('click', function () {
      const panel = this.nextElementSibling;
      const isActive = this.classList.contains('active');

      document.querySelectorAll('.panel').forEach(p => {
        p.classList.remove('open');
        p.previousElementSibling.classList.remove('active');
      });

      if (!isActive) {
        this.classList.add('active');
        panel.classList.add('open');
      }
    });
  });
});
