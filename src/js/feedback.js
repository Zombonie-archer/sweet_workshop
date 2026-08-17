import request from './axios';
import { showLoader, hideLoader } from './utils';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'css-star-rating/css/star-rating.css';

const loader = document.getElementById('loader');
const swiperContainer = document.getElementById('swiper-container');
const feedbacksWrapper = document.getElementById('feedbacks-wrapper');
const nextBtn = document.getElementById('feedback-next');
const prevBtn = document.getElementById('feedback-prev');

const paginationEl = document.getElementById('feedback-pagination');
console.log('loader' + loader);
console.log('swiperContainer' + swiperContainer);
console.log('feedbacksWrapper' + feedbacksWrapper);
console.log('nextBtn' + nextBtn);
console.log('prevBtn' + prevBtn);

function renderStarRating(rate) {
  const clamped = Math.min(5, Math.max(0, Number(rate) || 0));
  const value = Math.floor(clamped);
  const hasHalf = clamped - value >= 0.5;

  const stars = Array.from({ length: 5 })
    .map(
      () => `
    <div class="star">
      <i class="star-empty"></i>
      <i class="star-half"></i>
      <i class="star-filled"></i>
    </div>
  `
    )
    .join('');

  return `
    <div class="rating value-${value}${hasHalf ? ' half' : ''} small star-icon" aria-label="Оцінка: ${clamped} з 5">
      <div class="star-container">
        ${stars}
      </div>
    </div>
  `;
}

// Функція для рендеру карток
function renderFeedbacks(feedbacks) {
  // Беремо лише перші 10 відгуків
  const topFeedbacks = feedbacks.slice(0, 10);

  const markup = topFeedbacks
    .map(feedback => {
      // Розрахунок відсотків для зірочок (враховуючи .5)
      const ratingPercent = (feedback.rate / 5) * 100;

      return `
        <div class="swiper-slide">
          <div class="feedback-card">
            <div class="custom-star-rating" style="--rating-percent: ${ratingPercent}%" aria-label="Оцінка: ${feedback.rate} з 5"></div>
             <div class="feedback-rating">
            ${renderStarRating(feedback.rate)}
          </div>
            <p class="review-text">"${feedback.description || 'Відгук відсутній'}"</p>
            <p class="reviewer-name">- ${feedback.author || 'Анонім'}</p>
          </div>
        </div>
      `;
    })
    .join('');

  feedbacksWrapper.innerHTML = markup;
}

function initSwiper() {
  return new Swiper('.feedback-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 450,
    grabCursor: true,
    breakpoints: {
      768: { slidesPerView: 2 },
      1100: { slidesPerView: 3 },
    },
    pagination: {
      el: paginationEl,
      clickable: true,
    },
    navigation: {
      prevEl: prevBtn,
      nextEl: nextBtn,
    },
  });
}

async function fetchFeedbacks() {
  try {
    swiperContainer.style.display = 'none';

    const response = await request({
      method: 'get',
      body: {},
      route: 'feedbacks',
    });

    console.log(response);

    console.log(response.data);

    const feedbacksArray = response.data.feedbacks;

    // Рендеримо картки
    renderFeedbacks(feedbacksArray);

    // Ховаємо лоадер та показуємо свайпер
    loader.style.display = 'none';
    swiperContainer.style.display = 'block';

    initSwiper();
  } catch (error) {
    loader.style.display = 'none';
    iziToast.show({
      title: 'Не вдалося завантажити відгуки. Спробуйте пізніше.',
      color: 'white',
      position: 'topCenter',
    });
    console.error('Помилка завантаження відгуків:', error);
  }
}

// Запуск логіки при завантаженні сторінки
fetchFeedbacks();
