import Swiper from 'swiper';
import { Keyboard, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';

window.onload = () => {
  const swiper = new Swiper('.swiper', {
    modules: [Keyboard, Mousewheel, Autoplay],
    effect: 'slide',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    loop: true,
    // initialSlide: 1,
    // loopedSlides: 4,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    // observer: true,
    // observeParents: true,
  });
};
