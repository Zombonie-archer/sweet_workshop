import request from './axios.js';
import iconsUrl from '../images/icons.svg';
// import 'css-star-rating/css/star-rating.css';


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
  
  return `
    <button class="modal-close-btn" type="button">
      <svg width="24" height="24">
          <use href="${iconsUrl}#icon-close"></use>
      </svg>
    </button>
    <div class="dessert-modal-content" data-id="${_id}">
      <div class="dessert-modal-image">
        <img class="desser-modal-img" src="${image}" alt="${name}" />
      </div>
      <div class="dessert-modal-info">
        <h2 class="desser-modal-title">${name}</h2>
        <p class="desser-modal-price"><span class="modal-price-value">${price}</span> грн</p>
        <p class="dessert-modal-rate">${rate}</p>
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
  document.body.classList.remove('no-scroll');
  if (isCloseBtn || isOverlay) {
    
    desserOverlay.classList.remove('modal-open');
  }
})
