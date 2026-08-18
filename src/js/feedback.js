import request from './axios';
import { hideLoader, showLoader } from './utils';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'css-star-rating/css/star-rating.css';

const swiperContainer = document.querySelector('#swiper-container');
const feedbacksWrapper = document.querySelector('#feedbacks-wrapper');
const nextBtn = document.querySelector('.feedback-button-next');
const prevBtn = document.querySelector('.feedback-button-prev');
const paginationEl = document.querySelector('#feedback-pagination');

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

function renderFeedbacks(feedbacks) {
  const topFeedbacks = feedbacks.slice(0, 10);

  const markup = topFeedbacks
    .map(feedback => {
      const ratingPercent = (feedback.rate / 5) * 100;

      return `
        <div class="swiper-slide">
          <div class="feedback-card">
            <div class="custom-star-rating" style="--rating-percent: ${ratingPercent}%" aria-label="Оцінка: ${feedback.rate} з 5"></div>
            <p class="review-text">"${feedback.description || 'Відгук відсутній'}"</p>
            <p class="reviewer-name"><b>${feedback.author || 'Анонім'}</b></p>
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
      768: { slidesPerView: 3 },
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

function hideSwiper() {
  swiperContainer.style.display = 'none';
}

function showSwiper() {
  swiperContainer.style.display = 'block';
}

async function fetchFeedbacks() {
  try {
    hideSwiper();
    
    const response = await request({
      method: 'get',
      body: {},
      route: 'feedbacks',
    });
    const feedbacksArray = response.data.feedbacks;
    renderFeedbacks(feedbacksArray);
    showSwiper();
    initSwiper();
  } catch (error) {
    hideLoader();
    iziToast.show({
      title: 'Не вдалося завантажити відгуки. Спробуйте пізніше.',
      color: 'white',
      position: 'topCenter',
    });
    console.error('Помилка завантаження відгуків:', error);
  }
}

fetchFeedbacks();
