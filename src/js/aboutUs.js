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

      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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