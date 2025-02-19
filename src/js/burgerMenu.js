const openMenuBtn = document.querySelector('.header-burger');
const mobMenuContainer = document.querySelector('.header-mob-menu');
const menuWrapper = document.querySelector('.header-wrapper');

openMenuBtn.addEventListener('click', () => {
  if (mobMenuContainer.classList.contains('is-open')) {
    mobMenuContainer.classList.remove('is-open');
    document.body.classList.remove('scroll-lock');
  } else {
    mobMenuContainer.classList.add('is-open');
    document.body.classList.add('scroll-lock');
  }
});

window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobMenuContainer.classList.remove('is-open');
  document.body.classList.remove('scroll-lock');
});
