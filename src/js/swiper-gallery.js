import Swiper from 'swiper';
import { Keyboard, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';

let swiper;
window.onload = () => {
  swiper = new Swiper('.swiper', {
    modules: [Keyboard, Mousewheel, Autoplay],
    effect: 'slide',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    // slidesPerGroup: 1,
    // initialSlide: 0,
    // loopedSlides: 4,
    // loopAdditionalSlides: 4,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
  });
};

const originalConsoleWarn = console.warn;
console.warn = function (message, ...optionalParams) {
  if (message.includes('Swiper Loop Warning')) return;
  originalConsoleWarn.apply(console, [message, ...optionalParams]);
};

document.querySelector('.swiper').style.width = '99.999%';
