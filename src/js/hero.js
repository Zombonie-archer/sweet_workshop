const heroButton = document.querySelector('.hero-button');
const feedbackSection = document.querySelector('#feedback');

heroButton.addEventListener('click', () => {
  feedbackSection.scrollIntoView({ behavior: 'smooth' });
  heroButton.blur();
});
