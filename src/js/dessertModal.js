import request from './axios.js';
import iconsUrl from '../images/icons.svg';
import 'css-star-rating/css/star-rating.css';
import { openModal } from './orderModal.js';
const desserOverlay = document.querySelector('.dessert-modal');
const modalCartContainer = document.querySelector('.desser-modal-wrapper');


export async function createCardModal(cardId) {
  try {
    const cardDetail = await request({ method: 'get', route: `desserts/${cardId}` });
    const cardInfo = cardDetail.data;
    modalCartContainer.innerHTML = cardModalMarcup(cardInfo);
    return cardInfo;
  } catch (error) {
    console.log(error.message);
  }
};

function cardModalMarcup(cardInfo) {
  const {
    _id,
    rate,
    price,
    name,
    image,
    description,
    composition,
    category: { name: modalCategory }
  } = cardInfo;

  const numericRate = Number(rate) || 0;
  const roundedRate = Math.floor(numericRate);
  const isHalf = (numericRate % 1) >= 0.5;

  const singleStar = `
    <div class="star">
      <!-- Пустая звезда: контур черный, внутри прозрачно -->
      <svg class="star-empty" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
      <!-- Половинка звезды: с обводкой того же размера -->
      <svg class="star-half" viewBox="0 0 24 24" width="20" height="20">
        <defs>
          <linearGradient id="half-star-grad">
            <stop offset="50%" stop-color="currentColor"/>
            <stop offset="50%" stop-color="transparent"/>
          </linearGradient>
        </defs>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#half-star-grad)" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <!-- Закрашенная звезда: с ТОЙ ЖЕ ОБВОДКОЙ для одинакового размера -->
      <svg class="star-filled" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    </div>
  `;

  return `
    <button class="modal-close-btn" type="button">
      <svg width="24" height="24">
        <use href="${iconsUrl}#icon-close"></use>
      </svg>
    </button>
    <div class="dessert-modal-content" data-id="${_id}">
      <div class="dessert-modal-item dessert-modal-image">
        <img class="dessert-modal-img" src="${image}" alt="${name}" />
      </div>
      <div class="dessert-modal-item dessert-modal-info">
        <h2 class="dessert-modal-title">${name}</h2>
        <p class="dessert-modal-price"><span class="modal-price-value">${price}</span> грн</p>
        <div class="rating medium star-svg value-${roundedRate} ${isHalf ? 'half' : ''} label-right">
          <div class="star-container">
            ${singleStar}
            ${singleStar}
            ${singleStar}
            ${singleStar}
            ${singleStar}
          </div>
          <span class="label-value"></span>
        </div>
        <p class="dessert-modal-descr">${description}</p>
        <p class="dessert-modal-compos"><span>Склад:</span> ${composition}</p>
        <button class="order-btn" type="button">Перейти до замовлення</button>
      </div>
    </div>
  `;
};

desserOverlay.addEventListener('click', (event) => {
  const isCloseBtn = event.target.closest('.modal-close-btn');
  const isOverlay = event.target === event.currentTarget;
  const orderBtn = event.target.closest('.order-btn');
  if (isCloseBtn || isOverlay) {
    document.body.classList.remove('no-scroll');
    desserOverlay.classList.remove('modal-open');
  };
  if (orderBtn) {
    desserOverlay.classList.remove('modal-open');
    document.body.classList.remove('no-scroll');
    const modalContent = orderBtn.closest('.dessert-modal-content');
    const cardId = modalContent.dataset.id;

    console.log('ID десерта:', cardId);
    openModal(cardId);
  }
});

