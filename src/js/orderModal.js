import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import request from './axios.js';
import { hideLoader } from './utils.js';

const backdrop = document.querySelector('.contact-backdrop');
const closeBtn = backdrop
  ? backdrop.querySelector('.modal-btn')
  : document.querySelector('.modal-btn');
const orderForm = document.querySelector('.order-form');
const nameInput = document.querySelector('.order-form input[name="name"]');
const phoneInput = document.querySelector('.order-form input[name="phone"]');
const commentInput = document.querySelector(
  '.order-form textarea[name="comment"]'
);

let currentDessertId = null;

export function openModal(dessertId = null) {
  currentDessertId = dessertId;

  if (backdrop) {
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
}

export function closeModal() {
  if (backdrop) {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
    clearValidationErrors();
  }
}

function clearValidationErrors() {
  if (!orderForm) return;
  const errorWrappers = orderForm.querySelectorAll('.order-wrapper.is-error');
  errorWrappers.forEach(wrapper => {
    wrapper.classList.remove('is-error');
  });
}

function onEscKeyPress(event) {
  if (
    event.code === 'Escape' &&
    backdrop &&
    backdrop.classList.contains('is-open')
  ) {
    closeModal();
  }
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

async function onFormSubmit(event) {
  event.preventDefault();

  clearValidationErrors();

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const comment = commentInput ? commentInput.value.trim() : '';

  let isValid = true;

  if (name === '') {
    if (nameInput)
      nameInput.closest('.order-wrapper')?.classList.add('is-error');
    isValid = false;
  }

  if (phone === '') {
    if (phoneInput)
      phoneInput.closest('.order-wrapper')?.classList.add('is-error');
    isValid = false;
  }

  if (comment === '') {
    if (commentInput)
      commentInput.closest('.order-wrapper')?.classList.add('is-error');
    isValid = false;
  }

  if (!isValid) {
    iziToast.warning({
      title: 'Увага!',
      message: 'Будь ласка, заповніть усі обов’язкові поля.',
      position: 'topRight',
    });
    return;
  }

  const orderData = {
    name: name,
    phone: phone,
    comment: comment,
    dessertId: currentDessertId,
  };

  try {
    const response = await request({
      method: 'post',
      body: orderData,
      route: 'orders',
    });

    iziToast.success({
      title: 'Успішно!',
      message: 'Ваше замовлення прийнято!',
      position: 'topRight',
    });

    orderForm.reset();
    closeModal();
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Помилка!',
      message: 'Не вдалося надіслати замовлення. Спробуйте ще раз пізніше.',
      position: 'topRight',
    });
  }
}

if (closeBtn) {
  closeBtn.addEventListener('click', closeModal);
}

if (backdrop) {
  backdrop.addEventListener('click', onBackdropClick);
}

document.addEventListener('keydown', onEscKeyPress);

if (orderForm) {
  orderForm.addEventListener('submit', onFormSubmit);
}
