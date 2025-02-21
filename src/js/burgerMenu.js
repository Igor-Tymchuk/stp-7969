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
});

//go to selected link in mob.menu
const menuLinks = document.querySelectorAll('.header-mob-menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth',
    });
    mobMenuContainer.classList.remove('is-open');
    document.body.classList.remove('scroll-lock');
    openMenuBtn.classList.toggle('open');
    menuOpen = false;
  });
});
