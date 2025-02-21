const openMenuBtn = document.querySelector('.header-burger');
const mobMenuContainer = document.querySelector('.header-mob-menu');
const menuWrapper = document.querySelector('.header-wrapper');

let menuOpen = false;

openMenuBtn.addEventListener('click', () => {
  if (mobMenuContainer.classList.contains('is-open')) {
    mobMenuContainer.classList.remove('is-open');
    document.body.classList.remove('scroll-lock');
  } else {
    mobMenuContainer.classList.add('is-open');
    document.body.classList.add('scroll-lock');
  }
  if (!menuOpen) {
    openMenuBtn.classList.add('open');
    menuOpen = true;
  } else {
    openMenuBtn.classList.remove('open');
    menuOpen = false;
  }
});

window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobMenuContainer.classList.remove('is-open');
  document.body.classList.remove('scroll-lock');
  openMenuBtn.classList.remove('open');
  menuOpen = false;
});
