import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let swiper = null;

function initSwiper() {
  if (window.innerWidth >= 768 && !swiper) {
    swiper = new Swiper('.aboutSwiper', {
      modules: [Navigation, Pagination],

      slidesPerView: 2,
      spaceBetween: 24,
      loop: false,

      pagination: {
        el: '.about-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.about-button-next',
        prevEl: '.about-button-prev',
      },
    });
  }

  if (window.innerWidth < 768 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

initSwiper();

window.addEventListener('resize', initSwiper);